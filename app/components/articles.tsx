"use client"
import { cn } from "@/lib/utils";
import { allWritings } from "content-collections";
import { useState } from "react";
import ArticleCard from "./article-card";

export default function Articles() {
  const [index, setIndex] = useState<number | null>(null);

  const articles = allWritings
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  if (articles.length === 0) return null;

  return (
    <section className="mb-20">
      <h2 className="text-muted-foreground/50 mb-10 text-sm leading-none font-medium uppercase">
        Writing
      </h2>

      <div className="flex flex-col gap-5 lg:gap-6">
        {articles.map((article, i) => (
          <div
            key={article._meta.fileName}
            className={cn(
              "transition-opacity duration-200 ease-in-out",
              index !== null && index !== i && "lg:opacity-70",
            )}
            onMouseEnter={() => setIndex(i)}
            onMouseLeave={() => setIndex(null)}
          >
            <ArticleCard article={article} />
          </div>
        ))}
      </div>
    </section>
  );
}
