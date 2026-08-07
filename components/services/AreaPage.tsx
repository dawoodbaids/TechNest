import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ServiceCard } from "@/components/services/ServiceCard";
import { AreaVisual } from "@/components/services/AreaVisual";
import { CTABanner } from "@/components/home/CTABanner";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { getAllServices, getSolutionArea, nfcUseCases } from "@/lib/services";

interface AreaPageProps {
  areaSlug: string;
}

export function AreaPage({ areaSlug }: AreaPageProps) {
  const area = getSolutionArea(areaSlug);
  if (!area) return null;

  const related = getAllServices()
    .filter((service) => service.areaSlug !== areaSlug)
    .slice(0, 3);
  const Icon = area.icon;

  return (
    <>
      <PageHeader
        eyebrow={area.shortName}
        title={area.name}
        titleHighlight="done right"
        description={area.description}
      />

      <div className="pb-16 sm:pb-20">
        <Container>
          <Reveal direction="zoom" className="relative mx-auto w-full max-w-6xl">
            <div className="absolute -inset-8 -z-10 rounded-full bg-gradient-to-br from-primary/20 to-cyan-400/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-2xl shadow-primary/10">
              <Image
                src={area.image}
                alt={area.name}
                width={1920}
                height={720}
                className="h-64 w-full object-cover sm:h-80 lg:h-[420px]"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17]/75 via-[#0b0f17]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-10">
                <div className="flex items-center gap-4">
                  <span className="grid size-14 place-items-center rounded-2xl border border-white/20 bg-white/10 text-white shadow-lg backdrop-blur-md">
                    <Icon className="size-7" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-white/70 uppercase">
                      TechNest
                    </p>
                    <p className="font-display text-2xl font-semibold text-white sm:text-3xl">
                      {area.tagline}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button href="/contact" variant="gradient">
                    Start a project
                    <ArrowRight className="size-4" />
                  </Button>
                  <Button
                    href={`/${areaSlug}/${area.services[0]?.slug}`}
                    variant="ghost"
                    className="border border-white/20 bg-white/10 text-white backdrop-blur hover:text-white"
                  >
                    Browse services
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </div>

      <div className="pb-16 sm:pb-20">
        <Container>
          <AreaVisual areaSlug={areaSlug} />
        </Container>
      </div>

      {areaSlug === "nfc-solutions" ? (
        <Section className="bg-surface/40">
          <Container>
            <SectionHeading
              eyebrow="Built for every industry"
              title="NFC use cases"
              description="NFC technology adapts to any business — pick your industry to see how a tap changes the experience."
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {nfcUseCases.map((useCase, index) => {
                const CaseIcon = useCase.icon;
                return (
                  <Reveal key={useCase.label} delay={(index % 3) * 0.08}>
                    <div className="group flex h-full items-center gap-4 rounded-2xl border border-border bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                      <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary/10 to-cyan-400/10 text-primary transition-all duration-300 group-hover:from-primary group-hover:to-cyan-500 group-hover:text-white">
                        <CaseIcon className="size-6" />
                      </span>
                      <div className="flex flex-1 items-center justify-between gap-2">
                        <div>
                          <p className="font-display text-base font-semibold text-foreground">
                            {useCase.label}
                          </p>
                          <p className="text-xs text-muted">
                            Tap-to-connect experiences
                          </p>
                        </div>
                        <ArrowUpRight className="size-4 shrink-0 text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </Section>
      ) : null}

      <Section>
        <Container>
          <div>
            <SectionHeading
              eyebrow={`${area.services.length} solutions`}
              title="What we offer"
              description="Every solution is custom-built around your business — scoped, built and shipped by one dedicated team."
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {area.services.map((service, index) => (
                <Reveal key={service.slug} delay={(index % 3) * 0.1}>
                  <ServiceCard service={service} areaSlug={areaSlug} />
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface/40">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-dashed border-border bg-white p-8 text-center sm:flex-row sm:text-left">
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white">
                <Icon className="size-6" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Not sure which service fits?
                </h3>
                <p className="text-sm text-muted">
                  Tell us what you need and we&apos;ll recommend the right approach.
                </p>
              </div>
            </div>
            <div className="flex shrink-0 flex-wrap justify-center gap-3">
              <Button href="/contact">Get in touch</Button>
              <Button href="/portfolio" variant="secondary">
                See our work
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {related.length > 0 ? (
        <Section>
          <Container>
            <SectionHeading
              eyebrow="Explore more"
              title="Other solutions"
              description="We build across NFC, AI and software — take a look at the rest."
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((service, index) => (
                <Reveal key={service.slug} delay={(index % 3) * 0.1}>
                  <ServiceCard service={service} areaSlug={service.areaSlug} />
                </Reveal>
              ))}
              <Reveal delay={0.2}>
                <a
                  href="/portfolio"
                  className="group flex h-full min-h-48 flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border bg-surface/60 p-8 text-center transition-colors hover:border-primary/50"
                >
                  <span className="font-display text-lg font-semibold text-foreground">
                    See all projects
                  </span>
                  <span className="text-sm text-muted">
                    Concepts and demos we&apos;ve shipped.
                  </span>
                  <ArrowRight className="size-5 text-primary transition-transform group-hover:translate-x-1" />
                </a>
              </Reveal>
            </div>
          </Container>
        </Section>
      ) : null}

      <CTABanner />
    </>
  );
}
