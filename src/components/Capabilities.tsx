import { capabilities } from "@/lib/content";
import Reveal from "./Reveal";

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="relative z-10 px-[5vw] pb-16 sm:pb-24 lg:pb-[160px]"
    >
      <div className="mx-auto max-w-[1300px]">
        <Reveal className="mb-8 max-w-[700px] sm:mb-[60px]">
          <div className="mb-[18px] font-mono text-[12px] tracking-[0.1em] text-accent">
            04 · CAPABILITIES
          </div>
          <h2 className="m-0 text-[clamp(28px,3.4vw,48px)] font-extrabold tracking-[-0.02em]">
            Nie opisujemy technologii. Opisujemy problemy, które potrafimy
            rozwiązać.
          </h2>
        </Reveal>

        <div className="border-t border-ink/12">
          {capabilities.map((c, i) => (
            <Reveal
              key={c}
              index={i}
              className="flex cursor-pointer items-center justify-between border-b border-ink/12 py-[30px] pl-1 transition-[padding-left] duration-[350ms] hover:pl-6"
            >
              <span className="text-[clamp(24px,3.6vw,42px)] font-bold tracking-[-0.02em]">
                {c}
              </span>
              <span className="font-mono text-[13px] text-ink/35">{i}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
