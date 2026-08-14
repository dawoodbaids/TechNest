import Image from "next/image";
import Link from "next/link";
import { MailIcon, MessageCircleIcon, PhoneIcon } from "@/components/icons";
import { Logo } from "@/components/brand/Logo";
import { media } from "@/lib/media";
import { SocialIcon, type Brand } from "@/components/icons/SocialIcon";
import { Container } from "@/components/ui/Container";
import { solutionAreas } from "@/lib/services";
import { contact, socials, telLink, whatsappLink } from "@/lib/contact";
import { site } from "@/lib/site";
import { getServerDictionary } from "@/lib/i18n/server";

export async function Footer() {
  const dict = await getServerDictionary();
  const year = new Date().getFullYear();

  return (
    <footer className="theme-transition relative overflow-hidden border-t border-white/10 bg-[#141014] text-white">
      <div className="bg-silk-dark pointer-events-none absolute inset-0 opacity-60" />
      <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <Image
        src={media.brand.logoPurpleLight}
        alt=""
        width={480}
        height={480}
        aria-hidden
        className="pointer-events-none absolute -right-24 -bottom-28 w-[28rem] opacity-[0.04] select-none"
      />
      <div className="absolute -top-32 -right-24 size-96 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute -bottom-40 -left-24 size-96 rounded-full bg-primary-dark/20 blur-3xl" />
      <Container className="relative py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div className="flex flex-col gap-4">
            <Logo variant="dark" />
            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              {dict.footer.tagline}
            </p>
            <div className="flex items-center gap-2.5">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="grid size-9 place-items-center rounded-xl bg-white/10 transition-transform hover:scale-105"
                >
                  <SocialIcon name={social.label as Brand} className="size-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold tracking-wide text-white uppercase">
              {dict.footer.solutions}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {solutionAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/${area.slug}`}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {dict.areas[area.slug]?.shortName ?? area.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold tracking-wide text-white uppercase">
              {dict.footer.company}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {dict.nav.items
                .filter((item) => item.href === "/about" || item.href === "/contact")
                .map((item) => (
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
              {dict.footer.contact}
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <MessageCircleIcon className="size-4 text-[#25D366]" />
                  WhatsApp {contact.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={telLink()}
                  className="inline-flex items-center gap-2.5 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <PhoneIcon className="size-4 text-[#d9a3ec]" />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.emailRaw}`}
                  className="inline-flex items-center gap-2.5 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <MailIcon className="size-4 text-[#d9a3ec]" />
                  {contact.email}
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-2 pt-1">
              {socials
                .filter((social) =>
                  ["Facebook", "Instagram"].includes(social.label),
                )
                .map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="grid size-9 place-items-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-white/40 hover:text-white"
                  >
                    <SocialIcon
                      name={social.label as Brand}
                      className="size-4"
                    />
                  </a>
                ))}
            </div>
          </div>
        </div>
      </Container>

      <div className="relative border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <p className="text-xs text-white/50">
            © {year} {site.name}. {dict.footer.rights}
          </p>
          <p className="text-xs text-white/50">{dict.footer.contactNote}</p>
        </Container>
      </div>
    </footer>
  );
}
