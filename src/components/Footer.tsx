import LogoMark from "./LogoMark";

export default function Footer() {
  return (
    <footer className="relative z-10 flex flex-col items-start gap-4 border-t border-ink/8 px-[5vw] py-9 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-2">
        <LogoMark className="h-5 w-5 shrink-0" />
        <div className="text-[15px] font-extrabold">brewStudio</div>
      </div>
      <div className="font-mono text-[11px] tracking-[0.05em] text-ink/40">
        DIGITAL PRODUCT STUDIO · © 2026
      </div>
    </footer>
  );
}
