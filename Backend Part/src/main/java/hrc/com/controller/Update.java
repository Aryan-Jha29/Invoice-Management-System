package hrc.com.controller;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import hrc.com.db.connect;

/**
 * Servlet implementation class Update
 */
@WebServlet("/Update")
public class Update extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Update() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try {
				
				String invoiceCurrency = request.getParameter("invoice_currency");
				System.out.println(invoiceCurrency);
				String custPayment = request.getParameter("cust_payment_terms");
				System.out.println(custPayment);
				int Sl_no= Integer.parseInt(request.getParameter("sl_no"));
				System.out.println(Sl_no);
			
				Connection con =  connect.createConnect();
				String query = "UPDATE winter_internship SET invoice_currency=?, cust_payment_terms=? WHERE sl_no = ?";
				
				PreparedStatement st = con.prepareStatement(query);
				st.setString(1, invoiceCurrency);
				st.setString(2, custPayment);
				st.setInt(3, Sl_no);
				
				System.out.println(st);
				st.executeUpdate();
				response.setContentType("application/json");
	            response.setHeader("Access-Control-Allow-Origin", "*"); //CORS-policy-error
				con.close();
		 }
		 catch(Exception e) {
			e.printStackTrace();
		}
	}

}
