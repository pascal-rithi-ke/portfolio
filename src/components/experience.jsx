import React from "react";
import moteur from "../assets/moteur.jpg";
import ellise from "../assets/ellise.png";

import ScrollReveal from "./ScrollReveal";

const MoteurAvion = () => {
  return (
    <ScrollReveal direction="translate-y-10" delay="0.5s">
      <div className="flex justify-center items-center h-screen bg-gray-900 overflow-hidden">
        <div className="relative">
          {/* Image du moteur */}
          <img
            src={moteur}
            alt="Moteur"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-cover"
          />

          {/* Ellise de l'hélice avec l'animation */}
          <img
            src={ellise}
            alt="Hélice"
            className="absolute top-0 left-0 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-cover animate-spin-slow"
          />
        </div>
      </div>
    </ScrollReveal>
  );
};

export default MoteurAvion;
