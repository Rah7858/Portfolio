import { Palette, Code, Globe, Bot, Eye, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces using Figma with focus on user experience and modern design principles.",
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building scalable web applications using React.js, Node.js, and PostgreSQL with modern architecture and best practices.",
    },
    {
      icon: Globe,
      title: "Portfolio Websites",
      description: "Designing and developing professional portfolio websites that showcase your work and help you stand out.",
    },
    {
      icon: Bot,
      title: "Python Automation",
      description: "Developing intelligent automation tools to streamline workflows and increase productivity using Python.",
    },
    {
      icon: Smartphone,
      title: "AI Desktop Assistants",
      description: "Creating voice-activated desktop assistants with features like task automation, app launching, and WhatsApp integration.",
    },
    {
      icon: Eye,
      title: "Computer Vision Projects",
      description: "Building real-time computer vision applications using OpenCV for face detection, object tracking, and image processing.",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What I Do
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized services combining design, development, and automation to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <Icon className="text-primary group-hover:text-primary-foreground transition-colors" size={24} />
                  </div>
                  <CardTitle className="text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
