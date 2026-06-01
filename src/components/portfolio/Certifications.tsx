import { motion } from "motion/react";
import { Award, ExternalLink, Clock } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

type Certification = {
  title: string;
  issuer: string;
  year: string;
  color: string;
  inReview?: boolean;
  url?: string;
};

const certifications: Certification[] = [
  {
    title: "Python",
    issuer: "Kaggle",
    year: "2026",
    color: "#3B82F6",
    url: "/certificates/kaggle-python.png",
  },
  {
    title: "Intro to Deep Learning",
    issuer: "Kaggle",
    year: "2026",
    color: "#3B82F6",
    url: "/certificates/kaggle-intro-deep-learning.png",
  },
  {
    title: "Intermediate Machine Learning",
    issuer: "Kaggle",
    year: "2026",
    color: "#3B82F6",
    url: "/certificates/kaggle-intermediate-ml.png",
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    year: "2026",
    color: "#F97316",
    url: "https://www.freecodecamp.org/certification",
  },
];

function CertCard({ cert, index }: { cert: Certification; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="relative rounded-2xl glass p-6 sm:p-7 overflow-hidden h-full flex flex-col">
        {/* Glow blob */}
        <div
          className="absolute -top-12 -right-12 h-32 w-32 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-50"
          style={{ background: cert.color }}
        />

        {/* Badge row */}
        <div className="relative flex items-center gap-2 mb-5">
          <span
            className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border"
            style={{
              color: cert.color,
              borderColor: `${cert.color}50`,
              background: `${cert.color}15`,
            }}
          >
            {cert.issuer}
          </span>
          {cert.inReview && (
            <span className="inline-flex items-center gap-1 text-[10px] text-amber-300/90 px-2.5 py-1 rounded-full bg-amber-300/10 border border-amber-300/20">
              <Clock size={11} /> In Review
            </span>
          )}
        </div>

        {/* Icon + Title */}
        <div className="relative flex items-start gap-4 mb-4">
          <div
            className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white"
            style={{
              background: `linear-gradient(135deg, ${cert.color}, ${cert.color}cc)`,
              boxShadow: `0 0 24px -6px ${cert.color}80`,
            }}
          >
            <Award size={22} />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-white leading-snug">
              {cert.title}
            </h3>
            <p className="text-sm text-white/50 mt-0.5">{cert.year}</p>
          </div>
        </div>

        {/* Spacer to push button to bottom */}
        <div className="flex-1" />

        {/* View Certificate button */}
        <a
          href={cert.url}
          target="_blank"
          rel="noreferrer"
          data-cursor-hover
          className="relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105 w-max mt-4"
          style={{
            background: `linear-gradient(135deg, ${cert.color}, ${cert.color}cc)`,
            boxShadow: `0 0 32px -8px ${cert.color}60`,
          }}
        >
          <ExternalLink size={15} /> View Certificate
        </a>
      </div>
    </motion.div>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          number="03"
          subtitle="Credentials & Learning"
          title={<>Professional <span className="text-gradient-primary">Certifications</span></>}
        />
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((c, i) => (
            <CertCard key={c.title} cert={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
