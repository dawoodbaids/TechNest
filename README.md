<<<<<<< HEAD
# TechNest
Software and NFC 
=======
# TechNest — Corporate Showcase Website

Showcase website for **TechNest**, a technology studio offering two solution families:

**NFC Smart Solutions**
- NFC Business Cards
- NFC Digital Profiles
- NFC Restaurant Menus
- NFC Google Review Solutions
- Custom NFC Products

**AI & Software Solutions**
- AI Chatbots
- Website Development
- Mobile Applications
- Custom Software Systems
- Business Automation Solutions

This is a lead-generation site: **no e-commerce, no payments**. Visitors reach the
business directly via **WhatsApp, phone and social media**.

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack) + React 19
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com) (CSS-first configuration)
- [Framer Motion](https://www.framer.com/motion) scroll-reveal animations
- [lucide-react](https://lucide.dev) icons
- `clsx` + `tailwind-merge` for conditional class composition

## Project Structure

```
app/
  layout.tsx              Root layout: fonts, metadata, Header/Footer/WhatsApp
  globals.css             Tailwind v4 theme tokens + base styles
  icon.png                Favicon (derived from the logo)
  page.tsx                Homepage landing (all sections)
  services/page.tsx       Solutions overview (two families)
  services/[family]/page.tsx      Family page (SSG)
  services/[family]/[slug]/page.tsx Service detail (SSG)
  portfolio/page.tsx      Filterable project showcase
  about/page.tsx          About & values
  contact/page.tsx        Contact methods + WhatsApp form
  not-found.tsx           404 page
  robots.ts / sitemap.ts  SEO
components/
  brand/                  Logo (image-based, dark/light variants)
  layout/                 Header, Navbar (client), Footer, WhatsApp button
  home/                   Homepage sections (Hero, About, Solutions, NFC,
                          AI, Why Us, Portfolio, Tech Stack, Testimonials, CTA)
  services/               ServiceCard
  portfolio/              ProjectCard, PortfolioGrid (client filter)
  contact/                WhatsAppForm (client)
  ui/                     Reusable primitives + Reveal (Framer Motion)
  icons/                  SocialIcon (inline SVG brand marks)
lib/
  site.ts                 Brand name, tagline, navigation
  contact.ts              Phone / WhatsApp / email / socials + link helpers
  services.ts             Service catalog (2 families x 5 services)
  portfolio.ts            Project data + filter categories
  testimonials.ts         Client quotes
  techStack.ts            Technology stack data
  media.ts                Media path map (single source of truth for images)
  utils.ts                cn() helper
public/
  media/brand/            Logo variants (original, transparent, white)
  media/images/           Stock imagery used across the site
```

## Media & Branding

- **Logo**: `public/media/brand/` holds the original logo plus a transparent
  (`logo-transparent.png`) and white-mark (`logo-white.png`) variant for light
  and dark surfaces.
- **Images**: downloaded stock photos live in `public/media/images/`. Every
  image reference in the codebase is centralized in `lib/media.ts`, so swapping
  or replacing imagery is a one-file change.
- **Favicon**: `app/icon.png` is generated from the logo and served
  automatically by Next.js.

## Customization

All business details live in a single place — **`lib/contact.ts`** and **`lib/site.ts`**.
Replace the placeholder phone, WhatsApp number, email, social handles and brand URL with
your real details:

```ts
// lib/contact.ts
whatsappRaw: "10000000000",  // your number, digits only
phoneRaw:    "+10000000000", // your number, with country code
emailRaw:    "hello@technest.example",
```

Content (services, projects, testimonials) is data-driven from the `lib/` folder — no
component changes needed to update copy.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start the development server      |
| `npm run build`   | Production build (Turbopack)      |
| `npm run start`   | Serve the production build        |
| `npm run lint`    | Run ESLint                        |
>>>>>>> 57e514a (blue design)
