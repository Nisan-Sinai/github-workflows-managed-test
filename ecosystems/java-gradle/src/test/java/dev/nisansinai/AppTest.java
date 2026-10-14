package dev.nisansinai;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

class AppTest {
    @Test
    void returnsExpectedStatus() {
        assertEquals("ok", App.status());
    }
}
