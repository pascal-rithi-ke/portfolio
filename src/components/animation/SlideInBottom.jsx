import React, { useState, useEffect } from "react";

const SlideInBottom = ({ children, delay = 500 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      } transition-all duration-1000 ease-in-out transform`}
    >
      {children}
    </div>
  );
};

export default SlideInBottom;