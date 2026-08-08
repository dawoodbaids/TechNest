import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CheckIcon } from "@/components/icons";
import { PhoneMockup, PhoneScreen } from "@/components/visuals/PhoneMockup";
import { BrowserMockup } from "@/components/visuals/BrowserMockup";

const appFeatures = [
  "Smooth, native-feeling interfaces",
  "Websites that load fast and convert",
  "Built mobile-first, responsive on every device",
];

export function DigitalShowcase() {
  return (
    <Section className="bg-surface/40">
      <Container>
        <SectionHeading
          eyebrow="Apps & Websites"
          title="Digital products built to perform"
          description="Modern mobile applications and high-performance websites — designed, developed and shipped by one team."
        />

        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative mx-auto w-full max-w-md lg:order-2">
            <div className="absolute -inset-6 -z-10 rounded-full bg-gradient-to-br from-[#b565d8]/15 to-primary/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-2xl shadow-primary/20 [transform:rotate(2deg)]">
              <PhoneMockup className="mx-auto w-full max-w-[300px] py-6">
                <PhoneScreen>
                  <div className="flex flex-1 flex-col gap-2 pt-4">
                    <div className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-primary to-[#b565d8] font-bold text-white">
                      TN
                    </div>
                    <p className="text-[10px] font-semibold text-white">TechNest App</p>
                    <p className="text-[8px] text-white/40">Your business in motion</p>
                    <div className="mt-2 flex flex-col gap-1.5">
                      <span className="rounded-full bg-gradient-to-r from-primary to-[#8e3fb5] py-1.5 text-center text-[8px] font-semibold text-white">
                        Get started
                      </span>
                      <span className="rounded-full border border-white/15 py-1.5 text-center text-[8px] text-white/60">
                        View features
                      </span>
                    </div>
                  </div>
                </PhoneScreen>
              </PhoneMockup>
              <p className="absolute bottom-4 left-5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold text-white backdrop-blur">
                Mobile App
              </p>
            </div>
            <div className="absolute -right-4 -bottom-10 hidden w-72 sm:block">
              <BrowserMockup className="w-full rounded-2xl border border-border shadow-2xl shadow-primary/20 [transform:rotate(-2deg)]" />
            </div>
            <span className="absolute -top-5 -left-2 rounded-full bg-gradient-to-r from-primary to-[#8e3fb5] px-4 py-1.5 text-xs font-semibold text-white shadow-lg">
              Fast & responsive
            </span>
          </Reveal>

          <Reveal className="lg:order-1">
            <div className="flex flex-col gap-6">
              <h3 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                Every screen designed to{" "}
                <span className="text-gradient">convert</span>
              </h3>
              <ul className="flex flex-col gap-3.5">
                {appFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm font-medium text-foreground">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary/15 to-[#b565d8]/15">
                      <CheckIcon className="size-3.5 text-primary" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-muted">
                From booking platforms to customer apps, we turn ideas into
                polished digital products your customers actually enjoy using.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
