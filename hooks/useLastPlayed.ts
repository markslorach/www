"use client";
import useSWR from "swr";
import { getLastPlayed } from "@/lib/lastfm";

export function useLastPlayed() {
  return useSWR("last-played", getLastPlayed, {
    refreshInterval: 60000,
  });
}
