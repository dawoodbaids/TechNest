import { Award, Code2, Headset, ShieldCheck, Users, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const reasons = [
  {
    icon: Award,
    title: "Two expert teams",
    description:
      "Specialists in NFC hardware and in AI & software — so every project is built by people who do that work every day.",
  },
  {
    icon: Code2,
    title: "Modern technology",
    description:
      "We build with the latest frameworks, tools and AI models — fast, secure and built to last.",
  },
  {
    icon: Users,
    title: "One dedicated team",
    description:
      "Designers, developers and NFC engineers work together on your project from idea to launch.",
  },
  {
    icon: Zap,
    title: "Fast delivery",
    description:
      "Clear milestones and honest timelines. Most projects ship in weeks, not months.",
  },
  {
    icon: ShieldCheck,
    title: "Quality you can trust",
    description:
      "Every NFC product is tap-tested, every line of code is reviewed — we ship work we're proud of.",
  },
  {
    icon: Headset,
    title: "Real support",
    description:
      "We stay available after launch — on WhatsApp, phone and email — whenever you need us.",
  },
];

export function WhyUs() {
  return (
    <Section className="bg-surface/40">
      <Container>
        <SectionHeading
          eyebrow="Why TechNest"
          title="A partner you can actually talk to"
          description="No ticket systems, no runaround. You reach us directly and get straight answers."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Reveal key={reason.title} delay={(index % 3) * 0.1}>
                <div className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-white p-7">
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
