import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaPaperPlane, FaSpinner, FaCheckCircle, FaExclamationCircle, FaEnvelope, FaMapMarkerAlt, FaCode, FaMobileAlt, FaServer } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      "service_ombx1xl",    
      "template_zfdivp8",   
      formRef.current,
      "uzDtVSG0KWZE7156V"     
    )
    .then(() => {
      setLoading(false);
      setStatus("success");
      formRef.current.reset();
      setTimeout(() => setStatus(null), 5000);
    })
    .catch((error) => {
      console.error("FAILED...", error);
      setLoading(false);
      setStatus("error");
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* --- LEFT SIDE: THE PITCH --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-medium mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                Available for new projects
              </div>
              <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
                Let’s Engineer Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Next Big Idea</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Need a high-performance <strong>Flutter App</strong>? A scalable <strong>Full Stack Web Platform</strong>? Or a complex <strong>SaaS Dashboard</strong>? 
                I bridge the gap between design and engineering to build products that scale.
              </p>
            </div>

            <div className="space-y-6">
                {/* Service Highlights */}
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400 border border-purple-500/20">
                        <FaMobileAlt size={20} />
                    </div>
                    <div>
                        <h4 className="text-white font-semibold">Mobile App Development</h4>
                        <p className="text-sm text-gray-500">Cross-platform Flutter apps (iOS & Android)</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400 border border-cyan-500/20">
                        <FaCode size={20} />
                    </div>
                    <div>
                        <h4 className="text-white font-semibold">Full Stack Engineering</h4>
                        <p className="text-sm text-gray-500">MERN Stack, React, Node.js & Scalable Architecture</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400 border border-emerald-500/20">
                        <FaServer size={20} />
                    </div>
                    <div>
                        <h4 className="text-white font-semibold">Custom Systems (VMS/RMS)</h4>
                        <p className="text-sm text-gray-500">Complex logic, API Integrations & Admin Panels</p>
                    </div>
                </div>
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-8">
                <a href="mailto:sidrasheikh29303@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                    <FaEnvelope className="text-cyan-400" />
                    <span>sidrasheikh29303@gmail.com</span> 
                </a>
                <div className="flex items-center gap-3 text-gray-300">
                    <FaMapMarkerAlt className="text-purple-400" />
                    <span>Karachi, Pakistan (Remote Available)</span>
                </div>
            </div>
          </motion.div>


          {/* --- RIGHT SIDE: THE FORM --- */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0f1014] border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
          >
             {/* Glow Effect inside Form */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[60px] rounded-full pointer-events-none"></div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                    <label className="text-xs text-gray-500 uppercase font-semibold tracking-wider">Your Name</label>
                    <input 
                        type="text" 
                        name="user_name" 
                        placeholder="John Doe" 
                        required
                        className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:bg-white/5 focus:outline-none transition-all placeholder:text-gray-600"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs text-gray-500 uppercase font-semibold tracking-wider">Your Email</label>
                    <input 
                        type="email" 
                        name="user_email" 
                        placeholder="john@company.com" 
                        required
                        className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:bg-white/5 focus:outline-none transition-all placeholder:text-gray-600"
                    />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs text-gray-500 uppercase font-semibold tracking-wider">Project Type</label>
                <select name="project_type" className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-gray-300 focus:border-cyan-500 focus:bg-white/5 focus:outline-none transition-all cursor-pointer">
                    <option value="General">Select a Service...</option>
                    <option value="Flutter App">Flutter Mobile App</option>
                    <option value="Web Development">Full Stack Web Development</option>
                    <option value="System Design">Enterprise System (VMS/RMS)</option>
                    <option value="Other">Other Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-gray-500 uppercase font-semibold tracking-wider">Message</label>
                <textarea 
                    name="message" 
                    placeholder="Tell me about your project goals, timeline, and requirements..." 
                    rows="5"
                    required
                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:bg-white/5 focus:outline-none transition-all placeholder:text-gray-600 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className={`w-full font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1 ${
                    status === "success" 
                    ? "bg-green-600 text-white shadow-green-500/25" 
                    : "bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:shadow-cyan-500/25 hover:from-purple-500 hover:to-cyan-500"
                }`}
              >
                {loading ? <FaSpinner className="animate-spin" /> : 
                 status === "success" ? <FaCheckCircle /> : <FaPaperPlane />}
                
                {loading ? "Sending..." : 
                 status === "success" ? "Message Sent!" : "Send Proposal"}
              </button>

              {status === "error" && (
                  <p className="text-red-400 text-center text-sm flex items-center justify-center gap-2 mt-4 bg-red-500/10 py-2 rounded-lg">
                      <FaExclamationCircle /> Failed to send. Please try again.
                  </p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;