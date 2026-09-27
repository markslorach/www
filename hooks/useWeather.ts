"use client";
import useSWR from "swr";

type Weather = {
  temperature: number;
  condition: string;
};

const fetcher = (url: string): Promise<Weather> =>
  fetch(url).then((response) => {
    if (!response.ok) throw new Error("Failed to fetch weather");
    return response.json();
  });

export function useWeather() {
  return useSWR("/api/weather", fetcher, {
    refreshInterval: 30 * 60 * 1000,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
  });
}
