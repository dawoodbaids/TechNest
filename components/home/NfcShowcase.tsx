import Link from "next/link";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PhoneMockup, PhoneScreen } from "@/components/visuals/PhoneMockup";
import { BusinessCardsScene } from "@/components/illustrations/nfc/BusinessCardsScene";
import { SmartMenusScene } from "@/components/illustrations/nfc/SmartMenusScene";
import { NfcCardIllustration } from "@/components/illustrations/NfcCardIllustration";
import { getSolutionArea } from "@/lib/services";

const area = getSolutionArea("nfc-solutions")!;

const scenes = [
  { Component: BusinessCardsScene, alt: "NFC business card", rotate: -3 },
  { Component: SmartMenusScene, alt: "NFC smart menu", rotate: 2.5 },
  { Component: NfcCardIllustration, alt: "NFC restaurant solution", rotate: -1 },
];

export function NfcShowcase() {
  return (
    <Section className="bg-surface/40">
      <Container>
        <SectionHeading
          eyebrow="NFC Products Showcase"
          title="Tap into the physical world"
          description="Premium, contactless NFC products that open a digital experience on any phone — no app required."
        />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-6 -z-10 rounded-full bg-gradient-to-br from-primary/20 to-[#b565d8]/10 blur-3xl" />
            <div className="flex flex-col gap-6">
              {scenes.map(({ Component, alt, rotate }) => (
                <div
                  key={alt}
                  style={{ transform: `rotate(${rotate}deg)` }}
                  className="group relative overflow-hidden rounded-2xl border border-border shadow-2xl shadow-primary/15 transition-transform duration-500 hover:rotate-0"
                >
                  <div className="aspect-[4/3] w-full transition-transform duration-700 group-hover:scale-105">
                    <Component className="h-full w-full" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141014]/40 via-transparent to-transparent" />
                  <p className="absolute bottom-3 left-4 rounded-full border border-white/20 bg-surface/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    {alt}
                  </p>
                </div>
              ))}
            </div>

            <PhoneMockup className="absolute -right-6 -bottom-14 hidden w-44 sm:block">
              <PhoneScreen>
                <div className="flex flex-1 flex-col gap-2 pt-4">
                  <div className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-primary to-[#b565d8] font-bold text-white">
                    TN
                  </div>
                  <p className="text-[10px] font-semibold text-white">TechNest</p>
                  <p className="text-[8px] text-white/40">Profile opened</p>
                  <div className="mt-2 flex flex-col gap-1.5">
                    <span className="rounded-full bg-gradient-to-r from-primary to-[#8e3fb5] py-1.5 text-center text-[8px] font-semibold text-white">
                      Save contact
                    </span>
                    <span className="rounded-full border border-white/15 py-1.5 text-center text-[8px] text-white/60">
                      Open website
                    </span>
                  </div>
                </div>
              </PhoneScreen>
            </PhoneMockup>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {area.services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.slug} delay={(index % 2) * 0.1}>
                  <Link
                    href={`/${area.slug}/${service.slug}`}
                    className="group flex h-full flex-col gap-3 rounded-3xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-primary/10 to-[#b565d8]/10 text-primary transition-colors group-hover:from-primary group-hover:to-[#8e3fb5] group-hover:text-white">
                        <Icon className="size-5" />
                      </span>
                      <span className="grid size-7 place-items-center rounded-full border border-border text-muted transition-all group-hover:border-primary/40 group-hover:text-primary">
                        <ArrowUpRightIcon className="size-3.5" />
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {service.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">
                      {service.tagline}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-1 text-sm font-semibold text-primary">
                      Learn more
                      <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
