package com.example.employeerest.dao;

import com.example.employeerest.model.Employee;
import org.springframework.stereotype.Repository;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.List;

@Repository
public class EmployeeDao {
    private static final List<Employee> EMPLOYEE_LIST;

    static {
        ApplicationContext context = new ClassPathXmlApplicationContext("employee.xml");
        EMPLOYEE_LIST = (List<Employee>) context.getBean("employeeList");
    }

    public List<Employee> getAllEmployees() {
        return EMPLOYEE_LIST;
    }
}

