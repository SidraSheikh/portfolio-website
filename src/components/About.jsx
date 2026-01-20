import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGraduationCap, FaAward, FaUserCheck, FaDownload, FaUsers } from "react-icons/fa";

const About = () => {
  const [activeTab, setActiveTab] = useState("story");

  const tabContent = {
    story: {
      title: "My Story",
      icon: <FaUserCheck />,
      content: (
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            I am a <strong className="text-white">Software Engineer</strong> recently graduated from Mohammad Ali Jinnah University. 
            My journey began with a curiosity for how things work, which evolved into a passion for building 
            <span className="text-cyan-400"> scalable web applications</span>.
          </p>
          <p>
            I don't just write code; I solve problems. From leading development teams for enterprise VMS systems 
            to creating AI-powered fall detection apps, I thrive on challenges.
          </p>
        </div>
      )
    },
    education: {
      title: "Education",
      icon: <FaGraduationCap />,
      content: (
        <div className="space-y-6">
          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-bold text-white">BS Software Engineering</h4>
              <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">2021-2025</span>
            </div>
            <p className="text-gray-400 text-sm mb-2">Mohammad Ali Jinnah University</p>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-cyan-400">3.72 CGPA</span>
              <span className="text-xs border border-yellow-500/30 text-yellow-500 px-2 py-1 rounded-full">Gold Medalist / High Achiever</span>
            </div>
          </div>
        </div>
      )
    },
    awards: {
      title: "Academic Awards",
      icon: <FaAward />,
      content: (
        <div className="grid grid-cols-1 gap-4">
          <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-yellow-900/20 to-transparent border border-yellow-500/20 rounded-xl">
            <div className="p-3 bg-yellow-500/20 rounded-full text-yellow-400"><FaAward /></div>
            <div>
              <h4 className="font-bold text-white">1x Chancellor's Award</h4>
              <p className="text-xs text-gray-400">Achieved Perfect 4.00 GPA in a Semester</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-cyan-900/20 to-transparent border border-cyan-500/20 rounded-xl">
            <div className="p-3 bg-cyan-500/20 rounded-full text-cyan-400"><FaAward /></div>
            <div>
              <h4 className="font-bold text-white">2x President's Awards</h4>
              <p className="text-xs text-gray-400">Maintained GPA above 3.8</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-900/20 to-transparent border border-purple-500/20 rounded-xl">
            <div className="p-3 bg-purple-500/20 rounded-full text-purple-400"><FaAward /></div>
            <div>
              <h4 className="font-bold text-white">1x Dean's Award</h4>
              <p className="text-xs text-gray-400">Maintained GPA above 3.6</p>
            </div>
          </div>
        </div>
      )
    },
    leadership: {
      title: "Leadership",
      icon: <FaUsers />,
      content: (
        <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-pink-500/50 transition-colors">
            <div className="flex items-start gap-4">
                <div className="p-3 bg-pink-500/20 rounded-lg text-pink-400">
                    <FaUsers size={24} />
                </div>
                <div>
                    <h4 className="text-xl font-bold text-white">Vice President</h4>
                    <p className="text-pink-400 font-medium">GEN Z Society - MAJU</p>
                    <p className="text-xs text-gray-500 mt-1">Oct 2022 - Dec 2023</p>
                    
                    <ul className="mt-4 space-y-2 text-sm text-gray-300 list-disc pl-4">
                        <li>Planned and executed workshops supporting student development.</li>
                        <li>Oversaw arrangements of major social events and community involvement.</li>
                        <li>Awarded letter of certification for dedication.</li>
                    </ul>
                </div>
            </div>
        </div>
      )
    }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
        {/* Same layout code as previous About.jsx, just using the new tabContent object */}
        {/* ... Copy the return statement from the previous About.jsx code ... */}
        {/* Just make sure to map through the keys correctly in the tab button section */}
        <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <p className="text-gray-400">My journey, achievements, and leadership.</p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-2 group"
            >
              <div className="aspect-[4/5] rounded-xl overflow-hidden relative">
                <img src="/profile.jpg" alt="Sidra" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="flex flex-wrap gap-3 mb-8">
              {Object.keys(tabContent).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all border ${
                    activeTab === tab 
                    ? "bg-purple-600 border-purple-500 text-white shadow-lg shadow-purple-500/25" 
                    : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {tabContent[tab].title}
                </button>
              ))}
            </div>

            <div className="bg-[#0f1014] border border-white/5 rounded-2xl p-8 min-h-[350px] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-6 text-2xl text-cyan-400">
                    {tabContent[activeTab].icon}
                    <h3 className="font-bold text-white">{tabContent[activeTab].title}</h3>
                  </div>
                  {tabContent[activeTab].content}
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