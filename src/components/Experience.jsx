import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "ZirveSol",
      period: "Sept 2025 - Present",
      description: "Built the core frontend for high-traffic platforms like Cratos. Implemented dynamic flight booking engines and optimized rendering performance by 40%.",
      tags: ["React.js", "Redux", "Tailwind CSS"],
      link: "https://zirvesol.com", // Agar link hai to dalein
      color: "from-purple-600 to-blue-600",
      // Yahan apni website ka screenshot lagayen
      image: "https://shots.codepen.io/username/pen/MWKbwqv-800.jpg?version=1690000000" 
    },
    {
      role: "Frontend Developer",
      company: "RoadGauge",
      period: "March 2025 - Present",
      description: "Enhancing reporting modules with Python backends. Transformed static data into interactive visual dashboards for scalability.",
      tags: ["Python", "Data Viz", "Optimization"],
      link: "#",
      color: "from-cyan-500 to-teal-500",
      image: "https://cdn.dribbble.com/userupload/12474443/file/original-09029a1b50426d4007dfc920f5b12854.png?resize=1504x1128" 
    },
    {
      role: "Software Developer",
      company: "ScitForte",
      period: "Jan 2025 - March 2025",
      description: "Developed a SaaS-based Visitor Management System. Handled full-stack logic from MongoDB schema design to React UI implementation.",
      tags: ["MERN Stack", "SaaS", "System Design"],
      link: "#",
      color: "from-pink-500 to-rose-500",
      image: "https://cdn.dribbble.com/users/418188/screenshots/16383287/media/13593259e248b1d9dfd70716b08d0e0a.png?resize=1600x1200&vertical=center" 
    }
  ];

  return (
    <section id="experience" className="py-24 bg-[#050505] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-24"
        >
           <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Showcase</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Not just experience, but impact. Here are the platforms I've engineered.
          </p>
        </motion.div>

        <div className="space-y-32">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
            >
              
              {/* Text Side */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3">
                   <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${exp.color}`}></div>
                   <span className="text-cyan-400 font-mono tracking-widest text-sm">{exp.company}</span>
                </div>
                
                <h3 className="text-4xl font-bold text-white leading-tight">
                  {exp.role}
                </h3>
                
                <p className="text-gray-400 text-lg leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-3 pt-4">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:text-white hover:border-cyan-500/50 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-6 flex items-center gap-6">
                    <span className="text-gray-500 text-sm font-mono">{exp.period}</span>
                    {exp.link !== "#" && (
                        <a href={exp.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group cursor-pointer font-bold">
                            Live Preview <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    )}
                </div>
              </div>

              {/* Visual Side (The Website Mockup) */}
              <div className="flex-1 w-full relative perspective-1000 group">
                {/* Glow Effect behind image */}
                <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                
                {/* Browser Window Frame */}
                <motion.div 
                    whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? 5 : -5, rotateX: 2 }}
                    className="relative rounded-xl bg-[#1a1a1a] border border-white/10 overflow-hidden shadow-2xl shadow-black/50"
                >
                    {/* Browser Header */}
                    <div className="h-8 bg-[#2a2a2a] border-b border-white/5 flex items-center px-4 gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        <div className="ml-4 flex-1 h-4 bg-[#1a1a1a] rounded-full opacity-50 text-[10px] flex items-center px-2 text-gray-500 font-mono overflow-hidden">
                            {exp.link || "localhost:3000"}
                        </div>
                    </div>

                    {/* Project Image */}
                    <div className="relative aspect-video overflow-hidden bg-gray-900 group-hover:brightness-110 transition-all">
                        <img 
                            src={exp.image} 
                            alt={exp.role} 
                            className="w-full h-full object-cover object-top opacity-90 group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60"></div>
                    </div>
                </motion.div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;