type WeatherApiResponse = {
  current: {
    temp_c: number;
    condition: {
      text: string;
    };
  };
};

export async function GET() {
  const apiKey = process.env.WEATHER_API_KEY;
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Glasgow`;

  const res = await fetch(url, {
    next: { revalidate: 1800 },
  });

  if (!res.ok)
    return Response.json(
      { error: "Failed to fetch weather data" },
      { status: 502 },
    );

  const data = (await res.json()) as WeatherApiResponse;

  return Response.json({
    temperature: Math.round(data.current.temp_c),
    condition: data.current.condition.text,
  });
}
