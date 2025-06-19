public class DocumentFactory {

    public Object createDocument(String type) {
        switch (type.toLowerCase()) {
            case "word":
                return new MyWordDocument(); 
            case "pdf":
                return new MyPDFDocument();  
            case "excel":
                return new MyExcelDocument(); 
            default:
                throw new IllegalArgumentException("Invalid document type: " + type);
        }
    }
}
