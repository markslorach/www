// import ArticleList from "@/app/components/article-list";

import PageHeader from "@/app/components/shared/page-header";
import Stack from "@/app/components/shared/layout/stack";
import { blockPage } from "@/lib/block-page";

export default function NotesPage() {
  blockPage();

  return (
    <Stack>
      <PageHeader title="Notes">Coming soon... </PageHeader>
    </Stack>
  );
}
