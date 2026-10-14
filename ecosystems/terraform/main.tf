terraform {
  required_version = ">= 1.9.0"

  required_providers {
    random = {
      source  = "hashicorp/random"
      version = "~> 3.9.0"
    }
  }
}

resource "random_pet" "pilot" {
  length = 2
}
