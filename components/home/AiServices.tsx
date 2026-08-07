import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Bot } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { whatsappLink } from "@/lib/contact";
import { getAllServices } from "@/lib/services";
import { media } from "@/lib/media";

const services = getAllServices().filter((service) =>
  ["ai-solutions", "software"].includes(service.areaSlug),
);

export function AiServices() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="AI & Software Services"
          title="Software that automates and scales"
          description="Custom AI assistants, websites, apps, systems and automation built with modern, maintainable technology."
        />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="grid gap-5 sm:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.slug} delay={(index % 2) * 0.1}>
                  <Link
                    href={`/${service.areaSlug}/${service.slug}`}
                    className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-border bg-surface p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10"
                  >
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-[#b565d8] opacity-0 transition-opacity group-hover:opacity-100" />
                    <span className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-[#8e3fb5] group-hover:text-white">
                      <Icon className="size-6" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {service.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {service.tagline}
                      </p>
                    </div>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-primary">
                      Learn more
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="absolute -inset-6 -z-10 rounded-full bg-gradient-to-br from-primary/20 to-[#b565d8]/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-2xl shadow-primary/15">
              <Image
                src={media.ai.chatbot}
                alt="AI chatbot built by TechNest"
                width={1024}
                height={1024}
                className="aspect-square w-full object-cover"
                sizes="(min-width: 1024px) 640px, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141014]/50 via-transparent to-transparent" />
              <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-surface/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur">
                <Bot className="size-4" />
                AI Chatbot
              </span>
            </div>
            <div className="absolute -bottom-8 -left-4 hidden w-64 sm:block lg:-left-8">
              <Image
                src={media.products.dashboard}
                alt="Analytics dashboard"
                width={512}
                height={512}
                className="w-full rounded-2xl border border-border bg-surface shadow-2xl shadow-primary/20 [transform:rotate(-2deg)]"
              />
            </div>
            <div className="absolute -top-6 -right-2 hidden rounded-2xl border border-border bg-surface px-5 py-3 shadow-2xl shadow-primary/20 backdrop-blur sm:block lg:-right-6">
              <p className="text-xs text-muted">AI Assistant</p>
              <p className="text-sm font-semibold text-foreground">
                24/7 automated support
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16 text-center">
          <div className="flex flex-col items-center justify-center gap-3 rounded-3xl border border-dashed border-border bg-surface/60 p-8 sm:flex-row sm:gap-6">
            <Bot className="size-6 text-secondary" />
            <p className="text-sm text-muted sm:text-base">
              Not sure which solution fits? Tell us about your project and we&apos;ll
              recommend the right approach.
            </p>
            <Button href={whatsappLink()} external variant="secondary">
              Get a free consultation
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
