package dev.nisansinai;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

class AppTest {
    @Test
    void returnsExpectedAnswer() {
        assertEquals(42, App.answer());
    }
}
