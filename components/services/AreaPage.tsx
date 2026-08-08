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
import { getServerDictionary } from "@/lib/i18n/server";

interface AreaPageProps {
  areaSlug: string;
}

export async function AreaPage({ areaSlug }: AreaPageProps) {
  const area = getSolutionArea(areaSlug);
  if (!area) return null;
  const dict = await getServerDictionary();
  const areaContent = dict.areas[areaSlug];

  const related = getAllServices()
    .filter((service) => service.areaSlug !== areaSlug)
    .slice(0, 3);
  const Icon = area.icon;

  return (
    <>
      <PageHeader
        eyebrow={areaContent.shortName}
        title={areaContent.name}
        titleHighlight={dict.areaPage.heroTitleHighlight}
        description={areaContent.description}
      />

      <div className="pb-16 sm:pb-20">
        <Container>
          <Reveal direction="zoom" className="relative mx-auto w-full max-w-6xl">
            <div className="absolute -inset-8 -z-10 rounded-full bg-gradient-to-br from-primary/20 to-[#b565d8]/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-2xl shadow-primary/10">
              <Image
                src={area.image}
                alt={areaContent.name}
                width={1920}
                height={720}
                className="h-64 w-full object-cover sm:h-80 lg:h-[420px]"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141014]/75 via-[#141014]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-10">
                <div className="flex items-center gap-4">
                  <span className="grid size-14 place-items-center rounded-2xl border border-white/20 bg-surface/10 text-white shadow-lg backdrop-blur-md">
                    <Icon className="size-7" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-white/70 uppercase">
                      {dict.areaPage.heroEyebrowPrefix}
                    </p>
                    <p className="font-display text-2xl font-semibold text-white sm:text-3xl">
                      {areaContent.tagline}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button href="/contact" variant="gradient">
                    {dict.areaPage.heroCta}
                    <ArrowRight className="size-4" />
                  </Button>
                  <Button
                    href={`/${areaSlug}/${area.services[0]?.slug}`}
                    variant="ghost"
                    className="border border-white/20 bg-surface/10 text-white backdrop-blur hover:text-white"
                  >
                    {dict.areaPage.heroSecondary}
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
              eyebrow={dict.areaPage.useCasesEyebrow}
              title={dict.areaPage.useCasesTitle}
              description={dict.areaPage.useCasesDescription}
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {dict.useCases.map((useCase, index) => {
                const CaseIcon = nfcUseCases[index].icon;
                return (
                  <Reveal key={useCase.label} delay={(index % 3) * 0.08}>
                    <div className="group flex h-full items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                      <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary/10 to-[#b565d8]/10 text-primary transition-all duration-300 group-hover:from-primary group-hover:to-[#8e3fb5] group-hover:text-white">
                        <CaseIcon className="size-6" />
                      </span>
                      <div className="flex flex-1 items-center justify-between gap-2">
                        <div>
                          <p className="font-display text-base font-semibold text-foreground">
                            {useCase.label}
                          </p>
                          <p className="text-xs text-muted">{useCase.sub}</p>
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
              eyebrow={`${area.services.length} ${dict.areaPage.offerEyebrow}`}
              title={dict.areaPage.offerTitle}
              description={dict.areaPage.offerDescription}
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
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-dashed border-border bg-surface p-8 text-center sm:flex-row sm:text-left">
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white">
                <Icon className="size-6" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {dict.areaPage.helpTitle}
                </h3>
                <p className="text-sm text-muted">{dict.areaPage.helpText}</p>
              </div>
            </div>
            <div className="flex shrink-0 flex-wrap justify-center gap-3">
              <Button href="/contact">{dict.areaPage.helpCta}</Button>
              <Button href="/portfolio" variant="secondary">
                {dict.areaPage.helpSecondary}
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {related.length > 0 ? (
        <Section>
          <Container>
            <SectionHeading
              eyebrow={dict.areaPage.relatedEyebrow}
              title={dict.areaPage.relatedTitle}
              description={dict.areaPage.relatedDescription}
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
                    {dict.areaPage.seeAll}
                  </span>
                  <span className="text-sm text-muted">{dict.areaPage.seeAllText}</span>
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
