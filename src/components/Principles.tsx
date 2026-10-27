import { t, type LocaleProps } from "@/lib/i18n";
import { getContent } from "@/lib/content";
import Reveal from "./Reveal";

export default function Principles({ locale }: LocaleProps) {
  const { pillars } = getContent(locale);
  return (
    <section
      id="principles"
      className="relative z-10 px-[5vw] py-16 sm:py-24 lg:py-[160px]"
    >
      <div className="mx-auto max-w-[1300px]">
        <Reveal className="mb-10 sm:mb-[70px]">
          <div className="mb-[18px] font-mono text-[12px] tracking-[0.1em] text-accent">
            {t(locale, "03 · WHAT SETS US APART")}
          </div>
          <h2 className="m-0 max-w-[700px] text-[clamp(28px,3.4vw,48px)] font-extrabold tracking-[-0.02em]">
            {t(locale, "Four principles behind every project.")}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-px border border-ink/10 bg-ink/10 md:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal
              key={p.n}
              index={i}
              className="bg-bg p-6 sm:p-12 transition-colors duration-300 hover:bg-ink/[0.03]"
            >
              <div className="mb-5 font-mono text-[13px] text-accent">
                {p.n}
              </div>
              <h3 className="m-0 mb-3.5 text-2xl font-bold tracking-[-0.01em]">
                {p.title}
              </h3>
              <p className="m-0 max-w-[420px] text-[16px] leading-[1.65] text-ink/60">
                {p.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
