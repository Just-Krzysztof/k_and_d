import { t, type LocaleProps } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function AboutStudio({ locale }: LocaleProps) {
  return (
    <section
      id="about-studio"
      className="relative z-10 border-t border-ink/8 px-[5vw] py-16 sm:py-24 lg:py-[160px]"
    >
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-10 sm:gap-[60px] md:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <div className="mb-[18px] font-mono text-[12px] tracking-[0.1em] text-accent">
            {t(locale, "01 · WHO WE ARE")}
          </div>
          <h2 className="m-0 text-[clamp(28px,3.4vw,48px)] leading-[1.08] font-extrabold tracking-[-0.02em]">
            {t(
              locale,
              "A studio building digital products and technology solutions.",
            )}
          </h2>
        </Reveal>
        <Reveal className="pt-2">
          <p className="m-0 mb-6 text-[19px] leading-[1.7] text-ink/70">
            {t(
              locale,
              "We help businesses turn ideas into working products, develop existing systems and build modern solutions tailored to real business needs.",
            )}
          </p>
          <p className="m-0 text-[19px] leading-[1.7] text-ink/70">
            {t(
              locale,
              "We do more than write code. We aim to understand the problem, design the right solution and deliver a product that creates real value.",
            )}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
