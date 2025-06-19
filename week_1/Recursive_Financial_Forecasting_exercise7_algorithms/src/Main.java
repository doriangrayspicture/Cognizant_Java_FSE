public class Main {
    public static void main(String[] args) {
        double principal = 10000;
        double rate = 10;  // 10%
        int years = 5;

        System.out.println("Compound Growth (Manual, Year-by-Year):");
        Forecast.compoundManual(principal, rate, years, 1);
    }
}
