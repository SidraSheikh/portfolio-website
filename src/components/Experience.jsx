import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaServer, FaLayerGroup, FaLock, FaGlobe, FaMobileAlt } from "react-icons/fa";
import { SiPython } from "react-icons/si";

// --- 1. ZIRVESOL VISUAL (Enterprise Dashboard + Live Graph) ---
const ZirveSolVisual = () => (
  <div className="w-full h-full bg-[#0d0d0d] p-5 flex flex-col gap-4 relative overflow-hidden">
    {/* Sidebar & Header Mockup */}
    <div className="flex gap-4 h-full">
      <motion.div 
        initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}
        className="w-16 h-full rounded-lg bg-white/5 border border-white/10 flex flex-col items-center py-4 gap-3"
      >
         {[1,2,3,4].map(i => <div key={i} className="w-8 h-8 rounded-full bg-white/10" />)}
      </motion.div>
      
      <div className="flex-1 flex flex-col gap-4">
        {/* Top Stats Cards */}
        <div className="flex gap-3">
            {[1, 2].map((i) => (
                <motion.div key={i} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: i * 0.2 }} className="h-20 flex-1 rounded-lg bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/20 relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500/50"></div>
                </motion.div>
            ))}
        </div>

        {/* Live Graph Area */}
        <div className="flex-1 rounded-lg bg-[#111] border border-white/10 relative p-4 overflow-hidden">
            <div className="text-[10px] text-gray-500 font-mono mb-2">LIVE TRAFFIC METRICS</div>
            {/* SVG Wave Animation */}
            <svg className="w-full h-24 absolute bottom-0 left-0" viewBox="0 0 100 20" preserveAspectRatio="none">
                <motion.path 
                    d="M0 10 Q 25 20 50 10 T 100 10 V 20 H 0 Z" 
                    fill="url(#blue-gradient)" 
                    stroke="rgba(59, 130, 246, 0.5)"
                    strokeWidth="0.5"
                    animate={{ d: [
                        "M0 15 Q 25 5 50 15 T 100 15 V 20 H 0 Z",
                        "M0 10 Q 25 20 50 10 T 100 10 V 20 H 0 Z",
                        "M0 15 Q 25 5 50 15 T 100 15 V 20 H 0 Z"
                    ]}}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                />
                <defs>
                    <linearGradient id="blue-gradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                        <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
      </div>
    </div>
  </div>
);

// --- 2. ROADGAUGE VISUAL (Mobile App + Capture Scan Effect) ---
const RoadGaugeVisual = () => (
  <div className="w-full h-full bg-[#0d0d0d] flex items-center justify-center relative overflow-hidden">
    {/* Matrix Background */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:100%_20px]"></div>

    {/* Phone Frame */}
    <motion.div 
        initial={{ y: 50, opacity: 0 }} 
        whileInView={{ y: 0, opacity: 1 }} 
        transition={{ type: "spring", stiffness: 60 }}
        className="w-[160px] h-[260px] bg-[#1a1a1a] border-2 border-white/10 rounded-[2rem] relative overflow-hidden shadow-2xl shadow-emerald-900/40"
    >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#0a0a0a] rounded-b-xl z-20"></div>

        {/* App UI - Camera/Capture View */}
        <div className="absolute inset-0 bg-gray-900 flex flex-col">
            {/* Header */}
            <div className="h-12 bg-emerald-900/20 border-b border-emerald-500/20 flex items-end pb-2 justify-center">
                <span className="text-[8px] text-emerald-400 font-mono tracking-widest">CAPTURE MODE</span>
            </div>
            
            {/* Scanning Area */}
            <div className="flex-1 relative flex items-center justify-center p-4">
                {/* Target Frame */}
                <div className="w-full h-32 border-2 border-dashed border-emerald-500/30 rounded-lg relative">
                    {/* Corner Markers */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-emerald-400"></div>
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-emerald-400"></div>
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-emerald-400"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-emerald-400"></div>

                    {/* Scanning Laser Beam */}
                    <motion.div 
                        animate={{ top: ["0%", "95%", "0%"] }}
                        transition={{ duration: 2.5, ease: "linear", repeat: Infinity }}
                        className="absolute left-0 w-full h-[2px] bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8)] z-10"
                    />
                </div>
            </div>

            {/* Bottom Action Button */}
            <div className="h-16 flex items-center justify-center">
                <motion.div 
                    animate={{ scale: [1, 1.1, 1] }} 
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-10 h-10 rounded-full bg-emerald-500/80 border-2 border-emerald-300 shadow-lg shadow-emerald-500/30"
                />
            </div>
        </div>
    </motion.div>

    {/* Floating Backend Code Snippet */}
    <motion.div 
        animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-8 top-12 p-3 rounded-lg bg-black/80 border border-emerald-500/30 backdrop-blur-md hidden sm:block"
    >
        <div className="flex flex-col gap-1">
             <div className="h-1.5 w-12 bg-emerald-600/50 rounded-full"></div>
             <div className="h-1.5 w-20 bg-gray-700/50 rounded-full"></div>
             <div className="h-1.5 w-16 bg-gray-700/50 rounded-full"></div>
        </div>
    </motion.div>
  </div>
);

// --- 3. SCITFORTE VISUAL (User Management & Approval) ---
const ScitForteVisual = () => (
  <div className="w-full h-full bg-[#0d0d0d] p-8 flex flex-col gap-3 relative">
    {/* Title */}
    <div className="flex justify-between items-center border-b border-white/5 pb-2 mb-2">
        <div className="h-2 w-20 bg-rose-500/40 rounded-full"></div>
        <div className="h-2 w-8 bg-gray-700 rounded-full"></div>
    </div>

    {/* Animated List Items */}
    {[1, 2, 3].map((item, i) => (
      <motion.div
        key={i}
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: i * 0.3, duration: 0.5 }}
        className="h-10 w-full bg-white/5 border border-white/10 rounded-md flex items-center px-3 gap-3 overflow-hidden"
      >
        <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-rose-500 to-orange-500 opacity-80"></div>
        <div className="h-1.5 w-24 bg-white/10 rounded-full"></div>
        
        {/* Status Badge Animation */}
        <motion.div 
            initial={{ width: "40px", backgroundColor: "#374151" }} // Gray
            animate={i === 0 ? { backgroundColor: "#059669" } : {}} // Turn Green for first item
            transition={{ delay: 1.5, duration: 0.5 }}
            className="ml-auto h-5 w-12 rounded bg-gray-700 flex items-center justify-center"
        >
             {i === 0 && (
                <motion.svg initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.8, duration: 0.3 }} className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </motion.svg>
             )}
        </motion.div>
      </motion.div>
    ))}
  </div>
);


