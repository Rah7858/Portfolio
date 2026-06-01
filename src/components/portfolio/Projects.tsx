import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ExternalLink, Github, Star, type LucideIcon } from "lucide-react";
import { ShoppingBag, Siren } from "lucide-react";
import type { MouseEvent } from "react";
import { useRef } from "react";
import { SectionHeader } from "./SectionHeader";

type Project = {
  id: string;
  badge: string;
  badgeColor: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  stats: string[];
  live: string;
  github: string;
  gradient: string;
  glow: string;
};

const projects: Project[] = [
  {
    id: "rasu",
    badge: "E-Commerce + AI",
    badgeColor: "#7C3AED",
    icon: ShoppingBag,
    title: "RASU",
    subtitle: "AI-Powered E-Commerce Platform",
    description:
      "A complete full-stack e-commerce platform featuring AI-generated product images, interactive 3D product models, JWT authentication, 20+ product categories, advanced filtering, and customer support integration.",
    tech: ["React.js", "Node.js", "PostgreSQL", "Python", "Express.js", "JWT", "AI Image Gen", "3D Models"],
    stats: ["20+ Categories", "JWT Auth", "AI Powered"],
    live: "https://rasu.rkdev.online",
    github: "https://github.com/Rah7858",
    gradient: "linear-gradient(135deg, #7C3AED, #EC4899)",
    glow: "#7C3AED",
  },
  {
    id: "aris",
    badge: "AI + Emergency Response",
    badgeColor: "#EF4444",
    icon: Siren,
    title: "ARIS",
    subtitle: "Accident Response Intelligence System",
    description:
      "Production-grade AI-powered accident detection platform with real-time surveillance feeds, emergency dispatch system, WebSocket live alerts, analytics dashboard, and PostgreSQL database on Supabase.",
    tech: ["React.js", "Node.js", "PostgreSQL", "WebSocket", "JWT", "Supabase", "Vercel", "Render"],
    stats: ["Real-time", "6 Cameras", "AI Detection"],
    live: "https://aris.rkdev.online",
    github: "https://github.com/Rah7858/ARIS",
    gradient: "linear-gradient(135deg, #EF4444, #F97316)",
    glow: "#F97316",
  },
];

function TiltCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { damping: 18, stiffness: 200 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { damping: 18, stiffness: 200 });

  const onMove = (e: MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0); my.set(0);
  };

  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="relative group"
      style={{ perspective: 1200 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="relative rounded-3xl p-[1.5px]"
      >
        <div className="absolute inset-0 rounded-3xl opacity-80 transition-opacity duration-500 group-hover:opacity-100" style={{ background: project.gradient }} />
        <div
          className="absolute -inset-2 rounded-3xl blur-3xl opacity-20 transition-all duration-500 group-hover:opacity-70 group-hover:-inset-4"
          style={{ background: project.gradient }}
        />

        <div className="relative rounded-3xl bg-[#0A0A0F]/95 backdrop-blur-xl p-6 sm:p-7 overflow-hidden">
          {/* mesh */}
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-30 blur-3xl"
            style={{ background: project.glow }} />

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span
              className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border"
              style={{ color: project.badgeColor, borderColor: `${project.badgeColor}50`, background: `${project.badgeColor}15` }}
            >
              {project.badge}
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] text-amber-300/90 px-2.5 py-1 rounded-full bg-amber-300/10 border border-amber-300/20">
              <Star size={11} fill="currentColor" /> Featured
            </span>
          </div>

          <div className="flex items-start gap-4">
            <div
              className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-white"
              style={{ background: project.gradient, boxShadow: `0 0 30px -6px ${project.glow}` }}
            >
              <Icon size={24} />
            </div>
            <div>
              <h3 className="font-display text-3xl font-bold text-white leading-tight">{project.title}</h3>
              <p className="text-white/60 text-sm mt-0.5">{project.subtitle}</p>
            </div>
          </div>

          <p className="mt-4 text-sm text-white/70 leading-relaxed line-clamp-3">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[11px] px-2.5 py-1 rounded-full font-mono glass text-white/75 hover:text-white transition-colors"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {project.stats.map((s) => (
              <div key={s} className="text-center rounded-xl glass py-2">
                <div className="text-xs font-semibold text-white">{s}</div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              data-cursor-hover
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105"
              style={{ background: project.gradient, boxShadow: `0 0 32px -8px ${project.glow}` }}
            >
              <ExternalLink size={16} /> Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              data-cursor-hover
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white glass hover:bg-white/10 transition-colors"
            >
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          number="02"
          subtitle="Things I've Built"
          title={<>Featured <span className="text-gradient-secondary">Projects</span></>}
        />
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((p, i) => <TiltCard key={p.id} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
