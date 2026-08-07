import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { SocialIcon, type Brand } from "@/components/icons/SocialIcon";
import { Container } from "@/components/ui/Container";
import { solutionAreas } from "@/lib/services";
import { contact, socials, telLink, whatsappLink } from "@/lib/contact";
import { navigation, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0b0f17] text-white">
      <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <Container className="relative py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div className="flex flex-col gap-4">
            <Logo variant="light" />
            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              {site.tagline}. We build the NFC products and software that help
              businesses connect, automate and grow.
            </p>
            <div className="flex items-center gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="grid size-9 place-items-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-white/40 hover:text-white"
                >
                  <SocialIcon name={social.label as Brand} className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold tracking-wide text-white uppercase">
              Solutions
            </h3>
            <ul className="flex flex-col gap-2.5">
              {solutionAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/${area.slug}`}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {area.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold tracking-wide text-white uppercase">
              Company
            </h3>
            <ul className="flex flex-col gap-2.5">
              {navigation.slice(1).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold tracking-wide text-white uppercase">
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <MessageCircle className="size-4 text-[#25D366]" />
                  WhatsApp {contact.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={telLink()}
                  className="inline-flex items-center gap-2.5 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <Phone className="size-4 text-[#1b5bff]" />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.emailRaw}`}
                  className="inline-flex items-center gap-2.5 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <Mail className="size-4 text-[#1b5bff]" />
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="relative border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <p className="text-xs text-white/50">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/50">
            Contact us via WhatsApp, phone or social media.
          </p>
        </Container>
      </div>
    </footer>
  );
}
