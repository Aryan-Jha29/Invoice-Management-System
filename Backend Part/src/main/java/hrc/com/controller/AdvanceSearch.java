package hrc.com.controller;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import hrc.com.db.connect;
import hrc.com.pojo.Response;

/**
 * Servlet implementation class AdvanceSearch
 */
@WebServlet("/AdvanceSearch")
public class AdvanceSearch extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AdvanceSearch() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		// response.getWriter().append("Served at: ").append(request.getContextPath());
		try{
			
			Connection con =  connect.createConnect();
			String query = "Select * from winter_internship WHERE doc_id = ? AND invoice_id = ? AND cust_number = ? AND buisness_year = ?";
			
			PreparedStatement st = con.prepareStatement(query);
			st.setString(1, request.getParameter("doc_id"));
			st.setInt(2, Integer.parseInt(request.getParameter("invoice_id")));
			st.setInt(3, Integer.parseInt(request.getParameter("cust_number")));
			st.setInt(4, Integer.parseInt(request.getParameter("buisness_year")));
			
			System.out.println(st);
			ResultSet rs = st.executeQuery();
			
			HashMap<Object,Object> Response=new HashMap<Object,Object>();
			ArrayList<Response> data = new ArrayList<>();
			while(rs.next())
			{
				Response obj= new Response();
				obj.setSl_no(rs.getInt("sl_no"));
				obj.setBusiness_code(rs.getString("business_code"));
				obj.setCust_number(rs.getInt("cust_number"));
				if(rs.getDate("clear_date") != null) obj.setClear_date(rs.getDate("clear_date").toString());
                else obj.setClear_date("0000-00-00");
				obj.setBuisness_year(rs.getInt("buisness_year"));
				obj.setDoc_id(rs.getString("doc_id"));
				obj.setPosting_date(rs.getDate("posting_date").toString());
				obj.setDocument_create_date(rs.getDate("document_create_date").toString());
				obj.setDue_in_date(rs.getDate("due_in_date").toString());
				obj.setInvoice_currency(rs.getString("invoice_currency"));
				obj.setDocument_type(rs.getString("document_type"));
				obj.setPosting_id(rs.getInt("posting_id"));
				obj.setTotal_open_amount(rs.getDouble("total_open_amount"));
				obj.setBaseline_create_date(rs.getDate("baseline_create_date").toString());
				obj.setCust_payment_terms(rs.getString("cust_payment_terms"));
				obj.setInvoice_id(rs.getInt("invoice_id"));
				
				data.add(obj);
			}
			
			Response.put("Object",data);
			Gson gson = new GsonBuilder().serializeNulls().create();
			String invoices  = gson.toJson(Response);
			
			response.setContentType("application/json");
            response.setHeader("Access-Control-Allow-Origin", "*"); //CORS-policy-error
            
			try {
				response.getWriter().write(invoices); 
			}
			catch(IOException e)
			{
				e.printStackTrace();
			}
			rs.close();
			st.close();
			con.close();
			
		}
		catch(Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
