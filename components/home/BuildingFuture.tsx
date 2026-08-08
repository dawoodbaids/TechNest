import { AppWindow, Bot, Lightbulb, Nfc } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { getServerDictionary } from "@/lib/i18n/server";

const cardIcons = [Lightbulb, Nfc, Bot, AppWindow];

export async function BuildingFuture() {
  const dict = await getServerDictionary();

  return (
    <Section className="bg-surface/40">
      <Container>
        <SectionHeading
          eyebrow={dict.buildingFuture.eyebrow}
          title={dict.buildingFuture.title}
          description={dict.buildingFuture.description}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.buildingFuture.cards.map((card, index) => {
            const Icon = cardIcons[index];
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
