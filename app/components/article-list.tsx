import { allWritings } from "content-collections";
import ArticleCard from "./article-card";
import HoverFadeList from "./shared/hover-fade-list";

export default function ArticleList({ limit }: { limit?: number }) {
  const articles = allWritings
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);

  if (articles.length === 0) return null;

  return (
    <HoverFadeList className="flex flex-col gap-5 lg:gap-6">
      {articles.map((article) => (
        <ArticleCard key={article._meta.fileName} article={article} />
      ))}
    </HoverFadeList>
  );
}
