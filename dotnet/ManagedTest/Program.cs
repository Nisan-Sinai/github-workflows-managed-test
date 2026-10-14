using Newtonsoft.Json;

var json = JsonConvert.SerializeObject(new { service = "central-manager", healthy = true });
if (!json.Contains("central-manager", StringComparison.Ordinal))
{
    throw new InvalidOperationException("The managed .NET dependency did not serialize the fixture.");
}

Console.WriteLine(".NET managed dependency check passed");
