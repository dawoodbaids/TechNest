import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { CTABanner } from "@/components/home/CTABanner";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { getServerDictionary } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getServerDictionary();
  return {
    title: dict.serviceMeta.portfolioTitle,
    description: dict.serviceMeta.portfolioDescription,
  };
}

export default async function PortfolioPage() {
  const dict = await getServerDictionary();
  const { portfolioPage } = dict;

  return (
    <>
      <PageHeader
        eyebrow={portfolioPage.eyebrow}
        title={portfolioPage.title}
        titleHighlight={portfolioPage.titleHighlight}
        description={portfolioPage.description}
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
