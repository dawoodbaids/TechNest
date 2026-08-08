"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { ArrowRightIcon, MessageCircleIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroVisual } from "@/components/visuals/HeroVisual";
import { HeroWave } from "@/components/visuals/HeroWave";
import { HeroBackdrop } from "@/components/illustrations/HeroBackdrop";
import { whatsappLink } from "@/lib/contact";
import { site } from "@/lib/site";

const pillars = [
  "NFC Smart Products",
  "AI Solutions",
  "Websites & Apps",
  "Business Automation",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  return (
    <section className="theme-transition relative overflow-hidden bg-background bg-silk dark:bg-silk-dark">
      <HeroWave className="pointer-events-none absolute inset-x-0 top-0 h-56 w-full [mask-image:linear-gradient(to_bottom,black,transparent)] sm:h-72" />
      <div className="absolute inset-0">
        <HeroBackdrop className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/85 to-white dark:from-[#141014] dark:via-[#141014]/85 dark:to-[#141014]" />
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_-10%,black,transparent)]" />
      </div>

      <Container className="relative grid items-center gap-16 py-24 sm:py-32 lg:grid-cols-2 lg:gap-10 lg:py-28">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-4 py-1.5 text-sm font-medium text-primary shadow-sm backdrop-blur dark:bg-surface/80"
          >
            <Sparkles className="size-4" />
            {site.tagline}
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="max-w-2xl font-display text-4xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-6xl xl:text-7xl"
          >
            Technology solutions built for{" "}
            <span className="text-gradient">modern businesses</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            We build practical digital solutions that help businesses connect
            with their customers, improve their presence, and simplify everyday
            operations.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
          >
            <Button href="/nfc-solutions" variant="gradient" size="lg">
              Explore Solutions
              <ArrowRightIcon className="size-4" />
            </Button>
            <Button href={whatsappLink()} external variant="secondary" size="lg">
              <MessageCircleIcon className="size-4" />
              Chat on WhatsApp
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="mt-12 flex flex-wrap items-center justify-center gap-2.5 sm:justify-start"
          >
            {pillars.map((pillar) => (
              <span
                key={pillar}
                className="rounded-full border border-border bg-white/80 px-4 py-1.5 text-sm font-medium text-muted shadow-sm backdrop-blur dark:bg-surface/80"
              >
                {pillar}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          <HeroVisual />
        </motion.div>
      </Container>
    </section>
  );
}
