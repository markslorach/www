import { allUses } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { mdxComponents } from "@/mdx-components";
import LightboxImage from "@/app/components/shared/lightbox-image";
import PageHeader from "@/app/components/shared/page-header";
import Prose from "@/app/components/shared/layout/prose";
import Stack from "@/app/components/shared/layout/stack";
import InlineLink from "@/app/components/shared/inline-link";

export default function UsesPage() {
  const uses = allUses[0];

  return (
    <Stack>
      <PageHeader title="/uses">
        A list of the hardware, software and everyday desk setup I use. Inspired
        by{" "}
        <InlineLink href="https://uses.tech" target="_blank">
          uses.tech
        </InlineLink>{" "}
        by{" "}
        <InlineLink href="https://wesbos.com/uses" target="_blank">
          Wes Bos
        </InlineLink>
        .
      </PageHeader>

      <LightboxImage
        src="/images/desk-setup-new.webp"
        alt="My desk setup"
        width={3722}
        height={2115}
        preload
        sizes="(max-width: 768px) 100vw, 600px"
        className="rounded-md object-cover"
      />

      <Prose>
        <MDXContent code={uses.mdx} components={mdxComponents} />
      </Prose>
    </Stack>
  );
}
