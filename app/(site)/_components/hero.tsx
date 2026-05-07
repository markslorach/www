import Link from "next/link";

import Image from "next/image";
import { ImageZoom } from "@/components/kibo-ui/image-zoom";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function HeroSection() {
  return (
    <section className="space-y-10 mb-24">
      <h2 className="text-[25px] tracking-tight font-serif font-medium">
        Hello, I'm Mark 👋
      </h2>

      <ImageZoom zoomMargin={100}>
        <AspectRatio ratio={3 / 2}>
          <Image
            src="/images/profile.webp"
            alt="Photo"
            fill
            priority
            // add sizes prop
            className="rounded-md"
          />
        </AspectRatio>
      </ImageZoom>

      <div className="space-y-4 font-normal text-muted-foreground text-[15px]/7 text-balance">
        <p>
          I build web apps with React, Next.js and TypeScript and love exploring
          everything around it. I'm a self-hosting enthusiast, Scottish Tech
          Army volunteer and former videographer & drone operator who made the
          jump into software.
        </p>
        <p>
          When I'm not coding, I'm usually out exploring somewhere new. If you
          know me, you'll know I “<span className="italic">love being somewhere else</span>”. If not, you'll
          probably find me in a beer garden or falling down a rabbit hole of
          Docker containers in my homelab.
        </p>

        <p>
          Find me on{" "}
          <a href="https://github.com/markslorach" target="_blank" rel="noopener noreferrer" className="underline font-medium underline-offset-2 decoration-1">GitHub</a>
          {" "}and{" "}
          <a href="https://linkedin.com/in/markslorach" target="_blank" rel="noopener noreferrer" className="underline font-medium underline-offset-2 decoration-1" >LinkedIn</a>.
        </p>
      </div>
    </section>
  );
}
