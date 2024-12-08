import React, { useState, useEffect } from "react";
import { data } from "../../../data/info";

import SlideLeft from "../../animation/SlideInLeft";
import SlideRight from "../../animation/SlideInRight";
import SlideTop from "../../animation/SlideInTop";
import SlideBottom from "../../animation/SlideInBottom";

import useIsMobile from "../../modular/useIsMobile";

function Allprojects() {
  const projects = data.project;

  const [showModal, setShowModal] = useState(false); // Ajout de l'état du modal
  const [currentProject, setCurrentProject] = useState(null); // Projet sélectionné

  const isMobile = useIsMobile();

  const handleProjectClick = (project) => {
    setCurrentProject(project); // Définit le projet sélectionné
    setShowModal(true); // Affiche le modal
  };

  const closeModal = () => {
    setShowModal(false); // Ferme le modal
    setCurrentProject(null); // Réinitialise le projet sélectionné
  };

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
              key={index}
              onClick={() => isMobile && handleProjectClick(project)} // Ouvre le modal au clic sur mobile
              className="block group overflow-hidden relative cursor-pointer"
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

              {!isMobile && (
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
              )}
            </a>
          ))}
        </div>
      </div>

      {/* Modal Pop-up pour mobile */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-lg w-full mx-4 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-black"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {currentProject && (
              <>
                <h3 className="text-2xl font-semibold text-center">{currentProject.title}</h3>
                <img
                  src={currentProject.img}
                  alt={currentProject.title}
                  className="w-full h-auto object-cover mt-4"
                />
                <p className="mt-4 text-center">{currentProject.description}</p>
                <div className="mt-5">
                  <span className="font-semibold">Project Type:</span> {currentProject.type.join(", ")}
                </div>
                <div className="mt-3">
                  <span className="font-semibold">Tech:</span> {currentProject.tech.join(", ")}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Allprojects;