const Experience = () => {
  const experiences = [
    {
      role: "Software Engineer", 
      company: "ZirveSol",
      period: "Sept 2025 - Present",
      description:
        "Engineered a diverse suite of enterprise platforms ranging from Construction E-Portals to complex Rental Management Systems (RMS). Developed dynamic 'Brand Configuration' engines and internal Intranet dashboards, handling complex booking logic and multi-tenant architectures.",
      tags: ["RMS & SaaS", "Complex Dashboards", "Booking Engines", "System Architecture"],
      color: "from-blue-600 via-indigo-600 to-violet-600",
      icon: <FaGlobe />,
      visual: <ZirveSolVisual />
    },
    {
      role: "Full Stack Developer",
      company: "RoadGauge",
      period: "March 2025 - Present",
      description:
        "Spearheading the critical 'Capture' feature within the RoadGauge App. Owning the complete lifecycle: architecting the Python backend for data processing and building the interactive mobile-first interface to transform raw inputs into actionable visual reporting.",
      tags: ["Python", "Mobile/App Logic", "Feature Ownership", "Data Visualization"],
      color: "from-emerald-500 via-teal-500 to-cyan-500",
      icon: <FaMobileAlt />,
      visual: <RoadGaugeVisual />
    },
    {
      role: "Software Developer",
      company: "ScitForte",
      period: "Jan 2025 - March 2025",
      description:
        "Developed a SaaS-based Visitor Management System from the ground up. Executed full-stack logic from scalable MongoDB schema design to responsive React UI, ensuring a seamless user experience for administrative control.",
      tags: ["MERN Stack", "SaaS Development", "System Design"],
      color: "from-rose-500 via-pink-500 to-fuchsia-500",
      icon: <FaLayerGroup />,
      visual: <ScitForteVisual />
    }
  ];

  return (
    <section id="experience" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-medium mb-4">
             <FaLaptopCode className="text-xs" /> Engineering & Development
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Impact <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Delivered</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Architecting complex solutions. From high-traffic E-portals to data-driven SaaS platforms.
          </p>
        </motion.div>

        {/* Timeline Items */}
        <div className="space-y-32">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 lg:gap-20 items-center`}
            >
              
              {/* Text / Info Side */}
              <div className="flex-1 w-full space-y-7">
                <div className="flex items-center gap-4">
                  <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${exp.color} text-white shadow-lg shadow-white/5`}>
                    {exp.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-white">{exp.company}</span>
                    <span className="text-sm text-cyan-400/80 font-mono tracking-wide uppercase">{exp.period}</span>
                  </div>
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold text-gray-100 leading-tight">
                  {exp.role}
                </h3>

                <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-white/10 pl-6">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  {exp.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-[#151515] border border-white/10 rounded-lg text-sm text-gray-300 font-mono hover:border-cyan-500/30 transition-all cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-2 text-gray-500 text-sm italic pt-2">
                    <FaLock className="text-xs" />
                    <span>Client projects protected by NDA</span>
                </div>
              </div>

              {/* Visual Side (Mockup Frame) */}
              <div className="flex-1 w-full relative perspective-1000 group">
                
                {/* Background Glow */}
                <div className={`absolute -inset-4 bg-gradient-to-r ${exp.color} rounded-[2rem] blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity duration-700`}></div>

                <motion.div
                  whileHover={{ rotateY: index % 2 === 0 ? 5 : -5, rotateX: 5, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className="relative bg-[#121212] border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-black h-[320px] sm:h-[380px]"
                >
                  {/* Fake Browser Header */}
                  <div className="h-10 bg-[#1a1a1a] border-b border-white/5 flex items-center px-4 justify-between z-20 relative">
                    <div className="flex gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                    </div>
                    <div className="flex-1 mx-6 h-6 bg-[#0a0a0a] rounded flex items-center px-3 gap-2 opacity-50">
                        <FaLock className="text-[8px] text-gray-400" />
                        <span className="text-[10px] text-gray-500 font-mono truncate">
                            internal://{exp.company.toLowerCase()}/secure-system
                        </span>
                    </div>
                  </div>

                  {/* RENDER THE ABSTRACT VISUAL HERE */}
                  <div className="relative w-full h-full bg-[#0a0a0a]">
                     {exp.visual}
                     
                     {/* Glass Overlay for unity */}
                     <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-20 pointer-events-none"></div>
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