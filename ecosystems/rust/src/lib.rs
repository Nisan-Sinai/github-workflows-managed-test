pub fn status() -> String {
    serde_json::json!({"status": "ok"})["status"]
        .as_str()
        .expect("status must be a string")
        .to_owned()
}

#[cfg(test)]
mod tests {
    use super::status;

    #[test]
    fn reports_ok() {
        assert_eq!(status(), "ok");
    }
}
