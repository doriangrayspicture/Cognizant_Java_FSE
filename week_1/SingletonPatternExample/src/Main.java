public class Main {
    public static void main(String[] args) {
        
        Logger log1 = Logger.get_logger_started();
        log1.logInfo("This is the first info message");

        
        Logger log2 = Logger.get_logger_started();
        log2.logInfo("This is second message");

        
        if (log1 == log2) {
            System.out.println("Same Logger instance used across the application");
        } else {
            System.out.println("Different Logger instances (Singleton failed!)");
        }
        Logger log3 = Logger.get_logger_started();
        Logger log4 = Logger.get_logger_started();
        log3.logInfo("Logger 3 hash: " + log3.hashCode());
        log4.logInfo("Logger 4 hash: " + log4.hashCode());
        if (log3 == log4) {
            System.out.println("Same Logger instance used across the application. Confirmed using hashCode");
        } else {
            System.out.println("Different Logger instances (Singleton failed!)");
        }
        

        
    }
}
