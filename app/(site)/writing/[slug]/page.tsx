import Link from "next/link";
import { allWritings } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { mdxComponents } from "@/mdx-components";
import { format, parseISO } from "date-fns";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return allWritings
    .filter((article) => article.published)
    .map((article) => ({ slug: article._meta.path }));
}

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;

  const article = allWritings.find(
    (article) => article.published && article._meta.path === slug,
  );

  if (!article) {
    return (
      <>
        <BackToPosts />
        <p className="text-muted-foreground my-10">No post found.</p>
      </>
    );
  }

  return (
    <>
      <BackToPosts />

      <article className="pb-12">
        <header className="my-10">
          <h1 className="mb-0.5 text-xl font-medium tracking-tight">
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
    </>
  );
}

function BackToPosts() {
  return (
    <Link
      href="/writing"
      className="text-muted-foreground group hover:text-foreground flex items-center text-sm transition-colors duration-200 ease-in-out"
    >
      <ArrowLeft className="mr-1 size-4 transition-transform duration-200 ease-in-out group-hover:-translate-x-0.5 group-hover:text-blue-400" />
      Back to posts
    </Link>
  );
}
