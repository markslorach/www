"use client";
import { useQuery } from "@tanstack/react-query";
import { getLastPlayed } from "@/lib/lastfm";

export function useLastPlayed() {
  return useQuery({
    queryKey: ["last-played"],
    queryFn: getLastPlayed,
    refetchInterval: 60000,
    refetchOnWindowFocus: false,
  });
}
