"use client";
import useSWR from "swr";

type Track = {
  title: string;
  url: string;
  album: string;
  artist: string;
  artwork: string | null;
};

const fetcher = (): Promise<Track> =>
  fetch("/api/last-played").then((res) => {
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
  });

export function useLastPlayed() {
  return useSWR("last-played", fetcher, {
    refreshInterval: 120000,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
  });
}
