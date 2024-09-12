import React, { useEffect, useState } from "react";

const AnimatedBlocks = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Déclenche les animations après un délai de 100ms
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Le délai avant le déclenchement reste le même
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-between items-center h-screen p-10">
      {/* Bloc de présentation personnelle (animation de bas vers le haut avec effet de transparence) */}
      <div
        className={`${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        } transition-all duration-500 ease-in-out transform bg-blue-500 text-white p-8 rounded-lg w-1/2`}
      >
        <h2 className="text-2xl font-bold mb-4">Présentation Personnelle</h2>
        <p>
          Je m'appelle John Doe et je suis développeur full-stack avec une
          passion pour le design web et l'expérience utilisateur.
        </p>
      </div>

      {/* Bloc de description personnelle (animation de droite vers la gauche avec effet de transparence) */}
      <div
        className={`${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } transition-all duration-500 ease-in-out transform bg-green-500 text-white p-8 rounded-lg w-1/2`}
      >
        <h2 className="text-2xl font-bold mb-4">Description Personnelle</h2>
        <p>
          Avec plus de 5 ans d'expérience, j'ai travaillé sur divers projets,
          allant des applications web aux systèmes complexes d'API.
        </p>
      </div>
    </div>
  );
};

export default AnimatedBlocks;
