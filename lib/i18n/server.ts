import { cookies } from "next/headers";
import { getDictionary } from "./index";
import { LOCALE_COOKIE, resolveLocale, type Locale } from "./locale";
import type { Dict } from "./types";

export async function getServerLocale(): Promise<Locale> {
  const store = await cookies();
  return resolveLocale(store.get(LOCALE_COOKIE)?.value);
}

export async function getServerDictionary(): Promise<Dict> {
  return getDictionary(await getServerLocale());
}
