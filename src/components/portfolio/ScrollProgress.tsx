import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const sx = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <motion.div
      style={{ scaleX: sx, transformOrigin: "0%" }}
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] bg-gradient-to-r from-[#7C3AED] via-[#06B6D4] to-[#EC4899]"
    />
  );
}
