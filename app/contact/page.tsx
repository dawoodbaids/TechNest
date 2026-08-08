import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { WhatsAppForm } from "@/components/contact/WhatsAppForm";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { contact, mailtoLink, socials, telLink, whatsappLink } from "@/lib/contact";
import { getServerDictionary } from "@/lib/i18n/server";

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

  const methods = [
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
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-6">
                <Clock className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{contactPage.hoursTitle}</h3>
                  <p className="mt-1 text-sm text-muted">{contact.hours}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-6">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{contactPage.locationTitle}</h3>
                  <p className="mt-1 text-sm text-muted">{contact.address}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-display text-lg font-semibold text-foreground">
                {contactPage.socialTitle}
              </h3>
              <div className="flex flex-wrap gap-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <WhatsAppForm />
        </Container>
      </section>
    </>
  );
}
