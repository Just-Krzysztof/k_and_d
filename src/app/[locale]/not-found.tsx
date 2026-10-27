"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isLocale, localizedPath, t } from "@/lib/i18n";

export default function NotFoundPage() {
  const segment = usePathname().split("/")[1];
  const locale = isLocale(segment) ? segment : "en";
  return (
    <main id="main-content" className="mx-auto max-w-3xl px-6 py-32">
      <p className="mb-4 font-mono text-accent">404</p>
      <h1 className="mb-6 text-4xl font-bold">{t(locale, "Page not found")}</h1>
      <p className="mb-8 text-lg">
        {t(locale, "This page does not exist or has moved.")}
      </p>
      <Link
        href={localizedPath(locale)}
        className="font-semibold underline underline-offset-4"
      >
        {t(locale, "Back to home")}
      </Link>
    </main>
  );
}
