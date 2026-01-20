import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["About", "Skills", "Experience", "Education", "Projects", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#050505]/90 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter">
          Sidra<span className="text-cyan-400">.dev</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-gray-300 hover:text-white transition-colors group text-sm font-medium"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <a href="#contact" className="hidden lg:block px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all text-sm font-semibold">
          Hire Me
        </a>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white text-2xl">
            ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-white/10 p-6 flex flex-col gap-4">
             {navLinks.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-cyan-400">
                    {item}
                </a>
             ))}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;