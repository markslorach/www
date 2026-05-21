import { allProjects } from "content-collections";
import ProjectCard from "./project-card";
import HoverFadeList from "./shared/hover-fade-list";

export default function ProjectList({ limit }: { limit?: number }) {
  const projects = allProjects
    .sort((a, b) => a.order - b.order)
    .slice(0, limit);

  if (projects.length === 0) return null;

  return (
    <HoverFadeList className="flex flex-col gap-5 lg:gap-10">
      {projects.map((project) => (
        <ProjectCard key={project._meta.fileName} project={project} />
      ))}
    </HoverFadeList>
  );
}
