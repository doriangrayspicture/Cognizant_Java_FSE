

public class MyWordDocument extends WordDocument {
    private StringBuilder content = new StringBuilder();

    
    public void open() {
        System.out.println("Opening Word document...");
    }

    
    public void write(String text) {
        content.append(text).append("\n");
        System.out.println("Writing to Word document: " + text);
    }

    
    public void save() {
        System.out.println("Saving Word document with content:");
        System.out.println(content);
    }

    
    public void close() {
        System.out.println("Closing Word document.");
    }
}
