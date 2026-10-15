"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLastPlayed } from "@/hooks/useLastPlayed";
import MusicNoteIcon from "@/app/components/icons/music-note-icon";
import MusicWidgetLoadingSkeleton from "./music-widget-loading-skeleton";
import MusicWidgetErrorState from "./music-widget-error-state";
import PulseIndicator from "./pulse-indicator";

export default function MusicWidget() {
  const { data: lastPlayed, isLoading, error } = useLastPlayed();
  const [failedArtwork, setFailedArtwork] = useState<string | null>(null);

  if (!lastPlayed && isLoading) return <MusicWidgetLoadingSkeleton />;
  if (!lastPlayed && error) return <MusicWidgetErrorState />;
  if (!lastPlayed) return null;

  const artwork =
    lastPlayed.artwork === failedArtwork ? null : lastPlayed.artwork;

  const handleArtworkError = () => {
    if (artwork) setFailedArtwork(artwork);
  };

  return (
    <Link
      href={lastPlayed.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Last played: ${lastPlayed.title} by ${lastPlayed.artist}. Opens on Last.fm in a new tab.`}
      className="focus-visible:outline-primary relative flex flex-col gap-3 overflow-clip rounded-sm border p-2 shadow-xs select-none focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      {artwork && (
        <Image
          src={artwork}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 240px"
          draggable={false}
          onError={handleArtworkError}
          className="absolute inset-0 -z-10 scale-150 object-cover opacity-8 blur-sm"
        />
      )}

      {!artwork && (
        <div className="from-primary/15 to-primary-muted/80 absolute inset-0 -z-10 bg-linear-to-br" />
      )}

      <div className="flex items-center justify-between">
        <h3 className="text-muted-foreground font-mono text-[11px] leading-3 font-medium tracking-[0.12em] uppercase">
          Last Played
        </h3>

        <PulseIndicator />
      </div>

      <div className="flex items-center gap-3">
        <div className="relative size-17.5 shrink-0 overflow-hidden rounded-sm shadow-xs">
          {artwork && (
            <Image
              src={artwork}
              alt=""
              fill
              sizes="70px"
              draggable={false}
              onError={handleArtworkError}
              className="block scale-104 object-cover"
            />
          )}

          {!artwork && (
            <div className="bg-artwork-placeholder/70 flex size-full items-center justify-center">
              <MusicNoteIcon className="text-primary/60 size-5" />
            </div>
          )}
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <p className="font-heading line-clamp-2 text-[19px] leading-6 font-[450] tracking-[-0.01em] wrap-break-word">
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
