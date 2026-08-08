export type Locale = "en" | "ar";

export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_COOKIE = "technest-locale";
export const LOCALE_STORAGE_KEY = "technest-locale";

export const LOCALES: Locale[] = ["en", "ar"];

export function isLocale(value: unknown): value is Locale {
  return value === "en" || value === "ar";
}

export function resolveLocale(value: string | undefined | null): Locale {
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

export function dirFor(locale: Locale): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}

export function htmlLangFor(locale: Locale): string {
  return locale === "ar" ? "ar" : "en";
}
