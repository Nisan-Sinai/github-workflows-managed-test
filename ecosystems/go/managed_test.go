package managedtest

import (
	"testing"

	"github.com/google/uuid"
)

func TestUUID(t *testing.T) {
	if _, err := uuid.Parse("123e4567-e89b-12d3-a456-426614174000"); err != nil {
		t.Fatalf("expected a valid UUID: %v", err)
	}
}
