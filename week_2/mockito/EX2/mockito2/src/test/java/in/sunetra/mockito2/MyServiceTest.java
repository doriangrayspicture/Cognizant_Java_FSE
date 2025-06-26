package in.sunetra.mockito2;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
public class MyServiceTest {

    @Test
    public void testVerifyInteractionAndResult() {
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);
        when(mockApi.getData()).thenReturn("Hello");

        MyService service = new MyService(mockApi);
        String result = service.fetchData();

        verify(mockApi).getData();
        assertEquals("Hello", result);
    }
}
