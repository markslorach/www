"use client";
import useSWR from "swr";
import { getLastPlayed } from "@/lib/lastfm";

const fetcher = () => fetch("/api/last-played").then((res) => res.json());

export function useLastPlayed() {
  return useSWR("last-played", fetcher, {
    refreshInterval: 60000,
  });
}
