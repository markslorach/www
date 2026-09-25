"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import profileImage from "@/public/images/profile.webp";
import { cn } from "@/lib/utils";
import ThumbTack from "./shared/thumb-tack";
import Snowfall from "react-snowfall";

export default function Polaroid() {
  const [isSnowing, setIsSnowing] = useState(false);

  return (
    <figure className="bg-polaroid relative flex w-fit scale-105 rotate-[-2.5deg] flex-col rounded-xs px-2 pt-2 shadow-[0_1px_3px_rgb(28_27_24/7%)]">
      <ThumbTack className="absolute top-1 right-1 z-10 size-3 drop-shadow-[0_2px_1.5px_rgb(28_27_24/30%)]" />

      <div
        className="relative size-44 overflow-clip"
        onMouseEnter={() => setIsSnowing(true)}
        onMouseLeave={() => setIsSnowing(false)}
      >
        <Image
          src={profileImage}
          alt="Mark Slorach at the top of Ben Ledi mountain in Scotland"
          placeholder="blur"
          draggable={false}
          width={500}
          height={333}
          priority
          className="size-44 object-cover object-center"
        />

        <div
          className={cn({
            "pointer-events-none absolute inset-0 transition-opacity": true,
            "opacity-50 duration-900 ease-in": isSnowing,
            "opacity-0 duration-700 ease-out": !isSnowing,
          })}
        >
          <Snowfall snowflakeCount={100} speed={[0.8, 1.8]} />
        </div>
      </div>

      <figcaption className="text-polaroid-foreground flex flex-col gap-0.5 pt-2.25 pb-2.75 font-mono text-[9px] leading-3 tracking-widest">
        <Link
          href="https://www.google.com/maps/search/?api=1&query=56.258667%2C-4.322389"
          target="_blank"
          rel="noreferrer"
          aria-label="View Ben Ledi on Google Maps (opens in a new tab)"
          className="w-fit font-medium decoration-dotted underline-offset-2 transition-all hover:underline focus-visible:underline focus-visible:outline-none"
        >
          56.259°N 4.322°W
        </Link>
        <span>BEN LEDI</span>
      </figcaption>
    </figure>
  );
}
