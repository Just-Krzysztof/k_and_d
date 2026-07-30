"use client";

import { useEffect, useRef } from "react";

export default function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isFine =
      window.matchMedia && window.matchMedia("(pointer:fine)").matches;
    if (!isFine) {
      if (ref.current) ref.current.style.display = "none";
      return;
    }
    const onMove = (e: globalThis.MouseEvent) => {
      const el = ref.current;
      if (el) {
        el.style.transform = `translate(${e.clientX - 260}px, ${e.clientY - 260}px)`;
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 z-[5] h-[520px] w-[520px] rounded-full will-change-transform"
      style={{
        background:
          "radial-gradient(circle, oklch(0.94 0.03 258 / 0.9) 0%, oklch(0.94 0.03 258 / 0) 70%)",
        transform: "translate(-260px, -260px)",
        transition: "opacity .3s",
      }}
    />
  );
}
