import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";

type Skill = { name: string; level: number };
type Group = { title: string; color: string; skills: Skill[] };

const groups: Group[] = [
  {
    title: "Languages",
    color: "#7C3AED",
    skills: [
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 75 },
      { name: "HTML / CSS", level: 95 },
    ],
  },
  {
    title: "Frontend",
    color: "#06B6D4",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Vite", level: 80 },
      { name: "Responsive Design", level: 92 },
    ],
  },
  {
    title: "Backend",
    color: "#10B981",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "REST APIs", level: 88 },
      { name: "WebSocket", level: 75 },
    ],
  },
  {
    title: "Database",
    color: "#F97316",
    skills: [
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "MySQL", level: 70 },
      { name: "Supabase", level: 80 },
    ],
  },
  {
    title: "AI & Tools",
    color: "#EC4899",
    skills: [
      { name: "OpenCV", level: 75 },
      { name: "Git / GitHub", level: 88 },
      { name: "JWT Auth", level: 85 },
      { name: "Vercel / Render", level: 80 },
    ],
  },
];

const techLogos = [
  "React", "Node.js", "Python", "PostgreSQL", "TypeScript", "Tailwind",
  "Git", "Supabase", "MongoDB", "Express", "Vercel", "OpenCV",
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          number="04"
          subtitle="Technologies I work with daily"
          title={<>Tech <span className="text-gradient-primary">Arsenal</span></>}
        />

        {/* Bento grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: gi * 0.08 }}
              className="relative rounded-3xl glass p-7 overflow-hidden"
            >
              <div className="absolute -top-16 -right-16 h-44 w-44 rounded-full opacity-25 blur-3xl"
                style={{ background: g.color }} />
              <div className="relative flex items-center gap-3 mb-6">
                <div className="h-2 w-2 rounded-full" style={{ background: g.color, boxShadow: `0 0 12px ${g.color}` }} />
                <h3 className="font-display text-xl font-semibold text-white">{g.title}</h3>
              </div>
              <div className="relative space-y-5">
                {g.skills.map((s, i) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-white/80">{s.name}</span>
                      <span className="font-mono text-white/50">{s.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.15 + i * 0.08, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${g.color}, ${g.color}cc)`,
                          boxShadow: `0 0 12px ${g.color}80`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee logos */}
        <div className="mt-16 relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-4 animate-marquee w-max">
            {[...techLogos, ...techLogos].map((t, i) => (
              <div
                key={`${t}-${i}`}
                className="glass rounded-2xl px-7 py-4 font-mono text-sm text-white/70 whitespace-nowrap hover:text-white hover:border-[#06B6D4]/50 transition-colors"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
