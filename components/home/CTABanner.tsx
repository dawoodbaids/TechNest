import Image from "next/image";
import { MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { FloatingOrbs } from "@/components/ui/FloatingOrbs";
import { whatsappLink } from "@/lib/contact";
import { media } from "@/lib/media";

export function CTABanner() {
  return (
    <Section className="pb-16 sm:pb-24">
      <Container>
        <Reveal direction="zoom">
          <div className="theme-transition relative overflow-hidden rounded-3xl bg-[#141014] text-white">
            <div className="absolute inset-0">
              <Image
                src={media.hero.circuit}
                alt=""
                fill
                className="object-cover opacity-20 transition-opacity duration-700 hover:opacity-35"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#141014] via-[#141014]/92 to-primary/25" />
              <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black,transparent)]" />
              <div className="bg-silk-dark pointer-events-none absolute inset-0 opacity-50" />
            </div>
            <FloatingOrbs variant="dark" />

            <div className="relative flex flex-col items-center gap-6 p-10 text-center sm:p-16">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-white/80 uppercase">
                <Sparkles className="size-3.5 text-[#d9a3ec]" />
                Let&apos;s start building
              </span>
              <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Have a project in mind?{" "}
                <span className="text-gradient-brand">Let&apos;s build it together.</span>
              </h2>
              <p className="max-w-xl text-base text-white/70">
                Tell us your idea on WhatsApp and get a free consultation and
                quote — no obligation, just honest advice.
              </p>
              <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
                <Button href={whatsappLink()} external variant="gradient" size="lg">
                  <MessageCircle className="size-5" />
                  Start on WhatsApp
                </Button>
                <Button
                  href="/contact"
                  size="lg"
                  className="border-white/20 bg-white/10 text-white hover:border-white/40 hover:text-white"
                >
                  Contact us
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
