"use client";
import Link from "next/link";
import Image from "next/image";
import { useLastPlayed } from "@/hooks/useLastPlayed";
import { Music2 } from "lucide-react";
// import { Headphones } from "lucide-react";
import MusicWidgetLoadingSkeleton from "./music-widget-loading-skeleton";
import MusicWidgetErrorState from "./music-widget-error-state";
import PulseIndicator from "./pulse-indicator";

export default function MusicWidget() {
  const { data: lastPlayed, isLoading, error } = useLastPlayed();

  if (!lastPlayed && isLoading) return <MusicWidgetLoadingSkeleton />;

  if (!lastPlayed && error) return <MusicWidgetErrorState />;

  if (!lastPlayed) return null;

  return (
    <Link
      href={lastPlayed.url}
      target="_blank"
      className="relative flex flex-col gap-3 overflow-clip rounded-sm border p-2 shadow-xs select-none"
    >
      {lastPlayed.artwork && (
        <Image
          src={lastPlayed.artwork}
          alt=""
          fill
          sizes="100%"
          draggable={false}
          className="absolute inset-0 -z-10 scale-150 object-cover opacity-15 blur-sm"
        />
      )}

      {!lastPlayed.artwork && (
        <div className="from-primary/15 to-primary-muted/80 absolute inset-0 -z-10 bg-linear-to-br" />
      )}

      <div className="flex items-center justify-between">
        <h3 className="text-muted-foreground font-mono text-[11px] leading-3 font-medium tracking-[0.12em] uppercase">
          Last Played
        </h3>

        {/* <Headphones className="text-primary/60 size-3.5" strokeWidth={2} /> */}
        <PulseIndicator />
      </div>

      <div className="flex items-center gap-3">
        <div className="relative size-16 shrink-0 overflow-hidden rounded-sm shadow-xs">
          {lastPlayed.artwork && (
            <Image
              src={lastPlayed.artwork}
              alt={`${lastPlayed.album} artwork`}
              fill
              sizes="64px"
              draggable={false}
              className="block scale-104 object-cover"
            />
          )}

          {!lastPlayed.artwork && (
            <div className="bg-artwork-placeholder/70 flex size-full items-center justify-center">
              <Music2 className="text-primary/60 size-4" />
            </div>
          )}
        </div>

        <div className="flex min-w-0 flex-col gap-0.5">
          <p className="font-heading truncate text-[19px] leading-6 font-[450] tracking-[-0.01em]">
            {lastPlayed.title}
          </p>

          <p className="text-body truncate text-[15px] leading-5">
            {lastPlayed.artist}
          </p>
        </div>
      </div>
    </Link>
  );
}
