import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PhoneMockup, PhoneScreen } from "@/components/visuals/PhoneMockup";
import { getSolutionArea } from "@/lib/services";
import { getServerDictionary } from "@/lib/i18n/server";
import { media } from "@/lib/media";

const area = getSolutionArea("nfc-solutions")!;

export async function NfcShowcase() {
  const dict = await getServerDictionary();

  const images = [
    { src: media.nfc.businessCard, alt: dict.nfcShowcase.images[0].alt, rotate: dict.nfcShowcase.images[0].rotate },
    { src: media.nfc.menu, alt: dict.nfcShowcase.images[1].alt, rotate: dict.nfcShowcase.images[1].rotate },
    { src: media.nfc.restaurant, alt: dict.nfcShowcase.images[2].alt, rotate: dict.nfcShowcase.images[2].rotate },
  ];

  return (
    <Section className="bg-surface/40">
      <Container>
        <SectionHeading
          eyebrow={dict.nfcShowcase.eyebrow}
          title={dict.nfcShowcase.title}
          description={dict.nfcShowcase.description}
        />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-6 -z-10 rounded-full bg-gradient-to-br from-primary/20 to-[#b565d8]/10 blur-3xl" />
            <div className="flex flex-col gap-6">
              {images.map((image) => (
                <div
                  key={image.src}
                  style={{ transform: `rotate(${image.rotate}deg)` }}
                  className="group relative overflow-hidden rounded-2xl border border-border shadow-2xl shadow-primary/15 transition-transform duration-500 hover:rotate-0"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1024}
                    height={1024}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 1024px) 512px, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141014]/40 via-transparent to-transparent" />
                  <p className="absolute bottom-3 left-4 rounded-full border border-white/20 bg-surface/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    {image.alt}
                  </p>
                </div>
              ))}
            </div>

           
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {area.services.map((service, index) => {
              const Icon = service.icon;
              const serviceText = dict.services[service.slug];
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
                        <ArrowUpRight className="size-3.5" />
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {serviceText.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">
                      {serviceText.tagline}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-1 text-sm font-semibold text-primary">
                      {dict.nfcShowcase.learnMore}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
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
