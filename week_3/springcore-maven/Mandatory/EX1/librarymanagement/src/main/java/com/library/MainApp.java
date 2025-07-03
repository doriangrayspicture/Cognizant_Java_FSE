package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.library.service.BookService;

public class MainApp {
    public static void main(String[] args) {
        // Load the application context from the XML configuration
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Get the bookService bean from the Spring container
        BookService bookService = (BookService) context.getBean("bookService");

        // Use the service to add a book
        bookService.addBook("Spring in Action");
    }
}
