import Reveal from "./Reveal";

export default function KimJestesmy() {
  return (
    <section
      id="kim-jestesmy"
      className="relative z-10 border-t border-ink/8 px-[5vw] py-16 sm:py-24 lg:py-[160px]"
    >
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-10 sm:gap-[60px] md:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <div className="mb-[18px] font-mono text-[12px] tracking-[0.1em] text-accent">
            01 · KIM JESTEŚMY
          </div>
          <h2 className="m-0 text-[clamp(28px,3.4vw,48px)] leading-[1.08] font-extrabold tracking-[-0.02em]">
            Studio tworzące produkty cyfrowe i rozwiązania technologiczne.
          </h2>
        </Reveal>
        <Reveal className="pt-2">
          <p className="m-0 mb-6 text-[19px] leading-[1.7] text-ink/70">
            Pomagamy firmom zamieniać pomysły w działające produkty, rozwijać
            istniejące systemy oraz budować nowoczesne rozwiązania dopasowane
            do realnych potrzeb biznesowych.
          </p>
          <p className="m-0 text-[19px] leading-[1.7] text-ink/70">
            Nie skupiamy się wyłącznie na pisaniu kodu. Naszym celem jest
            zrozumienie problemu, zaprojektowanie odpowiedniego rozwiązania i
            dostarczenie produktu, który wnosi realną wartość.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
