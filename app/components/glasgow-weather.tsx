"use client";
import { useWeather } from "@/hooks/useWeather";

export default function GlasgowWeather() {
  const { data: weather } = useWeather();

  if (!weather) return null;

  return (
    <span>
      {weather.temperature}°C · {weather.condition}
    </span>
  );
}
