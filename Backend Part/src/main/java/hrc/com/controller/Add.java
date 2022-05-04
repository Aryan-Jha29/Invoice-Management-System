package hrc.com.controller;

import java.io.IOException;
import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import hrc.com.db.connect;
import hrc.com.pojo.Response;

@SuppressWarnings("unused")
@WebServlet("/Add")
public class Add extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
    public Add() {
        super();
        
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {  
		
		try {
			ResultSet result;
			Connection con = connect.createConnect(); //Connecting to DB
			PreparedStatement p = con.prepareStatement("select count(*) from winter_internship"); //Logic to get Sl_no
			result = p.executeQuery();
			System.out.println(result);
			result.next();
			int sl=result.getInt("count(*)");
			System.out.println(sl);
			sl=sl+1;
			String query = "INSERT INTO winter_internship (sl_no, business_code, cust_number, clear_date, buisness_year, doc_id, posting_date, document_create_date, due_in_date, invoice_currency, document_type, posting_id, total_open_amount, baseline_create_date, cust_payment_terms, invoice_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
			PreparedStatement st = con.prepareStatement(query);
			
			st.setInt(1, sl);
			st.setString(2,request.getParameter("business_code"));
			st.setInt(3,Integer.parseInt(request.getParameter("cust_number")));
			st.setString(4,request.getParameter("clear_date"));
			st.setString(5,request.getParameter("buisness_year"));
			st.setString(6,request.getParameter("doc_id"));
			st.setString(7,request.getParameter("posting_date"));
			st.setString(8,request.getParameter("document_create_date"));
			st.setString(9,request.getParameter("due_in_date"));
			st.setString(10,request.getParameter("invoice_currency"));
			st.setString(11,request.getParameter("document_type"));
			st.setInt(12,Integer.parseInt(request.getParameter("posting_id")));
			st.setDouble(13,Double.parseDouble(request.getParameter("total_open_amount")));
			st.setString(14,request.getParameter("baseline_create_date"));
			st.setString(15,request.getParameter("cust_payment_terms"));
			st.setInt(16,Integer.parseInt(request.getParameter("invoice_id")));
			
			System.out.println(st);
            st.executeUpdate();
			response.setContentType("application/json");
            response.setHeader("Access-Control-Allow-Origin", "*"); //CORS-policy-error
        
		}
		catch (Exception e) {
			e.printStackTrace();
		}
	}
}