import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue } from "motion/react";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { ParticleField } from "./ParticleField";
import { MagneticButton } from "./MagneticButton";
import cvAsset from "@/assets/Rahul_Kumar_CV.pdf.asset.json";

const roles = [
  "Full Stack Developer",
  "AI Engineer",
  "React Specialist",
  "Problem Solver",
  "Open to Work",
];

function Typewriter() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = roles[idx];
    const speed = del ? 25 : 55;
    const t = setTimeout(() => {
      if (!del) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDel(true), 900);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDel(false);
          setIdx((i) => (i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, idx]);

  return (
    <span className="text-gradient-primary font-display">
      {text}
      <span className="inline-block w-[2px] h-[1em] align-middle bg-[#06B6D4] ml-1 animate-pulse" />
    </span>
  );
}

const techBadges = [
  { label: "React", color: "#06B6D4", top: "5%", left: "8%" },
  { label: "Node.js", color: "#10B981", top: "12%", right: "0%" },
  { label: "Python", color: "#F97316", bottom: "20%", left: "-2%" },
  { label: "PostgreSQL", color: "#7C3AED", bottom: "8%", right: "8%" },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        mx.set(e.clientX - r.left);
        my.set(e.clientY - r.top);
      }}
      className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10"><ParticleField /></div>
      {/* spotlight */}
      <motion.div
        className="pointer-events-none absolute -z-10 h-[40rem] w-[40rem] rounded-full"
        style={{
          x: mx,
          y: my,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.18), transparent 60%)",
        }}
      />

      {/* corner brackets */}
      <CornerBrackets />

      <div className="mx-auto max-w-7xl px-6 w-full grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-sm font-medium text-[#10B981] border border-[#10B981]/40 bg-[#10B981]/10 shadow-[0_0_30px_-8px_#10B981] backdrop-blur-md"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inset-0 rounded-full bg-[#10B981] animate-ping opacity-75" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-[#10B981]" />
            </span>
            Currently Available for Work
          </motion.div>

          <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.02] tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="block text-white"
            >
              Building the Future,
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="block text-gradient-primary"
            >
              One Line at a Time.
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-xl sm:text-2xl text-white/80 font-mono min-h-[2.4rem]"
          >
            <Typewriter />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 max-w-xl text-base sm:text-lg text-white/60 leading-relaxed"
          >
            Computer Science graduate passionate about building AI-powered
            applications that solve real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              href="#projects"
              className="bg-gradient-primary rounded-full px-7 py-3.5 text-sm font-semibold text-white glow-purple inline-flex items-center gap-2 transition-shadow hover:shadow-[0_0_60px_-10px_#7C3AED]"
            >
              View My Work
            </MagneticButton>
            <MagneticButton
              href={cvAsset.url}
              download="Rahul_Kumar_CV.pdf"
              className="border-gradient-primary relative rounded-full px-7 py-3.5 text-sm font-semibold text-white inline-flex items-center gap-2 hover:bg-white/5 transition-colors"
            >
              <Download size={16} /> Download CV
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-10 flex items-center gap-3"
          >
            {[
              { href: "https://github.com/Rah7858", icon: Github, label: "GitHub" },
              { href: "https://linkedin.com/in/rk1017", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:rahul.work1017@gmail.com", icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                data-cursor-hover
                className="grid h-11 w-11 place-items-center rounded-xl glass text-white/70 hover:text-white hover:border-[#7C3AED]/60 transition-all hover:-translate-y-0.5"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right - Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mx-auto h-[22rem] w-[22rem] sm:h-[26rem] sm:w-[26rem]"
        >
          {/* glow */}
          <div className="absolute inset-0 rounded-full blur-3xl opacity-50"
            style={{ background: "conic-gradient(from 0deg, #7C3AED, #06B6D4, #EC4899, #F97316, #7C3AED)" }} />
          {/* ring */}
          <div className="absolute inset-4 rounded-full p-[2px] animate-[spin_18s_linear_infinite]"
            style={{ background: "conic-gradient(from 0deg, #7C3AED, #06B6D4, #EC4899, #F97316, #7C3AED)" }}>
            <div className="h-full w-full rounded-full bg-[#0A0A0F]" />
          </div>
          {/* avatar */}
          <div className="absolute inset-8 rounded-full glass-strong grid place-items-center overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="absolute inset-0 grid place-items-center font-display text-[7rem] font-bold text-gradient-primary select-none">RK</div>
            <img
              src="/profile.jpg"
              alt="Rahul Kumar"
              loading="eager"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
              className="relative h-full w-full object-cover rounded-full"
            />
          </div>
          {/* floating badges */}
          {techBadges.map((b) => (
            <motion.div
              key={b.label}
              className="absolute glass rounded-full px-4 py-2 text-xs font-medium font-mono whitespace-nowrap"
              style={{
                top: b.top, left: b.left, right: b.right, bottom: b.bottom,
                color: b.color,
                borderColor: `${b.color}40`,
                boxShadow: `0 0 24px -8px ${b.color}80`,
              }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {b.label}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-white transition-colors text-xs uppercase tracking-[0.3em] font-mono"
      >
        Scroll
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  );
}

function CornerBrackets() {
  const cls = "absolute h-8 w-8 border-[#7C3AED]/40";
  return (
    <>
      <div className={`${cls} top-24 left-6 border-l-2 border-t-2`} />
      <div className={`${cls} top-24 right-6 border-r-2 border-t-2`} />
      <div className={`${cls} bottom-6 left-6 border-l-2 border-b-2`} />
      <div className={`${cls} bottom-6 right-6 border-r-2 border-b-2`} />
    </>
  );
}
