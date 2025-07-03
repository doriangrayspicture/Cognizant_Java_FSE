package com.handson4.handson_4;

import com.handson4.handson_4.model.Employee;
import com.handson4.handson_4.service.EmployeeService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class Handson4Application {

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(Handson4Application.class, args);
        EmployeeService service = context.getBean(EmployeeService.class);

        // Save employee
        service.addEmployee(new Employee(1, "Alice"));
        service.addEmployee(new Employee(2, "Bob"));
    }
}
