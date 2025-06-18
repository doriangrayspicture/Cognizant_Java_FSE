public class PDFDocument implements Document {
    private String content;

    public PDFDocument() {
        this.content = "";
        System.out.println("PDF Document Created");
    }

    //Override
    public void open() {
        System.out.println("Opening PDF Document...");
    }

    //Override
    public void save(String filename) {
        System.out.println("Saving PDF Document as: " + filename + ".docx");
    }

    //Override
    public void print() {
        System.out.println("Printing PDF Document content: ");
        if(content.isEmpty()){
        System.out.println( "[Empty Document]" : content);}
    }

    //Override
    public void close() {
        System.out.println("Closing PDF Document.");
    }

}
