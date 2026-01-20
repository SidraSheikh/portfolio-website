import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaBuilding } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "ZirveSol",
      period: "Sept 2025 - Present",
      description: "Architecting dynamic frontend architectures for high-traffic platforms including Cratos and flight booking engines.",
      skills: ["React.js", "Redux", "API Integration", "Tailwind"],
      gradient: "from-purple-500 to-indigo-500",
      active: true,
    },
    {
      role: "Frontend Developer (Part Time)",
      company: "RoadGauge",
      period: "March 2025 - Present",
      description: "Optimizing reporting modules using WeasyPrint with Python backend. Focused on system scalability and rendering performance.",
      skills: ["Python", "WeasyPrint", "Performance", "Optimization"],
      gradient: "from-cyan-500 to-blue-500",
      active: true,
    },
    {
      role: "Software Developer",
      company: "ScitForte",
      period: "Jan 2025 - March 2025",
      description: "Spearheaded the VMS (Visitor Management System) SaaS product using MERN stack. Managed full lifecycle from database design to UI.",
      skills: ["MERN Stack", "SaaS", "MongoDB", "System Design"],
      gradient: "from-pink-500 to-rose-500",
      active: false,
    },
    {
      role: "Web Developer Intern",
      company: "Oasis Infobyte",
      period: "Oct 2024 - Nov 2024",
      description: "Engineered a real-time pizza delivery application with live tracking, secure JWT authentication, and RESTful API architecture.",
      skills: ["React", "Node.js", "Real-time Tracking", "Auth"],
      gradient: "from-yellow-400 to-orange-500",
      active: false,
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-900/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-900/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
        >
          <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-2 block">Career Path</span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Experience</span>
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-white/10 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline Dot */}
              <div className={`absolute left-[-9px] md:left-[-10px] top-0 w-5 h-5 rounded-full border-4 border-[#050505] bg-gradient-to-r ${exp.gradient} shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover:scale-125 transition-transform duration-300`}></div>

              {/* Card */}
              <div className="relative p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden group-hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/10 hover:-translate-y-1">
                
                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${exp.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4 relative z-10">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-100 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-400 mt-1 text-sm font-medium">
                      <FaBuilding className="text-cyan-500" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
                    <FaCalendarAlt className="text-xs text-gray-400" />
                    <span className="text-xs font-mono text-gray-300">{exp.period}</span>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed mb-6 relative z-10">
                  {exp.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  {exp.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs font-medium rounded-md bg-white/5 text-cyan-200/80 border border-white/5 hover:border-cyan-500/30 hover:bg-cyan-500/10 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                {/* Active/Present Indicator (Optional) */}
                {exp.active && (
                   <div className="absolute top-4 right-4 hidden md:flex items-center gap-2">
                     <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                     </span>
                   </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;