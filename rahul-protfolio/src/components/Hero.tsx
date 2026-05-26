import { ArrowRight, Github, Linkedin, Mail, Sparkles, Code2, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const handleCollaborate = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleExplore = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 px-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-8 items-start max-w-6xl">
          {/* Profile Image Section - Left Side */}
          <div className="relative animate-scale-in md:w-[400px] shrink-0">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Animated Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-3xl opacity-30 animate-pulse"></div>
              
              {/* Rotating Border Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-50 animate-spin" style={{ animationDuration: '3s' }}></div>
              <div className="absolute inset-1 rounded-full bg-background"></div>
              
              {/* Profile Image */}
              <img
                src={profileImage}
                alt="Rahul Kumar - Full Stack Developer"
                className="relative rounded-full w-full h-auto border-4 border-background shadow-2xl z-10"
              />
              
              {/* Floating Accent Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
            
            {/* Collaborate Button Below Image */}
            <div className="mt-8 flex justify-center">
              <Button size="lg" onClick={handleCollaborate} className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg shadow-primary/25 group relative overflow-hidden w-full max-w-xs">
                <span className="relative z-10 flex items-center justify-center text-base font-semibold tracking-wider uppercase">
                  Collaborate
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Button>
            </div>
          </div>

          {/* Content Section - Right Side */}
          <div className="space-y-6 animate-fade-in flex-1">
            {/* Status Badge with Glass Effect */}
            <div className="inline-block">
              <span className="px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm rounded-full text-sm text-foreground border border-primary/20 flex items-center gap-2 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for work
              </span>
            </div>
            
            {/* Name with Uppercase Bold Styling */}
            <h1 className="text-6xl md:text-8xl font-black leading-none font-heading tracking-tight">
              <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-fade-in-up uppercase">
                Rahul Kumar
              </span>
            </h1>
            
            {/* Role Tags */}
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-card border border-border rounded-lg text-sm text-foreground flex items-center gap-2 hover:border-primary/50 transition-colors">
                <Code2 size={16} className="text-primary" />
                Full-Stack Developer
              </span>
              <span className="px-4 py-2 bg-card border border-border rounded-lg text-sm text-foreground flex items-center gap-2 hover:border-primary/50 transition-colors">
                <Palette size={16} className="text-primary" />
                UI/UX Designer
              </span>
              <span className="px-4 py-2 bg-card border border-border rounded-lg text-sm text-foreground flex items-center gap-2 hover:border-primary/50 transition-colors">
                <Sparkles size={16} className="text-primary" />
                AI Enthusiast
              </span>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Full-stack developer crafting scalable, user-centric web applications with modern technologies. Built real-world projects like RASU, focusing on performance, clean design, and seamless user experience.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={handleExplore} className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg shadow-primary/25 group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Explore
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Button>
              <Button size="lg" variant="outline" onClick={handleCollaborate} className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 flex items-center gap-2">
                <Mail size={16} />
                Collaborate
              </Button>
            </div>

            {/* Social Links with Enhanced Hover */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/Rah7858"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/rk1017"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:rahul.work1017@gmail.com"
                className="p-3 rounded-lg bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
