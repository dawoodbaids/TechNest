import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { NfcSignal } from "@/components/illustrations/NfcSignal";

function TapIcon() {
  return (
    <NfcSignal className="size-9" />
  );
}

function ConnectIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-9">
      <rect x="8" y="12" width="20" height="20" rx="6" />
      <rect x="36" y="32" width="20" height="20" rx="6" />
      <path d="M28 22 h8 a10 10 0 0 1 0 20 h0" strokeDasharray="6 6" opacity="0.7" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-9">
      <circle cx="50" cy="16" r="9" />
      <circle cx="20" cy="48" r="9" />
      <circle cx="50" cy="48" r="9" />
      <path d="M42 20 L28 44 M50 25 v14" opacity="0.7" />
    </svg>
  );
}

const steps = [
  {
    icon: TapIcon,
    title: "Tap",
    description:
      "Bring any phone close to a TechNest NFC product — a card, menu tag or badge. No app, no typing, no QR scan: the phone reads the tag in an instant and opens the linked experience.",
  },
  {
    icon: ConnectIcon,
    title: "Connect",
    description:
      "One tap opens your digital profile, menu, review page or custom experience. Call, save, follow, order or book — everything a customer needs lives in a single, beautiful page.",
  },
  {
    icon: ShareIcon,
    title: "Share & grow",
    description:
      "Update that page anytime without reprinting a thing. Every tap is tracked, so you see who engaged, when and where — and your brand keeps spreading with every share.",
  },
];

export function HowItWorks() {
  return (
    <Section className="bg-surface/40">
      <Container>
        <SectionHeading
          eyebrow="How NFC works"
          title="Tap. Connect. Grow."
          description="Contactless technology that works on every modern phone — with zero friction for your customers."
        />
        <div className="grid gap-5 sm:grid-cols-3">
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            return (
              <Reveal key={step.title} delay={index * 0.1}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                  <span className="absolute -top-3 -right-1 font-display text-6xl font-bold text-primary/10">
                    {`0${index + 1}`}
                  </span>
                  <span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-primary to-[#8e3fb5] text-white shadow-lg shadow-primary/30 transition-transform duration-300 group-hover:scale-110">
                    <StepIcon />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
