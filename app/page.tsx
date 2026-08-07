import { About } from "@/components/home/About";
import { AiServices } from "@/components/home/AiServices";
import { BuildingFuture } from "@/components/home/BuildingFuture";
import { CTABanner } from "@/components/home/CTABanner";
import { DigitalShowcase } from "@/components/home/DigitalShowcase";
import { Hero } from "@/components/home/Hero";
import { NfcShowcase } from "@/components/home/NfcShowcase";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { Solutions } from "@/components/home/Solutions";
import { TechStack } from "@/components/home/TechStack";
import { WhyUs } from "@/components/home/WhyUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Solutions />
      <NfcShowcase />
      <AiServices />
      <DigitalShowcase />
      <WhyUs />
      <PortfolioPreview />
      <BuildingFuture />
      <TechStack />
      <CTABanner />
    </>
  );
}
