import React from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaArrowDown,
  FaCode,
  FaReact,
  FaPython,
} from "react-icons/fa";
import { SiMongodb, SiJavascript } from "react-icons/si";

const Particle = ({ delay, x, y }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0.1, 0.4, 0.1],
      scale: [1, 1.5, 1],
      y: [0, -40, 0],
      x: [0, 20, 0],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut",
    }}
    style={{ left: `${x}%`, top: `${y}%` }}
    className="absolute w-2 h-2 bg-cyan-400 rounded-full blur-[1px]"
  />
);

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    mouseX.set((clientX - centerX) / 50);
    mouseY.set((clientY - centerY) / 50);
  };

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#050505] pt-32 pb-16 lg:pt-0 lg:pb-0"
    >
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-[1]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(10,10,10,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(10,10,10,0.8)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 z-0"></div>

      <motion.div style={{ x: x, y: y }} className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-600/30 rounded-full blur-[80px] md:blur-[120px] mix-blend-screen animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-600/30 rounded-full blur-[80px] md:blur-[120px] mix-blend-screen animate-pulse-slow delay-1000"></div>
        <div className="absolute top-[40%] left-[40%] w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-pink-600/20 rounded-full blur-[80px] md:blur-[100px] mix-blend-screen"></div>
      </motion.div>

      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <Particle
            key={i}
            delay={i * 0.5}
            x={Math.random() * 100}
            y={Math.random() * 100}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 md:mb-8 border border-cyan-500/30 rounded-full bg-cyan-950/30 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-cyan-300 text-[10px] md:text-xs font-bold tracking-widest uppercase">
              Available for Work
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 md:mb-6 leading-[1.1] tracking-tight text-white">
            Hi, I'm <br />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 pb-2">
              Sidra Sheikh
              <motion.svg
                className="absolute w-full h-2 md:h-3 -bottom-1 left-0 text-cyan-500 opacity-60"
                viewBox="0 0 200 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
              >
                <path
                  d="M2.00025 6.99996C18.4477 9.96083 40.6626 10.1492 59.2325 8.09437C104.23 4.42094 183.651 1.76567 197.962 3.00693"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>
          </h1>

          <div className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 h-12 md:h-8 flex flex-col md:flex-row items-center gap-2 md:gap-3 font-medium">
            <span className="text-purple-400">I engineer</span>
            <TypeAnimation
              sequence={[
                "MERN Stack Apps",
                1500,
                "Intelligent AI Solutions",
                1500,
                "Scalable Cloud Systems",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-white font-mono bg-white/5 px-2 rounded inline-block"
            />
          </div>

          <p className="text-gray-400 max-w-lg mb-8 md:mb-10 text-base md:text-lg leading-relaxed">
            Merging artistic vision with engineering precision. I build
            pixel-perfect web experiences powered by robust backend
            architectures.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold rounded-xl shadow-lg shadow-purple-500/20 flex items-center justify-center gap-3 relative overflow-hidden group w-full sm:w-auto"
            >
              <span className="relative z-10">Let's Collaborate</span>
              <FaArrowDown className="relative z-10 group-hover:translate-y-1 transition-transform" />
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12"></div>
            </motion.a>

            <motion.a
              whileHover={{
                scale: 1.05,
                borderColor: "#22d3ee",
                color: "#22d3ee",
              }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/SidraSheikh"
              target="_blank"
              className="px-8 py-3.5 border border-gray-700 bg-gray-900/50 backdrop-blur-sm text-gray-300 font-bold rounded-xl hover:bg-gray-800 transition-all flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              <FaGithub className="text-xl" /> <span>GitHub</span>
            </motion.a>
          </div>

          <div className="mt-10 md:mt-12 flex gap-6 text-gray-500 justify-center lg:justify-start">
            {[FaReact, SiJavascript, SiMongodb, FaPython].map((Icon, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, color: "#61DAFB" }}
                className="cursor-pointer transition-colors"
              >
                <Icon className="text-3xl" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:block relative perspective-1000"
        >
          <motion.div
            animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-8 -top-8 text-cyan-500/20 text-9xl z-0"
          >
            <FaCode />
          </motion.div>

          <motion.div
            style={{
              rotateX: useTransform(y, [-50, 50], [5, -5]),
              rotateY: useTransform(x, [-50, 50], [-5, 5]),
            }}
            className="relative z-10 bg-[#0f1115]/90 border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-purple-500/10 backdrop-blur-xl"
          >
            <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.6)]"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.6)]"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
              </div>
              <div className="text-[10px] uppercase tracking-widest text-gray-500 font-mono">
                bash -- sidra@dev
              </div>
            </div>

            <div className="p-6 font-mono text-sm leading-6 min-h-[280px] text-cyan-100/90 shadow-inner">
              <TypeAnimation
                splitter={(str) => str.split(/(?= )/)}
                sequence={[
                  `> npm run start:portfolio \n`,
                  1000,
                  `> npm run start:portfolio \n\n[INFO] Loading React Environment...\n[INFO] Connecting to Backend...`,
                  1000,
                  `> npm run start:portfolio \n\n[INFO] Loading React Environment...\n[INFO] Connecting to Backend...\n[SUCCESS] MongoDB Connected successfully.`,
                  1000,
                  `> const developer = new Engineer("Sidra");\n> developer.init();\n\n🚀 System Online.\n✨ Skills Loaded: React, Node, AI.\n\n> Ready for new projects_`,
                  5000,
                  "",
                ]}
                speed={60}
                style={{ whiteSpace: "pre-wrap", display: "block" }}
                repeat={Infinity}
                omitDeletionAnimation={true}
                cursor={true}
              />
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
