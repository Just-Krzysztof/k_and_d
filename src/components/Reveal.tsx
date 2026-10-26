"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export default function Reveal({
  children,
  index = 0,
  className,
}: {
  children: ReactNode;
  index?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={false}
      whileInView={reduceMotion ? undefined : { y: [12, 0] }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -8% 0px" }}
      transition={{
        duration: 0.8,
        ease: [0.2, 0.7, 0.2, 1],
        delay: (index % 6) * 0.06,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
