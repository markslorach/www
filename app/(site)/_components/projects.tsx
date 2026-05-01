import { allProjects } from "content-collections";
import ProjectCard from "./project-card";

export default function ProjectSection() {
  const sortedProjects = allProjects.sort((a, b) => a.order - b.order);

  return (
    <section>
      <h2 className="text-[19px] font-serif font-medium mb-10">Projects</h2>

      <div className="grid grid-cols-2 gap-6">
        {sortedProjects.map((project) => (
          <ProjectCard key={project._meta.path} project={project} />
        ))}
      </div>
    </section>
  );
}
