import React, { useState, useEffect } from "react";
import { data } from "../../../data/info";

import SlideLeft from "../../animation/SlideInLeft";
import SlideRight from "../../animation/SlideInRight";
import SlideTop from "../../animation/SlideInTop";
import SlideBottom from "../../animation/SlideInBottom";

function Allprojects() {
  const projects = data.project;

  const [isMobile, setIsMobile] = useState(false);

  // Fonction pour vérifier si l'écran est mobile ou non
  const checkIfMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    checkIfMobile(); // Vérifier à l'initialisation si c'est mobile ou non
    window.addEventListener("resize", checkIfMobile); // Listener pour les changements de taille

    // Nettoyage de l'événement lors du démontage du composant
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  // Utiliser useEffect pour faire défiler vers le haut lorsqu'on accède à la section "projects"
  useEffect(() => {
    if (window.location.hash === "#projects") {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 300);
    }
  }, []);

  // Définir les classes dynamiquement en fonction de isMobile
  const containerClasses = isMobile
    ? "columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 flex flex-wrap md:flex-none"
    : "columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4";

  return (
    <div className="md:mt-40">
      <div
        id="projects"
        className="md:h-screen flex md:items-center md:justify-center sm:mt-0 px-4 transform md:scale-75 sm:h-1/2"
        style={{ marginTop: "calc(80px + 20px)" }}
      >
        {/* Masonry Layout avec images de tailles variables */}
        <div className={containerClasses}>

          {projects.map((project, index) => (
            <a
              href={project.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="block group overflow-hidden relative"
            >
              {/* Animation sur chaque bloc en fonction de l'index */}
              <div className="relative">
                {index % 4 === 0 && (
                  <SlideLeft>
                    <img
                      src={project.img}
                      alt={`Project ${index + 1}`}
                      className="w-28 md:w-full h-auto object-cover transition-all duration-300"
                      style={{
                        breakInside: "avoid",
                      }}
                    />
                  </SlideLeft>
                )}
                {index % 4 === 1 && (
                  <SlideRight>
                    <img
                      src={project.img}
                      alt={`Project ${index + 1}`}
                      className="w-28 md:w-full h-auto object-cover transition-all duration-300"
                      style={{
                        breakInside: "avoid",
                      }}
                    />
                  </SlideRight>
                )}
                {index % 4 === 2 && (
                  <SlideTop>
                    <img
                      src={project.img}
                      alt={`Project ${index + 1}`}
                      className="w-28 md:w-full h-auto object-cover transition-all duration-300"
                      style={{
                        breakInside: "avoid",
                      }}
                    />
                  </SlideTop>
                )}
                {index % 4 === 3 && (
                  <SlideBottom>
                    <img
                      src={project.img}
                      alt={`Project ${index + 1}`}
                      className="w-28 md:w-full h-auto object-cover transition-all duration-300"
                      style={{
                        breakInside: "avoid",
                      }}
                    />
                  </SlideBottom>
                )}
              </div>

              {/* Détails au survol */}
              <div className="absolute inset-0 text-left bg-black bg-opacity-90 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 sm:display-none">
                <h3 className="text-xl font-bold text-center mt-4">{project.title}</h3>
                <p className="mt-10 text-center">{project.description}</p>
                <div className="mt-5">
                  <span className="font-semibold">Project Type:</span> {project.type.join(", ")}
                </div>
                <div className="mt-3">
                  <span className="font-semibold">Tech:</span> {project.tech.join(", ")}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Allprojects;
