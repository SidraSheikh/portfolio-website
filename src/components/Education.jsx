import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaCalendarAlt,
  FaAward,
} from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Science in Software Engineering",
      institution: "Mohammad Ali Jinnah University",
      period: "2021 - 2025",
      description:
        "Specialized in scalable web architectures and AI solutions. Led multiple semester projects and consistently maintained top-tier academic performance.",
      achievements: ["CGPA: 3.72", "High Achiever", "Dean's List"],
      icon: <FaGraduationCap />,
      color: "border-purple-500",
      glow: "group-hover:shadow-purple-500/20",
      textGradient: "from-purple-400 to-pink-400",
    },
    {
      id: 2,
      degree: "Intermediate in Pre-Medical",
      institution: "Aga Khan Higher Secondary School",
      period: "2019 - 2021",
      description:
        "Built a strong foundation in analytical thinking and scientific methodologies before transitioning engineering passion into technology.",
      achievements: ["Grade: A+", "Science Club Member"],
      icon: <FaUniversity />,
      color: "border-cyan-500",
      glow: "group-hover:shadow-cyan-500/20",
      textGradient: "from-cyan-400 to-blue-400",
    },
  ];

  return (
    <section
      id="education"
      className="py-24 bg-[#050505] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-medium mb-4">
            <FaGraduationCap className="text-xs" /> Academic Background
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Education{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Journey
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/50 via-cyan-500/50 to-transparent"></div>

          <div className="space-y-12 md:space-y-24">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-[#050505] border-2 border-cyan-400 rounded-full z-20 mt-6 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>

                <div className="flex-1 hidden md:block"></div>

                <div className="flex-1 pl-8 md:pl-0">
                  <div
                    className={`group relative bg-[#0f1115] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-all duration-300 ${edu.glow} hover:shadow-xl`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>

                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-4">
                        <div
                          className={`p-3 rounded-xl bg-white/5 border border-white/10 text-2xl text-white group-hover:scale-110 transition-transform ${edu.color.replace("border", "text")}`}
                        >
                          {edu.icon}
                        </div>
                        <span className="flex items-center gap-2 text-xs font-mono text-gray-500 bg-black/40 px-3 py-1 rounded-full border border-white/5">
                          <FaCalendarAlt /> {edu.period}
                        </span>
                      </div>

                      <h3
                        className={`text-xl md:text-2xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r ${edu.textGradient}`}
                      >
                        {edu.degree}
                      </h3>
                      <p className="text-gray-300 font-medium text-lg mb-4">
                        {edu.institution}
                      </p>

                      <p className="text-gray-400 text-sm leading-relaxed mb-6 border-l-2 border-white/10 pl-4">
                        {edu.description}
                      </p>

                      <div className="flex flex-wrap gap-3">
                        {edu.achievements.map((tag, i) => (
                          <span
                            key={i}
                            className={`text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 border ${
                              tag.includes("CGPA") || tag.includes("Grade")
                                ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-300"
                                : "bg-purple-500/10 border-purple-500/20 text-purple-300"
                            }`}
                          >
                            <FaAward className="text-[10px]" /> {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
