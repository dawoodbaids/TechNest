import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { Bot, Globe, Nfc, Smartphone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const services = [
  {
    icon: Nfc,
    title: "NFC Solutions",
    description:
      "Contactless smart products — business cards, menus, review cards and tags — that open a digital experience with a single tap.",
    href: "/nfc-solutions",
  },
  {
    icon: Globe,
    title: "Websites & Web Applications",
    description:
      "Fast, modern websites and web apps that look professional and turn visitors into customers.",
    href: "/software/website-development",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "iOS and Android apps designed around your customers and built to work beautifully on every screen.",
    href: "/software/mobile-applications",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description:
      "AI assistants and automations that answer questions, qualify leads and save your team hours every week.",
    href: "/ai-solutions",
  },
];

export function Solutions() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Solutions built for modern businesses"
          description="Practical digital products and services, delivered by one dedicated team."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={(index % 4) * 0.1}>
                <Link
                  href={service.href}
                  className="group relative flex h-full flex-col gap-5 rounded-3xl border border-border bg-surface p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] to-secondary/[0.04] opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative flex flex-col gap-5">
                    <span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg shadow-primary/25">
                      <Icon className="size-7" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {service.description}
                      </p>
                    </div>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-1 text-sm font-semibold text-primary">
                      Learn more
                      <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
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
