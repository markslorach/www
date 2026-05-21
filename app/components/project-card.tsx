import Link from "next/link";
import { Project } from "@/.content-collections/generated";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={project.github}
      target="_blank"
      className="group relative block"
    >
      <div className="dark:bg-muted-foreground/4 bg-muted-foreground/6 absolute -inset-1 hidden rounded-md opacity-0 transition-all duration-200 group-hover:-inset-4 group-hover:opacity-100 lg:block" />

      <div className="dark:bg-muted-foreground/4 relative rounded-md p-4 lg:bg-transparent lg:p-0 lg:dark:bg-transparent">
        <div className="mb-2 flex h-min items-center justify-between gap-1.5 lg:justify-normal">
          <div className="flex items-center gap-2">
            <h3 className="leading-none font-medium">{project.title}</h3>

            {project.projectType && (
              <span className="bg-muted-foreground/10 shadow-xs text-muted-foreground rounded-sm px-2 py-0.5 text-xs">
                {project.projectType}
              </span>
            )}
          </div>

          <ArrowUpRight className="size-4 text-blue-400 opacity-100 transition-all duration-200 ease-in-out group-hover:translate-x-0.5 lg:opacity-0 lg:group-hover:opacity-100" />
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
