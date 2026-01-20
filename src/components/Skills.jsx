import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "React.js / Next.js", level: 95 },
    { name: "JavaScript / TypeScript", level: 90 },
    { name: "Node.js / Express", level: 85 },
    { name: "MongoDB / SQL", level: 85 },
    { name: "Python / AI Integration", level: 80 },
    { name: "Flutter / React Native", level: 75 },
    { name: "Docker / Linux", level: 70 },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center"
        >
          Technical <span className="text-gradient">Skills</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
            {skills.map((skill, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <div className="flex justify-between mb-2">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full"
                        />
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;