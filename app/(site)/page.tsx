import HeroSection from "../components/hero-section";
import ProjectList from "../components/project-list";
import ArticleList from "../components/article-list";
import SectionHeading from "../components/shared/section-heading";

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="mb-20">
        <SectionHeading>Projects</SectionHeading>
        <ProjectList />
      </section>

      <section className="mb-20">
        <SectionHeading>Writing</SectionHeading>
        <ArticleList limit={5} />
      </section>
    </>
  );
}
