import { t, type LocaleProps } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function Philosophy({ locale }: LocaleProps) {
  return (
    <section
      id="philosophy"
      className="relative z-10 bg-dark px-[5vw] pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-[120px] lg:pb-[160px] text-bg"
    >
      <div className="mx-auto max-w-[1300px]">
        <Reveal className="mb-[18px] font-mono text-[12px] tracking-[0.1em] text-accent-light">
          {t(locale, "02 · PHILOSOPHY")}
        </Reveal>

        <Reveal className="mb-12 grid grid-cols-1 gap-10 sm:mb-[90px] sm:gap-[60px] md:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="m-0 mb-7 text-[22px] leading-[1.6] font-medium">
              {t(
                locale,
                "We don't believe every business needs the same solution.",
              )}
            </p>
            <p className="m-0 mb-5 text-[17px] leading-[1.7] text-bg/60">
              {t(locale, "Every project starts with understanding:")}
            </p>
            <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
              {["business goals", "users", "processes", "challenges"].map(
                (item) => (
                  <li
                    key={t(locale, item)}
                    className="flex items-center gap-3 text-[17px] text-bg/85"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-light" />
                    {t(locale, item)}
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="flex items-end">
            <p className="m-0 text-[17px] leading-[1.7] text-bg/60">
              {t(
                locale,
                "Only then do we choose the technology. Technology is a tool, not an end in itself.",
              )}
            </p>
          </div>
        </Reveal>

        <Reveal className="border-t border-bg/15 pt-8 sm:pt-[60px]">
          <h2 className="m-0 text-[clamp(32px,5.6vw,88px)] leading-[1.02] font-extrabold tracking-[-0.03em]">
            {t(locale, "We don't rush products.")}
            <br />
            <span className="text-accent-light">
              {t(locale, "We brew them with care.")}
            </span>
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
