import React, { useEffect, useRef, useState } from "react";

const ScrollReveal = ({
  children,
  direction = "translate-y-10", // Ceci laisse la possibilité de changer la direction par défaut
  delay = "0s",
}) => {
  const revealRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (revealRef.current) {
      observer.observe(revealRef.current);
    }

    return () => {
      if (revealRef.current) {
        observer.unobserve(revealRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={revealRef}
      className={`transition-opacity duration-1000 ease-in-out transform ${delay} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
