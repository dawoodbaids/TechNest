import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { featuredProjects } from "@/lib/portfolio";
import { getServerDictionary } from "@/lib/i18n/server";

export async function PortfolioPreview() {
  const dict = await getServerDictionary();
  const projects = featuredProjects().map((project) => {
    const content = dict.projects[project.slug];
    return {
      ...project,
      title: content.title,
      summary: content.summary,
      tags: content.tags,
      category: dict.projectCategories[project.categorySlug] ?? content.category,
    };
  });

  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow={dict.portfolioPreview.eyebrow}
          title={dict.portfolioPreview.title}
          description={dict.portfolioPreview.description}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={(index % 3) * 0.1}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <Button href="/portfolio" variant="secondary">
            {dict.portfolioPreview.viewAll}
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
