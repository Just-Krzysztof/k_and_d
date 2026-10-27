import { t, localizedPath, type LocaleProps } from "@/lib/i18n";
import Link from "next/link";
import { getContent } from "@/lib/content";
import Reveal from "./Reveal";

export default function Capabilities({ locale }: LocaleProps) {
  const { capabilities } = getContent(locale);
  return (
    <section
      id="capabilities"
      className="relative z-10 px-[5vw] pb-16 sm:pb-24 lg:pb-[160px]"
    >
      <div className="mx-auto max-w-[1300px]">
        <Reveal className="mb-8 max-w-[700px] sm:mb-[60px]">
          <div className="mb-[18px] font-mono text-[12px] tracking-[0.1em] text-accent">
            {t(locale, "04 · SERVICES")}
          </div>
          <h2 className="m-0 text-[clamp(28px,3.4vw,48px)] font-extrabold tracking-[-0.02em]">
            {t(
              locale,
              "Web applications, SaaS platforms and automation for business.",
            )}
          </h2>
        </Reveal>

        <div className="border-t border-ink/12">
          {capabilities.map((c, i) => (
            <Reveal
              key={c.title}
              index={i}
              className="flex items-start justify-between gap-6 border-b border-ink/12 py-[30px] pl-1 transition-[padding-left] duration-[350ms] hover:pl-6"
            >
              <div className="max-w-[800px]">
                <h3 className="text-[clamp(24px,3.6vw,42px)] font-bold tracking-[-0.02em]">
                  {c.title}
                </h3>
                <p className="mt-3 max-w-[650px] text-base leading-relaxed text-ink/65">
                  {c.description}
                </p>
                {c.href && (
                  <Link
                    href={localizedPath(locale, c.href)}
                    className="mt-4 inline-block font-semibold underline underline-offset-4"
                  >
                    {t(locale, "Explore the service:")} {c.title.toLowerCase()}{" "}
                    →
                  </Link>
                )}
              </div>
              <span
                aria-hidden="true"
                className="font-mono text-[13px] text-ink/35"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
