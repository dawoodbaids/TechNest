import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { solutionAreas } from "@/lib/services";
import { getServerDictionary } from "@/lib/i18n/server";

export async function Solutions() {
  const dict = await getServerDictionary();

  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow={dict.solutions.eyebrow}
          title={dict.solutions.title}
          description={dict.solutions.description}
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {solutionAreas.map((area, index) => {
            const Icon = area.icon;
            const areaText = dict.areas[area.slug];
            return (
              <Reveal key={area.slug} delay={index * 0.1}>
                <Link
                  href={`/${area.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface p-8 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 sm:p-10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] to-secondary/[0.04] opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative flex flex-col gap-5">
                    <div className="flex items-center justify-between">
                      <span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg shadow-primary/25">
                        <Icon className="size-7" />
                      </span>
                      <span className="font-mono text-sm text-muted">
                        0{index + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-foreground">
                        {areaText.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {areaText.tagline}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {area.services.slice(0, 3).map((service) => (
                        <span
                          key={service.slug}
                          className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted"
                        >
                          {dict.services[service.slug].name}
                        </span>
                      ))}
                      <span className="rounded-full border border-dashed border-border px-3 py-1 text-xs font-medium text-muted">
                        +{area.services.length - 3} {dict.solutions.more}
                      </span>
                    </div>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-primary">
                      {dict.solutions.explore} {areaText.shortName.toLowerCase()}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
