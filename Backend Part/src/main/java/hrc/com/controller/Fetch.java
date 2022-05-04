package hrc.com.controller;

import java.io.*;
import java.sql.*;
import java.util.*;
import java.util.HashMap;

import java.io.IOException;
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
 * Servlet implementation class Fetch
 */
@SuppressWarnings("unused")
@WebServlet("/Fetch")
public class Fetch extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Fetch() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		
		try {
			/*
			 String pageInURL = request.getParameter("page");
			 int page = Integer.parseInt(pageInURL) * rowToGet;
			 DriverManager.registerDriver(new com.mysql.jdbc.Driver ());
			*/ 
			DriverManager.registerDriver(new com.mysql.jdbc.Driver ());
			Connection con = connect.createConnect();
			Statement st = con.createStatement();
			String query = "SELECT sl_no,business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency,document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id from winter_internship WHERE is_deleted = 0";
			ResultSet rs = st.executeQuery(query);
			
			HashMap<Object,Object> Response=new HashMap<Object,Object>();
			ArrayList<Response> data = new ArrayList<>();
			while(rs.next())
			{
				Response obj = new Response();
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
			
			//CORS-Policy-Issue
			response.setHeader("Access-Control-Allow-Origin", "*");
			
			response.setContentType("application/json");
			try {
				response.getWriter().append(invoices); 
			}
			catch(IOException e)
			{
				e.printStackTrace();
			}
			rs.close();
			st.close();
			con.close();
			
		}
		catch(SQLException e) {
			e.printStackTrace();
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
