import { motion } from "framer-motion";
import { FaUniversity, FaSchool } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white/5 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">My <span className="text-gradient">Education</span></h2>
        
        <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="p-8 border border-purple-500/30 bg-black/40 rounded-2xl relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 p-4 bg-purple-500/10 rounded-bl-2xl">
                    <FaUniversity className="text-purple-400 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Science</h3>
                <p className="text-purple-400 mb-4">Software Engineering</p>
                <p className="text-gray-300 font-semibold">Mohammad Ali Jinnah University</p>
                <p className="text-gray-500 text-sm mb-4">2021 - 2025</p>
                <div className="flex gap-2">
                    <span className="bg-purple-500/20 text-purple-300 text-xs px-2 py-1 rounded">CGPA: 3.72</span>
                    <span className="bg-yellow-500/20 text-yellow-300 text-xs px-2 py-1 rounded">Gold Medalist</span>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="p-8 border border-cyan-500/30 bg-black/40 rounded-2xl relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 p-4 bg-cyan-500/10 rounded-bl-2xl">
                    <FaSchool className="text-cyan-400 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Intermediate</h3>
                <p className="text-cyan-400 mb-4">Pre-Medical / Science</p>
                <p className="text-gray-300 font-semibold">Aga Khan Higher Secondary School</p>
                <p className="text-gray-500 text-sm mb-4">2019 - 2021</p>
                <div className="flex gap-2">
                    <span className="bg-cyan-500/20 text-cyan-300 text-xs px-2 py-1 rounded">Grade: A+</span>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;