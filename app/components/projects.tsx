import { allProjects } from "content-collections";
import ProjectCard from "./project-card";

export default function Projects() {
  const projects = allProjects.sort((a, b) => a.order - b.order);

  return (
    <section>
      <h2 className="text-muted-foreground/70 mb-12 text-sm leading-none uppercase">
        Projects
      </h2>
      <div className="flex flex-col gap-10">
        {projects.map((project) => (
          <ProjectCard key={project._meta.fileName} project={project} />
        ))}
      </div>
    </section>
  );
}
