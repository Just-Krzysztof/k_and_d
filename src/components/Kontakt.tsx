import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";

export default function Kontakt() {
  return (
    <section
      id="kontakt"
      className="relative z-10 overflow-hidden px-[5vw] pt-20 pb-16 sm:pt-32 sm:pb-24 lg:pt-[180px] lg:pb-[140px]"
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-50">
        <div className="h-[900px] w-[900px] rounded-full border border-ink/6" />
      </div>
      <Reveal className="relative mx-auto max-w-[1000px] text-center">
        <div className="mb-[22px] font-mono text-[12px] tracking-[0.1em] text-accent">
          08 · ZACZNIJMY
        </div>
        <h2 className="m-0 mb-[30px] text-[clamp(36px,7vw,104px)] leading-[1.02] font-extrabold tracking-[-0.035em]">
          Zbudujmy coś <span className="text-accent">wartościowego.</span>
        </h2>
        <p className="mx-auto mb-11 max-w-[560px] text-[19px] leading-[1.6] text-ink/60">
          Sprawdźmy, jak możemy pomóc. Opowiedz nam o swoim pomyśle.
          Porozmawiamy o Twoim produkcie.
        </p>
        <MagneticButton
          href="mailto:hello@brewstudio.pl"
          className="inline-block rounded-full bg-ink px-10 py-5 text-[16px] font-bold text-bg will-change-transform"
        >
          hello@brewstudio.pl
        </MagneticButton>
      </Reveal>
    </section>
  );
}
