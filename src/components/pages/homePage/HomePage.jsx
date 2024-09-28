import { useState, useEffect, useRef } from "react";
import Introduction from './Introduction.jsx';
import Experience from './Experience.jsx';
import Technologie from './Technologie.jsx';
import ProjectsShowcase from './ProjectsShowcase.jsx';

function HomePage() {
  const [activeSection, setActiveSection] = useState("intro");

  const introRef = useRef(null);
  const expRef = useRef(null);
  const techRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.5, // On considère la section active si elle est visible à 50% ou plus
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = [introRef.current, expRef.current, techRef.current, projectsRef.current];
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="relative snap-y snap-mandatory scroll-smooth">
      {/* Introduction Section */}
      <div ref={introRef} id="introduction" className="h-screen snap-start flex justify-center items-center">
        <Introduction />
      </div>

      {/* Experience Section */}
      <div ref={expRef} id="experience" className="h-screen snap-start flex justify-center items-center">
        <Experience />
      </div>

      {/* Technologie Section */}
      <div ref={techRef} id="tech" className="h-screen snap-start flex justify-center items-center">
        <Technologie />
      </div>

      {/* Projects Showcase Section */}
      <div ref={projectsRef} id="projects" className="h-screen snap-start flex justify-center items-center">
        <ProjectsShowcase />
      </div>

      {/* Navigation par points */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 space-y-4">
        <a
          href="#introduction"
          className={`block w-3 h-3 ${activeSection === 'introduction' ? 'bg-black' : 'bg-gray-500'} rounded-full transition-colors duration-300`}
        ></a>
        <a
          href="#experience"
          className={`block w-3 h-3 ${activeSection === 'experience' ? 'bg-black' : 'bg-gray-500'} rounded-full transition-colors duration-300`}
        ></a>
        <a
          href="#tech"
          className={`block w-3 h-3 ${activeSection === 'tech' ? 'bg-black' : 'bg-gray-500'} rounded-full transition-colors duration-300`}
        ></a>
        <a
          href="#projects"
          className={`block w-3 h-3 ${activeSection === 'projects' ? 'bg-black' : 'bg-gray-500'} rounded-full transition-colors duration-300`}
        ></a>
      </div>
    </div>
  );
}

export default HomePage;
