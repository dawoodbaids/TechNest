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

export interface ProjectContent {
  title: string;
  category: string;
  summary: string;
  tags: string[];
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

export interface NfcShowcaseContent {
  eyebrow: string;
  title: string;
  description: string;
  images: { src: string; alt: string; rotate: number }[];
  phoneName: string;
  phoneProfile: string;
  phoneSave: string;
  phoneWebsite: string;
  learnMore: string;
}

export interface AboutHomeContent {
  badge: string;
  titleStart: string;
  titleHighlight: string;
  paragraphs: string[];
  highlights: string[];
  badgeCardTitle: string;
  badgeCardSub: string;
  chipTitle: string;
  chipSub: string;
  footerTitle: string;
  footerText: string;
  imageAlt: string;
}

export interface AiServicesContent {
  eyebrow: string;
  title: string;
  description: string;
  learnMore: string;
  chatbotImageAlt: string;
  chatbotLabel: string;
  dashboardImageAlt: string;
  assistantLabel: string;
  assistantText: string;
  helpTitle: string;
  helpText: string;
  helpButton: string;
}

export interface DigitalShowcaseContent {
  eyebrow: string;
  title: string;
  description: string;
  headingStart: string;
  headingHighlight: string;
  features: string[];
  paragraph: string;
  mobileBadge: string;
  mobileImageAlt: string;
  websiteImageAlt: string;
  responsiveBadge: string;
}

export interface WhyUsContent {
  eyebrow: string;
  title: string;
  description: string;
  reasons: { title: string; description: string }[];
}

export interface PortfolioPreviewContent {
  eyebrow: string;
  title: string;
  description: string;
  viewAll: string;
}

export interface BuildingFutureContent {
  eyebrow: string;
  title: string;
  description: string;
  cards: { title: string; description: string }[];
}

export interface TechStackContent {
  eyebrow: string;
  title: string;
  description: string;
  groups: string[];
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
  techStackTitle: string;
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
  helpSecondary: string;
  relatedEyebrow: string;
  relatedTitle: string;
  relatedDescription: string;
  seeAll: string;
  seeAllText: string;
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
  hoursTitle: string;
  locationTitle: string;
  socialTitle: string;
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

export interface PortfolioPageContent {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
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
  portfolioTitle: string;
  portfolioDescription: string;
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
  about: AboutHomeContent;
  solutions: SolutionsContent;
  nfcShowcase: NfcShowcaseContent;
  aiServices: AiServicesContent;
  digitalShowcase: DigitalShowcaseContent;
  whyUs: WhyUsContent;
  portfolioPreview: PortfolioPreviewContent;
  buildingFuture: BuildingFutureContent;
  techStack: TechStackContent;
  cta: CtaContent;
  visuals: VisualsContent;
  serviceCard: ServiceCardContent;
  serviceDetail: ServiceDetailContent;
  areaPage: AreaPageContent;
  contactPage: ContactPageContent;
  whatsappForm: WhatsAppFormContent;
  aboutPage: AboutPageContent;
  portfolioPage: PortfolioPageContent;
  notFound: NotFoundContent;
  areas: Record<string, AreaContent>;
  services: Record<string, ServiceContent>;
  useCases: UseCaseContent[];
  projects: Record<string, ProjectContent>;
  projectCategories: Record<string, string>;
}
