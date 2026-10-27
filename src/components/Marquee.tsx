import { getContent } from "@/lib/content";
import type { LocaleProps } from "@/lib/i18n";

const REPEATS = 4;

export default function Marquee({ locale }: LocaleProps) {
  const half = getContent(locale).marqueeText.repeat(REPEATS);
  return (
    <div className="relative z-10 overflow-hidden border-t border-ink/8 bg-bg py-[22px] whitespace-nowrap">
      <div className="inline-flex animate-marquee">
        <span className="shrink-0 px-6 text-[15px] font-bold tracking-[-0.01em] text-ink/25">
          {half}
        </span>
        <span className="shrink-0 px-6 text-[15px] font-bold tracking-[-0.01em] text-ink/25">
          {half}
        </span>
      </div>
    </div>
  );
}
