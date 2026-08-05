import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { allProjects } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { mdxComponents } from "@/mdx-components";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project._meta.path }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = allProjects.find((project) => project._meta.path === slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = allProjects.find((project) => project._meta.path === slug);

  if (!project) {
    return (
      <>
        <BackToProjects />
        <p className="text-muted-foreground my-10">No project found.</p>
      </>
    );
  }

  const hasContent = project.content.trim().length > 0;

  return (
    <>
      <BackToProjects />

      <article className="pb-12">
        <header className="my-10 space-y-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="mb-0.5 text-xl font-medium tracking-tight">
                {project.title}
              </h1>

              {project.projectType && (
                <span className="bg-muted-foreground/10 text-muted-foreground rounded-sm px-2 py-0.5 text-xs shadow-xs">
                  {project.projectType}
                </span>
              )}
            </div>

            <p className="text-muted-foreground text-[15px] text-pretty">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={project.github}
              target="_blank"
              className="text-muted-foreground hover:text-foreground group inline-flex items-center text-sm transition-colors duration-200 ease-in-out"
            >
              View repository
              <ArrowUpRight className="ml-1 size-4 text-[#0892d0] transition-transform duration-200 ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {project.tags.length > 0 && (
              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
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

        {project.heroImage && (
          <div className="bg-muted-foreground/5 dark:bg-muted-foreground/4 mb-10 rounded-md p-6">
            <Image
              src={project.heroImage}
              alt={`${project.title} preview`}
              width={1200}
              height={675}
              priority
              sizes="(max-width: 768px) 100vw, 640px"
              className="h-auto w-full rounded-sm object-contain"
            />
          </div>
        )}

        {hasContent && (
          <div className="prose-article">
            <MDXContent code={project.mdx} components={mdxComponents} />
          </div>
        )}
      </article>
    </>
  );
}

function BackToProjects() {
  return (
    <Link
      href="/projects"
      className="text-muted-foreground group hover:text-foreground flex items-center text-sm transition-colors duration-200 ease-in-out"
    >
      <ArrowLeft className="mr-1 size-4 transition-transform duration-200 ease-in-out group-hover:-translate-x-0.5 group-hover:text-blue-400" />
      Back to projects
    </Link>
  );
}
