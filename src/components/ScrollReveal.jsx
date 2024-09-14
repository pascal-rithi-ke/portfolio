import React, { useEffect, useRef, useState } from "react";

const ScrollReveal = ({
  children,
  direction = "translate-y-10",
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
      className={`transition-opacity duration-1000 ease-in-out transform ${direction} delay-${delay} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
