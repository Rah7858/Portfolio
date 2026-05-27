import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#030014]/80 backdrop-blur-xl border-b border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="text-2xl font-extrabold tracking-wider bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent font-display group"
          >
            RK
            <span className="text-white transition-transform duration-300 inline-block group-hover:translate-x-1">
              .
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-purple-500 after:to-cyan-400 after:transition-all after:duration-300"
              >
                {item.name}
              </a>
            ))}
            <Button
              size="sm"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold shadow-[0_4px_15px_rgba(139,92,246,0.3)] transition-transform duration-300 hover:scale-105"
              asChild
            >
              <a href="/Resume.pdf" download="Resume.pdf" className="flex items-center gap-1">
                Resume
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-300 hover:text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in bg-[#030014]/95 backdrop-blur-2xl border-t border-white/5 rounded-b-xl px-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 text-gray-300 hover:text-white border-b border-white/5 transition-colors font-medium text-sm"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button
              size="sm"
              className="mt-4 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold"
              asChild
            >
              <a href="/Resume.pdf" download="Resume.pdf" className="flex items-center justify-center gap-1">
                Resume
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
