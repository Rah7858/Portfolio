import { GraduationCap, Award, Compass, BrainCircuit } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const education = [
    {
      degree: "B.E. CSE (Computer Science & Engineering)",
      institution: "SOA University ITER, Bhubaneswar",
      year: "2021 - 2026",
      desc: "Specializing in software architecture, computer networks, database systems, and advanced AI methodologies.",
    },
    {
      degree: "Intermediate (12th Grade)",
      institution: "JAC Board",
      year: "2021",
      desc: "Completed secondary education in Science stream with high focus on mathematics and logic.",
    },
    {
      degree: "Matriculation (10th Grade)",
      institution: "CBSE Board",
      year: "2019",
      desc: "Graduated with excellent scores, focusing on foundational science and analytical thinking.",
    },
  ];

  const stats = [
    { label: "AI & Web Projects", value: "20+", icon: BrainCircuit, color: "text-purple-400" },
    { label: "Core Technologies", value: "15+", icon: Compass, color: "text-cyan-400" },
    { label: "Commits & Builds", value: "200+", icon: Award, color: "text-pink-400" },
  ];

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden bg-[#030014]">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 uppercase">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-[3px] bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Bio Section */}
          <div className="lg:col-span-6 space-y-8 animate-slide-in-right">
            <h3 className="text-3xl font-extrabold text-white tracking-wide font-heading">
              Engineering Scalable Solutions & Intelligent Systems
            </h3>
            
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Hello! I'm Rahul Kumar, a computer science student and developer focused on modern web platforms and AI integrations. I bridge the gap between creative visual designs and powerful backend logic.
            </p>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              My core specialties include React.js / TypeScript, Node.js development, relational databases like PostgreSQL, and Python automation. I love taking complex problems and structuring them into clean, elegant code.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="glass-card p-4 rounded-xl text-center flex flex-col items-center justify-center transition-transform hover:scale-105"
                  >
                    <Icon className={`h-6 w-6 ${stat.color} mb-2`} />
                    <span className="text-2xl md:text-3xl font-extrabold text-white block">
                      {stat.value}
                    </span>
                    <span className="text-[11px] md:text-xs text-gray-400 font-medium">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Education Timeline */}
          <div className="lg:col-span-6 space-y-6 animate-scale-in">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3 font-heading mb-4">
              <GraduationCap className="text-purple-400 h-7 w-7" />
              Education
            </h3>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="bg-white/[0.02] border-white/5 hover:border-purple-500/30 transition-all duration-300 rounded-xl overflow-hidden relative group"
                >
                  <CardContent className="p-5 flex gap-4">
                    {/* Left vertical timeline line indicator in card */}
                    <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-purple-500 to-pink-500 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="font-extrabold text-white text-base md:text-lg leading-tight group-hover:text-purple-300 transition-colors">
                          {edu.degree}
                        </h4>
                        <span className="text-[11px] font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/20">
                          {edu.year}
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-gray-400 font-semibold">
                        {edu.institution}
                      </p>
                      <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-light">
                        {edu.desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
