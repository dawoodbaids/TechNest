import { arMeta, arServiceMeta, arNav, arFooter, arHero, arSolutions, arWhyUs, arCta, arServiceCard, arServiceDetail, arAreaPage, arContactPage, arWhatsAppForm, arAboutPage, arNotFound, arVisuals } from "./ar";
import { enMeta, enServiceMeta, enNav, enFooter, enHero, enSolutions, enWhyUs, enCta, enServiceCard, enServiceDetail, enAreaPage, enContactPage, enWhatsAppForm, enAboutPage, enNotFound, enVisuals } from "./en";
import { arAreas, arServices, arUseCases } from "./services-ar";
import { enAreas, enServices, enUseCases } from "./services-en";
import { DEFAULT_LOCALE, type Locale } from "./locale";
import type { Dict } from "./types";

export const enDict: Dict = {
  meta: enMeta,
  serviceMeta: enServiceMeta,
  nav: enNav,
  footer: enFooter,
  hero: enHero,
  solutions: enSolutions,
  whyUs: enWhyUs,
  cta: enCta,
  visuals: enVisuals,
  serviceCard: enServiceCard,
  serviceDetail: enServiceDetail,
  areaPage: enAreaPage,
  contactPage: enContactPage,
  whatsappForm: enWhatsAppForm,
  aboutPage: enAboutPage,
  notFound: enNotFound,
  areas: enAreas,
  services: enServices,
  useCases: enUseCases,
};

export const arDict: Dict = {
  meta: arMeta,
  serviceMeta: arServiceMeta,
  nav: arNav,
  footer: arFooter,
  hero: arHero,
  solutions: arSolutions,
  whyUs: arWhyUs,
  cta: arCta,
  visuals: arVisuals,
  serviceCard: arServiceCard,
  serviceDetail: arServiceDetail,
  areaPage: arAreaPage,
  contactPage: arContactPage,
  whatsappForm: arWhatsAppForm,
  aboutPage: arAboutPage,
  notFound: arNotFound,
  areas: arAreas,
  services: arServices,
  useCases: arUseCases,
};

const DICTS: Record<Locale, Dict> = {
  en: enDict,
  ar: arDict,
};

export function getDictionary(locale: Locale): Dict {
  return DICTS[locale] ?? DICTS[DEFAULT_LOCALE];
}

export { enDict as dictionaryEn, arDict as dictionaryAr };
