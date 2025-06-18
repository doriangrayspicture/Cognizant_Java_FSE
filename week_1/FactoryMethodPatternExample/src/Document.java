public interface Document {
    void open();
    
    void print();
    void close();
    public void save(String filename) {
        System.out.println("Saving document");
    }
}
