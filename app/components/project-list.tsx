import { allProjects } from "content-collections";
import ProjectCard from "./project-card";

export default function ProjectList({ limit }: { limit?: number }) {
  const projects = allProjects.sort((a, b) => a.order - b.order).slice(0, limit);

  if (projects.length === 0) return null;

  return (
    <div className="group/list flex flex-col gap-5 lg:gap-10">
      {projects.map((project) => (
        <div
          key={project._meta.fileName}
          className="transition-opacity duration-200 ease-in-out lg:group-hover/list:opacity-70 lg:hover:opacity-100!"
        >
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}
