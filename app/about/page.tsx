import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CTABanner } from "@/components/home/CTABanner";
import { HeartHandshake, Lightbulb, ShieldCheck, Zap } from "lucide-react";
import { media } from "@/lib/media";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation first",
    description:
      "We stay ahead of the curve so your business benefits from the latest NFC and AI technology, not last year's trends.",
  },
  {
    icon: HeartHandshake,
    title: "Partnership over projects",
    description:
      "We think long-term. Your success is the metric we measure ourselves against.",
  },
  {
    icon: ShieldCheck,
    title: "Honest and transparent",
    description:
      "Clear pricing, honest timelines and no hidden surprises. You always know where your project stands.",
  },
  {
    icon: Zap,
    title: "Quality that ships",
    description:
      "Great ideas only matter when they ship. We balance quality and speed to deliver real results.",
  },
];

const highlights = [
  {
    title: "Modern Technology",
    description: "NFC, AI and modern software from day one.",
  },
  {
    title: "Creative Solutions",
    description: "Custom ideas shaped around your business.",
  },
  {
    title: "Customer-Focused Approach",
    description: "You talk directly to the people doing the work.",
  },
  {
    title: "Continuous Innovation",
    description: "Always improving, always learning, always shipping.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About TechNest"
        title="A technology studio built around"
        titleHighlight="one idea: your success"
        description="We're a team of NFC engineers, designers, developers and strategists who believe great technology should be accessible, practical and easy to work with."
      />

      <Section className="pt-0">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="flex flex-col gap-4">
              <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                We make technology simple, human and effective
              </h2>
              <p className="leading-relaxed text-muted">
                TechNest was founded on a simple frustration: too many businesses
                struggle with technology that is expensive, complicated and
                impersonal. We set out to change that by building a studio where
                clients talk directly to the people doing the work.
              </p>
              <p className="leading-relaxed text-muted">
                Today we design NFC smart products — business cards, menus,
                review cards and custom items — and build AI chatbots, websites,
                mobile apps, custom systems and automation. Always with the same
                promise: clear communication, honest advice and work we&apos;re
                proud to put our name on.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <Reveal key={item.title} delay={(index % 2) * 0.1}>
                <div className="flex h-full flex-col gap-2 rounded-2xl border border-border bg-white p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface/40">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-xl shadow-primary/5">
              <Image
                src={media.hero.about}
                alt="The TechNest team collaborating"
                width={1400}
                height={600}
                className="aspect-[21/9] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Our values"
            title="What we stand for"
            description="The principles behind every project we take on."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Reveal key={value.title} delay={(index % 4) * 0.1}>
                  <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-white p-6">
                    <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">
                      {value.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <CTABanner />
    </>
  );
}
