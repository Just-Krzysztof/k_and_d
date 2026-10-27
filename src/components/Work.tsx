import { t, type LocaleProps } from "@/lib/i18n";
import { getContent } from "@/lib/content";
import Reveal from "./Reveal";

export default function Work({ locale }: LocaleProps) {
  const { workItems } = getContent(locale);
  return (
    <section
      id="work"
      className="relative z-10 px-[5vw] py-16 sm:py-24 lg:py-[160px]"
    >
      <div className="mx-auto max-w-[1300px]">
        <Reveal className="mb-8 max-w-[760px] sm:mb-[60px]">
          <div className="mb-[18px] font-mono text-[12px] tracking-[0.1em] text-accent">
            {t(locale, "06 · SELECTED STORIES")}
          </div>
          <h2 className="m-0 mb-5 text-[clamp(28px,3.4vw,48px)] font-extrabold tracking-[-0.02em]">
            {t(locale, "Our work goes beyond a traditional portfolio.")}
          </h2>
          <p className="m-0 text-[17px] leading-[1.7] text-ink/60">
            {t(
              locale,
              "We share the client's challenge, the solution we designed and the business outcome. Our portfolio supports our expertise; it is only part of the story.",
            )}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-0.5 border border-ink/10 bg-ink/10 md:grid-cols-3">
          {workItems.map((w, i) => (
            <Reveal
              key={w.title}
              index={i}
              className="flex flex-col gap-[22px] bg-bg px-6 py-8 transition-transform duration-[400ms] hover:-translate-y-1.5 sm:min-h-[420px] sm:px-8 sm:py-10"
            >
              <div
                className="flex h-[130px] w-full items-center justify-center border border-dashed border-ink/20"
                style={{
                  background:
                    "repeating-linear-gradient(135deg, rgba(20,20,15,0.05) 0px, rgba(20,20,15,0.05) 10px, transparent 10px, transparent 20px)",
                }}
              >
                <span className="font-mono text-[11px] text-ink/40">
                  {t(locale, "case study visual")}
                </span>
              </div>
              <div className="font-mono text-[11px] tracking-[0.08em] text-accent">
                {w.tag}
              </div>
              <h3 className="m-0 text-[21px] leading-[1.25] font-bold tracking-[-0.01em]">
                {w.title}
              </h3>
              <div className="mt-auto flex flex-col gap-2.5 border-t border-ink/10 pt-4">
                <p className="m-0 text-[13.5px] leading-[1.6] text-ink/55">
                  <b className="text-ink/80">Problem:</b> {w.problem}
                </p>
                <p className="m-0 text-[13.5px] leading-[1.6] text-ink/55">
                  <b className="text-ink/80">{t(locale, "Outcome:")}</b>{" "}
                  {w.effect}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
