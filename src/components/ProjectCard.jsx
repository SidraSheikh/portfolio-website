import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-colors shadow-lg"
    >
      <div className="relative h-52 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60"></div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        {project.type === "Client" && (
            <span className="absolute top-3 right-3 z-20 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs px-3 py-1 rounded-full font-bold backdrop-blur-md">
                CLIENT PROJECT
            </span>
        )}
      </div>

      <div className="p-6 relative z-20">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="text-xs font-medium px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.liveLink}
            target="_blank"
            className="flex-1 text-center py-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <FaExternalLinkAlt size={12} /> Live Demo
          </a>
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-colors"
            >
              <FaGithub size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;