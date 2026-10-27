import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getServices } from "@/lib/services";
import { locales, languageAlternates, localizedPath } from "@/lib/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    ...getServices("en").map(({ slug }) => `/services/${slug}`),
  ];
  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${SITE_URL}${localizedPath(locale, path)}`,
      alternates: {
        languages: Object.fromEntries(
          Object.entries(languageAlternates(path)).map(([language, href]) => [
            language,
            `${SITE_URL}${href}`,
          ]),
        ),
      },
    })),
  );
}
