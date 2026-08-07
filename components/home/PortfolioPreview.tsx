import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { featuredProjects } from "@/lib/portfolio";

export function PortfolioPreview() {
  const projects = featuredProjects();

  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Concepts & demos"
          title="A look at what we build"
          description="Concept work and live demos of NFC products, AI assistants, apps and websites."
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
            View all projects
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
