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
  const href = isCaseStudy ? `/projects/${project._meta.path}` : project.github;
  const ProjectArrow = isCaseStudy ? ArrowRightIcon : ArrowUpRightIcon;

  return (
    <Link
      href={href}
      target={isCaseStudy ? undefined : "_blank"}
      rel={isCaseStudy ? undefined : "noreferrer"}
      className="group border-border flex gap-5 border-b pt-5.5 pb-6 focus-visible:outline-2 focus-visible:outline-offset-4 md:gap-7"
    >
      <span className="text-muted-foreground/70 w-7 shrink-0 pt-1.5 font-mono text-[10px] leading-3.5 tracking-[0.08em] md:w-13 md:pt-2 md:text-[11px]">
        {String(index + 1).padStart(3, "0")}
      </span>

      <div className="flex-1">
        <div className="flex gap-3 md:gap-6">
          <h2 className="font-heading flex-1 text-[21px] leading-7 font-[450] tracking-[-0.01em] md:text-[22px]">
            {project.title}
          </h2>

          <div className="flex h-6 w-26 shrink-0 items-center justify-end md:h-7">
            <span
              className={cn({
                "text-primary flex w-fit items-center gap-1 font-mono text-[10px] leading-2.75 font-medium tracking-[0.08em] uppercase md:gap-1.25 md:leading-3 md:tracking-widest": true,
                "bg-primary-muted rounded-xs px-2 py-1.5": isCaseStudy,
              })}
            >
              {isCaseStudy ? "Case study" : "GitHub"}
              <ProjectArrow className="size-2 transition-transform duration-200 group-hover:translate-x-0.5 md:size-2.5" />
            </span>
          </div>
        </div>

        <div className="max-w-80 md:max-w-100">
          <p className="text-body mt-2.5 text-base leading-6.25 md:mt-2 md:text-[17px] md:leading-7">
            {project.description}
          </p>

          <span className="text-muted-foreground mt-2.5 block font-mono text-[10px] leading-3.5 tracking-[0.06em] md:mt-3 md:text-[11px] md:tracking-[0.08em]">
            {project.tags.join(" · ")}
          </span>
        </div>
      </div>
    </Link>
  );
}
