public abstract class ExcelDocument {
    public abstract void open();
    public abstract void setCell(int row, int col, String value);
    public abstract String getCell(int row, int col);
    public abstract void save();
    public abstract void close();
}

