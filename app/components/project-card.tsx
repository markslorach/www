import Link from "next/link";
import { Project } from "@/.content-collections/generated";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/24/solid";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const isCaseStudy = project.caseStudy;

  const href = isCaseStudy
    ? `/projects/${project._meta.path}`
    : project.liveUrl || project.github;

  const actionLabel = isCaseStudy
    ? "Case study"
    : project.liveUrl
      ? "Visit site"
      : "GitHub";

  const ProjectArrow = isCaseStudy ? ArrowRightIcon : ArrowUpRightIcon;

  if (!href) return null;

  return (
    <Link
      href={href}
      target={isCaseStudy ? undefined : "_blank"}
      rel={isCaseStudy ? undefined : "noreferrer"}
      className="group border-border flex gap-5 border-b pt-5.5 pb-6 focus-visible:outline-2 focus-visible:outline-offset-4 md:gap-7"
    >
      <span className="text-muted-foreground/70 w-7 shrink-0 pt-1.5 font-mono text-[11px] leading-4 tracking-[0.08em] md:w-13 md:pt-2 md:leading-3.5">
        {String(index + 1).padStart(3, "0")}
      </span>

      <div className="grid min-w-0 flex-1 md:grid-cols-[minmax(0,1fr)_104px] md:gap-x-6">
        <h2 className="font-heading text-[21px] leading-7 font-[450] tracking-[-0.01em] md:text-[22px]">
          {project.title}
        </h2>

        <div className="max-w-80 md:col-span-2 md:max-w-100">
          <p className="text-body mt-2.5 text-base leading-6.25 md:mt-2 md:text-[17px] md:leading-7">
            {project.description}
          </p>

          <span className="text-muted-foreground mt-2.5 block font-mono text-[11px] leading-3.5 tracking-[0.02em] md:mt-3">
            {project.tags.join(" · ")}
          </span>
        </div>

        <div className="mt-6 flex min-h-4 w-26 items-center md:col-start-2 md:row-start-1 md:mt-0 md:h-7 md:justify-end">
          <span
            className={cn({
              "text-primary flex w-fit items-center gap-1 font-mono text-[11px] leading-3 font-medium tracking-[0.08em] uppercase md:gap-1.25": true,
              "bg-primary-muted rounded-xs px-2 py-1.5": isCaseStudy,
            })}
          >
            {actionLabel}
            <ProjectArrow className="size-2 transition-transform duration-200 group-hover:translate-x-0.5 md:size-2.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
