import { arMeta, arServiceMeta, arNav, arFooter, arHero, arAbout, arSolutions, arNfcShowcase, arAiServices, arDigitalShowcase, arWhyUs, arPortfolioPreview, arBuildingFuture, arTechStack, arCta, arServiceCard, arServiceDetail, arAreaPage, arContactPage, arWhatsAppForm, arAboutPage, arPortfolioPage, arNotFound, arVisuals } from "./ar";
import { enMeta, enServiceMeta, enNav, enFooter, enHero, enAbout, enSolutions, enNfcShowcase, enAiServices, enDigitalShowcase, enWhyUs, enPortfolioPreview, enBuildingFuture, enTechStack, enCta, enServiceCard, enServiceDetail, enAreaPage, enContactPage, enWhatsAppForm, enAboutPage, enPortfolioPage, enNotFound, enVisuals } from "./en";
import { arAreas, arServices, arUseCases, arProjects, arProjectCategories } from "./services-ar";
import { enAreas, enServices, enUseCases, enProjects, enProjectCategories } from "./services-en";
import { DEFAULT_LOCALE, type Locale } from "./locale";
import type { Dict } from "./types";

export const enDict: Dict = {
  meta: enMeta,
  serviceMeta: enServiceMeta,
  nav: enNav,
  footer: enFooter,
  hero: enHero,
  about: enAbout,
  solutions: enSolutions,
  nfcShowcase: enNfcShowcase,
  aiServices: enAiServices,
  digitalShowcase: enDigitalShowcase,
  whyUs: enWhyUs,
  portfolioPreview: enPortfolioPreview,
  buildingFuture: enBuildingFuture,
  techStack: enTechStack,
  cta: enCta,
  visuals: enVisuals,
  serviceCard: enServiceCard,
  serviceDetail: enServiceDetail,
  areaPage: enAreaPage,
  contactPage: enContactPage,
  whatsappForm: enWhatsAppForm,
  aboutPage: enAboutPage,
  portfolioPage: enPortfolioPage,
  notFound: enNotFound,
  areas: enAreas,
  services: enServices,
  useCases: enUseCases,
  projects: enProjects,
  projectCategories: enProjectCategories,
};

export const arDict: Dict = {
  meta: arMeta,
  serviceMeta: arServiceMeta,
  nav: arNav,
  footer: arFooter,
  hero: arHero,
  about: arAbout,
  solutions: arSolutions,
  nfcShowcase: arNfcShowcase,
  aiServices: arAiServices,
  digitalShowcase: arDigitalShowcase,
  whyUs: arWhyUs,
  portfolioPreview: arPortfolioPreview,
  buildingFuture: arBuildingFuture,
  techStack: arTechStack,
  cta: arCta,
  visuals: arVisuals,
  serviceCard: arServiceCard,
  serviceDetail: arServiceDetail,
  areaPage: arAreaPage,
  contactPage: arContactPage,
  whatsappForm: arWhatsAppForm,
  aboutPage: arAboutPage,
  portfolioPage: arPortfolioPage,
  notFound: arNotFound,
  areas: arAreas,
  services: arServices,
  useCases: arUseCases,
  projects: arProjects,
  projectCategories: arProjectCategories,
};

const DICTS: Record<Locale, Dict> = {
  en: enDict,
  ar: arDict,
};

export function getDictionary(locale: Locale): Dict {
  return DICTS[locale] ?? DICTS[DEFAULT_LOCALE];
}

export { enDict as dictionaryEn, arDict as dictionaryAr };
