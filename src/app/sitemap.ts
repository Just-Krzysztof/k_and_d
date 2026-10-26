import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  // Omit lastModified until content has a maintained publication/update date.
  return [
    { url: SITE_URL },
    ...services.map(({ slug }) => ({ url: `${SITE_URL}/uslugi/${slug}` })),
  ];
}
