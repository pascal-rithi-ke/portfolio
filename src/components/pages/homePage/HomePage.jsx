import { useState, useEffect, useRef } from "react";

import Introduction from './Introduction.jsx';
import Experience from './Experience.jsx';
import Contacts from "@/components/contacts.jsx";

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
      <div ref={introRef} id="introduction" className="">
        <Introduction />
      </div>

      {/* Experience Section */}
      <div ref={expRef} id="experience" className="h-screen snap-start justify-center items-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-10">Experience</h2>
        <Experience />
      </div>

      {/* Projects Showcase Section */}
        <div ref={projectsRef} id="contacts" className="h-screen snap-start flex justify-center items-center">
        <Contacts />
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
          href="#contact"
          className={`block w-3 h-3 ${activeSection === 'contacts' ? 'bg-black' : 'bg-gray-500'} rounded-full transition-colors duration-300`}
        ></a>
      </div>
    </div>
  );
}

export default HomePage;
