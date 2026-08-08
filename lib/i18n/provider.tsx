"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { getDictionary } from "./index";
import {
  LOCALE_COOKIE,
  LOCALE_STORAGE_KEY,
  dirFor,
  htmlLangFor,
  type Locale,
} from "./locale";
import type { Dict } from "./types";

interface LocaleContextValue {
  locale: Locale;
  dict: Dict;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

function applyLocaleToDocument(locale: Locale) {
  const root = document.documentElement;
  root.lang = htmlLangFor(locale);
  root.dir = dirFor(locale);
}

export function LocaleProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const dict = useMemo(() => getDictionary(locale), [locale]);

  const setLocale = useCallback(
    (next: Locale) => {
      setLocaleState(next);
      applyLocaleToDocument(next);
      document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
      try {
        window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
      } catch {
        // localStorage unavailable (e.g. private mode) — cookie is enough
      }
      router.refresh();
    },
    [router],
  );

  const toggleLocale = useCallback(() => {
    setLocale(locale === "en" ? "ar" : "en");
  }, [locale, setLocale]);

  useEffect(() => {
    applyLocaleToDocument(locale);
  }, [locale]);

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, dict, setLocale, toggleLocale }),
    [locale, dict, setLocale, toggleLocale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}

export function useDictionary(): Dict {
  return useLocale().dict;
}
