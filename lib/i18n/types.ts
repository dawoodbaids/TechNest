export interface ProcessStepContent {
  step: string;
  title: string;
  description: string;
}

export interface ServiceContent {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  deliverables: string[];
  process: ProcessStepContent[];
  stack: string[];
}

export interface AreaContent {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
}

export interface UseCaseContent {
  label: string;
  sub: string;
}

export interface HeroContent {
  badge: string;
  titleStart: string;
  titleHighlight: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  pillars: string[];
}

export interface SolutionsContent {
  eyebrow: string;
  title: string;
  description: string;
  explore: string;
  more: string;
}

export interface WhyUsContent {
  eyebrow: string;
  title: string;
  description: string;
  reasons: { title: string; description: string }[];
}

export interface CtaContent {
  eyebrow: string;
  titleStart: string;
  titleHighlight: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
}

export interface VisualsContent {
  nfcCard: {
    brand: string;
    chip: string;
    tapToConnect: string;
    url: string;
    name: string;
    title: string;
  };
  heroVisual: {
    appName: string;
    appSub: string;
    live: string;
    tagline: string;
    actions: string[];
    rows: { label: string; value: string }[];
    tapDetected: string;
    cardLinked: string;
    chatMessages: { from: "user" | "ai"; text: string }[];
  };
  phoneMockup: {
    profileOpened: string;
    byNfcTap: string;
    contactSaved: string;
    welcome: string;
    open: string;
    saveContact: string;
    openWebsite: string;
    getStarted: string;
    learnMore: string;
  };
  browserMockup: {
    nav: string[];
    websiteHero: string;
    websiteText: string;
    explore: string;
    contact: string;
    tags: string[];
    menuName: string;
    dishes: { name: string; price: string }[];
    tapToOrder: string;
  };
  chatInterface: {
    title: string;
    online: string;
    aiBadge: string;
    placeholder: string;
    messages: { from: "user" | "ai"; text: string }[];
  };
  dashboardMockup: {
    url: string;
    nav: string[];
    team: string;
    stats: { label: string; value: string }[];
    weeklyTaps: string;
    growth: string;
    campaign: string;
    active: string;
  };
}

export interface ServiceCardContent {
  viewDetails: string;
  explore: string;
}

export interface ServiceDetailContent {
  featuresTitle: string;
  howWeWorkTitle: string;
  whatYouGetTitle: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  ctaContact: string;
  relatedEyebrow: string;
  relatedTitle: string;
  relatedDescription: string;
  heroEyebrowSuffix: string;
  whatsappPrefill: string;
}

export interface AreaPageContent {
  heroEyebrowPrefix: string;
  heroTitleHighlight: string;
  heroCta: string;
  heroSecondary: string;
  useCasesEyebrow: string;
  useCasesTitle: string;
  useCasesDescription: string;
  useCasesSub: string;
  offerEyebrow: string;
  offerTitle: string;
  offerDescription: string;
  helpTitle: string;
  helpText: string;
  helpCta: string;
  relatedEyebrow: string;
  relatedTitle: string;
  relatedDescription: string;
  nfcVisualAlt1: string;
  nfcVisualAlt2: string;
  aiVisualCaption: string;
}

export interface FooterContent {
  tagline: string;
  solutions: string;
  company: string;
  contact: string;
  rights: string;
  contactNote: string;
  whatsappChat: string;
}

export interface NavContent {
  items: { label: string; href: string }[];
  aria: string;
  letsTalk: string;
  toggleMenu: string;
  language: string;
  theme: string;
}

export interface ContactPageContent {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  whatsappTitle: string;
  whatsappDesc: string;
  callTitle: string;
  callDesc: string;
  emailTitle: string;
  emailDesc: string;
  instagramTitle: string;
  instagramDesc: string;
  facebookTitle: string;
  facebookDesc: string;
}

export interface WhatsAppFormContent {
  title: string;
  nameLabel: string;
  namePlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submit: string;
  openText: string;
  responseTime: string;
}

export interface AboutPageContent {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  h2: string;
  paragraphs: string[];
  highlights: { title: string; description: string }[];
  imageAlt: string;
  valuesEyebrow: string;
  valuesTitle: string;
  valuesDescription: string;
  values: { title: string; description: string }[];
}

export interface NotFoundContent {
  code: string;
  title: string;
  text: string;
  back: string;
}

export interface MetaContent {
  title: string;
  titleTemplate: string;
  description: string;
  keywords: string[];
  ogLocale: string;
  twitterTitle: string;
  twitterDescription: string;
  brandHome: string;
}

export interface ServiceMetaContent {
  nfcTitle: string;
  nfcDescription: string;
  aiTitle: string;
  aiDescription: string;
  softwareTitle: string;
  softwareDescription: string;
  aboutTitle: string;
  aboutDescription: string;
  contactTitle: string;
  contactDescription: string;
  notFoundTitle: string;
}

export interface Dict {
  meta: MetaContent;
  serviceMeta: ServiceMetaContent;
  nav: NavContent;
  footer: FooterContent;
  hero: HeroContent;
  solutions: SolutionsContent;
  whyUs: WhyUsContent;
  cta: CtaContent;
  visuals: VisualsContent;
  serviceCard: ServiceCardContent;
  serviceDetail: ServiceDetailContent;
  areaPage: AreaPageContent;
  contactPage: ContactPageContent;
  whatsappForm: WhatsAppFormContent;
  aboutPage: AboutPageContent;
  notFound: NotFoundContent;
  areas: Record<string, AreaContent>;
  services: Record<string, ServiceContent>;
  useCases: UseCaseContent[];
}
