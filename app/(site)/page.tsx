import Hero from "../components/hero";
import Projects from "../components/projects";
import ArticleList from "../components/article-list";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />

      <h2 className="text-muted-foreground/50 mb-10 text-sm leading-none font-medium uppercase">
        Writing
      </h2>
      <ArticleList limit={5} />
    </>
  );
}
