import Link from "next/link";
import { allNows } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { mdxComponents } from "@/mdx-components";

export default function UsesPage() {
  const nows = allNows[0];

  return (
    <>
      <section className="text-muted-foreground mb-14 space-y-4 text-[15px] text-pretty">
        <h1 className="text-foreground text-xl leading-6 font-medium tracking-tight">
          /now
        </h1>

        <p className="text-pretty">
          A look at what is keeping me busy at the moment.
        </p>
      </section>

      <div className="prose-article prose-li:my-4! mb-20 [&>h2]:mt-14 [&>h2:first-child]:mt-0">
        <MDXContent code={nows.mdx} components={mdxComponents} />
      </div>
    </>
  );
}
 