import React from "react";
import SlideLeft from "../../animation/SlideInLeft";
import SlideRight from "../../animation/SlideInRight";
import SlideTop from "../../animation/SlideInTop";

const AnimatedBlocks = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4 space-y-8 md:p-10">
      <SlideLeft>
        <div className="p-8 w-full text-center">
          <h1 className="text-black text-3xl md:text-6xl font-bold">
            Welcome, I'm Pascal Kien
          </h1>
        </div>
      </SlideLeft>

      <SlideRight>
        <div className="p-8 w-full md:w-1/2">
          <p className="text-black text-left text-lg md:text-2xl">
            Je suis un développeur web passionné par la création de sites web et
            d'applications interactives. J'ai une solide expérience dans le
            développement front-end et back-end, ainsi que dans la conception
            d'interfaces utilisateur et l'intégration de bases de données.
          </p>
        </div>
      </SlideRight>

      <SlideTop>
        <div className="p-8 w-full md:w-1/2">
          <p className="text-black text-left text-lg md:text-2xl">
            J'ai travaillé sur divers projets allant de sites web personnels à
            des applications d'entreprise complexes. J'aime résoudre des
            problèmes et créer des solutions qui ont un impact positif sur les
            utilisateurs.
          </p>
        </div>
      </SlideTop>
    </div>
  );
};

export default AnimatedBlocks;
