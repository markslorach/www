import Link from "next/link";
import Image from "next/image";
import { ImageZoom } from "@/components/kibo-ui/image-zoom";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function HeroSection() {
  return (
    <section className="space-y-10 mb-24">
      <h2 className="text-[22px] tracking-tight font-serif font-medium">Hello, I'm Mark 👋</h2>

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

      <div className="space-y-4 font-light text-[15px]/6 tracking-[0.020rem] text-balance">
        <p>
          I build web apps with React, Next.js and TypeScript and love exploring
          everything else in between. I'm a self-hosting enthusiast, Scottish
          Tech Army volunteer and a former videographer & drone operator who
          made the jump into software.
        </p>
        <p>
          When I'm not coding, I'm usually out exploring somewhere new. If you
          know me, you'll know "<i>I love being somewhere else!</i>". When I'm
          not doing that, you'll find me in a beer garden or falling down a
          rabbit hole of Docker containers in my homelab.
        </p>

        <Link
          href="/about"
          className="underline underline-offset-4 decoration-blue-300 text-[15px] tracking-[0.015rem]"
        >
          <span>More about me →</span>
        </Link>
      </div>
    </section>
  );
}
