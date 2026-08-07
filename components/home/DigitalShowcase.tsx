import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Check } from "lucide-react";
import { media } from "@/lib/media";

const appFeatures = [
  "Smooth, native-feeling interfaces",
  "Websites that load fast and convert",
  "Built mobile-first, responsive on every device",
];

export function DigitalShowcase() {
  return (
    <Section className="bg-surface/40">
      <Container>
        <SectionHeading
          eyebrow="Apps & Websites"
          title="Digital products built to perform"
          description="Modern mobile applications and high-performance websites — designed, developed and shipped by one team."
        />

        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative mx-auto w-full max-w-md lg:order-2">
            <div className="absolute -inset-6 -z-10 rounded-full bg-gradient-to-br from-[#b565d8]/15 to-primary/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-2xl shadow-primary/20 [transform:rotate(2deg)]">
              <Image
                src={media.apps.mobileApp}
                alt="Mobile application built by TechNest"
                width={1024}
                height={1024}
                className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-105"
                sizes="(min-width: 1024px) 480px, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141014]/40 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold text-white backdrop-blur">
                Mobile App
              </p>
            </div>
            <div className="absolute -right-4 -bottom-10 hidden w-72 sm:block">
              <Image
                src={media.websites.build}
                alt="Website built by TechNest"
                width={1184}
                height={864}
                className="w-full rounded-2xl border border-border bg-surface object-cover shadow-2xl shadow-primary/20 [transform:rotate(-2deg)]"
              />
            </div>
            <span className="absolute -top-5 -left-2 rounded-full bg-gradient-to-r from-primary to-[#8e3fb5] px-4 py-1.5 text-xs font-semibold text-white shadow-lg">
              Fast & responsive
            </span>
          </Reveal>

          <Reveal className="lg:order-1">
            <div className="flex flex-col gap-6">
              <h3 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                Every screen designed to{" "}
                <span className="text-gradient">convert</span>
              </h3>
              <ul className="flex flex-col gap-3.5">
                {appFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm font-medium text-foreground">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary/15 to-[#b565d8]/15">
                      <Check className="size-3.5 text-primary" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-muted">
                From booking platforms to customer apps, we turn ideas into
                polished digital products your customers actually enjoy using.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
