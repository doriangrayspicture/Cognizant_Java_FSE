package com.handson4.handson_4.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Employee {

    @Id
    private int id;
    private String name;

    // ✅ Default constructor (required by JPA)
    public Employee() {
    }

    // ✅ All-args constructor
    public Employee(int id, String name) {
        this.id = id;
        this.name = name;
    }

    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    @Override
    public String toString() {
        return "Employee [id=" + id + ", name=" + name + "]";
    }
}
