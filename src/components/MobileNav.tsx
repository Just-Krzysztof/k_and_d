"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { capabilities, navLinks } from "@/lib/content";

export default function MobileNav() {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const summaryRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && detailsRef.current?.open) {
        detailsRef.current.open = false;
        summaryRef.current?.focus();
      }
    };
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (event.target instanceof Node && !detailsRef.current?.contains(event.target)) {
        if (detailsRef.current) detailsRef.current.open = false;
      }
    };
    const desktop = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (desktop.matches && detailsRef.current) detailsRef.current.open = false;
    };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsideClick);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, []);

  function closeMenu() {
    if (detailsRef.current) detailsRef.current.open = false;
  }

  return (
    <details ref={detailsRef} className="group md:hidden">
      <summary
        ref={summaryRef}
        aria-controls="mobile-navigation"
        className="flex min-h-11 min-w-11 cursor-pointer list-none items-center justify-center gap-2 rounded-full border border-ink/15 px-3 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent [&::-webkit-details-marker]:hidden"
      >
        Menu
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M4 7h16M4 12h16M4 17h16" className="group-open:hidden" />
          <path d="m6 6 12 12M18 6 6 18" className="hidden group-open:block" />
        </svg>
      </summary>
      <div id="mobile-navigation" className="absolute top-full right-0 left-0 max-h-[calc(100dvh-90px)] overflow-y-auto overscroll-contain border-b border-ink/12 bg-bg px-[5vw] pt-3 pb-6 shadow-lg">
        <ul className="grid grid-cols-2 gap-x-5 border-b border-ink/12 pb-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={`/${link.href}`} onClick={closeMenu} className="block py-3 text-base font-semibold hover:text-accent">{link.label}</Link>
            </li>
          ))}
        </ul>
        <p className="mt-5 mb-2 font-mono text-xs tracking-wider text-ink/60">POZNAJ NASZE USŁUGI</p>
        <ul>
          {capabilities.filter((item) => item.href).map((item) => (
            <li key={item.href}>
              <Link href={item.href!} onClick={closeMenu} className="block py-3 text-base hover:text-accent">{item.title} →</Link>
            </li>
          ))}
        </ul>
        <Link href="/#kontakt" onClick={closeMenu} className="mt-4 block rounded-full bg-ink px-5 py-3 text-center font-semibold text-bg">Porozmawiajmy</Link>
      </div>
    </details>
  );
}
