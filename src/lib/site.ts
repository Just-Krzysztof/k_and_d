import type { Metadata } from "next";
import { t } from "./i18n";
import { languageAlternates, localizedPath, type Locale } from "./routing";

export const SITE_URL = "https://brewstudio.pl";
export const SITE_NAME = "brewStudio";
export const HOME_TITLE =
  "Web applications, SaaS and business automation | brewStudio";
export const SITE_DESCRIPTION =
  "We build web applications, SaaS platforms and business automation. brewStudio: from idea and design to launch and product growth. Let's talk.";

export function createPageMetadata(
  locale: Locale,
  path = "",
  title = t(locale, HOME_TITLE),
  description = t(locale, SITE_DESCRIPTION),
): Metadata {
  const fullTitle = title.endsWith(`| ${SITE_NAME}`)
    ? title
    : `${title} | ${SITE_NAME}`;
  const image = {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: t(
      locale,
      "brewStudio - web applications, SaaS and business automation",
    ),
  };
  return {
    title: { absolute: fullTitle },
    description,
    alternates: {
      canonical: localizedPath(locale, path),
      languages: languageAlternates(path),
    },
    openGraph: {
      title: fullTitle,
      description,
      url: localizedPath(locale, path),
      siteName: SITE_NAME,
      locale: locale === "pl" ? "pl_PL" : "en_US",
      alternateLocale: locale === "pl" ? "en_US" : "pl_PL",
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
