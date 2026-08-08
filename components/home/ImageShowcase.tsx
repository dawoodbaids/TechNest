import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const images = [
  {
    src: "/media/nfc/nfc-business-card.jpg",
    alt: "NFC smart business card",
  },
  {
    src: "/media/websites/website-build.jpg",
    alt: "Website development",
  },
  {
    src: "/media/apps/app-customer.jpg",
    alt: "Mobile application development",
  },
  {
    src: "/media/ai/ai-assistant.jpg",
    alt: "AI assistant solutions",
  },
];

export function ImageShowcase() {
  return (
    <Section className="bg-surface/40">
      <Container>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {images.map((image, index) => (
            <Reveal key={image.src} delay={(index % 4) * 0.1}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-surface">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 22vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
