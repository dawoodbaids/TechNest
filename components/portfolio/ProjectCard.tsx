import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-3xl border border-border bg-white transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10",
        className,
      )}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={640}
          height={360}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <span className="absolute top-3 left-3 rounded-full border border-border bg-white/90 px-2.5 py-1 text-[11px] font-medium text-foreground backdrop-blur">
          {project.category}
        </span>
        <span className="absolute right-3 bottom-3 grid size-9 translate-y-2 place-items-center rounded-full bg-primary text-white opacity-0 shadow-lg shadow-primary/30 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="size-4" />
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-display text-lg font-semibold text-foreground">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted">{project.summary}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-2.5 py-0.5 text-[11px] text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
