import type { Metadata } from "next";
import { MailIcon, MessageCircleIcon, PhoneIcon } from "@/components/icons";
import { WhatsAppForm } from "@/components/contact/WhatsAppForm";
import { SocialIcon, type Brand } from "@/components/icons/SocialIcon";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { contact, mailtoLink, socials, telLink, whatsappLink } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with TechNest via WhatsApp, phone, email or social media. We reply within two business hours.",
};

const methods = [
  {
    icon: MessageCircleIcon,
    title: "WhatsApp",
    description: "Fastest way to reach us",
    value: contact.whatsapp,
    href: whatsappLink(),
    external: true,
    accent: "text-[#25D366]",
  },
  {
    icon: PhoneIcon,
    title: "Call us",
    description: "Speak to the team directly",
    value: contact.phone,
    href: telLink(),
    external: false,
    accent: "text-primary",
  },
  {
    icon: MailIcon,
    title: "Email",
    description: "For detailed briefs and documents",
    value: contact.email,
    href: mailtoLink(),
    external: false,
    accent: "text-secondary",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact us"
        title="Let's start a"
        titleHighlight="conversation"
        description="No forms in a void — reach us directly on WhatsApp, phone or email. We usually reply within two business hours."
      />

      <section className="pb-16 sm:pb-24">
        <Container className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-start sm:gap-10">
          <div className="flex flex-col gap-5 sm:gap-6">
            <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
              {methods.map((method) => {
                const Icon = method.icon;
                return (
                  <a
                    key={method.title}
                    href={method.href}
                    target={method.external ? "_blank" : undefined}
                    rel={method.external ? "noopener noreferrer" : undefined}
                    className="group flex flex-col gap-3 rounded-2xl border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-primary/50 sm:gap-4 sm:p-6"
                  >
                    <span
                      className={`grid size-11 place-items-center rounded-xl bg-surface-muted ${method.accent}`}
                    >
                      <Icon className="size-5" />
                    </span>
                    <div className="flex flex-col gap-1">
                      <h2 className="font-display text-lg font-semibold text-foreground">
                        {method.title}
                      </h2>
                      <p className="text-sm text-muted">{method.value}</p>
                      <p className="text-xs text-muted/70">{method.description}</p>
                    </div>
                  </a>
                );
              })}

              <div className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-4 sm:gap-4 sm:p-6">
                <h3 className="font-display text-base font-semibold text-foreground sm:text-lg">
                  Follow us on social media
                </h3>
                <div className="flex items-center gap-3 sm:gap-4">
                  {socials.map((social) => {
                    const brand =
                      social.label === "Facebook"
                        ? "border-[#1877F2]/40 bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2] hover:text-white"
                        : "border-[#E4405F]/40 bg-[#E4405F]/10 text-[#E4405F] hover:bg-[#E4405F] hover:text-white";

                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className={`grid size-12 place-items-center rounded-2xl border transition-all hover:-translate-y-0.5 sm:size-16 ${brand}`}
                      >
                        <SocialIcon
                          name={social.label as Brand}
                          className="size-6 sm:size-8"
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <WhatsAppForm />
        </Container>
      </section>
    </>
  );
}
