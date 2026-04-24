import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ImageZoom } from "@/components/kibo-ui/image-zoom";

export default function Home() {
  return (
    <div className="space-y-10">
      <h2 className="text-[15px] font-medium">Hello 👋</h2>

      <ImageZoom zoomMargin={100}>
        <AspectRatio ratio={3 / 2}>
          <Image
            src="/images/profile.webp"
            alt="Photo"
            fill
            priority
            // add sizes prop
            className="rounded-sm"
          />
        </AspectRatio>
      </ImageZoom>

      <div className="space-y-4 font-light text-[14px]/6 tracking-[0.020rem] text-pretty ">
        <p>
          That's me, <span className="font-medium">Mark</span>. A Software Developer from{" "}
          <s className="text-muted-foreground">not so</s> sunny Scotland.
        </p>
        <p>
          I build web apps with React, Next.js and TypeScript and love exploring
          everything else in between. I'm a self-hosting enthusiast, Scottish
          Tech Army volunteer and a former videographer & drone operator who
          made the jump into software.
        </p>
        <p>
          When I'm not coding, I'm usually out exploring somewhere new. If you
          know me, you'll know "<i>I love being somewhere else!</i>". When I'm
          not doing that, you'll find me in a beer garden or
          falling down a rabbit hole of Docker containers in my homelab.
        </p>

        <Link
          href="/about"
          className="underline underline-offset-4 decoration-blue-300 text-[14px] tracking-[0.015rem]"
        >
          <span>More about me →</span>
        </Link>
      </div>

      <div className="space-y-8 pt-10">
        <h2 className="text-[15px] font-medium">Projects</h2>
      </div>
    </div>
  );
}
