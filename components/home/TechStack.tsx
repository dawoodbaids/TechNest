import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { techStack } from "@/lib/techStack";
import { getServerDictionary } from "@/lib/i18n/server";

const groups = [
  { key: "frontend" as const },
  { key: "backend" as const },
  { key: "ai" as const },
  { key: "infra" as const },
];

export async function TechStack() {
  const dict = await getServerDictionary();

  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow={dict.techStack.eyebrow}
          title={dict.techStack.title}
          description={dict.techStack.description}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group, index) => (
            <Reveal key={group.key} delay={(index % 4) * 0.1}>
              <div className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-surface p-6">
                <h3 className="font-display text-sm font-semibold tracking-wide text-foreground uppercase">
                  {dict.techStack.groups[index]}
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
