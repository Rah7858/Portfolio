import { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Mail, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Typewriter effect state
  const roles = ["Full Stack Developer", "AI Engineer", "React Specialist", "Problem Solver"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Typewriter Effect logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const handleType = () => {
      const fullText = roles[roleIndex];
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100 - Math.random() * 40); // varied typing speed
        
        if (currentText === fullText) {
          // Pause at full word
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);
        
        if (currentText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(150);
          return;
        }
      }
      
      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  // Particle network logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(60, Math.floor((canvas.width * canvas.height) / 25000));
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          radius: Math.random() * 2 + 1,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background dark gradient manually for depth
      ctx.fillStyle = "rgba(3, 0, 20, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "rgba(168, 85, 247, 0.4)";
      ctx.strokeStyle = "rgba(139, 92, 246, 0.08)";

      // Update & Draw
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce boundaries
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Connect lines
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.lineWidth = (1 - dist / 120) * 0.8;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    drawParticles();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const handleCollaborate = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleExplore = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 px-4 overflow-hidden bg-[#030014] bg-grid-pattern">
      {/* Canvas Particle Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Decorative Gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-96 h-96 bg-purple-700/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-96 h-96 bg-cyan-700/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: "1.5s" }}></div>

      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
          
          {/* Content Section - Left Side */}
          <div className="space-y-6 flex-1 text-center lg:text-left animate-fade-in">
            {/* Status Badge with Glass Effect */}
            <div className="inline-block">
              <span className="px-4 py-2 bg-purple-500/10 backdrop-blur-md rounded-full text-xs font-semibold text-purple-300 border border-purple-500/20 flex items-center gap-2 w-fit mx-auto lg:mx-0">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                Available for Projects
              </span>
            </div>
            
            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-white font-display">
              Hi, I'm{" "}
              <span className="block mt-2 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent animate-float">
                Rahul Kumar
              </span>
            </h1>
            
            {/* Dynamic Typewriter Roles */}
            <div className="h-12 flex items-center justify-center lg:justify-start">
              <p className="text-xl md:text-2xl font-bold text-gray-300 font-heading">
                I am a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 border-r-2 border-cyan-400 pr-1 animate-pulse">
                  {currentText}
                </span>
              </p>
            </div>

            <p className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed mx-auto lg:mx-0">
              Passionate engineer building highly scaleable web applications and automated AI scripts. Specialist in crafting responsive React frontends and robust Node.js backend architectures.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Button
                size="lg"
                onClick={handleExplore}
                className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold tracking-wide shadow-lg shadow-purple-500/20 transition-all duration-300 hover:scale-105 group"
              >
                Explore My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleCollaborate}
                className="border-white/10 text-white hover:bg-white/5 transition-all duration-300"
              >
                Let's Talk
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 pt-4">
              <a
                href="https://github.com/Rah7858"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github size={22} />
              </a>
              <a
                href="https://linkedin.com/in/rk1017"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="mailto:rahul.work1017@gmail.com"
                className="p-3 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 hover:scale-110"
                aria-label="Email Me"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* Profile Image Section - Right Side */}
          <div className="relative md:w-[400px] shrink-0 animate-scale-in">
            <div className="relative w-72 h-72 md:w-80 md:h-80 mx-auto">
              {/* Rotating Gradient Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-cyan-400 opacity-60 animate-spin" style={{ animationDuration: "6s" }}></div>
              
              {/* Overlay mask for depth */}
              <div className="absolute inset-[3px] rounded-full bg-[#030014]"></div>
              
              {/* Profile Image */}
              <div className="absolute inset-[8px] rounded-full overflow-hidden">
                <img
                  src={profileImage}
                  alt="Rahul Kumar"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  onError={(e) => {
                    // Fail-safe default SVG avatar if image fails to load
                    e.currentTarget.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="%232c1c5c"><circle cx="50" cy="40" r="20" fill="%23a855f7"/><path d="M20 85c0-15 15-25 30-25s30 10 30 25z" fill="%23a855f7"/><rect width="100" height="100" fill="none" stroke="%233b82f6" stroke-width="4"/></svg>`;
                  }}
                />
              </div>

              {/* Float Sparkles decoration */}
              <div className="absolute -top-3 -right-3 p-2 bg-[#0c0524] border border-purple-500/30 rounded-xl text-purple-400 animate-float">
                <Sparkles size={20} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
