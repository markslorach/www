import { allNows } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { mdxComponents } from "@/mdx-components";
import PageHeader from "@/app/components/shared/page-header";
import Prose from "@/app/components/shared/layout/prose";
import Stack from "@/app/components/shared/layout/stack";
import { blockPage } from "@/lib/block-page";

export default function NowPage() {
  blockPage();

  const nows = allNows[0];

  return (
    <Stack>
      <PageHeader title="/now">
        A look at what is keeping me busy at the moment.
      </PageHeader>

      <Prose>
        <MDXContent code={nows.mdx} components={mdxComponents} />
      </Prose>
    </Stack>
  );
}
