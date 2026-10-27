import { t, localizedPath, type LocaleProps } from "@/lib/i18n";
import Link from "next/link";
import { getContent } from "@/lib/content";
import MagneticButton from "./MagneticButton";
import LogoMark from "./LogoMark";
import MobileNav from "./MobileNav";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Nav({ locale }: LocaleProps) {
  const { navLinks } = getContent(locale);
  return (
    <nav className="fixed top-0 right-0 left-0 z-[100] flex items-center justify-between border-b border-ink/6 bg-bg/72 px-[5vw] py-[22px] backdrop-blur-[10px]">
      <Link
        href={localizedPath(locale)}
        aria-label={t(locale, "brewStudio - home")}
        className="flex items-center gap-2.5"
      >
        <LogoMark className="h-6.5 w-6.5 shrink-0" />
        <div className="text-[18px] font-extrabold tracking-[-0.02em]">
          brew<span className="text-accent">Studio</span>
        </div>
      </Link>
      <div className="hidden items-center gap-4 xl:gap-7 text-[13px] font-medium text-ink/60 lg:flex">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={localizedPath(locale, link.href)}
            className="transition-colors duration-200 hover:text-ink"
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-2 lg:gap-4">
        <LanguageSwitcher locale={locale} />
        <MagneticButton
          href={localizedPath(locale, "#contact")}
          className="hidden rounded-full bg-ink px-5 py-2.5 text-[13px] font-bold text-bg will-change-transform lg:inline-block"
        >
          {t(locale, "Let's talk")}
        </MagneticButton>
        <MobileNav locale={locale} />
      </div>
    </nav>
  );
}
