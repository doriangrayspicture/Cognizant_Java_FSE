public class WordDocument implements Document {
    private String content;

    public WordDocument() {
        this.content = "";
        System.out.println("Word Document Created");
    }

    //Override
    public void open() {
        System.out.println("Opening Word Document...");
    }

    //Override
    public void save(String filename) {
        System.out.println("Saving Word Document as: " + filename + ".docx");
    }

    //Override
    public void print() {
        System.out.println("Printing Word Document content: ");
        if(content.isEmpty())
        System.out.println( "[Empty Document]" : content);
    }

    //Override
    public void close() {
        System.out.println("Closing Word Document.");
    }

    // Utility methods
    public void write(String text) {
        content += text + "\n";
        System.out.println("Text written to document.");
    }
    //adding new utility to word document not present in others
    public void clear() {
        content = "";
        System.out.println("Document content cleared.");
    }
}
