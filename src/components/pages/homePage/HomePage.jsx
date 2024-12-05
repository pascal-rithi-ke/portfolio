import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import Introduction from './Introduction.jsx';
import Experience from './Experience.jsx';
import Contacts from "@/components/contacts.jsx";

function HomePage() {
  const [activeSection, setActiveSection] = useState("introduction");
  const sectionRefs = useRef([]);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = sectionRefs.current;
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {/* Introduction Section */}
      <div
        id="introduction"
        ref={(el) => (sectionRefs.current[0] = el)}
        className="md:h-screen flex md:items-center md:justify-center sm:mt-0"
      >
        <Introduction />
      </div>

      {/* Experience Section */}
      <div
        id="experience"
        ref={(el) => (sectionRefs.current[1] = el)}
        className="md:h-[200vh] flex items-center justify-center"
      >
        <Experience />
      </div>

      {/* Contacts Section */}
      <div
        id="contacts"
        ref={(el) => (sectionRefs.current[2] = el)}
        className="md:h-screen flex items-center justify-center"
      >
        <Contacts />
      </div>

      {/* Navigation par points (uniquement pour les écrans md et plus grands) */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 space-y-4 hidden md:block">
        <div className="group relative">
          <Link
            to="#introduction"
            className={`block w-3 h-3 ${
              activeSection === "introduction" ? "bg-black" : "bg-gray-500"
            } rounded-full transition-colors duration-300`}
          ></Link>
          <span className="absolute right-6 bottom-1/2 transform translate-y-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-sm px-2 py-1 rounded-md transition-opacity duration-300">
            Introduction
          </span>
        </div>

        <div className="group relative">
          <Link
            to="#experience"
            className={`block w-3 h-3 ${
              activeSection === "experience" ? "bg-black" : "bg-gray-500"
            } rounded-full transition-colors duration-300`}
          ></Link>
          <span className="absolute right-6 bottom-1/2 transform translate-y-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-sm px-2 py-1 rounded-md transition-opacity duration-300">
            Experience
          </span>
        </div>

        <div className="group relative">
          <Link
            to="#contacts"
            className={`block w-3 h-3 ${
              activeSection === "contacts" ? "bg-black" : "bg-gray-500"
            } rounded-full transition-colors duration-300`}
          ></Link>
          <span className="absolute right-6 bottom-1/2 transform translate-y-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-sm px-2 py-1 rounded-md transition-opacity duration-300">
            Contacts
          </span>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
