import { navLinks } from "@/lib/content";
import MagneticButton from "./MagneticButton";

export default function Nav() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-[100] flex items-center justify-between border-b border-ink/6 bg-bg/72 px-[5vw] py-[22px] backdrop-blur-[10px]">
      <div className="text-[18px] font-extrabold tracking-[-0.02em]">
        brew<span className="text-accent">Studio</span>
      </div>
      <div className="hidden items-center gap-7 text-[13px] font-medium text-ink/60 md:flex">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="transition-colors duration-200 hover:text-ink"
          >
            {link.label}
          </a>
        ))}
      </div>
      <MagneticButton
        href="#kontakt"
        className="inline-block rounded-full bg-ink px-5 py-2.5 text-[13px] font-bold text-bg will-change-transform"
      >
        Porozmawiajmy
      </MagneticButton>
    </nav>
  );
}
