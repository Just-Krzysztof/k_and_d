"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

const wordVariant = {
  hidden: { opacity: 0, y: "1.1em", rotate: 2 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] as const },
  },
};

const fadeVariant = {
  hidden: { opacity: 0, y: "1.1em" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <section className="relative z-10 flex min-h-0 flex-col justify-center px-[5vw] pt-36 pb-24 sm:pt-44 sm:pb-28 lg:min-h-[85vh] lg:pt-0 lg:pb-0">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeVariant}
        transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
        className="mb-7 flex items-center gap-2.5 font-mono text-[12px] tracking-[0.12em] text-accent"
      >
        <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-accent" />
        DIGITAL PRODUCT STUDIO
      </motion.div>

      <h1 className="m-0 max-w-[1300px] text-[clamp(40px,7.2vw,124px)] leading-[0.98] font-extrabold tracking-[-0.035em]">
        <span className="block overflow-hidden">
          <motion.span
            initial="hidden"
            animate="visible"
            variants={wordVariant}
            transition={{ ...wordVariant.visible.transition, delay: 0.15 }}
            className="inline-block"
          >
            Warzymy
          </motion.span>
        </span>
        <span className="block overflow-hidden">
          <motion.span
            initial="hidden"
            animate="visible"
            variants={wordVariant}
            transition={{ ...wordVariant.visible.transition, delay: 0.3 }}
            className="inline-block"
          >
            cyfrowe produkty,
          </motion.span>
        </span>
        <span className="block overflow-hidden">
          <motion.span
            initial="hidden"
            animate="visible"
            variants={wordVariant}
            transition={{ ...wordVariant.visible.transition, delay: 0.45 }}
            className="inline-block text-accent"
          >
            nie kolejne strony.
          </motion.span>
        </span>
      </h1>

      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeVariant}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        className="m-0 mt-9 max-w-[620px] text-[19px] leading-[1.6] text-ink/62"
      >
        Budujemy produkty cyfrowe, aplikacje oraz rozwiązania technologiczne,
        które pomagają firmom rozwijać się i rozwiązywać realne problemy.
      </motion.p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeVariant}
        transition={{ delay: 0.75, duration: 0.8, ease: "easeOut" }}
        className="mt-11 flex flex-wrap items-center gap-4"
      >
        <MagneticButton
          href="#kontakt"
          className="inline-block rounded-full bg-ink px-[30px] py-4 text-[14px] font-bold text-bg will-change-transform"
        >
          Opowiedz nam o swoim pomyśle
        </MagneticButton>
        <a
          href="#kim-jestesmy"
          className="inline-flex items-center gap-2 px-2.5 py-4 text-[14px] font-semibold text-ink/55"
        >
          Poznaj nasze podejście ↓
        </a>
      </motion.div>

      <div className="absolute right-[5vw] bottom-[60px] hidden h-16 w-16 items-center justify-center rounded-full border border-ink/15 sm:flex">
        <div className="relative h-full w-full animate-spin-slow">
          <span className="absolute top-[2px] left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent" />
        </div>
      </div>
    </section>
  );
}
