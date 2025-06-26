package in.sunetra.ex4;

import org.junit.jupiter.api.*;

import static org.junit.jupiter.api.Assertions.*;

public class CalculatorAAATest {

    Calculator calculator;

    @BeforeEach
    void setUp() {
        // Setup code: Runs before each test
        calculator = new Calculator();
        System.out.println("Setup complete");
    }

    @AfterEach
    void tearDown() {
        // Cleanup code: Runs after each test
        System.out.println("Test finished\n");
    }

    @Test
    void testAddition() {
        // Arrange
        int a = 5;
        int b = 3;

        // Act
        int result = calculator.add(a, b);

        // Assert
        assertEquals(8, result);
    }

    @Test
    void testSubtraction() {
        // Arrange
        int a = 10;
        int b = 4;

        // Act
        int result = calculator.subtract(a, b);

        // Assert
        assertEquals(6, result);
    }
}
