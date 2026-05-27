import { ExternalLink, Github, Code2 } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "RASU - AI Powered E-Commerce Platform",
      description: "Full-stack e-commerce platform with AI-generated product images, 3D models, JWT authentication, 20+ product categories, and advanced granular filtering systems.",
      tech: ["React.js", "Node.js", "PostgreSQL", "Python", "AI Gen", "Three.js"],
      category: "Full-Stack & AI",
      live: "https://rasu.rkdev.online",
      github: "https://github.com/Rah7858",
      gradient: "from-purple-500 to-pink-500 shadow-purple-500/10",
      border: "hover:border-purple-500/40",
      badge: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    },
    {
      title: "ARIS - Accident Response Intelligence",
      description: "Real-time AI accident detection platform featuring live surveillance pipelines, emergency dispatch coordinators, instant WebSocket alerts, and visual analytics dashboards.",
      tech: ["React.js", "Node.js", "PostgreSQL", "WebSocket", "Supabase", "Vercel"],
      category: "Real-time Systems",
      live: "https://aris.rkdev.online",
      github: "https://github.com/Rah7858/ARIS",
      gradient: "from-cyan-400 to-blue-500 shadow-cyan-400/10",
      border: "hover:border-cyan-400/40",
      badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    },
    {
      title: "AI Voice Desktop Assistant",
      description: "Voice-controlled artificial intelligence assistant for desktop automation, executing commands, file management, and quick tasks with local system automation features.",
      tech: ["Python", "Tkinter", "Speech Recognition", "Pyttsx3"],
      category: "AI & Automation",
      github: "https://github.com/Rah7858",
      gradient: "from-orange-400 to-red-500 shadow-orange-400/10",
      border: "hover:border-orange-500/40",
      badge: "bg-orange-500/10 text-orange-300 border-orange-500/20",
    },
    {
      title: "Real-Time Face Detection",
      description: "High-performance real-time face detection application with active webcam integration utilizing Haar Cascade Classifiers with optimized low-latency bounding box tracking.",
      tech: ["Python", "OpenCV", "Haar Cascade"],
      category: "Computer Vision",
      github: "https://github.com/Rah7858",
      gradient: "from-green-400 to-emerald-500 shadow-green-400/10",
      border: "hover:border-green-400/40",
      badge: "bg-green-500/10 text-green-300 border-green-500/20",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden bg-[#030014]">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 uppercase">
            Featured <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-[3px] bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A showcase of my major applications spanning full-stack engineering, real-time AI automation, and computer vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`bg-white/[0.02] border-white/5 ${project.border} transition-all duration-500 hover:-translate-y-2 animate-fade-in-up group flex flex-col justify-between overflow-hidden relative`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Highlight background glow */}
              <div className={`absolute top-0 left-0 w-[4px] h-full bg-gradient-to-b ${project.gradient}`}></div>

              <div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${project.badge}`}>
                      {project.category}
                    </span>
                    <Code2 className="h-5 w-5 text-gray-600 group-hover:text-gray-400 transition-colors" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-6">
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-white/5 border border-white/5 text-gray-300 text-[11px] font-medium rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </div>

              <CardFooter className="gap-3 border-t border-white/5 pt-4 bg-white/[0.01]">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-white/10 text-gray-300 hover:text-white hover:bg-white/5 hover:border-purple-500/30"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    Source Code
                  </a>
                </Button>
                
                {project.live ? (
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-semibold"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-white/5 text-gray-500 cursor-not-allowed bg-transparent"
                    disabled
                  >
                    Code Only
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
