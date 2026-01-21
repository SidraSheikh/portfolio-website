import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode, FaChartLine, FaRobot, FaVideo, FaShoppingCart, FaFilm } from "react-icons/fa";

const VisualAI = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-black flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(120,50,255,0.4),transparent_60%)]"></div>
    <motion.div 
      animate={{ top: ["0%", "100%", "0%"] }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      className="absolute left-0 w-full h-[2px] bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.8)] z-10"
    />
    <FaRobot className="text-6xl text-purple-500/50 relative z-0" />
    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
      <div className="h-1 flex-1 bg-purple-500/30 rounded-full animate-pulse"></div>
      <div className="h-1 w-1/3 bg-purple-500/30 rounded-full"></div>
    </div>
  </div>
);

const VisualDashboard = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 to-black flex flex-col p-6 justify-end">
    <div className="flex items-end gap-2 h-24 mb-2">
       {[40, 70, 50, 90, 60, 80].map((h, i) => (
         <motion.div 
           key={i}
           initial={{ height: "10%" }}
           whileInView={{ height: `${h}%` }}
           transition={{ delay: i * 0.1, duration: 0.5 }}
           className="flex-1 bg-emerald-500/40 rounded-t-sm border-t border-emerald-400/50"
         />
       ))}
    </div>
    <div className="h-[1px] w-full bg-emerald-500/30"></div>
  </div>
);

const VisualCode = () => (
  <div className="absolute inset-0 bg-[#0F1115] p-5 font-mono text-[10px] text-gray-500 leading-relaxed overflow-hidden">
    <div className="flex gap-1.5 mb-3">
        <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
        <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
        <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
    </div>
    <span className="text-pink-400">const</span> <span className="text-blue-400">optimize</span> = <span className="text-yellow-400">async</span> () ={">"} {"{"}
    <br/> &nbsp;&nbsp;<span className="text-pink-400">await</span> <span className="text-green-400">system</span>.<span className="text-blue-300">init</span>();
    <br/> &nbsp;&nbsp;<span className="text-gray-400">// Processing data...</span>
    <br/> &nbsp;&nbsp;<span className="text-pink-400">return</span> <span className="text-purple-400">true</span>;
    <br/> {"}"}
    <motion.div 
       animate={{ opacity: [0,1,0] }}
       transition={{ repeat: Infinity, duration: 0.8 }}
       className="w-2 h-4 bg-cyan-500 mt-1 inline-block align-middle"
    />
  </div>
);

const VisualMedia = ({ icon: Icon, color }) => (
  <div className={`absolute inset-0 bg-gradient-to-br ${color} to-black flex items-center justify-center group-hover:scale-110 transition-transform duration-700`}>
    <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center border border-white/10 backdrop-blur-sm">
        <Icon className="text-4xl text-white/80" />
    </div>
    {/* Floating Particles */}
    {[...Array(5)].map((_, i) => (
        <motion.div 
            key={i}
            animate={{ y: -50, opacity: 0 }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
            className="absolute w-1 h-1 bg-white/40 rounded-full"
            style={{ left: `${20 + i * 15}%`, bottom: "20%" }}
        />
    ))}
  </div>
);

// --- 2. MAIN COMPONENT ---

const ProjectCard = ({ project }) => {
  // Determine which visual to show based on ID or Type
  const renderVisual = () => {
    switch (project.visualType) {
        case "AI": return <VisualAI />;
        case "DASHBOARD": return <VisualDashboard />;
        case "CODE": return <VisualCode />;
        case "VIDEO": return <VisualMedia icon={FaVideo} color="from-pink-900/40" />;
        case "ECOMMERCE": return <VisualMedia icon={FaShoppingCart} color="from-blue-900/40" />;
        case "MOVIE": return <VisualMedia icon={FaFilm} color="from-red-900/40" />;
        default: return <VisualCode />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all hover:shadow-2xl hover:shadow-cyan-900/20 flex flex-col h-full"
    >
      {/* Abstract Visual Header */}
      <div className="relative h-48 w-full border-b border-white/5 bg-[#050505] overflow-hidden">
         {renderVisual()}
         
         {/* Overlay Gradient for Text Contrast */}
         <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10"></div>
         
         {project.type === "Client" && (
            <span className="absolute top-3 right-3 z-20 bg-cyan-950/80 text-cyan-400 border border-cyan-500/30 text-[10px] uppercase tracking-wider px-3 py-1 rounded-full font-bold backdrop-blur-md">
                Client Project
            </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1 relative z-20">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack - Pushed to bottom of content */}
        <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech, i) => (
                <span
                key={i}
                className="text-[10px] font-mono px-2 py-1 rounded-md bg-white/5 text-gray-400 border border-white/5 group-hover:border-cyan-500/20 transition-colors"
                >
                {tech}
                </span>
            ))}
            </div>

            <div className="flex gap-3">
            <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center py-2.5 bg-white/5 hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-600 border border-white/10 hover:border-transparent text-white rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-2 group/btn"
            >
                Live Demo <FaExternalLinkAlt size={10} className="group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
            </a>
            {project.githubLink && (
                <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-colors"
                >
                <FaGithub size={18} />
                </a>
            )}
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
