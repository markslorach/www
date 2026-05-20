import Link from "next/link";
import { notFound } from "next/navigation";
import { allWritings } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { mdxComponents } from "@/mdx-components";
import { format, parseISO } from "date-fns";
import { ArrowLeft } from "lucide-react";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;

  const article = allWritings.find((article) => article._meta.path === slug);

  if (!article) notFound();

  return (
    <article className="pb-12">
      <Link
        href="/writing"
        className="text-muted-foreground flex items-center text-sm"
      >
        <ArrowLeft className="mr-1 size-4" />
        Back to posts
      </Link>

      <header className="my-10">
        <h1 className="text-xl mb-0.5 font-medium tracking-tight">
          {article.title}
        </h1>

        <div className="space-y-4.5">
          <time
            dateTime={article.date}
            className="text-muted-foreground/70 block text-sm"
          >
            {format(parseISO(article.date), "d MMM yyyy")}
          </time>

          {article.tags.length > 0 && (
            <ul className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <li key={tag}>
                  <span className="bg-muted-foreground/8 text-muted-foreground rounded-sm px-2 py-0.5 text-xs">
                    {tag}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </header>

      <div className="prose-article">
        <MDXContent code={article.mdx} components={mdxComponents} />
      </div>
    </article>
  );
}
