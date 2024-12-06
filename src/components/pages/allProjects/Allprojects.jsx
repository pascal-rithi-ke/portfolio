import React, { useEffect } from "react";
import { data } from "../../../data/info";

import SlideLeft from "../../animation/SlideInLeft";
import SlideRight from "../../animation/SlideInRight";
import SlideTop from "../../animation/SlideInTop";
import SlideBottom from "../../animation/SlideInBottom";

function Allprojects() {
  const projects = data.project;

  // Utiliser useEffect pour faire défiler vers le haut lorsqu'on accède à la section "projects"
  useEffect(() => {
    // Vérifier si la section "projects" est dans l'URL
    if (window.location.hash === "#projects") {
      // Attendre un peu pour permettre aux éléments de charger
      setTimeout(() => {
        window.scrollTo(0, 0);  // Remonter en haut de la page
      }, 300);  // Attendre 300ms
    }
  }, []); // Ne s'exécute qu'une seule fois lorsque le composant est monté

  return (
    <div className="md:mt-40">
      <div
        id="projects"
        className="md:h-screen flex md:items-center md:justify-center sm:mt-0 px-4 transform md:scale-75 sm:h-1/2"
        style={{ marginTop: "calc(80px + 20px)" }} // Ajuste le 80px à la hauteur de ton menu fixe et le 20px est un petit supplément
      >
        {/* Masonry Layout avec images de tailles variables */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
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
              <div className="absolute inset-0 text-left bg-black bg-opacity-90 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
