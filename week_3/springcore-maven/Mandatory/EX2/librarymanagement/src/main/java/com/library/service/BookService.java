package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook(String bookName) {
        System.out.println("Adding book: " + bookName);
        bookRepository.saveBook(bookName);
    }

    public void showAllBooks() {
        System.out.println("Listing all books in the library:");
        for (String book : bookRepository.getAllBooks()) {
            System.out.println("- " + book);
        }
    }
}
