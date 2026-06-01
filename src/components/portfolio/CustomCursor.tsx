import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { damping: 30, stiffness: 400, mass: 0.3 });
  const sy = useSpring(y, { damping: 30, stiffness: 400, mass: 0.3 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement;
      setHover(!!t.closest('a, button, [data-cursor-hover]'));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
        style={{ x, y }}
      >
        <div className="-translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-white" />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[99] hidden md:block"
        style={{ x: sx, y: sy }}
      >
        <div
          className="-translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300"
          style={{
            width: hover ? 56 : 32,
            height: hover ? 56 : 32,
            background: "radial-gradient(circle, rgba(124,58,237,0.4), rgba(6,182,212,0.15) 60%, transparent 70%)",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        />
      </motion.div>
    </>
  );
}
