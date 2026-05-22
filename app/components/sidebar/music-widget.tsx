"use client";
import Link from "next/link";
import Image from "next/image";
import { useLastPlayed } from "@/hooks/useLastPlayed";
import { Headphones, Music2 } from "lucide-react";
import MusicWidgetLoadingSkeleton from "./music-widget-loading-skeleton";
import MusicWidgetErrorState from "./music-widget-error-state";

export default function MusicWidget() {
  const { data: lastPlayed, isLoading, error } = useLastPlayed();

  if (isLoading) return <MusicWidgetLoadingSkeleton />;

  if (error) return <MusicWidgetErrorState />;

  if (!lastPlayed) return null;

  return (
    <Link
      href={lastPlayed.url}
      target="_blank"
      className="relative flex flex-col gap-2 overflow-clip rounded-md border p-2 shadow-xs select-none"
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
        <div className="absolute inset-0 -z-10 bg-linear-to-br from-blue-500/15 to-gray-500/10" />
      )}

      <div className="flex items-center justify-between">
        <h3 className="text-muted-foreground dark:text-muted-foreground/70 text-xs leading-none tracking-wider uppercase">
          Last Played
        </h3>

        <Headphones
          className="text-muted-foreground/50 size-3.5"
          strokeWidth={2.3}
        />
      </div>

      <div className="flex items-center gap-2">
        <div className="relative size-14 shrink-0 overflow-hidden rounded-md shadow-xs">
          {lastPlayed.artwork && (
            <Image
              src={lastPlayed.artwork}
              alt={`${lastPlayed.album} artwork`}
              fill
              sizes="56px"
              draggable={false}
              className="block scale-104 object-cover"
            />
          )}

          {!lastPlayed.artwork && (
            <div className="bg-muted-foreground/10 flex size-full items-center justify-center">
              <Music2 className="text-muted-foreground/50 size-4" />
            </div>
          )}
        </div>

        <div className="flex min-w-0 flex-col gap-1">
          <p className="truncate leading-none font-medium">
            {lastPlayed.title}
          </p>

          <p className="text-muted-foreground dark:text-muted-foreground/70 truncate text-sm leading-none">
            {lastPlayed.artist}
          </p>
        </div>
      </div>
    </Link>
  );
}
