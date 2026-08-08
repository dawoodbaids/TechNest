import { About } from "@/components/home/About";
import { CTABanner } from "@/components/home/CTABanner";
import { Hero } from "@/components/home/Hero";
import { ImageShowcase } from "@/components/home/ImageShowcase";
import { Solutions } from "@/components/home/Solutions";

// Temporarily removed while TechNest is in its early startup phase.
// Re-add the imports below and the <Component /> usages to bring a section back.
// import { AiServices } from "@/components/home/AiServices";
// import { BuildingFuture } from "@/components/home/BuildingFuture";
// import { DigitalShowcase } from "@/components/home/DigitalShowcase";
// import { NfcShowcase } from "@/components/home/NfcShowcase";
// import { PortfolioPreview } from "@/components/home/PortfolioPreview";
// import { TechStack } from "@/components/home/TechStack";
// import { WhyUs } from "@/components/home/WhyUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Solutions />
      <ImageShowcase />
      <CTABanner />
      {/* Temporarily removed homepage sections:
      <NfcShowcase />
      <AiServices />
      <DigitalShowcase />
      <WhyUs />
      <PortfolioPreview />
      <BuildingFuture />
      <TechStack />
      */}
    </>
  );
}
