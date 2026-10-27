export const locales = ["en", "pl"] as const;
export type Locale = (typeof locales)[number];
export type LocaleProps = { locale: Locale };

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}

export function localizedPath(locale: Locale, path = ""): string {
  return `/${locale}${path}`;
}

export function languageAlternates(path = "") {
  return { en: `/en${path}`, pl: `/pl${path}`, "x-default": `/en${path}` };
}

// Only the highest-priority browser language selects the initial version.
// Unsupported languages and requests without a language fall back to English.
export function detectLocale(acceptLanguage: string | null): Locale {
  const preferences = (acceptLanguage ?? "")
    .split(",")
    .map((entry, index) => {
      const [language, ...parameters] = entry.trim().toLowerCase().split(";");
      const quality = parameters.find((parameter) =>
        parameter.trim().startsWith("q="),
      );
      const weight = quality ? Number(quality.trim().slice(2)) : 1;
      return { language, weight, index };
    })
    .filter(
      ({ language, weight }) =>
        language && Number.isFinite(weight) && weight > 0 && weight <= 1,
    )
    .sort((a, b) => b.weight - a.weight || a.index - b.index);
  return preferences[0]?.language.split("-")[0] === "pl" ? "pl" : "en";
}

export const legacyServicePaths: Record<string, string> = {
  "/uslugi/aplikacje-webowe": "/pl/services/web-applications",
  "/uslugi/platformy-saas": "/pl/services/saas-platforms",
  "/uslugi/automatyzacja-procesow": "/pl/services/process-automation",
};
