import type {
  AboutPageContent,
  AreaPageContent,
  ContactPageContent,
  CtaContent,
  FooterContent,
  HeroContent,
  MetaContent,
  NavContent,
  NotFoundContent,
  ServiceCardContent,
  ServiceDetailContent,
  ServiceMetaContent,
  SolutionsContent,
  VisualsContent,
  WhatsAppFormContent,
  WhyUsContent,
} from "./types";

export const enMeta: MetaContent = {
  title: "TechNest | NFC, AI & Software Solutions",
  titleTemplate: "%s | TechNest",
  description:
    "TechNest designs and builds NFC smart products, AI assistants, websites, apps and custom software — modern technology for modern business.",
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
  ogLocale: "en_US",
  twitterTitle: "TechNest | NFC, AI & Software Solutions",
  twitterDescription:
    "NFC smart products, AI assistants, websites, apps and automation — built by one team.",
  brandHome: "TechNest home",
};

export const enServiceMeta: ServiceMetaContent = {
  nfcTitle: "NFC Smart Solutions",
  nfcDescription:
    "NFC-powered products — business cards, menus, review cards, tags and custom items — that open a digital experience on any phone with a tap.",
  aiTitle: "AI Solutions",
  aiDescription:
    "Custom AI chatbots, support automation, assistants and business tools — engineered around your business and deployed where they add the most value.",
  softwareTitle: "Software Services",
  softwareDescription:
    "Website development, mobile applications, custom software and business automation — modern, reliable software that moves your business forward.",
  aboutTitle: "About TechNest",
  aboutDescription:
    "Meet TechNest — a technology studio building NFC smart products, AI assistants, websites, apps and automation, with honest communication and quality work.",
  contactTitle: "Contact",
  contactDescription:
    "Get in touch with TechNest via WhatsApp, phone, email or social media. We reply within two business hours.",
  notFoundTitle: "Page not found",
};

