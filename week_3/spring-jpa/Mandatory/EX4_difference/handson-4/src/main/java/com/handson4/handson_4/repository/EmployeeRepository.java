package com.handson4.handson_4.repository;

import com.handson4.handson_4.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
}