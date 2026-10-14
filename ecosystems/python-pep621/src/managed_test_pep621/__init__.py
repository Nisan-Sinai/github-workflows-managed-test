from packaging.version import Version


def normalized_version() -> str:
    return str(Version("1.0.0"))
