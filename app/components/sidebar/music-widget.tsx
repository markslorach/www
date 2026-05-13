import Link from "next/link";
import Image from "next/image";
import { getLastPlayed } from "@/lib/lastfm";
import { Headphones, Music2 } from "lucide-react";

export default async function MusicWidget() {
  const { data: lastPlayed, error } = await getLastPlayed();

  if (error) return <p>Error!</p>;

  return (
    <Link
      href={lastPlayed?.url ?? "#"}
      target={lastPlayed?.url ? "_blank" : "_self"}
      className="bg-muted-foreground/10 relative flex flex-col gap-2 overflow-clip rounded-md border p-2 shadow-xs select-none"
    >
      {lastPlayed?.artwork && (
        <Image
          src={lastPlayed.artwork}
          alt=""
          fill
          sizes="100%"
          draggable={false}
          className="absolute inset-0 scale-150 object-cover opacity-15 blur-sm"
        />
      )}

      <div className="flex items-center justify-between">
        <h3 className="text-muted-foreground text-xs leading-none tracking-wider uppercase">
          Last Played
        </h3>

        <Headphones
          className="text-muted-foreground/50 size-3.5"
          strokeWidth={2.3}
        />
      </div>

      <div className="flex items-center gap-2">
        <div className="relative size-14 shrink-0 overflow-hidden rounded-md shadow-xs">
          {lastPlayed?.artwork ? (
            <Image
              src={lastPlayed.artwork}
              alt={`${lastPlayed.album} artwork`}
              fill
              sizes="56px"
              draggable={false}
              className="block scale-104 object-cover"
            />
          ) : (
            <div className="bg-muted-foreground/10 flex size-full items-center justify-center">
              <Music2 className="text-muted-foreground/50 size-4" />
            </div>
          )}
        </div>

        <div className="flex min-w-0 flex-col gap-1">
          <p className="truncate leading-none font-medium">
            {lastPlayed?.title}
          </p>

          <p className="text-muted-foreground truncate text-sm leading-none">
            {lastPlayed?.artist}
          </p>
        </div>
      </div>
    </Link>
  );
}
