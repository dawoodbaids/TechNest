import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CTABanner } from "@/components/home/CTABanner";
import { HeartHandshake, Lightbulb, ShieldCheck, Zap } from "lucide-react";
import { getServerDictionary } from "@/lib/i18n/server";
import { media } from "@/lib/media";

const valueIcons = [Lightbulb, HeartHandshake, ShieldCheck, Zap];

export async function generateMetadata() {
  const dict = await getServerDictionary();
  return {
    title: dict.serviceMeta.aboutTitle,
    description: dict.serviceMeta.aboutDescription,
  };
}

export default async function AboutPage() {
  const dict = await getServerDictionary();
  const { aboutPage } = dict;

  return (
    <>
      <PageHeader
        eyebrow={aboutPage.eyebrow}
        title={aboutPage.title}
        titleHighlight={aboutPage.titleHighlight}
        description={aboutPage.description}
      />

      <Section className="pt-0">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="flex flex-col gap-4">
              <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                {aboutPage.h2}
              </h2>
              {aboutPage.paragraphs.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {aboutPage.highlights.map((item, index) => (
              <Reveal key={item.title} delay={(index % 2) * 0.1}>
                <div className="flex h-full flex-col gap-2 rounded-2xl border border-border bg-surface p-6">
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
                alt={aboutPage.imageAlt}
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
            eyebrow={aboutPage.valuesEyebrow}
            title={aboutPage.valuesTitle}
            description={aboutPage.valuesDescription}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aboutPage.values.map((value, index) => {
              const Icon = valueIcons[index % valueIcons.length];
              return (
                <Reveal key={value.title} delay={(index % 4) * 0.1}>
                  <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-surface p-6">
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
