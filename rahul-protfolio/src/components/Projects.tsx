import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Foodgo Prototype",
      description: "A complete mobile food ordering app design covering product discovery, item details, dynamic pricing updates, checkout flow, and user profile screens.",
      tech: ["Figma", "UI/UX Design", "Mobile Design"],
      category: "Design",
    },
    {
      title: "Social Media Aggregator",
      description: "Full-stack web app with RBAC, JWT authentication, dashboards, financial analytics, and optimized backend APIs for improved speed.",
      tech: ["React.js", "Node.js", "PostgreSQL", "Python"],
      category: "Full-Stack",
    },
    {
      title: "AI Desktop Virtual Assistant",
      description: "Python-based voice-activated assistant featuring voice commands, WhatsApp automation, app launching, and comprehensive task automation.",
      tech: ["Python", "Tkinter", "SpeechRecognition", "Pyttsx3"],
      category: "AI/Automation",
    },
    {
      title: "Real-Time Face Detection",
      description: "Real-time webcam face detection application using Haar Cascade Classifier with bounding boxes and live feedback capabilities.",
      tech: ["Python", "OpenCV", "Computer Vision"],
      category: "Computer Vision",
    },
    {
      title: "RASU E-commerce Platform",
      description: "Complete end-to-end e-commerce platform with modern UI/UX, product management, user authentication, and payment flow integration.",
      tech: ["React.js", "Node.js", "PostgreSQL", "Stripe"],
      category: "Full-Stack",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work across design, development, and automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {project.category}
                  </span>
                </div>
                <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-secondary text-foreground text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Github size={16} className="mr-2" />
                  Code
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <ExternalLink size={16} className="mr-2" />
                  Live
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
