import { AppWindow, Bot, Lightbulb, Nfc } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const cards = [
  {
    icon: Lightbulb,
    title: "Innovative Digital Solutions",
    description:
      "Practical technology built around real business needs — not trends for their own sake.",
  },
  {
    icon: Nfc,
    title: "Smart NFC Experiences",
    description:
      "Tap-to-connect products that bridge the physical and digital worlds in a single tap.",
  },
  {
    icon: Bot,
    title: "AI-Powered Services",
    description:
      "Assistants and automation that answer, qualify and work while your team focuses on what matters.",
  },
  {
    icon: AppWindow,
    title: "Custom Software Development",
    description:
      "Websites, apps and systems designed, built and shipped around how your business actually works.",
  },
];

export function BuildingFuture() {
  return (
    <Section className="bg-surface/40">
      <Container>
        <SectionHeading
          eyebrow="Our vision"
          title="Building the future with technology"
          description="TechNest is a newly launched startup with a simple belief: every business deserves modern, honest and well-crafted technology."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={(index % 4) * 0.1}>
                <div className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-surface p-7">
                  <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {card.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
