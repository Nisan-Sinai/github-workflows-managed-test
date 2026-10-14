from requests import Request


request = Request("GET", "https://example.invalid/health").prepare()
assert request.method == "GET"
assert request.url == "https://example.invalid/health"
print("python managed dependency check passed")
