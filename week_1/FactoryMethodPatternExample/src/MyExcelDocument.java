

public class MyExcelDocument extends ExcelDocument {
    private String[][] cells = new String[10][10]; 

    
    public void open() {
        System.out.println("Opening Excel document...");
    }

    
    public void setCell(int row, int col, String value) {
        cells[row][col] = value;
        System.out.printf("Set cell [%d][%d] = %s\n", row, col, value);
    }

    
    public String getCell(int row, int col) {
        return cells[row][col];
    }

    
    public void save() {
        System.out.println("Saving Excel document...");
    }

    
    public void close() {
        System.out.println("Closing Excel document.");
    }
}
