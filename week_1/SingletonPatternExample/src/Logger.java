public class Logger {
    
    private static Logger logger = new Logger();

    
    private Logger() {
        System.out.println("Logger started");
    }

    
    public static Logger get_logger_started() {
        return logger;
    }

    
    public void logInfo(String message) {
        System.out.println("[INFO] " + message);
    }

    public void logError(String message) {
        System.out.println("[ERROR] " + message);
    }
}
