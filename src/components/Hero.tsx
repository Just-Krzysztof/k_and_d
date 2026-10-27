import { t, type LocaleProps } from "@/lib/i18n";
import MagneticButton from "./MagneticButton";

export default function Hero({ locale }: LocaleProps) {
  return (
    <section className="relative z-10 flex min-h-0 flex-col justify-center px-[5vw] pt-36 pb-24 sm:pt-44 sm:pb-28 lg:min-h-[85vh] lg:pt-24 lg:pb-0">
      <div className="mb-7 flex items-center gap-2.5 font-mono text-[12px] tracking-[0.12em] text-accent">
        <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-accent" />
        {t(locale, "DIGITAL PRODUCT STUDIO")}
      </div>

      <h1 className="m-0 max-w-[1300px] text-[clamp(40px,7.2vw,124px)] leading-[0.98] font-extrabold tracking-[-0.035em]">
        <span className="block">{t(locale, "We build")} </span>
        <span className="block">{t(locale, "web applications")} </span>
        <span className="block text-accent">
          {t(locale, "and digital products.")}
        </span>
      </h1>

      <p className="m-0 mt-9 max-w-[620px] text-[19px] leading-[1.6] text-ink/62">
        {t(
          locale,
          "We brew products with care. We design and develop web applications, SaaS platforms and business process automation. From the first idea and design to launch and ongoing development.",
        )}
      </p>

      <div className="mt-11 flex flex-wrap items-center gap-4">
        <MagneticButton
          href="#contact"
          className="inline-block rounded-full bg-ink px-[30px] py-4 text-[14px] font-bold text-bg will-change-transform"
        >
          {t(locale, "Tell us about your idea")}
        </MagneticButton>
        <a
          href="#about-studio"
          className="inline-flex items-center gap-2 px-2.5 py-4 text-[14px] font-semibold text-ink/55"
        >
          {t(locale, "Explore our approach ↓")}
        </a>
      </div>

      <div className="absolute right-[5vw] bottom-[60px] hidden h-16 w-16 items-center justify-center rounded-full border border-ink/15 sm:flex">
        <div className="relative h-full w-full animate-spin-slow">
          <span className="absolute top-[2px] left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent" />
        </div>
      </div>
    </section>
  );
}
