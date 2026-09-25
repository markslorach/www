import Image from "next/image";
import profileImage from "@/public/images/profile.webp";
import ThumbTack from "./shared/thumb-tack";

export default function Polaroid() {
  return (
    <figure className="bg-polaroid relative flex w-fit scale-105 rotate-[-2.5deg] flex-col rounded-xs px-2 pt-2 shadow-[0_1px_3px_rgb(28_27_24/7%)]">
      <ThumbTack className="absolute top-1 right-1 size-3 drop-shadow-[0_2px_1.5px_rgb(28_27_24/30%)]" />

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

      <figcaption className="text-polaroid-foreground flex flex-col gap-0.5 pt-2.25 pb-2.75 font-mono text-[9px] leading-3 tracking-widest">
        <span className="font-medium">56.3°N 4.3°W</span>
        <span>BEN LEDI</span>
      </figcaption>
    </figure>
  );
}
