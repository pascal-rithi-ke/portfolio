import React, { useEffect, useState, useRef } from "react";

// Zoo
import zoo from "../assets/zoo.png";
import moteur from "../assets/moteur.jpg";
import ellise from "../assets/ellise.png";

const Experience = () => {
  const [isVisible, setIsVisible] = useState({
    experience1: false,
    experience2: false,
  });

  // Références pour observer les sections
  const experience1Ref = useRef(null);
  const experience2Ref = useRef(null);

  // Pupille state
  const [pupilLeft, setPupilLeft] = useState({ cx: '50%', cy: '40%' });
  const [pupilRight, setPupilRight] = useState({ cx: '80%', cy: '40%' });
  const [isMobile, setIsMobile] = useState(false);

  // Function to check if the viewport is mobile
  const checkMobileView = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const name = entry.target.dataset.name;
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [name]: true }));
          } else {
            setIsVisible((prev) => ({ ...prev, [name]: false }));
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observer les sections
    if (experience1Ref.current) observer.observe(experience1Ref.current);
    if (experience2Ref.current) observer.observe(experience2Ref.current);

    // Cleanup on component unmount
    return () => {
      if (experience1Ref.current) observer.unobserve(experience1Ref.current);
      if (experience2Ref.current) observer.unobserve(experience2Ref.current);
    };
  }, []);

  // Add event listener to track window resizing
  useEffect(() => {
    checkMobileView();
    window.addEventListener("resize", checkMobileView);
    return () => {
      window.removeEventListener("resize", checkMobileView);
    };
  }, []);

  // Mouse move handler to move pupils (only if not mobile)
  const handleMouseMove = (event) => {
    if (!isMobile) {
      const eyesContainer = event.currentTarget.getBoundingClientRect();
      const mouseX = event.clientX - eyesContainer.left;
      const mouseY = event.clientY - eyesContainer.top;

      const moveX = (mouseX / eyesContainer.width - 0.5) * 2 * 10;
      const moveY = (mouseY / eyesContainer.height - 0.5) * 2 * 5;

      setPupilLeft({ cx: `calc(50% + ${moveX}px)`, cy: `calc(40% + ${moveY}px)` });
      setPupilRight({ cx: `calc(80% + ${moveX}px)`, cy: `calc(40% + ${moveY}px)` });
    }
  };

  // Define fixed positions for mobile
  const mobilePupilLeft = { cx: '52%', cy: '20%' };
  const mobilePupilRight = { cx: '80%', cy: '20%' };

  return (
    <div className="container mx-auto p-4 pb-8">
      <h2 className="text-3xl font-bold text-center mt-8">Experiences</h2>

      {/* Premier bloc (Animation de gauche vers la droite) */}
      <div
        ref={experience1Ref}
        data-name="experience1"
        className={`${
          isVisible.experience1
            ? "translate-x-0 " + (isMobile ? "" : "opacity-100")  // Animation visible sans opacity en mobile
            : isMobile ? "" : "-translate-x-full opacity-0"  // Position initiale sans opacity en mobile
        } transition-all duration-1000 ease-in-out transform p-4 md:p-8 w-full md:w-3/4 mx-auto mb-4 md:mb-8 flex flex-col md:flex-row bg-gray-50 shadow-lg rounded-lg`}
      >
        <div className="relative flex-shrink-0 w-full md:w-1/2" onMouseMove={handleMouseMove}>
          <img
            src={zoo}
            alt="Zoo"
            className="w-full max-w-full h-auto object-contain"
          />
          <svg className="absolute top-0 left-0 w-full object-cover">
            <circle
              cx={isMobile ? mobilePupilLeft.cx : pupilLeft.cx}
              cy={isMobile ? mobilePupilLeft.cy : pupilLeft.cy}
              r={isMobile ? "15" : "20"}
              fill="black"
            />
          </svg>
          <svg className="absolute top-0 left-0 w-full object-cover">
            <circle
              cx={isMobile ? mobilePupilRight.cx : pupilRight.cx}
              cy={isMobile ? mobilePupilRight.cy : pupilRight.cy}
              r={isMobile ? "15" : "20"}
              fill="black"
            />
          </svg>
        </div>
        <div className="p-4 bg-gray-50 flex-grow">
          <h2 className="text-2xl font-bold mb-4">CultureBD</h2>
          <p className="text-gray-700">
            CultureBD est un site web qui permet aux amateurs de bandes
            dessinées de découvrir de nouvelles œuvres et de partager leurs
            avis. Les utilisateurs peuvent consulter des critiques, des
            interviews d'auteurs et des actualités sur le monde de la BD.
          </p>
          <p className="text-gray-700 mt-4">
            Deux types de magazines sont proposés : un magazine dédié aux BD appelé ZooleMag
            et un magazine dédié aux mangas appelé ZooManga.
          </p>
        </div>
      </div>

      {/* Deuxième bloc (Animation de droite vers la gauche) */}
      <div
        ref={experience2Ref}
        data-name="experience2"
        className={`${
          isVisible.experience2
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        } transition-all duration-1000 ease-in-out transform p-8 w-full mb-8 flex flex-col md:flex-row bg-gray-50 shadow-lg rounded-lg`}
      >
        <div className="relative flex-shrink-0 w-full md:w-1/2 overflow-hidden">
          <img
            src={moteur}
            alt="Moteur"
            className="w-full object-cover"
          />
          <img
            src={ellise}
            alt="Ellise"
            className="absolute top-0 left-0 w-full object-cover animate-spin-slow"
          />
        </div>
        <div className="p-4 md:p-8 bg-gray-50 flex-grow">
          <h2 className="text-2xl font-bold mb-4">Safran Aircraft Engines</h2>
          <p className="text-gray-700">
            Safran Aircraft Engines est un motoriste aéronautique français spécialisé dans la conception,
            la fabrication et la commercialisation de moteurs d'avion civils et militaires.
          </p>
          <p className="text-gray-700 mt-4">
            Il existe différents types de moteurs d'avion, chacun ayant ses propres caractéristiques et avantages.
            Les moteurs à pistons sont courants dans les petits avions, tandis que les moteurs à réaction sont utilisés
            dans les avions de ligne et les avions de chasse.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
