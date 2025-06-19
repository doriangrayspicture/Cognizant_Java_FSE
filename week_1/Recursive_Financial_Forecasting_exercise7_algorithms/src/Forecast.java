public class Forecast {

    public static void compoundManual(double previousAmount, double rate, int totalYears, int currentYear) {
        if (currentYear > totalYears) return;

        double interest = previousAmount * rate / 100;
        double newAmount = previousAmount + interest;

        System.out.printf(" %d: Interest = %.2f, Total = %.2f\n", currentYear, interest, newAmount);

        
        compoundManual(newAmount, rate, totalYears, currentYear + 1);
    }
}

