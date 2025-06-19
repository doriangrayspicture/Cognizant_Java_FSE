

public class MyPDFDocument extends PDFDocument {
    
    public void open() {
        System.out.println("Opening PDF document...");
    }

    
    public void save() {
        System.out.println("Saving PDF document...");
    }

    
    public void close() {
        System.out.println("Closing PDF document.");
    }
}
