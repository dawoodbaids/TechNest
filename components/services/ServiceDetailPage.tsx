import Image from "next/image";
import { Check, Layers, Package, Sparkles } from "lucide-react";
import { ServiceCard } from "@/components/services/ServiceCard";
import { CTABanner } from "@/components/home/CTABanner";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { whatsappLink } from "@/lib/contact";
import { getAllServices, getService } from "@/lib/services";
import { getServerDictionary } from "@/lib/i18n/server";

interface ServiceDetailPageProps {
  areaSlug: string;
  slug: string;
}

export async function ServiceDetailPage({ areaSlug, slug }: ServiceDetailPageProps) {
  const service = getService(areaSlug, slug);
  if (!service) return null;
  const dict = await getServerDictionary();
  const content = dict.services[slug];
  const areaContent = dict.areas[areaSlug];

  const related = getAllServices()
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);
  const Icon = service.icon;

  return (
    <>
      <PageHeader
        eyebrow={areaContent.shortName}
        title={content.name}
        titleHighlight={dict.serviceDetail.heroEyebrowSuffix}
        description={content.description}
      />

      <div className="pb-16 sm:pb-20">
        <Container>
          <Reveal direction="zoom" className="relative mx-auto w-full max-w-5xl">
            <div className="absolute -inset-8 -z-10 rounded-full bg-gradient-to-br from-primary/20 to-[#b565d8]/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-2xl shadow-primary/10">
              <Image
                src={service.image}
                alt={content.name}
                width={1600}
                height={900}
                priority
                className="h-72 w-full object-cover sm:h-96 lg:h-[480px]"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141014]/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 flex items-center gap-4 p-6 sm:p-8">
                <span className="grid size-14 place-items-center rounded-2xl border border-white/20 bg-surface/10 text-white shadow-lg backdrop-blur-md">
                  <Icon className="size-7" />
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-wide text-white/70 uppercase">
                    {areaContent.shortName}
                  </p>
                  <p className="font-display text-2xl font-semibold text-white sm:text-3xl">
                    {content.name}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </div>

      <Section className="pt-0">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div className="flex flex-col gap-8">
              <Reveal>
                <div className="flex flex-col gap-4 rounded-3xl border border-border bg-surface p-8">
                  <div className="flex items-center gap-4">
                    <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white">
                      <Icon className="size-6" />
                    </span>
                    <h2 className="font-display text-2xl font-semibold text-foreground">
                      {dict.serviceDetail.featuresTitle}
                    </h2>
                  </div>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {content.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary/10">
                          <Check className="size-3 text-primary" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="flex flex-col gap-5 rounded-3xl border border-border bg-surface p-8">
                  <div className="flex items-center gap-4">
                    <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-primary/15 to-secondary/15 text-primary">
                      <Layers className="size-6" />
                    </span>
                    <h2 className="font-display text-2xl font-semibold text-foreground">
                      {dict.serviceDetail.howWeWorkTitle}
                    </h2>
                  </div>
                  <ol className="flex flex-col gap-4">
                    {service.process.map((step, index) => {
                      const processStep = content.process[index];
                      return (
                        <li key={step.step} className="flex gap-4">
                          <span className="font-mono text-sm font-semibold text-secondary">
                            {processStep.step}
                          </span>
                          <div>
                            <p className="font-display text-sm font-semibold text-foreground">
                              {processStep.title}
                            </p>
                            <p className="mt-1 text-sm leading-relaxed text-muted">
                              {processStep.description}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="flex flex-col gap-4 rounded-3xl border border-border bg-surface p-8">
                  <div className="flex items-center gap-4">
                    <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-primary/15 to-secondary/15 text-primary">
                      <Package className="size-6" />
                    </span>
                    <h2 className="font-display text-2xl font-semibold text-foreground">
                      {dict.serviceDetail.whatYouGetTitle}
                    </h2>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {content.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary/10">
                          <Check className="size-3 text-primary" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            <div className="flex flex-col gap-6">
              <Reveal delay={0.1}>
                <div className="flex flex-col gap-5 rounded-3xl border border-border bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
                  <div className="flex items-center gap-4">
                    <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white">
                      <Sparkles className="size-6" />
                    </span>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {dict.serviceDetail.techStackTitle}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {content.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="flex flex-col gap-4 rounded-3xl bg-[#141014] p-8 text-white">
                  <h3 className="font-display text-xl font-semibold">
                    {dict.serviceDetail.ctaTitle}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    {dict.serviceDetail.ctaText}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      href={whatsappLink(
                        `${dict.serviceDetail.whatsappPrefill}${content.name}.`,
                      )}
                      external
                      variant="gradient"
                    >
                      {dict.serviceDetail.ctaButton}
                    </Button>
                    <Button href="/contact" variant="ghost" className="text-white/80 hover:text-white">
                      {dict.serviceDetail.ctaContact}
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {related.length > 0 ? (
        <Section className="bg-surface/40">
          <Container>
            <SectionHeading
              eyebrow={dict.serviceDetail.relatedEyebrow}
              title={dict.serviceDetail.relatedTitle}
              description={dict.serviceDetail.relatedDescription}
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, index) => (
                <Reveal key={item.slug} delay={(index % 3) * 0.1}>
                  <ServiceCard service={item} areaSlug={item.areaSlug} />
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <CTABanner />
    </>
  );
}
