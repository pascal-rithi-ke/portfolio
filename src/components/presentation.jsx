import React, { useEffect, useState, useRef } from "react";

const AnimatedBlocks = () => {
  const [isVisible, setIsVisible] = useState({
    title: false,
    paragraph1: false,
    paragraph2: false,
  });

  // Références pour les sections à observer
  const titleRef = useRef(null);
  const paragraph1Ref = useRef(null);
  const paragraph2Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const name = entry.target.dataset.name;
            setIsVisible((prev) => ({ ...prev, [name]: true }));
          } else {
            const name = entry.target.dataset.name;
            setIsVisible((prev) => ({ ...prev, [name]: false }));
          }
        });
      },
      { threshold: 0.1 } // déclenchement si 10% de l'élément est visible
    );

    // Observer les éléments
    if (titleRef.current) observer.observe(titleRef.current);
    if (paragraph1Ref.current) observer.observe(paragraph1Ref.current);
    if (paragraph2Ref.current) observer.observe(paragraph2Ref.current);

    // Nettoyage des observateurs à la fin du cycle de vie
    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (paragraph1Ref.current) observer.unobserve(paragraph1Ref.current);
      if (paragraph2Ref.current) observer.unobserve(paragraph2Ref.current);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4 space-y-8 md:p-10">
      {/* Titre H1 (Animation de gauche vers la droite) */}
      <div
        ref={titleRef}
        data-name="title"
        className={`${
          isVisible.title ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        } transition-all duration-1000 ease-in-out transform p-8 w-full text-center`}
      >
        <h1 className="text-black text-3xl md:text-6xl font-bold">
          Welcome, I'm Pascal Kien
        </h1>
      </div>

      {/* Premier bloc de texte (Animation de droite vers la gauche) */}
      <div
        ref={paragraph1Ref}
        data-name="paragraph1"
        className={`${
          isVisible.paragraph1 ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } transition-all duration-1000 ease-in-out transform p-8 w-full md:w-1/2`}
      >
        <p className="text-black text-left text-lg md:text-2xl">
          Je suis un développeur web passionné par la création de sites web et
          d'applications interactives. J'ai une solide expérience dans le
          développement front-end et back-end, ainsi que dans la conception
          d'interfaces utilisateur et l'intégration de bases de données.
        </p>
      </div>

      {/* Deuxième bloc de texte (Animation du bas vers le haut) */}
      <div
        ref={paragraph2Ref}
        data-name="paragraph2"
        className={`${
          isVisible.paragraph2 ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        } transition-all duration-1000 ease-in-out transform p-8 w-full md:w-1/2`}
      >
        <p className="text-black text-left text-lg md:text-2xl">
          J'ai travaillé sur divers projets allant de sites web personnels à des
          applications d'entreprise complexes. J'aime résoudre des problèmes et
          créer des solutions qui ont un impact positif sur les utilisateurs.
        </p>
      </div>
    </div>
  );
};

export default AnimatedBlocks;
