


public class Main {
    public static void main(String[] args) {
        DocumentFactory factory = new DocumentFactory();

        // Word
        WordDocument word = (WordDocument) factory.createDocument("word");
        word.open();
        word.write("Hello from Word!");
        word.save();
        word.close();

        System.out.println();

        // PDF
        PDFDocument pdf = (PDFDocument) factory.createDocument("pdf");
        pdf.open();
        pdf.save();
        pdf.close();

        System.out.println();

        // Excel
        ExcelDocument excel = (ExcelDocument) factory.createDocument("excel");
        excel.open();
        excel.setCell(0, 0, "Profit");
        excel.setCell(0, 1, "₹5000");
        System.out.println("Excel Cell [0][1] = " + excel.getCell(0, 1));
        excel.save();
        excel.close();
    }
}

