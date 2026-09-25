import HeroSection from "../components/hero-section";
import ProjectList from "../components/project-list";
import ArticleList from "../components/article-list";
import SectionHeading from "../components/shared/section-heading";
import Stack from "../components/shared/layout/stack";
import ContactSection from "../components/contact-section";
import SproutSVG from "../components/sprout-svg";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <div className="pt-16 pb-7 md:pt-23 md:pb-15">
        <SproutSVG />
      </div>

      <Stack as="section" gap="md">
        <SectionHeading>Projects</SectionHeading>
        <ProjectList limit={3} />
      </Stack>

      {/* <Stack as="section" gap="md" className="pt-26">
        <SectionHeading>Notes</SectionHeading>
        <ArticleList limit={5} />
      </Stack> */}

      <Stack as="section" gap="md" className="pt-26">
        <SectionHeading>Contact</SectionHeading>
        <ContactSection />
      </Stack>
    </div>
  );
}
