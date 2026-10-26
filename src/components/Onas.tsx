import Reveal from "./Reveal";

export default function Onas() {
  return (
    <section
      id="onas"
      className="relative z-10 px-[5vw] py-16 sm:py-24 lg:py-[160px]"
    >
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-10 sm:gap-[60px] md:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <div className="mb-[18px] font-mono text-[12px] tracking-[0.1em] text-accent">
            07 · O NAS
          </div>
          <h2 className="m-0 text-[clamp(28px,3.4vw,48px)] leading-[1.08] font-extrabold tracking-[-0.02em]">
            Jeden zespół. Wspólna wizja. Produkty, które mają znaczenie.
          </h2>
        </Reveal>
        <Reveal className="pt-2">
          <p className="m-0 mb-6 text-[19px] leading-[1.7] text-ink/70">
            Za brewStudio stoi zespół specjalistów, których łączy doświadczenie
            w projektowaniu i tworzeniu produktów cyfrowych - od pierwszego
            pomysłu, przez strategię i development, aż po wdrożenie gotowego
            rozwiązania.
          </p>
          <p className="m-0 mb-6 text-[19px] leading-[1.7] text-ink/70">
            Nie jesteśmy tylko wykonawcami kodu. Jesteśmy partnerem
            technologicznym, który rozumie cele biznesowe i przekłada je na
            skuteczne rozwiązania.
          </p>
          <p className="m-0 text-[19px] leading-[1.7] text-ink/70">
            Tworzymy produkty, które nie tylko działają, ale realnie wspierają
            rozwój biznesu naszych klientów.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
