import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";
import { SiUpwork, SiFiverr } from "react-icons/si"; 
import { HiMail } from "react-icons/hi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaLinkedin />, href: "https://linkedin.com/in/sidra-sheikh-346b8a311" },
    { icon: <FaGithub />, href: "https://github.com/SidraSheikh" },
    { icon: <SiUpwork />, href: "https://www.upwork.com/" }, 
    { icon: <SiFiverr />, href: "https://www.fiverr.com/" },
    { icon: <HiMail />, href: "mailto:sidra.sheikh@example.com" }
  ];

  return (
    <footer className="relative bg-[#050505] pt-20 pb-10 overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
      <div className="glow-blob bg-cyan-900 w-64 h-64 bottom-[-50px] left-[-50px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 tracking-tighter">
              Sidra<span className="text-gradient">.dev</span>
            </h2>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Crafting scalable MERN stack applications and AI solutions. 
              Let's build something extraordinary together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["About", "Experience", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-cyan-500 transition-all"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold text-lg mb-6">Connect</h3>
            <p className="text-gray-400 mb-6">
              Available for Freelance & Full-time opportunities.
            </p>
            <div className="flex gap-4 flex-wrap">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-cyan-600 hover:text-white hover:border-cyan-500 hover:-translate-y-1 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500"
        >
          <p>&copy; {currentYear} Sidra Sheikh. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-2 md:mt-0">
            Made with <FaHeart className="text-red-500 animate-pulse" /> using MERN Stack
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;