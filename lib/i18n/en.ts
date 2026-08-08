import type {
  AreaPageContent,
  BuildingFutureContent,
  CtaContent,
  DigitalShowcaseContent,
  FooterContent,
  NavContent,
  NfcShowcaseContent,
  NotFoundContent,
  PortfolioPreviewContent,
  ServiceCardContent,
  ServiceDetailContent,
  SolutionsContent,
  TechStackContent,
  VisualsContent,
  WhyUsContent,
  AboutHomeContent,
  AiServicesContent,
  AboutPageContent,
  ContactPageContent,
  PortfolioPageContent,
  WhatsAppFormContent,
  MetaContent,
  ServiceMetaContent,
  HeroContent,
} from "./types";

export const enMeta: MetaContent = {
  title: "TechNest | NFC, AI & Software Solutions",
  titleTemplate: "%s | TechNest",
  description:
    "TechNest is a growing technology startup focused on delivering innovative digital solutions — NFC smart products, AI solutions, websites, mobile apps, custom software and business automation — that help businesses adopt modern technology.",
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
    "Smart NFC products, AI assistants, websites, apps and automation for modern business.",
  brandHome: "TechNest home",
};

export const enServiceMeta: ServiceMetaContent = {
  nfcTitle: "NFC Smart Solutions",
  nfcDescription:
    "NFC-powered products — business cards, menus, review cards, tags and custom solutions — that open a digital experience on any phone with a tap.",
  aiTitle: "AI Solutions",
  aiDescription:
    "Custom AI chatbots, support automation, assistants and business tools — engineered around your business and deployed where they add the most value.",
  softwareTitle: "Software Services",
  softwareDescription:
    "Website development, mobile applications, custom software and business automation — modern, reliable software that moves your business forward.",
  portfolioTitle: "Portfolio",
  portfolioDescription:
    "Concept work and live demos built by TechNest across NFC products, AI chatbots, websites, mobile apps, custom software and automation.",
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
    { label: "Portfolio", href: "/portfolio" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  aria: "Main navigation",
  letsTalk: "Let's Talk",
  toggleMenu: "Toggle navigation menu",
};

export const enFooter: FooterContent = {
  tagline:
    "We build the NFC products and software that help businesses connect, automate and grow.",
  solutions: "Solutions",
  company: "Company",
  contact: "Contact",
  rights: "All rights reserved.",
  contactNote: "Contact us via WhatsApp, phone or social media.",
  whatsappChat: "Chat with us on WhatsApp",
};

export const enHero: HeroContent = {
  badge: "Smart digital solutions for modern business",
  titleStart: "Connect, automate and grow with",
  titleHighlight: "smart technology",
  description:
    "From NFC products people love to tap, to AI assistants, websites, apps and automation — TechNest designs, builds and ships technology that works for your business.",
  primaryCta: "Explore Solutions",
  secondaryCta: "Chat on WhatsApp",
  pillars: [
    "NFC Smart Products",
    "AI Solutions",
    "Websites & Apps",
    "Business Automation",
  ],
};

export const enAbout: AboutHomeContent = {
  badge: "About TechNest",
  titleStart: "One team for",
  titleHighlight: "NFC products and software",
  paragraphs: [
    "TechNest is a technology studio that bridges the physical and digital worlds. We design and produce NFC smart products — business cards, menus, review cards and custom items — and we build the software that powers modern business: AI chatbots, websites, apps, custom systems and automation.",
  ],
  highlights: [
    "Design, build, encode and ship in one team",
    "Direct contact with the people doing the work",
    "Modern NFC and AI technology from day one",
    "Honest timelines, clear pricing, real support",
  ],
  badgeCardTitle: "Newly launched",
  badgeCardSub: "with big ambitions",
  chipTitle: "NFC + AI",
  chipSub: "Modern by default",
  footerTitle: "Just getting started",
  footerText:
    "We're just getting started — and every project we ship is a chance to prove how good technology can feel.",
  imageAlt: "The TechNest team at work",
};

export const enSolutions: SolutionsContent = {
  eyebrow: "Our Solutions",
  title: "Three solution areas, one partner",
  description:
    "Explore what we build — contactless NFC products, AI solutions and custom software — all delivered by a single dedicated team.",
  explore: "Explore",
  more: "more",
};

export const enNfcShowcase: NfcShowcaseContent = {
  eyebrow: "NFC Products Showcase",
  title: "Tap into the physical world",
  description:
    "Premium, contactless NFC products that open a digital experience on any phone — no app required.",
  images: [
    { src: "/media/images/nfc/nfc-business-card-01.svg", alt: "TechNest NFC business card on a desk", rotate: -3 },
    { src: "/media/images/nfc/nfc-smart-menu-01.svg", alt: "TechNest NFC smart menu on a restaurant table", rotate: 2.5 },
    { src: "/media/images/nfc/nfc-digital-profile-01.svg", alt: "Phone opening a TechNest NFC digital profile", rotate: -1 },
  ],
  phoneName: "TechNest",
  phoneProfile: "Profile opened",
  phoneSave: "Save contact",
  phoneWebsite: "Open website",
  learnMore: "Learn more",
};

export const enAiServices: AiServicesContent = {
  eyebrow: "AI & Software Services",
  title: "Software that automates and scales",
  description:
    "Custom AI assistants, websites, apps, systems and automation built with modern, maintainable technology.",
  learnMore: "Learn more",
  chatbotImageAlt: "TechNest AI chatbot interface",
  chatbotLabel: "AI Chatbot",
  dashboardImageAlt: "TechNest analytics dashboard",
  assistantLabel: "AI Assistant",
  assistantText: "24/7 automated support",
  helpTitle: "Not sure which solution fits?",
  helpText: "Tell us about your project and we'll recommend the right approach.",
  helpButton: "Get a free consultation",
};

export const enDigitalShowcase: DigitalShowcaseContent = {
  eyebrow: "Apps & Websites",
  title: "Digital products built to perform",
  description:
    "Modern mobile applications and high-performance websites — designed, developed and shipped by one team.",
  headingStart: "Every screen designed to",
  headingHighlight: "convert",
  features: [
    "Smooth, native-feeling interfaces",
    "Websites that load fast and convert",
    "Built mobile-first, responsive on every device",
  ],
  paragraph:
    "From booking platforms to customer apps, we turn ideas into polished digital products your customers actually enjoy using.",
  mobileBadge: "Mobile App",
  mobileImageAlt: "TechNest mobile application mockup",
  websiteImageAlt: "TechNest website on a laptop screen",
  responsiveBadge: "Fast & responsive",
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
        "Specialists in NFC hardware and in AI & software — so every project is built by people who do that work every day.",
    },
    {
      title: "Modern technology",
      description:
        "We build with the latest frameworks, tools and AI models — fast, secure and built to last.",
    },
    {
      title: "One dedicated team",
      description:
        "Designers, developers and NFC engineers work together on your project from idea to launch.",
    },
    {
      title: "Fast delivery",
      description:
        "Clear milestones and honest timelines. Most projects ship in weeks, not months.",
    },
    {
      title: "Quality you can trust",
      description:
        "Every NFC product is tap-tested, every line of code is reviewed — we ship work we're proud of.",
    },
    {
      title: "Real support",
      description:
        "We stay available after launch — on WhatsApp, phone and email — whenever you need us.",
    },
  ],
};

