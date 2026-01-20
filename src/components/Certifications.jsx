import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCertificate, FaTimes, FaExternalLinkAlt, FaIdCard } from "react-icons/fa";
import { SiSalesforce, SiCisco, SiNasa } from "react-icons/si";

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  // Data provided by you
  const certs = [
    {
      id: 1,
      name: "Salesforce Certified Agentforce Specialist",
      issuer: "Salesforce",
      date: "Issued Apr 2025",
      credentialId: "6092521",
      icon: <SiSalesforce className="text-blue-500" />,
      description: "Validates expertise in Customer Relationship Management (CRM) and Agentforce specialized tools.",
      link: "#", // Add verification link if available
      skills: ["CRM", "Agentforce", "Salesforce"]
    },
    {
      id: 2,
      name: "Linux Essentials Professional Development",
      issuer: "Cisco",
      date: "2024",
      credentialId: "Verified",
      icon: <SiCisco className="text-cyan-400" />,
      description: "Earned Linux Essentials Professional Development Certificate from Cisco NetAcad, showcasing proficiency in Linux fundamentals. Validates expertise in operating systems and command-line usage. Testament to dedication to professional development in Linux administration.",
      skills: ["Linux Fundamentals", "Command Line", "OS Management"]
    },
    {
      id: 3,
      name: "MERN Stack Certification",
      issuer: "Simplilearn",
      date: "2024",
      credentialId: "Certified",
      icon: <FaCertificate className="text-orange-500" />,
      description: "Completed the MERN Stack course with a certificate from Simplilearn, enhancing proficiency in MongoDB, Express.js, React.js, and Node.js. This comprehensive program equipped me with practical skills essential for full-stack web development.",
      skills: ["MongoDB", "Express", "React", "Node.js"]
    },
    {
      id: 4,
      name: "NASA Space Challenge Participation",
      issuer: "NASA",
      date: "2024",
      credentialId: "Participant",
      icon: <SiNasa className="text-white" />,
      description: "Received NASA Space Challenge Participation Certificate, showcasing dedication to space exploration, problem-solving, and innovation under high-pressure environments.",
      skills: ["Innovation", "Problem Solving", "Teamwork"]
    },
    {
      id: 5,
      name: "Project Management Essentials",
      issuer: "MSICertified",
      date: "2024",
      credentialId: "PM-Essentials",
      icon: <FaIdCard className="text-purple-400" />,
      description: "Received Project Management Essentials Certification from MSICertified, validating proficiency in essential project management principles. Demonstrates competence in planning, executing, and controlling projects effectively.",
      skills: ["Project Planning", "Execution", "Leadership"]
    },
    {
      id: 6,
      name: "Security Fundamentals (SFPC)",
      issuer: "CertiProf",
      date: "2024",
      credentialId: "SFPC-V2",
      icon: <FaCertificate className="text-green-400" />,
      description: "Received the SFPC Certification from CertiProf. Demonstrates comprehensive understanding of fundamental software engineering principles, security practices, and methodologies.",
      skills: ["Security Principles", "Software Engineering", "Methodologies"]
    }
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-center">Licenses & <span className="text-gradient">Certifications</span></h2>
        <p className="text-gray-400 text-center mb-12">Click on any certificate to view details</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert) => (
            <motion.div
              key={cert.id}
              layoutId={`cert-${cert.id}`}
              onClick={() => setSelectedCert(cert)}
              whileHover={{ y: -5 }}
              className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-500/50 transition-all cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                {cert.icon}
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-3xl mt-1">{cert.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 leading-tight">{cert.name}</h3>
                  <p className="text-cyan-400 text-sm font-medium">{cert.issuer}</p>
                  <p className="text-gray-500 text-xs mt-1">{cert.date}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center">
                 <span className="text-xs text-gray-400">ID: {cert.credentialId}</span>
                 <span className="text-xs text-purple-400 flex items-center gap-1">View Details <FaExternalLinkAlt size={10}/></span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal / Popup for Details */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div
              layoutId={`cert-${selectedCert.id}`}
              className="relative w-full max-w-2xl bg-[#0f1014] border border-purple-500/30 rounded-2xl p-8 shadow-2xl z-10"
            >
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-2"
              >
                <FaTimes size={20} />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">{selectedCert.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedCert.name}</h3>
                  <p className="text-xl text-cyan-400">{selectedCert.issuer}</p>
                </div>
              </div>

              <div className="space-y-4 text-gray-300">
                <div className="flex flex-wrap gap-4 text-sm bg-white/5 p-4 rounded-lg">
                    <div>
                        <span className="block text-gray-500 text-xs uppercase tracking-wider">Issued Date</span>
                        <span className="font-semibold text-white">{selectedCert.date}</span>
                    </div>
                    <div>
                        <span className="block text-gray-500 text-xs uppercase tracking-wider">Credential ID</span>
                        <span className="font-semibold text-white font-mono">{selectedCert.credentialId}</span>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-2">Description</h4>
                    <p className="leading-relaxed text-sm text-gray-400">{selectedCert.description}</p>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-2">Skills Validated</h4>
                    <div className="flex flex-wrap gap-2">
                        {selectedCert.skills.map((skill, i) => (
                            <span key={i} className="text-xs bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full border border-purple-500/20">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
                
                {/* Agar image link hai to yahan show kar sakte ho */}
                <div className="pt-4 mt-4 border-t border-white/10 flex justify-end">
                    <button className="px-6 py-2 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors text-sm">
                        Show Credential
                    </button>
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