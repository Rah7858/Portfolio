import { GraduationCap, Briefcase, Calendar } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  type: "education" | "work";
  color: string;
}

const Experience = () => {
  const timelineData: TimelineItem[] = [
    {
      year: "2024 - Present",
      title: "Full Stack & AI Project Developer",
      subtitle: "Independent Creator",
      description: "Architecting complex full-stack applications including RASU (AI e-commerce with 3D model support) and ARIS (AI accident response intelligence system with WebSockets). Integrating Python scripts, OpenCV vision models, and Supabase for authentication and real-time backend state management.",
      type: "work",
      color: "from-purple-500 to-pink-500 shadow-purple-500/30",
    },
    {
      year: "2021 - 2026",
      title: "Bachelor of Engineering (B.E.) in CSE",
      subtitle: "Siksha 'O' Anusandhan University (ITER), Bhubaneswar",
      description: "Deepening knowledge in Data Structures, Database Systems, Artificial Intelligence, and Computer Networks. Actively building hands-on projects in web design, automation, and computer vision.",
      type: "education",
      color: "from-cyan-400 to-blue-500 shadow-cyan-400/30",
    },
    {
      year: "2021",
      title: "Intermediate (12th Grade)",
      subtitle: "SL Arya Inter College (JAC)",
      description: "Focused on Physics, Chemistry, Mathematics, and Computer Science. Laid down the logical foundation for software engineering.",
      type: "education",
      color: "from-green-400 to-emerald-500 shadow-green-400/30",
    },
    {
      year: "2019",
      title: "Matriculation (10th Grade)",
      subtitle: "Holy Cross School (CBSE)",
      description: "Completed secondary education with excellence, building solid mathematical and analytical reasoning skills.",
      type: "education",
      color: "from-orange-400 to-red-500 shadow-orange-400/30",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 relative overflow-hidden bg-[#030014]">
      {/* Background visual element */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 uppercase">
            My <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Journey</span>
          </h2>
          <div className="w-24 h-[3px] bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A chronological timeline of my academic milestones and project development experience.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-gray-800 ml-4 md:ml-32 py-4">
          {timelineData.map((item, idx) => {
            const Icon = item.type === "work" ? Briefcase : GraduationCap;
            return (
              <div key={idx} className="mb-12 relative pl-8 md:pl-12 group">
                {/* Timeline dot */}
                <div
                  className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-900 border-2 border-gray-800 flex items-center justify-center text-white group-hover:scale-110 group-hover:border-purple-400 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]`}
                >
                  <Icon className="h-4 w-4 text-purple-400" />
                </div>

                {/* Left side year indicator (hidden on small, absolute on medium+) */}
                <div className="hidden md:block absolute -left-36 top-2 text-right w-24">
                  <span className="text-sm font-bold text-purple-400 flex items-center justify-end gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {item.year.split(" ")[0]}
                  </span>
                </div>

                {/* Card Container */}
                <div className="glass-card p-6 rounded-2xl relative transition-all duration-300 hover:shadow-[0_10px_30px_rgba(139,92,246,0.15)] hover:border-purple-500/30">
                  {/* Neon border glow effect */}
                  <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${item.color} rounded-l-2xl`}></div>

                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <span className="md:hidden inline-flex items-center gap-1 text-xs font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded mb-2">
                        <Calendar className="h-3 w-3" />
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-400 font-medium">{item.subtitle}</p>
                    </div>
                    <span className="hidden md:inline-block text-xs font-bold text-gray-500 bg-gray-900 border border-gray-800 px-3 py-1 rounded-full w-fit h-fit">
                      {item.year}
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
