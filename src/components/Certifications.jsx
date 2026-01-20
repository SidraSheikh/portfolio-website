import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaExternalLinkAlt, FaIdCard, FaAward, FaShieldAlt } from "react-icons/fa";
import { SiSalesforce, SiCisco, SiNasa, SiMongodb } from "react-icons/si";

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certs = [
    {
      id: 1,
      name: "Salesforce Certified Agentforce Specialist",
      issuer: "Salesforce",
      date: "Apr 2025",
      credentialId: "6092521",
      icon: <SiSalesforce />,
      description: "Validates expertise in Customer Relationship Management (CRM) and Agentforce specialized tools. Demonstrates ability to configure and deploy AI-driven agent solutions within the Salesforce ecosystem.",
      skills: ["CRM Architecture", "Agentforce", "AI Integration"],
      color: "text-[#00A1E0]", // Brand Color
      gradient: "from-[#00A1E0]/20 to-blue-600/20",
      border: "group-hover:border-[#00A1E0]/50"
    },
    {
      id: 2,
      name: "Linux Essentials Professional Development",
      issuer: "Cisco NetAcad",
      date: "2024",
      credentialId: "Verified",
      icon: <SiCisco />,
      description: "Earned Linux Essentials Professional Development Certificate from Cisco NetAcad. Validates expertise in open-source operating systems, command-line interface (CLI) mastery, and file system management.",
      skills: ["Linux CLI", "SysAdmin", "Open Source"],
      color: "text-[#049FD9]",
      gradient: "from-[#049FD9]/20 to-cyan-500/20",
      border: "group-hover:border-[#049FD9]/50"
    },
    {
      id: 3,
      name: "MERN Stack Certification",
      issuer: "Simplilearn",
      date: "2024",
      credentialId: "Certified",
      icon: <SiMongodb />,
      description: "Comprehensive Full Stack development program. Mastered the end-to-end flow of modern web applications using MongoDB, Express.js, React.js, and Node.js.",
      skills: ["Full Stack", "REST APIs", "Database Design"],
      color: "text-[#47A248]",
      gradient: "from-[#47A248]/20 to-emerald-600/20",
      border: "group-hover:border-[#47A248]/50"
    },
    {
      id: 4,
      name: "NASA Space Challenge Participation",
      issuer: "NASA",
      date: "2024",
      credentialId: "Participant",
      icon: <SiNasa />,
      description: "Global hackathon participation focusing on space exploration and Earth science. Demonstrated rapid prototyping, innovative problem-solving, and collaboration under high-pressure constraints.",
      skills: ["Innovation", "Rapid Prototyping", "Teamwork"],
      color: "text-white",
      gradient: "from-white/10 to-gray-500/10",
      border: "group-hover:border-white/50"
    },
    {
      id: 5,
      name: "Project Management Essentials",
      issuer: "MSICertified",
      date: "2024",
      credentialId: "PM-Essentials",
      icon: <FaIdCard />,
      description: "Validates proficiency in essential project management methodologies. Covers the project lifecycle: Initiation, Planning, Execution, Monitoring, and Closure.",
      skills: ["Agile", "Risk Mgmt", "Planning"],
      color: "text-purple-400",
      gradient: "from-purple-500/20 to-fuchsia-500/20",
      border: "group-hover:border-purple-400/50"
    },
    {
      id: 6,
      name: "Security Fundamentals (SFPC)",
      issuer: "CertiProf",
      date: "2024",
      credentialId: "SFPC-V2",
      icon: <FaShieldAlt />,
      description: "Demonstrates comprehensive understanding of fundamental software engineering principles, cybersecurity practices, and secure development methodologies.",
      skills: ["Cybersecurity", "Secure Coding", "Compliance"],
      color: "text-emerald-400",
      gradient: "from-emerald-500/20 to-green-500/20",
      border: "group-hover:border-emerald-400/50"
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-[#050505] relative overflow-hidden">
      
      {/* 1. Cinematic Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium mb-6"
          >
            <FaAward className="text-purple-400" />
            <span>Excellence & Credentials</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Licenses & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Certifications</span>
          </motion.h2>
        </div>
        
        {/* Grid System */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert) => (
            <motion.div
              key={cert.id}
              layoutId={`card-container-${cert.id}`}
              onClick={() => setSelectedCert(cert)}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`group relative p-6 rounded-2xl bg-[#0f1014] border border-white/5 ${cert.border} cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10`}
            >
              {/* Hover Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>

              <div className="relative z-10 flex flex-col h-full">
                  {/* Card Header */}
                  <div className="flex justify-between items-start mb-6">
                      <div className={`p-3 rounded-xl bg-white/5 border border-white/10 text-3xl ${cert.color} group-hover:scale-110 transition-transform duration-300`}>
                          {cert.icon}
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/5 group-hover:border-white/20 transition-colors">
                          {cert.date}
                      </span>
                  </div>

                  {/* Card Content */}
                  <div className="flex-1 space-y-2">
                      <h3 className="text-lg font-bold text-white leading-snug group-hover:text-cyan-100 transition-colors">
                          {cert.name}
                      </h3>
                      <p className="text-gray-400 text-sm font-medium">{cert.issuer}</p>
                  </div>

                  {/* Card Footer */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
                      <span className="text-xs text-gray-500 font-mono group-hover:text-gray-400">ID: {cert.credentialId}</span>
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-white group-hover:text-black transition-all">
                          <FaExternalLinkAlt className="text-xs" />
                      </div>
                  </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modern Glass Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <motion.div
              layoutId={`card-container-${selectedCert.id}`}
              className="relative w-full max-w-2xl bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black z-20"
            >
                {/* Top Color Line */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${selectedCert.gradient.split(" ")[1]} to-transparent`}></div>

                <div className="p-8">
                    {/* Close Button */}
                    <button 
                        onClick={() => setSelectedCert(null)}
                        className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                    >
                        <FaTimes />
                    </button>

                    {/* Header */}
                    <div className="flex flex-col sm:flex-row gap-6 items-start mb-8">
                        <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 text-5xl ${selectedCert.color}`}>
                            {selectedCert.icon}
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-2xl sm:text-3xl font-bold text-white">{selectedCert.name}</h3>
                            <div className="flex items-center gap-3 text-sm">
                                <span className="text-cyan-400 font-medium text-lg">{selectedCert.issuer}</span>
                                <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                                <span className="text-gray-400">{selectedCert.date}</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {/* Description Box */}
                        <div className="bg-white/5 rounded-xl p-5 border border-white/5">
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {selectedCert.description}
                            </p>
                        </div>

                        {/* Skills Chips */}
                        <div>
                            <h4 className="text-white text-sm font-semibold mb-3 uppercase tracking-wider">Skills Validated</h4>
                            <div className="flex flex-wrap gap-2">
                                {selectedCert.skills.map((skill, i) => (
                                    <span key={i} className="text-xs bg-[#1a1a1a] text-gray-300 px-3 py-1.5 rounded-full border border-white/10 hover:border-cyan-500/50 hover:text-white transition-colors cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Footer - No Button, Just Verification */}
                        <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between">
                            <div className="flex flex-col">
                                <span className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">Credential ID</span>
                                <span className="text-white font-mono text-sm tracking-wide">
                                    {selectedCert.credentialId}
                                </span>
                            </div>
                            
                            {/* Animated Verified Badge */}
                            <div className="px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span className="text-xs text-emerald-400 font-bold tracking-wide">VERIFIED</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;