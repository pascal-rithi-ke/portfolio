import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import Introduction from './Introduction.jsx';
import Experience from './Experience.jsx';
import Contacts from "@/components/contacts.jsx";

function HomePage() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [isIntroductionVisible, setIsIntroductionVisible] = useState(false);
  const [isExperienceVisible, setIsExperienceVisible] = useState(false);
  const [isContactsVisible, setIsContactsVisible] = useState(false);
  const sectionRefs = useRef([]);
  const location = useLocation();

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);

          if (entry.target.id === "introduction") {
            setIsIntroductionVisible(true);
          } else if (entry.target.id === "experience") {
            setIsExperienceVisible(true);
          } else if (entry.target.id === "contacts") {
            setIsContactsVisible(true);
          }

          if (entry.target.id !== "introduction") {
            setIsIntroductionVisible(false);
          }
          if (entry.target.id !== "experience") {
            setIsExperienceVisible(false);
          }
          if (entry.target.id !== "contacts") {
            setIsContactsVisible(false);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  const handleScroll = (event) => {
    event.preventDefault();
    const direction = event.deltaY > 0 ? 1 : -1;
    const sections = ["introduction", "experience", "contacts"];
    const currentIndex = sections.indexOf(activeSection);
    const nextIndex = Math.max(0, Math.min(sections.length - 1, currentIndex + direction));

    if (sectionRefs.current[nextIndex]) {
      sectionRefs.current[nextIndex].scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const isMobile = window.innerWidth < 768; // Check si on est sur mobile
    if (!isMobile) {
      window.addEventListener("wheel", handleScroll, { passive: false });
    }
    
    return () => {
      if (!isMobile) {
        window.removeEventListener("wheel", handleScroll);
      }
    };
  }, [activeSection]);

  return (
    <div className="relative">
      {/* Introduction Section */}
      <div id="introduction" ref={(el) => (sectionRefs.current[0] = el)} className="h-screen flex items-center justify-center">
        <Introduction isVisible={isIntroductionVisible} />
      </div>

      {/* Experience Section */}
      <div
        id="experience"
        ref={(el) => (sectionRefs.current[1] = el)}
        className="h-[200vh] md:h-screen flex items-center justify-center"
      >
        <Experience isVisible={isExperienceVisible} />
      </div>

    {/* Contacts Section */}
    <div id="contacts" ref={(el) => (sectionRefs.current[2] = el)} className="h-screen flex items-center justify-center">
      <Contacts isVisible={isContactsVisible} />
    </div>

      {/* Navigation par points (uniquement pour les écrans md et plus grands) */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 space-y-4 hidden md:block">
        <div className="group relative">
          <Link to="#introduction" className={`block w-3 h-3 ${activeSection === "introduction" ? "bg-black" : "bg-gray-500"} rounded-full transition-colors duration-300`}></Link>
          <span className="absolute right-6 bottom-1/2 transform translate-y-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-sm px-2 py-1 rounded-md transition-opacity duration-300">
            Introduction
          </span>
        </div>

        <div className="group relative">
          <Link to="#experience" className={`block w-3 h-3 ${activeSection === "experience" ? "bg-black" : "bg-gray-500"} rounded-full transition-colors duration-300`}></Link>
          <span className="absolute right-6 bottom-1/2 transform translate-y-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-sm px-2 py-1 rounded-md transition-opacity duration-300">
            Experience
          </span>
        </div>

        <div className="group relative">
          <Link to="#contacts" className={`block w-3 h-3 ${activeSection === "contacts" ? "bg-black" : "bg-gray-500"} rounded-full transition-colors duration-300`}></Link>
          <span className="absolute right-6 bottom-1/2 transform translate-y-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-sm px-2 py-1 rounded-md transition-opacity duration-300">
            Contacts
          </span>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
