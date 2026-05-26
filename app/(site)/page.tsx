import HeroSection from "../components/hero-section";
import ProjectList from "../components/project-list";
import ArticleList from "../components/article-list";
import SectionHeading from "../components/shared/section-heading";
import Stack from "../components/shared/layout/stack";

export default function Home() {
  return (
    <Stack gap="xl">
      <HeroSection />

      <Stack as="section" gap="md">
        <SectionHeading>Projects</SectionHeading>
        <ProjectList limit={4} />
      </Stack>

      {/* <Stack as="section" gap="md">
        <SectionHeading>Notes</SectionHeading>
        <ArticleList limit={5} />
      </Stack> */}
    </Stack>
  );
}
