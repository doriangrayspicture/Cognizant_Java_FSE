import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(104, "Chips", "Food"),
            new Product(102, "Kurti", "Clothing"),
            new Product(101, "Phone", "Electronics"),
            new Product(103, "Stockings", "Clothing"),
            new Product(105, "Sausage", "Food"),
            new Product(106, "Dress", "Clothing"),
            new Product(107, "Mixer", "Electronics"),
            new Product(108, "Pants", "Clothing"),
            new Product(109, "Chips", "Food"),
            new Product(110, "Kurti", "Clothing"),
            new Product(111, "Phone", "Electronics"),
            new Product(112, "Stockings", "Clothing"),
            new Product(113, "Sausage", "Food"),
            new Product(114, "Dress", "Clothing"),
            new Product(115, "Mixer", "Electronics"),
            new Product(116, "Pants", "Clothing")
        
        };

        
        Product foundLinear = SearchUtility.linearSearch(products, 101);
        System.out.println("Linear Search Result: " + foundLinear);

        
        Arrays.sort(products, (a, b) -> Integer.compare(a.productId, b.productId));

        
        Product foundBinary = SearchUtility.binarySearch(products, 101);
        System.out.println("Binary Search Result: " + foundBinary);




        int targetId = 101;

        
        long startLinear = System.nanoTime();
        Product foundLinear2 = SearchUtility.linearSearch(products, targetId);
        long endLinear = System.nanoTime();

        System.out.println("Linear Search Result: " + foundLinear2);
        System.out.println("Time taken (Linear): " + (endLinear - startLinear) + " ns");

        
        Arrays.sort(products, (a, b) -> Integer.compare(a.productId, b.productId));

        long startBinary = System.nanoTime();
        Product foundBinary2 = SearchUtility.binarySearch(products, targetId);
        long endBinary = System.nanoTime();

        System.out.println("\nBinary Search Result: " + foundBinary2);
        System.out.println("Time taken (Binary): " + (endBinary - startBinary) + " ns");

    }
}
