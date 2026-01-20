import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaRocket } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock Body Scroll when Mobile Menu is Open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" }, // Matches your Experience Section
    { name: "Projects", href: "#projects" }, // Matches your Projects Section
    { name: "Education", href: "#education" }, // Matches your About/Education tab
    { name: "Certifications", href: "#certifications" }, // Matches Certs section
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-[#050505]/80 backdrop-blur-lg border-b border-white/5 py-4 shadow-lg shadow-purple-500/5"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
            {/* Logo Box */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-500/20 group-hover:rotate-12 transition-transform duration-300">
              S
            </div>
            {/* Text */}
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-none tracking-tight">
                Sidra Sheikh
              </span>
              <span className="text-[10px] text-gray-400 font-mono leading-none">
                Software Engineer
              </span>
            </div>
          </a>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            {/* CTA Button */}
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-white text-sm font-semibold transition-all flex items-center gap-2 group"
            >
              <span>Hire Me</span>
              <FaRocket className="text-cyan-400 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* --- MOBILE TOGGLE --- */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white text-2xl p-2 focus:outline-none z-50 relative"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </motion.nav>

      {/* --- MOBILE FULL SCREEN MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[90] bg-[#050505] pt-24 px-6 lg:hidden flex flex-col items-center gap-8"
          >
            {navLinks.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold text-gray-300 hover:text-cyan-400 hover:tracking-widest transition-all"
              >
                {item.name}
              </motion.a>
            ))}

            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => setIsOpen(false)}
              className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold text-lg shadow-lg shadow-cyan-500/30"
            >
              Let's Talk
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
