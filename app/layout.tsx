import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import { Geist_Mono, Inter, Space_Grotesk } from "next/font/google";

import "./globals.css";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

import { ThemeProvider } from "@/lib/theme";
import { themeInitScript } from "@/lib/theme-init";
import { LocaleProvider } from "@/lib/i18n/provider";
import {
  LOCALE_COOKIE,
  resolveLocale,
} from "@/lib/i18n/locale";

import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "NFC business cards",
    "NFC smart solutions",
    "AI chatbots",
    "website development",
    "mobile applications",
    "custom software",
    "business automation",
    "software agency",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: site.name,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#faf9fa",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#141014",
    },
  ],
  colorScheme: "light dark",
};

export default async function RootLayout({
  children,
}: LayoutProps<"/">) {
  const cookieStore = await cookies();

  const initialLocale = resolveLocale(
    cookieStore.get(LOCALE_COOKIE)?.value
  );

  return (
    <html
      lang={initialLocale}
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <script
        dangerouslySetInnerHTML={{
          __html: themeInitScript(),
        }}
      />

      <LocaleProvider initialLocale={initialLocale}>
        <ThemeProvider>
          <Header />

          {children}

          <Footer />

          <WhatsAppButton />
        </ThemeProvider>
      </LocaleProvider>
    </html>
  );
}