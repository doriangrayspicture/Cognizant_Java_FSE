public class Logger {
    // Eager initialization: single instance created at class load time
    private static Logger logger = new Logger();

    // Private constructor to prevent external instantiation
    private Logger() {
        System.out.println("Logger started");
    }

    // Public method to return the same Logger instance
    public static Logger get_logger_started() {
        return logger;
    }

    // Additional utility methods
    public void logInfo(String message) {
        System.out.println("[INFO] " + message);
    }

    public void logError(String message) {
        System.out.println("[ERROR] " + message);
    }
}
