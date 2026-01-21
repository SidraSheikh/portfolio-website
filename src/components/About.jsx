import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserCheck, FaGraduationCap, FaAward, FaUsers } from "react-icons/fa";

const About = () => {
  const [activeTab, setActiveTab] = useState("story");

  const tabData = {
    story: {
      title: "My Story",
      icon: <FaUserCheck />,
      color: "from-cyan-500 to-blue-500",
      glow: "shadow-cyan-500/50",
      textColor: "text-cyan-400",
      content: (
        <div className="space-y-4 md:space-y-6 text-gray-300 leading-relaxed text-base md:text-lg">
          <p>
            I am a{" "}
            <strong className="text-white font-semibold">
              Software Engineer
            </strong>{" "}
            recently graduated from{" "}
            <span className="text-cyan-400">
              Mohammad Ali Jinnah University
            </span>
            . My journey began with a curiosity for how things work, which
            evolved into a passion for architecting
            <span className="text-purple-400"> scalable web ecosystems</span>.
          </p>
          <p>
            My focus goes beyond syntax; I build scalable ecosystems. Whether
            developing{" "}
            <strong className="text-white">complex web applications</strong> or
            deploying{" "}
            <strong className="text-white">AI-driven algorithms</strong>, I
            merge technical precision with innovative thinking to solve
            real-world problems.
          </p>
        </div>
      ),
    },
    education: {
      title: "Education",
      icon: <FaGraduationCap />,
      color: "from-purple-500 to-indigo-500",
      glow: "shadow-purple-500/50",
      textColor: "text-purple-400",
      content: (
        <div className="space-y-6">
          <div className="relative group p-1 rounded-2xl bg-gradient-to-br from-purple-600/20 to-cyan-600/20">
            <div className="bg-[#1a1a1a] p-4 md:p-6 rounded-xl border border-white/5 h-full relative z-10">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0 mb-4">
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-white">
                    BS Software Engineering
                  </h4>
                  <p className="text-gray-400 text-sm md:text-base mt-1">
                    Mohammad Ali Jinnah University
                  </p>
                </div>
                <span className="self-start text-xs font-mono bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full whitespace-nowrap">
                  2021-2025
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 md:gap-4 pt-2">
                <div className="flex items-center gap-2 px-3 py-2 bg-cyan-950/30 border border-cyan-500/30 rounded-lg">
                  <span className="text-xl md:text-2xl font-bold text-cyan-400">
                    3.72
                  </span>
                  <span className="text-[10px] md:text-xs text-cyan-200 uppercase tracking-wider font-semibold">
                    CGPA
                  </span>
                </div>
                <div className="px-3 py-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 rounded-lg text-xs md:text-sm font-bold flex items-center gap-2">
                  <FaAward /> High Achiever
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    awards: {
      title: "Academic Awards",
      icon: <FaAward />,
      color: "from-yellow-400 to-orange-500",
      glow: "shadow-yellow-500/50",
      textColor: "text-yellow-400",
      content: (
        <div className="grid grid-cols-1 gap-3 md:gap-4">
          {[
            {
              title: "1x Chancellor's Award",
              sub: "Achieved Perfect",
              val: "4.00 GPA",
              col: "text-[#FFD700]",
              bg: "bg-[#FFD700]/20",
              br: "border-[#FFD700]/20",
              hover: "hover:border-[#FFD700]/50",
            },
            {
              title: "2x President's Awards",
              sub: "Maintained GPA above",
              val: "3.8",
              col: "text-cyan-400",
              bg: "bg-cyan-500/20",
              br: "border-cyan-500/20",
              hover: "hover:border-cyan-500/50",
            },
            {
              title: "1x Dean's Award",
              sub: "Maintained GPA above",
              val: "3.6",
              col: "text-purple-400",
              bg: "bg-purple-500/20",
              br: "border-purple-500/20",
              hover: "hover:border-purple-500/50",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`group flex items-center gap-4 p-3 md:p-4 bg-gradient-to-r from-white/5 to-transparent border ${item.br} rounded-xl ${item.hover} transition-colors`}
            >
              <div
                className={`p-2 md:p-3 ${item.bg} rounded-full ${item.col} group-hover:scale-110 transition-transform shrink-0`}
              >
                <FaAward size={18} className="md:w-5 md:h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base md:text-lg">
                  {item.title}
                </h4>
                <p className="text-xs md:text-sm text-gray-400">
                  {item.sub} <span className={item.col}>{item.val}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    leadership: {
      title: "Leadership",
      icon: <FaUsers />,
      color: "from-pink-500 to-rose-500",
      glow: "shadow-pink-500/50",
      textColor: "text-pink-400",
      content: (
        <div className="bg-[#1a1a1a] p-4 md:p-6 rounded-xl border border-white/10 hover:border-pink-500/50 transition-all group shadow-lg shadow-pink-900/10">
          <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-5">
            <div className="p-3 md:p-4 bg-pink-500/10 border border-pink-500/20 rounded-xl text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300 shrink-0">
              <FaUsers size={24} className="md:w-7 md:h-7" />
            </div>
            <div className="flex-1 w-full">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0">
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-white">
                    Vice President
                  </h4>
                  <p className="text-pink-400 font-medium text-xs md:text-sm tracking-wide uppercase mt-1">
                    GEN Z Society - MAJU
                  </p>
                </div>
                <span className="self-start text-xs bg-white/5 text-gray-400 px-2 py-1 rounded border border-white/5 mt-2 sm:mt-0 whitespace-nowrap">
                  Oct 2022 - Dec 2023
                </span>
              </div>
              <div className="mt-4 md:mt-6 space-y-3">
                <div className="flex gap-3 text-gray-300 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-pink-500 flex-shrink-0"></span>
                  <span>
                    Planned and executed workshops supporting student
                    development.
                  </span>
                </div>
                <div className="flex gap-3 text-gray-300 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-pink-500 flex-shrink-0"></span>
                  <span>
                    Oversaw arrangements of major social events and community
                    involvement.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  };

  const currentTabInfo = tabData[activeTab];

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-[#050505] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-20 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs md:text-sm font-medium mb-4">
            <FaUserCheck className="text-xs" /> Personal Overview
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Me
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-5 relative flex flex-col">
            <motion.div
              layout
              className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a] p-1 group h-[300px] lg:h-full lg:min-h-[450px] shadow-2xl flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:14px_14px] opacity-20"></div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.4, type: "spring" }}
                  className="relative z-10 flex flex-col items-center justify-center"
                >
                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                      filter: [
                        "drop-shadow(0 0 10px rgba(255,255,255,0.1))",
                        "drop-shadow(0 0 30px rgba(255,255,255,0.3))",
                        "drop-shadow(0 0 10px rgba(255,255,255,0.1))",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`text-9xl md:text-[10rem] bg-gradient-to-br ${currentTabInfo.color} text-transparent bg-clip-text drop-shadow-2xl`}
                  >
                    {currentTabInfo.icon}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className={`mt-6 text-xl font-mono font-bold tracking-widest uppercase ${currentTabInfo.textColor}`}
                  >
                    {currentTabInfo.title}
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              <div
                className={`absolute inset-0 bg-gradient-to-t ${currentTabInfo.color} opacity-5 blur-[100px] pointer-events-none transition-colors duration-500`}
              ></div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 flex flex-col">
            <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8 justify-center lg:justify-start">
              {Object.keys(tabData).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all border backdrop-blur-md whitespace-nowrap ${
                    activeTab === tab
                      ? `bg-gradient-to-r ${tabData[tab].color} border-transparent text-white shadow-lg scale-105`
                      : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20"
                  }`}
                >
                  {tabData[tab].title}
                </button>
              ))}
            </div>

            <div className="bg-[#0f1014] border border-white/10 rounded-3xl p-5 md:p-8 flex-1 relative overflow-hidden shadow-2xl flex flex-col justify-center min-h-[300px]">
              <div
                className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${currentTabInfo.color} opacity-10 blur-[80px] rounded-full pointer-events-none transition-all duration-500`}
              ></div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8 border-b border-white/5 pb-4">
                    <div
                      className={`p-2 md:p-3 bg-white/5 rounded-xl ${currentTabInfo.textColor} text-xl md:text-2xl border border-white/10`}
                    >
                      {currentTabInfo.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {currentTabInfo.title}
                    </h3>
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
