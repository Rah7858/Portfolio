import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    "Python", "HTML", "CSS", "JavaScript", "React.js", "Node.js", 
    "Express.js", "PostgreSQL", "SQL", "Tkinter", "OpenCV", 
    "Figma", "JWT", "RBAC"
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science & IT",
      institution: "Siksha 'O' Anusandhan University, ITER",
      year: "2021 - 2025",
    },
    {
      degree: "Intermediate (12th)",
      institution: "SL Arya Inter College",
      year: "2021",
    },
    {
      degree: "Matriculation (10th)",
      institution: "Holy Cross School",
      year: "2019",
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6 animate-slide-in-right">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Full-stack developer crafting scalable, user-centric web applications with modern technologies.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Built real-world projects like RASU, focusing on performance, clean design, and seamless user experience.
            </p>
          </div>

          <div className="space-y-6 animate-scale-in">
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <GraduationCap className="text-primary" />
              Education
            </h3>
            {education.map((edu, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary transition-colors">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                  <p className="text-muted-foreground text-sm">{edu.institution}</p>
                  <p className="text-primary text-sm mt-1">{edu.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="animate-fade-in-up">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Technical Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-secondary text-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
