package in.sunetra.mockito1;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
public class MyServiceTest {

    @Test
    public void testExternalApi() {
        // Create mock for ExternalApi
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Define behavior
        when(mockApi.getData()).thenReturn("Mock Data");

        // Inject mock into MyService
        MyService service = new MyService(mockApi);

        // Call method and verify
        String result = service.fetchData();
        assertEquals("Mock Data", result);
    }
}
