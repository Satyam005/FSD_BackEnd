package com.assignments2.core.java;

import java.util.*;

public class Employee2Manager {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		Employee2Service service = new Employee2Service();

		try {
			int input = 0;
			do {
				int exit = -1;
				System.out.println();
				System.out.println("********************EMPLOYEE MANAGEMENT********************");
				System.out.println("1.\tADD EMPLOYEES");
				System.out.println("2.\tVIEW EMPLOYEES");
				System.out.println("3.\tSEARCH EMPLOYEES");
				System.out.println("4.\tUPDATE EMPLOYEES");
				System.out.println("5.\tDELETE EMPLOYEES");
				System.out.println("6.\tSORT EMPLOYEES");
				System.out.println("7.\tPRINT STATISTICS");
				System.out.println("0.\tEXIT ");

				System.out.println("Enter option: ");
				input = service.acceptValidInteger();
				if (input == -1)
					return;

				System.out.println();
				switch (input) {
				case 0:
					exit = 1;
					break;
				case 1:
					service.addEmp();
					break;
				case 2:
					service.viewEmp();
					break;
				case 3:
					service.searchEmp();
					break;
				case 4:
					service.updateEmp();
					break;
				case 5:
					service.deleteEmp();
					break;
				case 6:
					service.sortEmp();
					break;
				case 7:
					service.printStatistics();
					break;
				default:
					System.err.println("Invalid Selection");
				}
				if (exit == 1)
					break;
			} while (input != 0);
		} catch (Exception e) {
			System.out.println("Something went wrong");
			System.out.println(e.getMessage());
		}

	}
}