import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { CTABanner } from "@/components/home/CTABanner";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Concept work and live demos built by TechNest across NFC products, AI chatbots, websites, mobile apps, custom software and automation.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Concepts & demos"
        title="A look at what we build"
        titleHighlight="in action"
        description="Concept projects and live demos we've built — filter by service to explore what we do best."
      />
      <section className="pb-16 sm:pb-24">
        <Container>
          <PortfolioGrid />
        </Container>
      </section>
      <CTABanner />
    </>
  );
}
