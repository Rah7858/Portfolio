import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export function AvailableBanner() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 p-[1px] animate-gradient"
          style={{
            background:
              "linear-gradient(120deg, #7C3AED, #06B6D4, #EC4899, #F97316, #7C3AED)",
            backgroundSize: "300% 300%",
          }}
        >
          <div className="relative rounded-[calc(1.5rem-1px)] bg-[#050508]/85 backdrop-blur-xl px-6 sm:px-12 py-10 sm:py-12 overflow-hidden">
            {/* animated glow blobs */}
            <motion.div
              className="absolute -top-32 -left-20 h-72 w-72 rounded-full blur-3xl opacity-40"
              style={{ background: "#7C3AED" }}
              animate={{ x: [0, 60, 0], y: [0, 20, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-32 -right-20 h-72 w-72 rounded-full blur-3xl opacity-40"
              style={{ background: "#06B6D4" }}
              animate={{ x: [0, -60, 0], y: [0, -20, 0] }}
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative flex flex-col md:flex-row items-center md:justify-between gap-6 text-center md:text-left">
              <div className="flex items-center gap-4">
                <span className="relative flex h-4 w-4 shrink-0">
                  <span className="absolute inset-0 rounded-full bg-[#10B981] animate-ping opacity-75" />
                  <span className="relative h-4 w-4 rounded-full bg-[#10B981] shadow-[0_0_24px_#10B981]" />
                </span>
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Open to Work — Available Immediately
                  </div>
                  <div className="mt-1 text-sm sm:text-base text-white/70 font-mono">
                    Looking for Full Stack / AI Engineer roles
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                data-cursor-hover
                className="group inline-flex items-center gap-2 rounded-full bg-white text-[#050508] px-6 py-3 text-sm font-semibold shadow-[0_0_40px_-8px_#06B6D4] hover:scale-105 transition-transform whitespace-nowrap"
              >
                <Sparkles size={16} className="text-[#7C3AED]" /> Let's Talk
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
