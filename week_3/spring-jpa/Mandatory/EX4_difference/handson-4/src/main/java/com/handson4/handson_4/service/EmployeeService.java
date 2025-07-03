package com.handson4.handson_4.service;

import com.handson4.handson_4.model.Employee;
import com.handson4.handson_4.repository.EmployeeRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository repository;

    @Transactional
    public void addEmployee(Employee emp) {
        repository.save(emp);
    }
}
