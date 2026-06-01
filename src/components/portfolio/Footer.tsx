import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative border-t border-white/5 mt-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-display text-lg font-semibold text-white">
              Designed & Built by <span className="text-gradient-primary">Rahul Kumar</span>
            </div>
            <div className="text-sm text-white/40 mt-1 font-mono">Made with React + Tailwind CSS</div>
          </div>

          <div className="flex items-center gap-3">
            {[
              { href: "https://github.com/Rah7858", icon: Github },
              { href: "https://linkedin.com/in/rk1017", icon: Linkedin },
              { href: "mailto:rahul.work1017@gmail.com", icon: Mail },
            ].map(({ href, icon: Icon }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                data-cursor-hover
                className="grid h-10 w-10 place-items-center rounded-xl glass text-white/70 hover:text-white transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          <div className="text-sm text-white/40 font-mono">© 2026 Rahul Kumar</div>
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        data-cursor-hover
        className={`fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-gradient-primary text-white shadow-[0_0_30px_-8px_#7C3AED] transition-all ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
}
