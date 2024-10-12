import React, { useState, useEffect, useRef } from "react";
import SlideLeft from "../../animation/SlideInLeft";
import SlideRight from "../../animation/SlideInRight";
import SlideTop from "../../animation/SlideInTop";
import SlideBottom from "../../animation/SlideInBottom";

import photo from "../../../assets/photo.jpg";
import { data } from "../../../data/info";

const Introduction = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.tooltip-container')) {
        setActiveTooltip(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleTooltipClick = (techIndex) => {
    setActiveTooltip(techIndex);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveTooltip(null);
    }, 3000);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4 space-y-8 md:p-10 overflow-x-hidden">
      <SlideTop>
        <div className="p-8 w-full text-center">
          <h1 className="text-black text-3xl md:text-6xl font-bold">
            Welcome, I'm Pascal Kien
          </h1>
        </div>
      </SlideTop>

      <div className="flex flex-col md:flex-row items-center md:items-start w-full">
        <div className="w-full">
          <SlideLeft>
            <div className="p-5 w-full">
              <p className="text-black text-left text-lg md:text-2xl">
                As a web developer passionate about creating websites and interactive applications, I have experience in both front-end and back-end development, along with a understanding of artificial intelligence solutions such as machine learning, deep learning, natural language processing, and computer vision.
              </p>
            </div>

            <div className="p-5 w-full">
              <p className="text-black text-left text-lg md:text-2xl">
                I have managed various personal projects, ranging from simple static websites to more complex web applications. Additionally, I have worked on optimizing, maintaining, and enhancing existing codebases within enterprise systems.
              </p>
            </div>

            <div className="p-5 w-full">
              <p className="text-black text-left text-lg md:text-2xl">
                I enjoy solving problems and creating solutions that have a positive impact on users.
              </p>
            </div>
          </SlideLeft>

          <SlideBottom>
            <div className="flex items-center justify-center p-4 overflow-x-auto">
              {['tech_lang', 'tech_framework', 'tech_Database'].map((category, catIndex) => (
                <div key={catIndex} className="flex flex-nowrap items-center bg-white m-4 justify-center space-x-4 w-full">
                  {data[category].map((tech, index) => (
                    <div key={index} className="tooltip-container">
                      <img
                        src={tech.img}
                        alt={tech.title}
                        className="rounded-full w-8 h-8 md:w-12 md:h-12 object-contain cursor-pointer"
                        onMouseEnter={() => setActiveTooltip(`${category}-${index}`)}
                        onMouseLeave={() => setActiveTooltip(null)}
                      />
                      {activeTooltip === `${category}-${index}` && (
                        <span className="absolute bg-gray-900 text-white text-xs p-2 rounded-md shadow-lg">
                          {tech.title}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </SlideBottom>

        </div>

        <SlideRight>
          <div className="p-6">
            <img src={photo} alt="Pascal Kien" className="w-full h-auto object-cover rounded-lg" />
          </div>
        </SlideRight>
      </div>
    </div>
  );
};

export default Introduction;
