import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { ThemeProvider } from "@/lib/theme";
import { themeInitScript } from "@/lib/theme-init";
import { localeInitScript } from "@/lib/i18n/init";
import { LocaleProvider } from "@/lib/i18n/provider";
import { getServerDictionary, getServerLocale } from "@/lib/i18n/server";
import { dirFor, htmlLangFor } from "@/lib/i18n/locale";
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

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getServerDictionary();
  const meta = dict.meta;

  return {
    metadataBase: new URL(site.url),
    title: {
      default: meta.title,
      template: meta.titleTemplate,
    },
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      type: "website",
      locale: meta.ogLocale,
      url: site.url,
      siteName: site.name,
      title: meta.twitterTitle,
      description: meta.twitterDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.twitterTitle,
      description: meta.twitterDescription,
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9fa" },
    { media: "(prefers-color-scheme: dark)", color: "#141014" },
  ],
  colorScheme: "light dark",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const locale = await getServerLocale();

  return (
    <html
      lang={htmlLangFor(locale)}
      dir={dirFor(locale)}
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript() }} />
        <script dangerouslySetInnerHTML={{ __html: localeInitScript() }} />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <ThemeProvider>
          <LocaleProvider initialLocale={locale}>
            <ScrollProgress />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppButton />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
