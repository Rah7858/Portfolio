import { motion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  number: string;
  title: ReactNode;
  subtitle?: string;
};

export function SectionHeader({ number, title, subtitle }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="mb-14"
    >
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] font-mono text-white/40 mb-4">
        <span className="text-gradient-primary font-semibold">{number}</span>
        <span className="h-px w-12 bg-gradient-to-r from-[#7C3AED] to-transparent" />
        {subtitle}
      </div>
      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
        {title}
      </h2>
    </motion.div>
  );
}
