import polish from "./translations/pl.json";

import type { Locale } from "./routing";
export {
  locales,
  isLocale,
  localizedPath,
  languageAlternates,
} from "./routing";
export type { Locale, LocaleProps } from "./routing";

// English is the source language and the fallback for untranslated copy.
export function t(locale: Locale, text: string): string {
  return locale === "pl"
    ? ((polish as Record<string, string>)[text] ?? text)
    : text;
}

export function localize<T>(value: T, locale: Locale): T {
  if (typeof value === "string") return t(locale, value) as T;
  if (Array.isArray(value))
    return value.map((item) => localize(item, locale)) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, localize(item, locale)]),
    ) as T;
  }
  return value;
}
