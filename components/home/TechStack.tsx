import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { techStack } from "@/lib/techStack";

const groups = [
  { title: "Frontend & Design", key: "frontend" as const },
  { title: "Backend & Data", key: "backend" as const },
  { title: "AI & Automation", key: "ai" as const },
  { title: "Infrastructure & Cloud", key: "infra" as const },
];

export function TechStack() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Technology Stack"
          title="Built on modern, proven technology"
          description="The tools and platforms we use to ship reliable products — from NFC hardware to production-grade software."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group, index) => (
            <Reveal key={group.title} delay={(index % 4) * 0.1}>
              <div className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-white p-6">
                <h3 className="font-display text-sm font-semibold tracking-wide text-foreground uppercase">
                  {group.title}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {techStack[group.key].map((item) => (
                    <li key={item.name} className="flex items-center gap-2 text-sm text-muted">
                      <span className="size-1.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
