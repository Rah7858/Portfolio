import { useEffect, useRef, useState } from "react";

interface SkillItem {
  name: string;
  percentage: number;
}

interface SkillCategory {
  category: string;
  icon: string;
  color: string;
  items: SkillItem[];
}

const Skills = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillsData: SkillCategory[] = [
    {
      category: "Languages",
      icon: "💻",
      color: "from-purple-500 to-pink-500 shadow-purple-500/20",
      items: [
        { name: "JavaScript", percentage: 90 },
        { name: "HTML/CSS", percentage: 95 },
        { name: "Python", percentage: 85 },
        { name: "TypeScript", percentage: 75 },
      ],
    },
    {
      category: "Frontend",
      icon: "🎨",
      color: "from-cyan-400 to-blue-500 shadow-cyan-400/20",
      items: [
        { name: "React.js", percentage: 90 },
        { name: "Tailwind CSS", percentage: 88 },
        { name: "Next.js", percentage: 70 },
      ],
    },
    {
      category: "Backend",
      icon: "⚙️",
      color: "from-green-400 to-emerald-600 shadow-green-400/20",
      items: [
        { name: "Node.js", percentage: 85 },
        { name: "Express.js", percentage: 85 },
        { name: "REST APIs", percentage: 88 },
      ],
    },
    {
      category: "Database",
      icon: "🗄️",
      color: "from-orange-400 to-red-500 shadow-orange-400/20",
      items: [
        { name: "PostgreSQL", percentage: 80 },
        { name: "Supabase", percentage: 80 },
        { name: "MongoDB", percentage: 75 },
        { name: "MySQL", percentage: 70 },
      ],
    },
    {
      category: "AI / ML",
      icon: "🤖",
      color: "from-pink-500 to-purple-600 shadow-pink-500/20",
      items: [
        { name: "Speech Recognition", percentage: 78 },
        { name: "OpenCV", percentage: 75 },
        { name: "TensorFlow", percentage: 60 },
      ],
    },
    {
      category: "Tools & Extras",
      icon: "🔧",
      color: "from-yellow-400 to-orange-500 shadow-yellow-400/20",
      items: [
        { name: "Git", percentage: 88 },
        { name: "JWT Auth", percentage: 85 },
        { name: "Vercel", percentage: 80 },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4 relative overflow-hidden bg-[#05011a]/40">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 uppercase">
            Technical <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-[3px] bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A comprehensive mapping of my programming expertise, tech stacks, and tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-card relative group hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Glowing category indicator */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-purple-400 transition-colors">
                  {cat.category}
                </h3>
              </div>

              <div className="space-y-5">
                {cat.items.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-gray-300">{skill.name}</span>
                      <span className="text-purple-400 font-bold">{skill.percentage}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${cat.color} skill-bar-fill`}
                        style={{ width: animate ? `${skill.percentage}%` : "0%" }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
