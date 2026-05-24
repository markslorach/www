import Link from "next/link";
import { allUses } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { mdxComponents } from "@/mdx-components";
import LightboxImage from "@/app/components/shared/lightbox-image";

export default function UsesPage() {
  const uses = allUses[0];

  return (
    <>
      <section className="text-muted-foreground mb-14 space-y-4 text-[15px] text-pretty">
        <h1 className="text-foreground text-xl leading-6 font-medium tracking-tight">
          /uses
        </h1>

        <p className="text-pretty">
          A list of the hardware, software and everyday desk setup I use.
          Inspired by{" "}
          <Link
            href="https://uses.tech"
            target="_blank"
            className="text-foreground underline decoration-[#0892d0] decoration-dotted decoration-1 underline-offset-4 hover:decoration-solid"
          >
            uses.tech
          </Link>{" "}
          by{" "}
          <Link
            href="https://wesbos.com/uses"
            target="_blank"
            className="text-foreground underline decoration-[#0892d0] decoration-dotted decoration-1 underline-offset-4 hover:decoration-solid"
          >
            Wes Bos
          </Link>
          .
        </p>
      </section>

      <AspectRatio ratio={3 / 2} className="mb-14 rounded-md">
        <LightboxImage
          src="/images/desk.webp"
          alt="My desk setup"
          fill
          preload
          sizes="(max-width: 768px) 100vw, 600px"
          className="rounded-md object-cover"
        />
      </AspectRatio>

      <div className="prose-article prose-li:my-5! mb-20 [&>h2]:mt-14 [&>h2:first-child]:mt-0">
        <MDXContent code={uses.mdx} components={mdxComponents} />
      </div>
    </>
  );
}
