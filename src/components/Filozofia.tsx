import Reveal from "./Reveal";

export default function Filozofia() {
  return (
    <section
      id="filozofia"
      className="relative z-10 bg-dark px-[5vw] pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-[120px] lg:pb-[160px] text-bg"
    >
      <div className="mx-auto max-w-[1300px]">
        <Reveal className="mb-[18px] font-mono text-[12px] tracking-[0.1em] text-accent-light">
          02 · FILOZOFIA
        </Reveal>

        <Reveal className="mb-12 grid grid-cols-1 gap-10 sm:mb-[90px] sm:gap-[60px] md:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="m-0 mb-7 text-[22px] leading-[1.6] font-medium">
              Nie wierzymy, że każdy biznes potrzebuje tego samego
              rozwiązania.
            </p>
            <p className="m-0 mb-5 text-[17px] leading-[1.7] text-bg/60">
              Każdy projekt zaczyna się od zrozumienia:
            </p>
            <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
              {["celów biznesowych", "użytkowników", "procesów", "wyzwań"].map(
                (item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[17px] text-bg/85"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-light" />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="flex items-end">
            <p className="m-0 text-[17px] leading-[1.7] text-bg/60">
              Dopiero później wybieramy technologię. Technologia jest
              narzędziem, nie celem samym w sobie.
            </p>
          </div>
        </Reveal>

        <Reveal className="border-t border-bg/15 pt-8 sm:pt-[60px]">
          <h2 className="m-0 text-[clamp(32px,5.6vw,88px)] leading-[1.02] font-extrabold tracking-[-0.03em]">
            Nie robimy produktów na szybko.
            <br />
            <span className="text-accent-light">Warzymy je z namysłem.</span>
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
