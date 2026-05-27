import { Award, Lock } from "lucide-react";

const Certifications = () => {
  const futureCerts = [
    {
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      topic: "Cloud Infrastructure",
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "Google AI",
      topic: "Deep Learning & Computer Vision",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 relative overflow-hidden bg-[#05011a]/30">
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 uppercase">
            Certifications
          </h2>
          <div className="w-24 h-[3px] bg-gradient-to-r from-pink-500 to-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Professional milestones and credentials I am currently pursuing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {futureCerts.map((cert, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl relative overflow-hidden group hover:border-pink-500/30 transition-all duration-300 transform hover:scale-[1.02]"
            >
              {/* Coming soon overlay watermark/ribbon */}
              <div className="absolute top-0 right-0 bg-gradient-to-r from-pink-500 to-orange-500 text-white text-[10px] font-bold tracking-widest uppercase py-1 px-4 rotate-45 translate-x-8 translate-y-3 shadow-lg">
                Soon
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-pink-500/10 rounded-xl text-pink-400 shrink-0">
                  <Award className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-gray-200 group-hover:text-white transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-400">{cert.issuer}</p>
                  <span className="inline-block text-[11px] font-semibold text-pink-400/90 bg-pink-500/5 border border-pink-500/10 px-2 py-0.5 rounded mt-2">
                    {cert.topic}
                  </span>
                </div>
              </div>

              {/* Lock visual on hover */}
              <div className="absolute inset-0 bg-[#0c0524]/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/20 border border-pink-500/30 text-white text-sm font-semibold tracking-wider uppercase shadow-lg">
                  <Lock className="h-4 w-4 text-pink-400 animate-pulse" />
                  Coming Soon
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