export const enNav: NavContent = {
  items: [
    { label: "NFC Solutions", href: "/nfc-solutions" },
    { label: "AI Solutions", href: "/ai-solutions" },
    { label: "Software", href: "/software" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  aria: "Main navigation",
  letsTalk: "Let's Talk",
  toggleMenu: "Toggle navigation menu",
  language: "Language",
  theme: "Theme",
};

export const enFooter: FooterContent = {
  tagline:
    "NFC smart products, AI assistants and software — built by one team you can actually talk to.",
  solutions: "Solutions",
  company: "Company",
  contact: "Contact",
  rights: "All rights reserved.",
  contactNote: "Contact us via WhatsApp, phone or social media.",
  whatsappChat: "Chat with us on WhatsApp",
};

export const enHero: HeroContent = {
  badge: "NFC · AI · Software — one partner",
  titleStart: "Smart technology for",
  titleHighlight: "modern business",
  description:
    "From tap-to-connect NFC products to AI assistants, websites and automation — we design, build and ship technology that works for you.",
  primaryCta: "Explore Solutions",
  secondaryCta: "Chat on WhatsApp",
  pillars: [
    "NFC Smart Products",
    "AI Assistants",
    "Websites & Apps",
    "Business Automation",
  ],
};

export const enSolutions: SolutionsContent = {
  eyebrow: "What we do",
  title: "Three ways we can help",
  description:
    "NFC products, AI solutions and custom software — scoped, built and shipped by one team.",
  explore: "Explore",
  more: "more",
};

export const enWhyUs: WhyUsContent = {
  eyebrow: "Why TechNest",
  title: "A partner you can actually talk to",
  description:
    "No ticket systems, no runaround. You reach us directly and get straight answers.",
  reasons: [
    {
      title: "Two expert teams",
      description:
        "NFC hardware specialists and AI & software engineers — every project is built by people who do that work every day.",
    },
    {
      title: "Modern technology",
      description:
        "The latest frameworks, tools and AI models — fast, secure and built to last.",
    },
    {
      title: "Fast delivery",
      description:
        "Clear milestones and honest timelines. Most projects ship in weeks, not months.",
    },
    {
      title: "Real support",
      description:
        "We stay available after launch — on WhatsApp, phone and email.",
    },
  ],
};

export const enCta: CtaContent = {
  eyebrow: "Let's start building",
  titleStart: "Have a project in mind?",
  titleHighlight: "Let's build it together.",
  description:
    "Tell us your idea on WhatsApp and get a free consultation and quote — no obligation, just honest advice.",
  primaryCta: "Start on WhatsApp",
  secondaryCta: "Contact us",
};

export const enServiceCard: ServiceCardContent = {
  viewDetails: "View details",
  explore: "Explore",
};

export const enServiceDetail: ServiceDetailContent = {
  featuresTitle: "Features",
  howWeWorkTitle: "How we work",
  whatYouGetTitle: "What you get",
  ctaTitle: "Ready to get started?",
  ctaText:
    "Tell us about your project and we'll reply with a plan and a clear timeline.",
  ctaButton: "Chat on WhatsApp",
  ctaContact: "Contact us",
  relatedEyebrow: "Keep exploring",
  relatedTitle: "Related services",
  relatedDescription: "More ways we can help your business grow.",
  heroEyebrowSuffix: "explained",
  whatsappPrefill: "Hi TechNest! I'm interested in ",
};

export const enAreaPage: AreaPageContent = {
  heroEyebrowPrefix: "TechNest",
  heroTitleHighlight: "done right",
  heroCta: "Start a project",
  heroSecondary: "Browse services",
  useCasesEyebrow: "Built for every industry",
  useCasesTitle: "NFC use cases",
  useCasesDescription:
    "NFC technology adapts to any business — pick your industry to see how a tap changes the experience.",
  useCasesSub: "Tap-to-connect experiences",
  offerEyebrow: "solutions",
  offerTitle: "What we offer",
  offerDescription:
    "Every solution is custom-built around your business — scoped, built and shipped by one dedicated team.",
  helpTitle: "Not sure which service fits?",
  helpText: "Tell us what you need and we'll recommend the right approach.",
  helpCta: "Get in touch",
  relatedEyebrow: "Explore more",
  relatedTitle: "Other solutions",
  relatedDescription: "We build across NFC, AI and software — take a look at the rest.",
  nfcVisualAlt1: "Digital profile card",
  nfcVisualAlt2: "Smart NFC tags",
  aiVisualCaption:
    "AI that answers, qualifies and automates — then reports back in a dashboard you actually read.",
};

export const enContactPage: ContactPageContent = {
  eyebrow: "Contact us",
  title: "Let's start a",
  titleHighlight: "conversation",
  description:
    "No forms in a void — reach us directly on WhatsApp, phone or email. We usually reply within two business hours.",
  whatsappTitle: "WhatsApp",
  whatsappDesc: "Fastest way to reach us",
  callTitle: "Call us",
  callDesc: "Speak to the team directly",
  emailTitle: "Email",
  emailDesc: "For detailed briefs and documents",
  instagramTitle: "Instagram",
  instagramDesc: "Follow our work and updates",
  facebookTitle: "Facebook",
  facebookDesc: "Connect with us on Facebook",
};

export const enWhatsAppForm: WhatsAppFormContent = {
  title: "Send us a message on WhatsApp",
  nameLabel: "Your name",
  namePlaceholder: "Jane Doe",
  messageLabel: "How can we help?",
  messagePlaceholder: "Tell us about your project, service interest, or timeline...",
  submit: "Open WhatsApp",
  openText: "Open in WhatsApp",
  responseTime: "We usually reply within 2 hours during business hours.",
};

export const enAboutPage: AboutPageContent = {
  eyebrow: "About TechNest",
  title: "A technology studio built around",
  titleHighlight: "one idea: your success",
  description:
    "We're a team of NFC engineers, designers, developers and strategists who believe great technology should be accessible, practical and easy to work with.",
  h2: "We make technology simple, human and effective",
  paragraphs: [
    "TechNest was founded on a simple frustration: too many businesses struggle with technology that is expensive, complicated and impersonal. We set out to change that by building a studio where clients talk directly to the people doing the work.",
    "Today we design NFC smart products — business cards, menus, review cards and custom items — and build AI chatbots, websites, mobile apps, custom systems and automation. Always with the same promise: clear communication, honest advice and work we're proud to put our name on.",
  ],
  highlights: [
    { title: "Modern Technology", description: "NFC, AI and modern software from day one." },
    { title: "Creative Solutions", description: "Custom ideas shaped around your business." },
    { title: "Customer-Focused Approach", description: "You talk directly to the people doing the work." },
    { title: "Continuous Innovation", description: "Always improving, always learning, always shipping." },
  ],
  imageAlt: "The TechNest team at work",
  valuesEyebrow: "Our values",
  valuesTitle: "What we stand for",
  valuesDescription: "The principles behind every project we take on.",
  values: [
    {
      title: "Innovation first",
      description:
        "We stay ahead of the curve so your business benefits from the latest NFC and AI technology, not last year's trends.",
    },
    {
      title: "Partnership over projects",
      description: "We think long-term. Your success is the metric we measure ourselves against.",
    },
    {
      title: "Honest and transparent",
      description:
        "Clear pricing, honest timelines and no hidden surprises. You always know where your project stands.",
    },
    {
      title: "Quality that ships",
      description:
        "Great ideas only matter when they ship. We balance quality and speed to deliver real results.",
    },
  ],
};

export const enNotFound: NotFoundContent = {
  code: "Error 404",
  title: "Page not found",
  text: "The page you're looking for doesn't exist or has been moved.",
  back: "Back to home",
};

export const enVisuals: VisualsContent = {
  nfcCard: {
    brand: "TechNest",
    chip: "NFC · Tap",
    tapToConnect: "Tap to connect",
    url: "technest.app/u/company",
    name: "TechNest",
    title: "Smart Solutions",
  },
  heroVisual: {
    appName: "TapConnect",
    appSub: "Digital profile",
    live: "Live",
    tagline: "Smart digital solutions",
    actions: ["Share", "Call", "Save"],
    rows: [
      { label: "Website", value: "technest.app" },
      { label: "WhatsApp", value: "Available" },
      { label: "Location", value: "TechNest HQ" },
    ],
    tapDetected: "Tap detected",
    cardLinked: "Card linked",
    chatMessages: [
      { from: "user", text: "Tap my card to connect!" },
      { from: "ai", text: "Profile saved. Great to meet you!" },
    ],
  },
  phoneMockup: {
    profileOpened: "Profile opened",
    byNfcTap: "By NFC tap",
    contactSaved: "Contact saved",
    welcome: "Welcome to TechNest — nice to meet you.",
    open: "Open",
    saveContact: "Save contact",
    openWebsite: "Open website",
    getStarted: "Get started",
    learnMore: "Learn more",
  },
  browserMockup: {
    nav: ["Home", "NFC", "AI", "Apps"],
    websiteHero: "We build NFC products & software",
    websiteText:
      "Tap-to-connect cards, AI assistants, apps and automation — one team, one goal.",
    explore: "Explore",
    contact: "Contact",
    tags: ["NFC", "AI", "Apps"],
    menuName: "The Local Table",
    dishes: [
      { name: "Grilled Salmon", price: "24.00" },
      { name: "Beef Tagine", price: "21.50" },
      { name: "Caesar Salad", price: "12.00" },
      { name: "Cheesecake", price: "8.50" },
    ],
    tapToOrder: "Tap to order",
  },
  chatInterface: {
    title: "TechNest Assistant",
    online: "Online · AI powered",
    aiBadge: "AI",
    placeholder: "Ask about NFC, AI or software...",
    messages: [
      { from: "user", text: "What services do you offer?" },
      {
        from: "ai",
        text: "We build NFC products, AI assistants, websites, apps and automation — all custom-built for your business.",
      },
      { from: "user", text: "Can you automate our customer support?" },
      {
        from: "ai",
        text: "Yes — our AI assistant answers FAQs, qualifies leads and routes complex cases to your team 24/7.",
      },
    ],
  },
  dashboardMockup: {
    url: "dashboard.technest.app",
    nav: ["Overview", "Analytics", "Contacts", "Reports", "Settings"],
    team: "TN Team",
    stats: [
      { label: "Taps", value: "1,284" },
      { label: "Contacts", value: "312" },
      { label: "Saves", value: "96" },
    ],
    weeklyTaps: "Weekly taps",
    growth: "+18%",
    campaign: "NFC campaign live",
    active: "Active",
  },
};
