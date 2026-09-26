import { allProjects } from "content-collections";
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
      <div className="md:min-w-50 md:-mt-1">
        <SectionMarker>Projects</SectionMarker>
      </div>

      <div className="border-border w-full border-t">
        {projects.map((project, index) => (
          <ProjectCard
            key={project._meta.fileName}
            project={project}
            index={index}
          />
        ))}
      </div>
    </SplitSection>
  );
}
