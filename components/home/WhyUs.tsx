import { Award, Code2, Headset, ShieldCheck, Users, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { getServerDictionary } from "@/lib/i18n/server";

const reasonIcons = [Award, Code2, Users, Zap, ShieldCheck, Headset];

export async function WhyUs() {
  const dict = await getServerDictionary();

  return (
    <Section className="bg-surface/40">
      <Container>
        <SectionHeading
          eyebrow={dict.whyUs.eyebrow}
          title={dict.whyUs.title}
          description={dict.whyUs.description}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dict.whyUs.reasons.map((reason, index) => {
            const Icon = reasonIcons[index];
            return (
              <Reveal key={reason.title} delay={(index % 3) * 0.1}>
                <div className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-surface p-7">
                  <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {reason.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {reason.description}
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
