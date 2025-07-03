package com.library.repository;

import java.util.Arrays;
import java.util.List;

public class BookRepository {

    public void saveBook(String bookName) {
        System.out.println("Book '" + bookName + "' saved to the repository.");
    }

    public List<String> getAllBooks() {
        // Simulating a database fetch
        return Arrays.asList("Spring in Action", "Effective Java", "Clean Code");
    }
}
