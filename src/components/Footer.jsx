import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaHeart, FaArrowUp } from "react-icons/fa";
import { SiUpwork, SiFiverr } from "react-icons/si"; 
import { HiMail } from "react-icons/hi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    { icon: <FaLinkedin />, href: "https://linkedin.com/in/sidra-sheikh-346b8a311", label: "LinkedIn" },
    { icon: <FaGithub />, href: "https://github.com/SidraSheikh", label: "GitHub" },
    // { icon: <SiUpwork />, href: "https://www.upwork.com/", label: "Upwork" }, 
    // { icon: <SiFiverr />, href: "https://www.fiverr.com/", label: "Fiverr" },
    { icon: <HiMail />, href: "mailto:sidra.sheikh@example.com", label: "Email" }
  ];

  return (
    <footer className="relative bg-[#050505] pt-24 pb-12 overflow-hidden border-t border-white/5">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-900/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          
          {/* 1. Brand Section */}
          <div className="md:col-span-2 space-y-6">
            <a href="#" onClick={scrollToTop} className="flex items-center gap-3 group w-fit">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-500/20 group-hover:rotate-12 transition-transform duration-300">
                    S
                </div>
                <div className="flex flex-col">
                    <span className="text-white font-bold text-xl leading-none tracking-tight group-hover:text-cyan-400 transition-colors">Sidra Sheikh</span>
                    <span className="text-[10px] text-gray-500 font-mono leading-none tracking-widest mt-1">ENGINEERING THE FUTURE</span>
                </div>
            </a>
            <p className="text-gray-400 max-w-sm leading-relaxed text-sm">
              Architecting scalable MERN stack ecosystems and high-performance Flutter applications. 
              Bridging the gap between complex logic and elegant user experiences.
            </p>
            <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs text-gray-400 font-medium">Available for new opportunities</span>
            </div>
          </div>

          {/* 2. Navigation */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Explore</h3>
            <ul className="space-y-4">
              {["About", "Experience", "Projects", "Certifications"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-500 hover:text-cyan-400 transition-all text-sm font-medium flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-cyan-400 transition-colors"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Socials */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Connect</h3>
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-gradient-to-br hover:from-purple-600 hover:to-cyan-600 hover:text-white hover:border-transparent transition-all shadow-lg hover:shadow-cyan-500/25"
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <p className="mt-6 text-xs text-gray-500">
                Karachi, Pakistan <br /> (Remote Ready)
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600 text-center md:text-left">
            &copy; {currentYear} Sidra Sheikh. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
              <p className="text-xs text-gray-600 flex items-center gap-1.5">
                Engineered with <span className="text-cyan-400 font-semibold">React</span>, <span className="text-purple-400 font-semibold">Tailwind</span> & <FaHeart className="text-red-500/70 text-[10px]" />
              </p>
              
              {/* Back to Top Button */}
              <button 
                onClick={scrollToTop}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all border border-white/5"
              >
                <FaArrowUp size={12} />
              </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;