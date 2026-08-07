import Image from "next/image";
import { CheckCircle2, Nfc, Rocket } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { FloatingOrbs } from "@/components/ui/FloatingOrbs";
import { media } from "@/lib/media";

const highlights = [
  "Design, build, encode and ship in one team",
  "Direct contact with the people doing the work",
  "Modern NFC and AI technology from day one",
  "Honest timelines, clear pricing, real support",
];

export function About() {
  return (
    <Section className="relative bg-surface/40">
      <FloatingOrbs className="opacity-60" />
      <Container className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal direction="left" className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-xl shadow-primary/5">
            <Image
              src={media.hero.about}
              alt="The TechNest team at work"
              width={960}
              height={640}
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
          </div>
          <div className="absolute -right-4 -bottom-6 hidden rounded-2xl border border-border bg-white p-5 shadow-xl sm:block">
            <p className="font-display text-sm font-bold text-gradient">
              Newly launched
            </p>
            <p className="text-sm text-muted">with big ambitions</p>
          </div>
          <div className="absolute -top-5 -left-5 hidden animate-float items-center gap-2 rounded-2xl border border-border bg-white px-4 py-3 shadow-xl sm:flex">
            <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-cyan-400 text-white">
              <Nfc className="size-4" />
            </span>
            <div>
              <p className="text-xs font-semibold text-foreground">NFC + AI</p>
              <p className="text-[10px] text-muted">Modern by default</p>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold tracking-wide text-primary uppercase">
            About TechNest
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            One team for NFC products and software
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            TechNest is a technology studio that bridges the physical and digital
            worlds. We design and produce NFC smart products — business cards,
            menus, review cards and custom items — and we build the software
            that powers modern business: AI chatbots, websites, apps, custom
            systems and automation.
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm font-medium text-foreground">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex items-center gap-3 rounded-2xl border border-dashed border-border bg-white/70 p-5">
            <Rocket className="size-6 shrink-0 text-secondary" />
            <p className="text-sm leading-relaxed text-muted">
              We&apos;re just getting started — and every project we ship is a
              chance to prove how good technology can feel.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
