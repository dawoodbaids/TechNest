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

interface ServiceDetailPageProps {
  areaSlug: string;
  slug: string;
}

export function ServiceDetailPage({ areaSlug, slug }: ServiceDetailPageProps) {
  const service = getService(areaSlug, slug);
  if (!service) return null;

  const related = getAllServices()
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);
  const Icon = service.icon;

  return (
    <>
      <PageHeader
        eyebrow={service.areaName}
        title={service.name}
        titleHighlight="explained"
        description={service.description}
      />

      <div className="pb-16 sm:pb-20">
        <Container>
          <Reveal direction="zoom" className="relative mx-auto w-full max-w-5xl">
            <div className="absolute -inset-8 -z-10 rounded-full bg-gradient-to-br from-primary/20 to-cyan-400/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-2xl shadow-primary/10">
              <Image
                src={service.image}
                alt={service.name}
                width={1600}
                height={900}
                priority
                className="h-72 w-full object-cover sm:h-96 lg:h-[480px]"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17]/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 flex items-center gap-4 p-6 sm:p-8">
                <span className="grid size-14 place-items-center rounded-2xl border border-white/20 bg-white/10 text-white shadow-lg backdrop-blur-md">
                  <Icon className="size-7" />
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-wide text-white/70 uppercase">
                    {service.areaName}
                  </p>
                  <p className="font-display text-2xl font-semibold text-white sm:text-3xl">
                    {service.name}
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
                <div className="flex flex-col gap-4 rounded-3xl border border-border bg-white p-8">
                  <div className="flex items-center gap-4">
                    <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white">
                      <Icon className="size-6" />
                    </span>
                    <h2 className="font-display text-2xl font-semibold text-foreground">
                      Features
                    </h2>
                  </div>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {service.features.map((feature) => (
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
                <div className="flex flex-col gap-5 rounded-3xl border border-border bg-white p-8">
                  <div className="flex items-center gap-4">
                    <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-primary/15 to-secondary/15 text-primary">
                      <Layers className="size-6" />
                    </span>
                    <h2 className="font-display text-2xl font-semibold text-foreground">
                      How we work
                    </h2>
                  </div>
                  <ol className="flex flex-col gap-4">
                    {service.process.map((step) => (
                      <li key={step.step} className="flex gap-4">
                        <span className="font-mono text-sm font-semibold text-secondary">
                          {step.step}
                        </span>
                        <div>
                          <p className="font-display text-sm font-semibold text-foreground">
                            {step.title}
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-muted">
                            {step.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="flex flex-col gap-4 rounded-3xl border border-border bg-white p-8">
                  <div className="flex items-center gap-4">
                    <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-primary/15 to-secondary/15 text-primary">
                      <Package className="size-6" />
                    </span>
                    <h2 className="font-display text-2xl font-semibold text-foreground">
                      What you get
                    </h2>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {service.deliverables.map((item) => (
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
                      Tech stack
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {service.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="flex flex-col gap-4 rounded-3xl bg-[#0b0f17] p-8 text-white">
                  <h3 className="font-display text-xl font-semibold">
                    Ready to get started?
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    Tell us about your project and we&apos;ll reply with a plan and a
                    clear timeline.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      href={whatsappLink(
                        `Hi TechNest! I'm interested in ${service.name}.`,
                      )}
                      external
                      variant="gradient"
                    >
                      Chat on WhatsApp
                    </Button>
                    <Button href="/contact" variant="ghost" className="text-white/80 hover:text-white">
                      Contact us
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
              eyebrow="Keep exploring"
              title="Related services"
              description="More ways we can help your business grow."
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
