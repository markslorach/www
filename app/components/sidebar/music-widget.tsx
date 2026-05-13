import Image from "next/image";
import albumArtwork from "@/public/images/seeds_in_sand.png";
import { Headphones } from "lucide-react";

const lastPlayed = {
  title: "Bamboo",
  album: "Seeds in Sand",
  artist: "Elder Island",
  artwork: albumArtwork,
};

export default function MusicWidget() {
  return (
    <section className="relative flex flex-col gap-1.5 overflow-clip rounded-md border p-2 shadow-xs">
      <Image
        src={lastPlayed.artwork}
        alt=""
        fill
        sizes="100%"
        className="absolute inset-0 scale-150 object-cover opacity-20 blur-lg"
      />

      <div className="flex items-center justify-between">
        <h3 className="text-muted-foreground text-xs tracking-wider uppercase">
          Last Played
        </h3>

        <Headphones
          className="text-muted-foreground/50 size-3.5"
          strokeWidth={2.3}
        />
      </div>

      <div className="flex items-center gap-2">
        <div className="relative size-14 shrink-0 overflow-hidden rounded-lg shadow-xs">
          <Image
            src={lastPlayed.artwork}
            alt={`${lastPlayed.album} artwork`}
            fill
            sizes="56px"
            className="block scale-104 object-cover"
          />
        </div>

        <div className="flex min-w-0 flex-col gap-1">
          <p className="truncate leading-none font-medium">
            {lastPlayed.title}
          </p>
          <p className="text-muted-foreground truncate text-sm leading-none">
            {lastPlayed.artist}
          </p>
        </div>
      </div>
    </section>
  );
}
