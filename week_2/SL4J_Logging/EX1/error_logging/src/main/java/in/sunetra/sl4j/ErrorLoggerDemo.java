package in.sunetra.sl4j;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ErrorLoggerDemo {
    private static final Logger logger = LoggerFactory.getLogger(ErrorLoggerDemo.class);

    public static void main(String[] args) {
        logger.error("This is an error message");
        logger.warn("This is a warning message");
    }
}
