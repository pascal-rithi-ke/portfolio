import React, { useState, useEffect } from "react";

const SlideInLeft = ({ children, delay = 500 }) => {
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
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      } transition-all duration-1000 ease-in-out transform`}
    >
      {children}
    </div>
  );
};

export default SlideInLeft;
