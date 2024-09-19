import React from "react";

// Zoo
import zoo from "../assets/zoo.png";

// Moteur d'avion et ellise de l'hélice
import moteur from "../assets/moteur.jpg";
import ellise from "../assets/ellise.png";

import ScrollReveal from "./ScrollReveal";

const Experience = () => {
  

  return (
    <>
      <h2 className="text-3xl font-bold text-center mt-8">Experiences</h2>
      <ScrollReveal direction="translate-y-10" delay="1000ms" duration={1000}>
        <div className="overflow-hidden rounded-lg shadow-lg bg-gray-50 mb-8 flex">
          {/* Section Image */}
          <div className="relative flex-shrink-0">
            {/* Image zoo */}
            <img
              src={zoo}
              alt="Zoo"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-cover"
            />
          </div>

          {/* Section Contenu */}
          <div className="p-4 md:p-8 lg:p-12 xl:p-16 bg-gray-50 flex-grow">
            <h2 className="text-2xl font-bold mb-4">CultureBD</h2>
            <p className="text-gray-700 text-left">
              CultureBD est un site web qui permet aux amateurs de bandes
              dessinées de découvrir de nouvelles œuvres et de partager leurs
              avis. Les utilisateurs peuvent consulter des critiques, des
              interviews d'auteurs et des actualités sur le monde de la BD.
            </p>

            <p className="text-gray-700 text-left mt-4">
              Deux types de magazines sont proposés : un magazine dédié aux BD appelé ZooleMag et un magazine dédié aux mangas appelé ZooManga. Les utilisateurs peuvent s'abonner à l'un ou l'autre des magazines pour recevoir des numéros mensuels.
            </p>
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal direction="translate-y-10" delay="1000ms" duration={1000}>
        <div className="overflow-hidden rounded-lg shadow-lg bg-gray-50 mb-8 flex">
          {/* Section Contenu */}
          <div className="p-4 md:p-8 lg:p-12 xl:p-16 bg-gray-50 flex-grow">
            <h2 className="text-2xl font-bold mb-4">Safran Aircraft Engines</h2>
            <p className="text-gray-700 text-left">
              Safran Aircraft Engines est un motoriste aéronautique français
              spécialisé dans la conception, la fabrication et la
              commercialisation de moteurs d'avion civils et militaires. Il est
              l'un des principaux fournisseurs de moteurs pour les avions
              commerciaux et les avions de chasse dans le monde.
            </p>

            <p className="text-gray-700 text-left mt-4">
              Il existe différents types de moteurs d'avion, chacun ayant ses
              propres caractéristiques et avantages. Les moteurs à pistons sont
              les plus courants et sont utilisés dans de nombreux petits avions.
              Les moteurs à réaction sont utilisés dans les avions de ligne et
              les avions de chasse, et ils offrent une puissance et une vitesse
              supérieures.
            </p>
          </div>
          {/* Section Image */}
          <div className="relative flex-shrink-0">
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
    </>
  );
};

export default Experience;
