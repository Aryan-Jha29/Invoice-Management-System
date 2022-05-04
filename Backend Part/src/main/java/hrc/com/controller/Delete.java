package hrc.com.controller;

import java.io.IOException;
import java.sql.Connection;
import java.sql.*;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import hrc.com.db.connect;

/**
 * Servlet implementation class Delete
 */
@WebServlet("/Delete")
public class Delete extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Delete() {
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
			
					String val = request.getParameter("sl_no");
					int slNo=Integer.parseInt(val);
					
					Connection con= connect.createConnect();
					String sql_query="update winter_internship set is_deleted=1 where sl_no=?;" ;
					PreparedStatement st=con.prepareStatement(sql_query);			
					
					st.setInt(1, slNo);
					st.executeUpdate();
					con.close();
			
			}
			catch(Exception e) {
			e.printStackTrace();
		}
	}

}
