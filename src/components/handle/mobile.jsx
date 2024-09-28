import { useState, useEffect } from "react";

const isMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      // Si la largeur de la fenêtre est inférieure à 768px, on considère que c'est mobile
      setIsMobile(window.innerWidth < 768);
    };

    // Exécuter la vérification lors du premier rendu
    checkMobile();

    // Ajoute un écouteur pour surveiller les redimensionnements de la fenêtre
    window.addEventListener("resize", checkMobile);

    // Nettoyage de l'écouteur lors du démontage
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

export default isMobile;
