import { motion } from "motion/react";
import { Code2, Brain, Palette, Server, Database, GraduationCap, BookOpen } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const services = [
  { icon: Code2, label: "Full Stack Web Development", color: "#7C3AED" },
  { icon: Brain, label: "AI Integration & Automation", color: "#EC4899" },
  { icon: Palette, label: "UI/UX Design", color: "#06B6D4" },
  { icon: Server, label: "REST API Development", color: "#10B981" },
  { icon: Database, label: "Database Design", color: "#F97316" },
];

const stats = [
  { display: "5+", label: "Projects Built", color: "#7C3AED" },
  { display: "10+", label: "Technologies", color: "#06B6D4" },
  { display: "2+", label: "Production Apps", color: "#10B981" },
  { display: "4+", label: "Certifications", color: "#EC4899" },
];

const education = [
  { icon: GraduationCap, title: "B.E. Computer Science and Information Technology", school: "SOA University (ITER), Bhubaneswar", years: "2021 - 2025" },
  { icon: BookOpen, title: "Intermediate", school: "JAC Board", years: "2021" },
  { icon: BookOpen, title: "Matriculation", school: "CBSE", years: "2019" },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader number="01" subtitle="Introduction" title={<>About <span className="text-gradient-primary">Me</span></>} />

        <div className="grid lg:grid-cols-2 gap-14">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-lg text-white/70 leading-relaxed"
            >
              I'm <span className="text-white font-medium">Rahul Kumar</span>, a Computer Science
              Engineering graduate from SOA University (ITER), Bhubaneswar. I specialize in
              building full-stack AI-powered applications using React.js, Node.js, Python, and
              PostgreSQL. I love solving real-world problems through clean code and thoughtful design.
            </motion.p>

            <div className="mt-10">
              <h3 className="font-display text-xl font-semibold mb-5 text-white">What I Do</h3>
              <div className="space-y-2">
                {services.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="group flex items-center gap-4 rounded-xl glass px-4 py-3 transition-all hover:-translate-y-0.5"
                    style={{ ["--c" as string]: s.color }}
                  >
                    <div
                      className="grid h-10 w-10 place-items-center rounded-lg"
                      style={{ background: `${s.color}22`, color: s.color }}
                    >
                      <s.icon size={18} />
                    </div>
                    <span className="text-white/80 group-hover:text-white transition-colors">{s.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="relative rounded-2xl glass p-6 overflow-hidden group"
                >
                  <div
                    className="absolute -top-12 -right-12 h-32 w-32 rounded-full opacity-30 blur-2xl transition-opacity group-hover:opacity-60"
                    style={{ background: s.color }}
                  />
                  <div className="relative font-display text-5xl font-bold" style={{ color: s.color }}>
                    {s.display}
                  </div>
                  <div className="relative mt-2 text-sm text-white/60">{s.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="font-display text-xl font-semibold mb-5 text-white">Education</h3>
              <div className="relative pl-6 space-y-5 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-[#7C3AED] before:via-[#06B6D4] before:to-transparent">
                {education.map((e, i) => (
                  <motion.div
                    key={e.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative"
                  >
                    <span className="absolute -left-[1.4rem] top-1.5 h-3 w-3 rounded-full bg-gradient-primary ring-4 ring-[#050508]" />
                    <div className="glass rounded-xl p-4">
                      <div className="flex items-center gap-2 text-white">
                        <e.icon size={16} className="text-[#06B6D4]" />
                        <span className="font-medium">{e.title}</span>
                      </div>
                      <div className="text-sm text-white/60 mt-1">{e.school}</div>
                      <div className="text-xs text-white/40 mt-1 font-mono">{e.years}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
