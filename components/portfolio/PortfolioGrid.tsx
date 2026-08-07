"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { projectCategories, projects } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

export function PortfolioGrid() {
  const [active, setActive] = useState("all");

  const visibleProjects = useMemo(() => {
    if (active === "all") return projects;
    return projects.filter((project) => project.categorySlug === active);
  }, [active]);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {projectCategories.map((category) => (
          <button
            key={category.slug}
            type="button"
            onClick={() => setActive(category.slug)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              active === category.slug
                ? "border-primary/60 bg-primary/10 text-primary"
                : "border-border bg-surface text-muted hover:text-foreground",
            )}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
