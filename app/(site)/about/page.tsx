import PageHeader from "@/app/components/shared/page-header";
import Stack from "@/app/components/shared/layout/stack";
import { blockPage } from "@/lib/block-page";

export default function AboutPage() {
  blockPage();

  return (
    <Stack>
      <PageHeader title="About">Coming soon... </PageHeader>
    </Stack>
  );
}
