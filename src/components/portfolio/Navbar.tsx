import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = links.map((l) => l.href.slice(1));
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= 120 && r.bottom >= 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`relative flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
            scrolled ? "glass-strong" : "border border-transparent"
          }`}
        >
          <a href="#home" className="flex items-center gap-3" data-cursor-hover>
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary font-display text-sm font-bold text-white shadow-[0_0_24px_-4px_#7C3AED99]">
              RK
            </div>
            <span className="font-display text-sm font-semibold tracking-tight text-white/90 hidden sm:inline">
              rkdev.online
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`relative px-4 py-2 text-sm transition-colors ${
                  active === l.href.slice(1)
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {l.label}
                {active === l.href.slice(1) && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-[#06B6D4] to-transparent" />
                )}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex border-gradient-primary relative items-center rounded-full px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-105"
          >
            Hire Me
          </a>

          <button
            className="md:hidden text-white/80"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-4 flex flex-col gap-1 animate-in fade-in slide-in-from-top-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm text-white/80 hover:text-white rounded-lg hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 text-center bg-gradient-primary rounded-full px-5 py-2.5 text-sm font-medium text-white"
            >
              Hire Me
            </a>
          </div>
        )}
      </div>
      <div className="mx-auto mt-2 h-px max-w-7xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </header>
  );
}
