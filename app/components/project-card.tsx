import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/.content-collections/generated";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={project.github} className="group relative">
      <div className="bg-muted-foreground/5 absolute inset-0 -inset-x-3.5 -inset-y-3.5 rounded-md opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

      <div className="relative">
        <div className="mb-2 flex h-min items-center gap-1.5">
          <h3 className="leading-none">{project.title}</h3>
          <ArrowUpRight className="size-4 text-blue-400 opacity-0 transition-all duration-200 ease-in-out group-hover:translate-x-0.5 group-hover:opacity-100" />
        </div>

        <p className="text-muted-foreground mb-4 text-sm">
          {project.description}
        </p>

        <div className="text-muted-foreground/70 font-mono text-xs">
          {project.tags.join(" - ")}
        </div>
      </div>
    </Link>
  );
}
