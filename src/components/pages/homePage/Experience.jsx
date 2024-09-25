import React, { useState, useEffect } from "react";
import SlideLeft from "../../animation/SlideInLeft";
import SlideRight from "../../animation/SlideInRight";

// Zoo
import zoo from "../../../assets/zoo.png";
import moteur from "../../../assets/moteur.jpg";
import ellise from "../../../assets/ellise.png";

const Experience = () => {
  // Pupille state pour gérer les animations des yeux
  const [pupilLeft, setPupilLeft] = useState({ cx: "46%", cy: "30%" });
  const [pupilRight, setPupilRight] = useState({ cx: "75%", cy: "30%" });
  const [isMobile, setIsMobile] = useState(false);

  // Function to check if the viewport is mobile
  const checkMobileView = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  // Add event listener to track window resizing
  useEffect(() => {
    checkMobileView();
    window.addEventListener("resize", checkMobileView);
    return () => {
      window.removeEventListener("resize", checkMobileView);
    };
  }, []);

  return (
    <div className="container mx-auto p-4 pb-8">
      <h2 id="experiences" className="text-3xl font-bold text-center mt-8">
        Experiences
      </h2>

      <SlideLeft>
        <div className="transition-all duration-1000 ease-in-out transform p-4 md:p-8 w-full mx-auto mb-4 md:mb-8 flex flex-col-reverse md:flex-row bg-gray-50 shadow-lg rounded-lg">
          <div className="p-4 bg-gray-50 flex-grow">
            <h2 className="text-2xl font-bold mb-4">CultureBD</h2>
            <p className="text-gray-700">
              CultureBD est un site web qui permet aux amateurs de bandes
              dessinées de découvrir de nouvelles œuvres et de partager leurs
              avis. Les utilisateurs peuvent consulter des critiques, des
              interviews d'auteurs et des actualités sur le monde de la BD.
            </p>
            <p className="text-gray-700 mt-4">
              Deux types de magazines sont proposés : un magazine dédié aux BD
              appelé ZooleMag et un magazine dédié aux mangas appelé ZooManga.
            </p>
          </div>
          <div className="relative flex-shrink-0 w-full md:w-1/2">
            <img
              src={zoo}
              alt="Zoo"
              className="w-full max-w-full h-auto object-contain"
            />
            <svg className="absolute top-0 left-0 w-full object-cover">
              <circle
                cx={pupilLeft.cx}
                cy={pupilLeft.cy}
                r={isMobile ? "10" : "20"}
                fill="black"
                className="animate-eyeMove"
              />
            </svg>
            <svg className="absolute top-0 left-0 w-full object-cover">
              <circle
                cx={pupilRight.cx}
                cy={pupilRight.cy}
                r={isMobile ? "10" : "20"}
                fill="black"
                className="animate-eyeMove"
              />
            </svg>
          </div>
        </div>
      </SlideLeft>

      <SlideRight>
        <div className="transition-all duration-1000 ease-in-out transform p-8 w-full mb-8 flex flex-col md:flex-row bg-gray-50 shadow-lg rounded-lg">
          <div className="relative flex-shrink-0 w-full md:w-1/2 overflow-hidden">
            <img src={moteur} alt="Moteur" className="w-full object-cover" />
            <img
              src={ellise}
              alt="Ellise"
              className="absolute top-0 left-0 w-full object-cover animate-spin-slow"
            />
          </div>
          <div className="p-4 md:p-8 bg-gray-50 flex-grow">
            <h2 className="text-2xl font-bold mb-4">Safran Aircraft Engines</h2>
            <p className="text-gray-700">
              Safran Aircraft Engines est un motoriste aéronautique français
              spécialisé dans la conception, la fabrication et la
              commercialisation de moteurs d'avion civils et militaires.
            </p>
            <p className="text-gray-700 mt-4">
              Il existe différents types de moteurs d'avion, chacun ayant ses
              propres caractéristiques et avantages. Les moteurs à pistons sont
              courants dans les petits avions, tandis que les moteurs à réaction
              sont utilisés dans les avions de ligne et les avions de chasse.
            </p>
          </div>
        </div>
      </SlideRight>
    </div>
  );
};

export default Experience;
