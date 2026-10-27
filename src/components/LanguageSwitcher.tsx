"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type LocaleProps } from "@/lib/routing";
import { t } from "@/lib/i18n";

export default function LanguageSwitcher({ locale }: LocaleProps) {
  const pathname = usePathname();
  const suffix = pathname.replace(/^\/(en|pl)(?=\/|$)/, "");
  return (
    <div
      role="group"
      aria-label={t(locale, "Page language")}
      className="flex shrink-0 items-center gap-0.5 text-xs font-bold"
    >
      {locales.map((language) => (
        <Link
          key={language}
          href={`/${language}${suffix}`}
          hrefLang={language}
          lang={language}
          aria-label={language === "pl" ? "Polski" : "English"}
          aria-current={language === locale ? "page" : undefined}
          className={`flex size-11 aspect-square flex-none items-center justify-center rounded-full p-0 leading-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${language === locale ? "bg-ink/8 text-ink" : "text-ink/55 hover:text-accent"}`}
        >
          {language.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
