import { allProjects } from "content-collections";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import ProjectCard from "./project-card";
import SplitSection from "./shared/layout/split-section";
import SectionMarker from "./shared/section-marker";

type ProjectSectionProps = {
  limit?: number;
};

export default function ProjectSection({ limit }: ProjectSectionProps) {
  const projects = allProjects
    .sort((a, b) => a.order - b.order)
    .slice(0, limit);

  if (projects.length === 0) return null;

  return (
    <SplitSection className="gap-7.5 md:gap-10">
      <div className="md:-mt-1 md:min-w-50">
        <SectionMarker>Work</SectionMarker>
      </div>

      <div className="border-border w-full border-t">
        {projects.map((project, index) => (
          <ProjectCard
            key={project._meta.fileName}
            project={project}
            index={index}
          />
        ))}

        <div className="flex justify-end pt-5 md:pt-6">
          <Link
            href="https://github.com/markslorach"
            target="_blank"
            rel="noreferrer"
            className="text-primary group inline-flex items-center gap-1.25 font-mono text-[11px] leading-3 font-medium tracking-[0.08em] uppercase focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            More projects on GitHub
            <ArrowUpRightIcon className="size-2.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </SplitSection>
  );
}
