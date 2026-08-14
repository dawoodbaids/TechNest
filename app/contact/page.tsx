import type { Metadata } from "next";
import type { ComponentType } from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { WhatsAppForm } from "@/components/contact/WhatsAppForm";
import { SocialIcon } from "@/components/icons/SocialIcon";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { contact, mailtoLink, socials, telLink, whatsappLink } from "@/lib/contact";
import { getServerDictionary } from "@/lib/i18n/server";

const InstagramIcon = (props: { className?: string }) => (
  <SocialIcon name="Instagram" {...props} />
);
const FacebookIcon = (props: { className?: string }) => (
  <SocialIcon name="Facebook" {...props} />
);

interface ContactMethod {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  value: string;
  href: string;
  external: boolean;
  accent: string;
  brand?: boolean;
}

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getServerDictionary();
  return {
    title: dict.serviceMeta.contactTitle,
    description: dict.serviceMeta.contactDescription,
  };
}

export default async function ContactPage() {
  const dict = await getServerDictionary();
  const { contactPage } = dict;

  const instagram = socials.find((s) => s.label === "Instagram");
  const facebook = socials.find((s) => s.label === "Facebook");

  const methods: ContactMethod[] = [
    {
      icon: MessageCircle,
      title: contactPage.whatsappTitle,
      description: contactPage.whatsappDesc,
      value: contact.whatsapp,
      href: whatsappLink(),
      external: true,
      accent: "text-[#25D366]",
    },
    {
      icon: Phone,
      title: contactPage.callTitle,
      description: contactPage.callDesc,
      value: contact.phone,
      href: telLink(),
      external: false,
      accent: "text-primary",
    },
    {
      icon: Mail,
      title: contactPage.emailTitle,
      description: contactPage.emailDesc,
      value: contact.email,
      href: mailtoLink(),
      external: false,
      accent: "text-secondary",
    },
    {
      icon: InstagramIcon,
      title: contactPage.instagramTitle,
      description: contactPage.instagramDesc,
      value: instagram?.handle ?? "Instagram",
      href: instagram?.href ?? "https://www.instagram.com/",
      external: true,
      accent: "",
      brand: true,
    },
    {
      icon: FacebookIcon,
      title: contactPage.facebookTitle,
      description: contactPage.facebookDesc,
      value: facebook?.handle ?? "TechNest",
      href: facebook?.href ?? "https://www.facebook.com/",
      external: true,
      accent: "",
      brand: true,
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow={contactPage.eyebrow}
        title={contactPage.title}
        titleHighlight={contactPage.titleHighlight}
        description={contactPage.description}
      />

      <section className="pb-16 sm:pb-24">
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="flex flex-col gap-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {methods.map((method) => {
                const Icon = method.icon;
                return (
                  <a
                    key={method.title}
                    href={method.href}
                    target={method.external ? "_blank" : undefined}
                    rel={method.external ? "noopener noreferrer" : undefined}
                    className="group flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-primary/50"
                  >
                    {method.brand ? (
                      <span className="grid size-12 place-items-center">
                        <Icon className="size-8" />
                      </span>
                    ) : (
                      <span
                        className={`grid size-11 place-items-center rounded-xl bg-surface-muted ${method.accent}`}
                      >
                        <Icon className="size-5" />
                      </span>
                    )}
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
            </div>
          </div>

          <WhatsAppForm />
        </Container>
      </section>
    </>
  );
}