export const enPortfolioPreview: PortfolioPreviewContent = {
  eyebrow: "Concepts & demos",
  title: "A look at what we build",
  description:
    "Concept work and live demos of NFC products, AI assistants, apps and websites.",
  viewAll: "View all projects",
};

export const enBuildingFuture: BuildingFutureContent = {
  eyebrow: "Our vision",
  title: "Building the future with technology",
  description:
    "TechNest is a newly launched startup with a simple belief: every business deserves modern, honest and well-crafted technology.",
  cards: [
    {
      title: "Innovative Digital Solutions",
      description:
        "Practical technology built around real business needs — not trends for their own sake.",
    },
    {
      title: "Smart NFC Experiences",
      description:
        "Tap-to-connect products that bridge the physical and digital worlds in a single tap.",
    },
    {
      title: "AI-Powered Services",
      description:
        "Assistants and automation that answer, qualify and work while your team focuses on what matters.",
    },
    {
      title: "Custom Software Development",
      description:
        "Websites, apps and systems designed, built and shipped around how your business actually works.",
    },
  ],
};

export const enTechStack: TechStackContent = {
  eyebrow: "Technology Stack",
  title: "Built on modern, proven technology",
  description:
    "The tools and platforms we use to ship reliable products — from NFC hardware to production-grade software.",
  groups: ["Frontend & Design", "Backend & Data", "AI & Automation", "Infrastructure & Cloud"],
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
  techStackTitle: "Tech stack",
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
  helpSecondary: "See our work",
  relatedEyebrow: "Explore more",
  relatedTitle: "Other solutions",
  relatedDescription: "We build across NFC, AI and software — take a look at the rest.",
  seeAll: "See all projects",
  seeAllText: "Concepts and demos we've shipped.",
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
  hoursTitle: "Business hours",
  locationTitle: "Location",
  socialTitle: "Follow us on social media",
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

export const enPortfolioPage: PortfolioPageContent = {
  eyebrow: "Concepts & demos",
  title: "A look at what we build",
  titleHighlight: "in action",
  description:
    "Concept projects and live demos we've built — filter by service to explore what we do best.",
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
