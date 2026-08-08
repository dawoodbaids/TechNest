"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { projects } from "@/lib/portfolio";
import { useDictionary } from "@/lib/i18n/provider";
import { cn } from "@/lib/utils";

export function PortfolioGrid() {
  const dict = useDictionary();
  const [active, setActive] = useState("all");

  const localizedProjects = useMemo(
    () =>
      projects.map((project) => {
        const content = dict.projects[project.slug];
        return {
          ...project,
          title: content.title,
          summary: content.summary,
          tags: content.tags,
          category: dict.projectCategories[project.categorySlug] ?? content.category,
        };
      }),
    [dict],
  );

  const visibleProjects = useMemo(() => {
    if (active === "all") return localizedProjects;
    return localizedProjects.filter((project) => project.categorySlug === active);
  }, [active, localizedProjects]);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {Object.keys(dict.projectCategories).map((slug) => (
          <button
            key={slug}
            type="button"
            onClick={() => setActive(slug)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              active === slug
                ? "border-primary/60 bg-primary/10 text-primary"
                : "border-border bg-surface text-muted hover:text-foreground",
            )}
          >
            {dict.projectCategories[slug]}
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
