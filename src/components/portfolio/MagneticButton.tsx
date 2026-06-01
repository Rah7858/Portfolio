import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

type Props = {
  children: ReactNode;
  className?: string;
  href?: string;
  external?: boolean;
  download?: string | boolean;
  onClick?: () => void;
};

export function MagneticButton({ children, className = "", href, external, download, onClick }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { damping: 18, stiffness: 220 });
  const sy = useSpring(y, { damping: 18, stiffness: 220 });

  const move = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.25);
  };
  const leave = () => {
    x.set(0);
    y.set(0);
  };

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={leave}
      style={{ x: sx, y: sy }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="inline-block"
        data-cursor-hover
        {...(download !== undefined ? { download: typeof download === "string" ? download : "" } : {})}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {inner}
      </a>
    );
  }
  return inner;
}
