import { t, type LocaleProps } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function Team({ locale }: LocaleProps) {
  return (
    <section
      id="team"
      className="relative z-10 px-[5vw] py-16 sm:py-24 lg:py-[160px]"
    >
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-10 sm:gap-[60px] md:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <div className="mb-[18px] font-mono text-[12px] tracking-[0.1em] text-accent">
            {t(locale, "07 · OUR TEAM")}
          </div>
          <h2 className="m-0 text-[clamp(28px,3.4vw,48px)] leading-[1.08] font-extrabold tracking-[-0.02em]">
            {t(locale, "One team. A shared vision. Products that matter.")}
          </h2>
        </Reveal>
        <Reveal className="pt-2">
          <p className="m-0 mb-6 text-[19px] leading-[1.7] text-ink/70">
            {t(
              locale,
              "Behind brewStudio is a team of specialists with shared experience in designing and building digital products - from the first idea, through strategy and development, to launching the finished solution.",
            )}
          </p>
          <p className="m-0 mb-6 text-[19px] leading-[1.7] text-ink/70">
            {t(
              locale,
              "We are more than code delivery specialists. We are a technology partner that understands business goals and turns them into effective solutions.",
            )}
          </p>
          <p className="m-0 text-[19px] leading-[1.7] text-ink/70">
            {t(
              locale,
              "We build products that do more than work: they actively support the growth of our clients' businesses.",
            )}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
