import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, ExternalLink, Clock, Eye, X } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

type Certification = {
  title: string;
  issuer: string;
  year: string;
  color: string;
  inReview?: boolean;
  url: string;
  verifyUrl?: string;
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
    title: "JavaScript Developer Certification",
    issuer: "freeCodeCamp",
    year: "2026",
    color: "#F97316",
    url: "/certificates/freecodecamp-javascript.png",
    verifyUrl: "https://freecodecamp.org/certification/rahulkumar78/javascript-v9",
  },
];

function CertCard({ cert, index, onView }: { cert: Certification; index: number; onView: () => void }) {
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
        <button
          onClick={onView}
          data-cursor-hover
          className="relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105 w-max mt-4 cursor-pointer"
          style={{
            background: `linear-gradient(135deg, ${cert.color}, ${cert.color}cc)`,
            boxShadow: `0 0 32px -8px ${cert.color}60`,
          }}
        >
          <Eye size={15} /> View Certificate
        </button>
      </div>
    </motion.div>
  );
}

export function Certifications() {
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

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
            <CertCard key={c.title} cert={c} index={i} onView={() => setActiveCert(c)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCert(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl rounded-3xl glass-strong border border-white/10 p-6 sm:p-8 shadow-2xl overflow-hidden flex flex-col gap-6"
            >
              {/* Decorative glows */}
              <div
                className="absolute -top-32 -right-32 h-64 w-64 rounded-full opacity-20 blur-3xl pointer-events-none"
                style={{ background: activeCert.color }}
              />
              <div
                className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full opacity-10 blur-3xl pointer-events-none"
                style={{ background: activeCert.color }}
              />

              {/* Header */}
              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white"
                    style={{
                      background: `linear-gradient(135deg, ${activeCert.color}, ${activeCert.color}cc)`,
                    }}
                  >
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white leading-tight">
                      {activeCert.title}
                    </h3>
                    <p className="text-sm text-white/50">
                      Issued by {activeCert.issuer} &bull; {activeCert.year}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveCert(null)}
                  data-cursor-hover
                  className="rounded-full bg-white/5 hover:bg-white/10 p-2 text-white/70 hover:text-white transition-colors cursor-pointer border border-white/10"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Certificate Image Frame */}
              <div className="relative flex-1 min-h-[250px] md:min-h-[400px] max-h-[60vh] rounded-2xl bg-black/40 border border-white/5 overflow-hidden flex items-center justify-center p-2">
                <img
                  src={activeCert.url}
                  alt={`${activeCert.title} Certificate`}
                  className="max-w-full max-h-[55vh] object-contain rounded-lg shadow-lg select-none"
                  loading="lazy"
                />
              </div>

              {/* Actions */}
              <div className="relative flex flex-col sm:flex-row items-center justify-end gap-3">
                {activeCert.verifyUrl && (
                  <a
                    href={activeCert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor-hover
                    className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors w-full sm:w-auto justify-center"
                  >
                    <ExternalLink size={14} /> Verify Credential
                  </a>
                )}
                <button
                  onClick={() => setActiveCert(null)}
                  data-cursor-hover
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition-all hover:scale-102 w-full sm:w-auto justify-center cursor-pointer"
                  style={{
                    background: `linear-gradient(135deg, ${activeCert.color}, ${activeCert.color}cc)`,
                    boxShadow: `0 0 24px -6px ${activeCert.color}60`,
                  }}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
