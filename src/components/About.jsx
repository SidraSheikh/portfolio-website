import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserCheck, FaGraduationCap, FaAward, FaUsers, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import profileImg from "../assets/profile.jpg"; 

import edu1 from "../assets/convocation.jpg";  
import edu2 from "../assets/uni-group.jpg";
import edu3 from "../assets/classroom.jpg";

import award1 from "../assets/chancellor-award.jpg"; 
import award2 from "../assets/president-award.jpg";

import lead1 from "../assets/genz-event.jpg";   
import lead2 from "../assets/genz-team.jpg";
import lead3 from "../assets/genz-speaker.jpg";
import lead4 from "../assets/genz-crowd.jpg";


const About = () => {
  const [activeTab, setActiveTab] = useState("story");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [activeTab]);

  useEffect(() => {
    const images = tabData[activeTab].images;
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 4000); 
      return () => clearInterval(interval);
    }
  }, [activeTab]);

  const nextImage = () => {
    const images = tabData[activeTab].images;
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    const images = tabData[activeTab].images;
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // --- DATA STRUCTURE ---
  const tabData = {
    story: {
      title: "My Story",
      icon: <FaUserCheck />,
      // Single Image for Story
      images: [profileImg], 
      content: (
        <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
          <p>
            I am a <strong className="text-white font-semibold">Software Engineer</strong> recently graduated from <span className="text-cyan-400">Mohammad Ali Jinnah University</span>. 
            My journey began with a curiosity for how things work, which evolved into a passion for architecting 
            <span className="text-purple-400"> scalable web ecosystems</span>.
          </p>
          <p>
            I don't just write code; I engineer solutions. From leading development teams for enterprise <strong className="text-white">VMS systems</strong> 
            to creating AI-powered fall detection algorithms, I thrive on complex challenges.
          </p>
        </div>
      )
    },
    education: {
      title: "Education",
      icon: <FaGraduationCap />,
      // Multiple Images for Education
      images: [edu1, edu2, edu3], 
      content: (
        <div className="space-y-6">
          <div className="relative group p-1 rounded-2xl bg-gradient-to-br from-purple-600/20 to-cyan-600/20">
            <div className="bg-[#1a1a1a] p-6 rounded-xl border border-white/5 h-full relative z-10">
                <div className="flex justify-between items-start mb-4">
                <div>
                    <h4 className="text-xl font-bold text-white">BS Software Engineering</h4>
                    <p className="text-gray-400 mt-1">Mohammad Ali Jinnah University</p>
                </div>
                <span className="text-xs font-mono bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full">2021-2025</span>
                </div>
                <div className="flex items-center gap-4 pt-2">
                    <div className="flex items-center gap-2 px-4 py-2 bg-cyan-950/30 border border-cyan-500/30 rounded-lg">
                        <span className="text-2xl font-bold text-cyan-400">3.72</span>
                        <span className="text-xs text-cyan-200 uppercase tracking-wider font-semibold">CGPA</span>
                    </div>
                    <div className="px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 rounded-lg text-sm font-bold flex items-center gap-2">
                        <FaAward /> High Achiever
                    </div>
                </div>
            </div>
          </div>
        </div>
      )
    },
    awards: {
      title: "Academic Awards",
      icon: <FaAward />,
      // Multiple Images for Awards
      images: [award1, award2], 
      content: (
        <div className="grid grid-cols-1 gap-4">
          <div className="group flex items-center gap-4 p-4 bg-gradient-to-r from-[#FFD700]/10 to-transparent border border-[#FFD700]/20 rounded-xl hover:border-[#FFD700]/50 transition-colors">
            <div className="p-3 bg-[#FFD700]/20 rounded-full text-[#FFD700] group-hover:scale-110 transition-transform"><FaAward size={20} /></div>
            <div>
              <h4 className="font-bold text-white text-lg">1x Chancellor's Award</h4>
              <p className="text-sm text-gray-400">Achieved Perfect <span className="text-[#FFD700]">4.00 GPA</span></p>
            </div>
          </div>
          <div className="group flex items-center gap-4 p-4 bg-gradient-to-r from-cyan-900/20 to-transparent border border-cyan-500/20 rounded-xl hover:border-cyan-500/50 transition-colors">
            <div className="p-3 bg-cyan-500/20 rounded-full text-cyan-400 group-hover:scale-110 transition-transform"><FaAward size={20} /></div>
            <div>
              <h4 className="font-bold text-white text-lg">2x President's Awards</h4>
              <p className="text-sm text-gray-400">Maintained GPA above <span className="text-cyan-400">3.8</span></p>
            </div>
          </div>
          <div className="group flex items-center gap-4 p-4 bg-gradient-to-r from-purple-900/20 to-transparent border border-purple-500/20 rounded-xl hover:border-purple-500/50 transition-colors">
            <div className="p-3 bg-purple-500/20 rounded-full text-purple-400 group-hover:scale-110 transition-transform"><FaAward size={20} /></div>
            <div>
              <h4 className="font-bold text-white text-lg">1x Dean's Award</h4>
              <p className="text-sm text-gray-400">Maintained GPA above <span className="text-purple-400">3.6</span></p>
            </div>
          </div>
        </div>
      )
    },
    leadership: {
      title: "Leadership",
      icon: <FaUsers />,
      // Multiple Images for Leadership (GEN Z)
      images: [lead1, lead2, lead3, lead4], 
      content: (
        <div className="bg-[#1a1a1a] p-6 rounded-xl border border-white/10 hover:border-pink-500/50 transition-all group shadow-lg shadow-pink-900/10">
            <div className="flex items-start gap-5">
                <div className="p-4 bg-pink-500/10 border border-pink-500/20 rounded-xl text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
                    <FaUsers size={28} />
                </div>
                <div className="flex-1">
                    <div className="flex justify-between items-start">
                        <div>
                            <h4 className="text-2xl font-bold text-white">Vice President</h4>
                            <p className="text-pink-400 font-medium text-sm tracking-wide uppercase mt-1">GEN Z Society - MAJU</p>
                        </div>
                        <span className="text-xs bg-white/5 text-gray-400 px-2 py-1 rounded border border-white/5">Oct 2022 - Dec 2023</span>
                    </div>
                    <div className="mt-6 space-y-3">
                        <div className="flex gap-3 text-gray-300 text-sm"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-pink-500 flex-shrink-0"></span><span>Planned and executed workshops supporting student development.</span></div>
                        <div className="flex gap-3 text-gray-300 text-sm"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-pink-500 flex-shrink-0"></span><span>Oversaw arrangements of major social events and community involvement.</span></div>
                    </div>
                </div>
            </div>
        </div>
      )
    }
  };

  const currentTabInfo = tabData[activeTab];

  return (
    <section id="about" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-medium mb-4">
            <FaUserCheck className="text-xs" /> Personal Overview
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* --- LEFT SIDE: DYNAMIC IMAGE / SLIDER --- */}
          <div className="lg:col-span-5 relative flex flex-col">
            <motion.div 
              layout
              className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#111] p-2 group h-full min-h-[400px] shadow-2xl"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-900">
                
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={`${activeTab}-${currentImageIndex}`}
                    src={currentTabInfo.images[currentImageIndex]}
                    alt={currentTabInfo.title}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                {/* SLIDER CONTROLS (Show only if > 1 image) */}
                {currentTabInfo.images.length > 1 && (
                  <>
                    <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-cyan-500/80 text-white rounded-full backdrop-blur-md border border-white/10 transition-all opacity-0 group-hover:opacity-100 z-20">
                      <FaChevronLeft />
                    </button>
                    <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-cyan-500/80 text-white rounded-full backdrop-blur-md border border-white/10 transition-all opacity-0 group-hover:opacity-100 z-20">
                      <FaChevronRight />
                    </button>
                    
                    {/* Dots Indicator */}
                    <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                      {currentTabInfo.images.map((_, idx) => (
                        <div 
                          key={idx} 
                          className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentImageIndex ? "bg-cyan-400 w-8" : "bg-white/30 w-2"}`}
                        />
                      ))}
                    </div>
                  </>
                )}
                
                {/* TEXT LABEL ON IMAGE */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                    <motion.div
                       key={activeTab}
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ delay: 0.2 }}
                    >
                        <h3 className="text-3xl font-bold text-white mb-1">{currentTabInfo.title}</h3>
                        
                        {/* Specific Subtitle logic */}
                        {activeTab === "story" && <p className="text-cyan-400 font-mono text-sm">Sidra Sheikh • Software Engineer</p>}
                        {activeTab === "leadership" && <p className="text-pink-400 font-mono text-sm">GEN Z Society Events</p>}
                        {activeTab === "awards" && <p className="text-yellow-400 font-mono text-sm">Achievement Moments</p>}
                        {activeTab === "education" && <p className="text-purple-400 font-mono text-sm">MAJU Campus Life</p>}
                    </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT SIDE: CONTENT TABS --- */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex flex-wrap gap-3 mb-8">
              {Object.keys(tabData).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all border backdrop-blur-md ${
                    activeTab === tab 
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 border-transparent text-white shadow-lg shadow-purple-500/25 scale-105" 
                    : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20"
                  }`}
                >
                  {tabData[tab].title}
                </button>
              ))}
            </div>

            <div className="bg-[#0f1014] border border-white/10 rounded-3xl p-8 flex-1 relative overflow-hidden shadow-2xl flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 blur-[80px] rounded-full pointer-events-none"></div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-4">
                    <div className="p-3 bg-white/5 rounded-xl text-cyan-400 text-2xl border border-white/10">
                        {currentTabInfo.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{currentTabInfo.title}</h3>
                  </div>
                  {currentTabInfo.content}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;