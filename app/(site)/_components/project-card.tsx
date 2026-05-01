// import { AspectRatio } from "@/components/ui/aspect-ratio";
import type { Project } from "content-collections";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type TProject = {
  project: Project;
};

export default function ProjectCard({ project }: TProject) {
  return (
    <div className="rounded-sm relative overflow-clip h-62 group">
      <div className="transition-all opacity-90 group-hover:opacity-50 duration-600 delay-40 rounded-md overflow-clip group-hover:delay-0 group-hover:duration-400 ease-in-out group-hover:-translate-y-12">
        {project.images?.[0] && (
          <Image
            src={project.images[0]}
            alt={`${project.title} project image`}
            width={1280}
            height={720}
            className="rounded-sm"
          />
        )}
      </div>
      <h3 className="text-[16px] font-serif font-medium absolute bottom-4 left-0 flex items-center gap-1 translate-y-0 group-hover:-translate-y-12 transition-transform duration-600 delay-40 group-hover:delay-0 group-hover:duration-400 ease-in-out">
        {project.title}
        <span>
          <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-blue-300 group-hover:translate-x-0.5 transition-all duration-600 group-hover:duration-400 ease-in-out group-hover:delay-0" />
        </span>
      </h3>
      <p className="absolute bottom-4 left-0 font-light opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:duration-500 delay-0 group-hover:delay-150 text-[14px] text-muted-foreground">
        {project.description}
      </p>
    </div>
  );
}
