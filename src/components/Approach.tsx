import { steps } from "@/lib/content";
import Reveal from "./Reveal";

export default function Approach() {
  return (
    <section
      id="approach"
      className="relative z-10 bg-tint px-[5vw] py-16 sm:py-24 lg:py-[160px]"
    >
      <div className="mx-auto max-w-[1300px]">
        <Reveal className="mb-10 sm:mb-20">
          <div className="mb-[18px] font-mono text-[12px] tracking-[0.1em] text-accent">
            05 · JAK PRACUJEMY
          </div>
          <h2 className="m-0 max-w-[700px] text-[clamp(28px,3.4vw,48px)] font-extrabold tracking-[-0.02em]">
            Każdy projekt przechodzi przez podobny proces.
          </h2>
        </Reveal>

        <div className="relative max-w-[700px] pl-[60px]">
          {steps.map((s, i) => (
            <Reveal
              key={s.n}
              index={i}
              className={`relative flex items-start gap-7 ${i === steps.length - 1 ? "" : "pb-14"}`}
            >
              {i !== steps.length - 1 && (
                <div className="absolute top-[42px] -left-[41px] bottom-0 w-0.5 bg-ink/12" />
              )}
              <div className="absolute top-0.5 -left-[60px] flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent bg-bg font-mono text-[13px] font-medium text-accent">
                {s.n}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="m-0 text-2xl font-bold tracking-[-0.01em] md:text-[26px]">
                  {s.title}
                </h3>
                <p className="m-0 text-[15px] leading-[1.6] text-ink/60">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
