import { allWritings } from "content-collections";
import ArticleCard from "./article-card";

export default function ArticleList({ limit }: { limit?: number }) {
  const articles = allWritings
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);

  if (articles.length === 0) return null;

  return (
    <div className="group/list flex flex-col gap-5 lg:gap-6">
      {articles.map((article) => (
        <div
          key={article._meta.fileName}
          className="transition-opacity duration-200 ease-in-out lg:group-hover/list:opacity-70 lg:hover:opacity-100!"
        >
          <ArticleCard article={article} />
        </div>
      ))}
    </div>
  );
}
