package hrc.com.db;

import java.sql.*;
import java.sql.SQLException;

public class connect {
	public static Connection createConnect() {
		Connection con = null;
		String url = "jdbc:mysql://localhost:3306/grey_goose?zeroDateTimeBehavior=convertToNull";
		String username = "root";
		String pass = "root";
		
		try {
			try {
				Class.forName("com.mysql.cj.jdbc.Driver");
			}
			catch (ClassNotFoundException e)
			{
				e.printStackTrace();
			}
			con = DriverManager.getConnection(url, username, pass);
			System.out.println("DB connection established - " +con);
			
		}
		catch(SQLException e)
		{
			System.out.println("Error Occurred");
			e.printStackTrace();
		}
		return con;
		
	}
}
