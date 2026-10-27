import { t, type LocaleProps } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function Quote({ locale }: LocaleProps) {
  return (
    <section className="relative z-10 bg-dark px-[5vw] py-14 sm:py-20 lg:py-[100px] text-bg">
      <Reveal className="mx-auto max-w-[900px] text-center">
        <span className="mb-3 block text-5xl leading-none text-accent-light">
          &ldquo;
        </span>
        <p className="m-0 text-[clamp(22px,3vw,34px)] leading-[1.4] font-semibold tracking-[-0.01em]">
          {t(
            locale,
            "Experience across different products helps us understand your business faster and propose the right solution.",
          )}
        </p>
      </Reveal>
    </section>
  );
}
