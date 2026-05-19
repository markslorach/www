import { notFound } from "next/navigation";
import { allWritings } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { mdxComponents } from "@/mdx-components";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;

  const article = allWritings.find((article) => article._meta.path === slug);

  if (!article) notFound();

  return (
    <article className="pb-12">
      <h1 className="mb-8 text-xl font-medium">{article.title}</h1>

      <div>
        <MDXContent code={article.mdx} components={mdxComponents} />
      </div>
    </article>
  );
}
