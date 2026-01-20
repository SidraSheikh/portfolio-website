import { useEffect } from 'react';
import { projectsData } from '../data/projects'; // <--- Import Data

// Components Imports
import ParticlesBackground from '../components/ParticlesBackground';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import About from '../components/About';
import Experience from '../components/Experience';
import Certifications from '../components/Certifications';
import ProjectCard from '../components/ProjectCard';
import Contact from '../components/contact';
import Footer from '../components/Footer';

const Home = () => {
  // Stars Logic (Optional if you are using Particles)
  useEffect(() => {
    // ... (Your stars logic if needed)
  }, []);

  return (
    <>
      <ParticlesBackground />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <TechStack />
        <About />
        <Experience />
        <Certifications />
        
        <section id="projects" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <h2 className="text-4xl font-bold mb-4 text-center">Featured <span className="text-gradient">Projects</span></h2>
                <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
                    A selection of commercial projects and personal experiments across Full Stack Web and AI.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Direct Mapping from Local Data */}
                    {projectsData.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>

        <Contact />
      </main>
      
      <Footer />
    </>
  );
};

export default Home;