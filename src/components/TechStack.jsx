import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaDocker, FaLinux, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiTypescript, SiNextdotjs, SiExpress, SiFlutter, SiSalesforce, SiFirebase, SiPostman } from "react-icons/si";

const TechStack = () => {
  const techs = [
    { icon: <SiSalesforce />, name: "Salesforce CRM", color: "text-blue-500" },
    { icon: <FaReact />, name: "React.js", color: "text-cyan-400" },
    { icon: <SiNextdotjs />, name: "Next.js", color: "text-white" },
    { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-400" },
    { icon: <FaNodeJs />, name: "Node.js", color: "text-green-500" },
    { icon: <SiMongodb />, name: "MongoDB", color: "text-green-400" },
    { icon: <FaPython />, name: "Python", color: "text-yellow-300" },
    { icon: <SiFlutter />, name: "Flutter", color: "text-cyan-300" },
    { icon: <SiFirebase />, name: "Firebase", color: "text-orange-400" },
    { icon: <FaLinux />, name: "Linux", color: "text-yellow-500" },
    { icon: <FaDocker />, name: "Docker", color: "text-blue-500" },
    { icon: <FaGitAlt />, name: "Git", color: "text-red-500" },
  ];

  return (
    <section className="py-10 overflow-hidden relative bg-black/20">
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] z-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
         <h3 className="text-xl font-bold text-gray-400 uppercase tracking-widest">Powered By Modern Tech</h3>
      </div>

      <div className="flex relative w-full overflow-hidden">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {[...techs, ...techs].map((tech, index) => (
            <div key={index} className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-xl border border-white/5 hover:border-purple-500/50 transition-colors group cursor-default">
              <span className={`text-2xl ${tech.color} group-hover:scale-110 transition-transform`}>{tech.icon}</span>
              <span className="text-gray-300 font-medium group-hover:text-white">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;