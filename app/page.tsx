import { CTABanner } from "@/components/home/CTABanner";
import { Hero } from "@/components/home/Hero";
import { Solutions } from "@/components/home/Solutions";
import { WhyUs } from "@/components/home/WhyUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Solutions />
      <WhyUs />
      <CTABanner />
    </>
  );
}
