import Reveal from "./Reveal";

export default function Quote() {
  return (
    <section className="relative z-10 bg-dark px-[5vw] py-14 sm:py-20 lg:py-[100px] text-bg">
      <Reveal className="mx-auto max-w-[900px] text-center">
        <span className="mb-3 block text-5xl leading-none text-accent-light">
          &ldquo;
        </span>
        <p className="m-0 text-[clamp(22px,3vw,34px)] leading-[1.4] font-semibold tracking-[-0.01em]">
          Doświadczenie zdobyte przy budowie różnych produktów pozwala nam
          szybciej zrozumieć Twój biznes i zaproponować odpowiednie
          rozwiązanie.
        </p>
      </Reveal>
    </section>
  );
}
