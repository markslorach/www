"use client";
import { allProjects } from "content-collections";
import ProjectCard from "./project-card";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Projects() {
  const [index, setIndex] = useState<number | null>(null);

  const projects = allProjects.sort((a, b) => a.order - b.order);

  return (
    <section className="mb-20">
      <h2 className="text-muted-foreground/50 mb-10 text-sm leading-none font-medium uppercase">
        Projects
      </h2>

      <div className="flex flex-col gap-10">
        {projects.map((project, i) => (
          <div
            key={project._meta.fileName}
            className={cn(
              "transition-opacity duration-200 ease-in-out",
              index !== null && index !== i && "opacity-70",
            )}
            onMouseEnter={() => setIndex(i)}
            onMouseLeave={() => setIndex(null)}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
