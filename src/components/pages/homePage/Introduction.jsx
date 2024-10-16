import React, { useState, useEffect, useRef } from "react";
import SlideLeft from "../../animation/SlideInLeft";
import SlideRight from "../../animation/SlideInRight";
import SlideTop from "../../animation/SlideInTop";
import SlideBottom from "../../animation/SlideInBottom";
import photo from "../../../assets/photo.jpg";
import { data } from "../../../data/info";

const Introduction = ({ isVisible }) => {
  const [startAnimation, setStartAnimation] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (isVisible) {
      setStartAnimation(true);
    } else {
      setStartAnimation(false);
    }
  }, [isVisible]);

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

  const renderParagraphs = (texts) =>
    texts.map((text, index) => (
      <div key={index} className="p-4 w-full">
        <p className="text-black text-left text-base md:text-xl">
          {text}
        </p>
      </div>
    ));

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4 space-y-6 md:space-y-8 md:p-6 overflow-x-hidden overflow-y-scroll no-scrollbar transform scale-75">
      {startAnimation && (
        <>
          <SlideTop>
            <div className="p-6 w-full text-center max-w-4xl">
              <h1 className="text-black text-2xl md:text-4xl font-bold">
                Welcome, <br /> I'm Pascal Kien
              </h1>
            </div>
          </SlideTop>

          {/* Image de profil affichée entre le titre et la description seulement sur mobile */}
          <div className="p-4 max-w-xs block md:hidden">
            <img src={photo} className="w-40 h-40 object-cover rounded-full mx-auto" />
          </div>

          <div className="flex flex-col md:flex-row items-center w-full max-w-5xl overflow-visible">
            <div className="w-full">
              <SlideLeft>
                {renderParagraphs([
                  "As a web developer passionate about creating websites and interactive applications, I have experience in both front-end and back-end development, along with a understanding of artificial intelligence solutions such as machine learning, deep learning, natural language processing, and computer vision.",
                  "I have managed various personal projects, ranging from simple static websites to more complex web applications. Additionally, I have worked on optimizing, maintaining, and enhancing existing codebases within enterprise systems.",
                  "I enjoy solving problems and creating solutions that have a positive impact on users."
                ])}

                <SlideBottom>
                  <div className="flex items-center justify-center p-4 overflow-x-auto no-scrollbar">
                    {['tech_lang', 'tech_framework', 'tech_Database'].map((category, catIndex) => (
                      <div key={catIndex} className="flex flex-nowrap items-center bg-white m-2 justify-center space-x-2 w-full">
                        {data[category].map((tech, index) => (
                          <div key={index} className="tooltip-container relative">
                            <img
                              src={tech.img}
                              alt={tech.title}
                              className="rounded-full w-6 h-6 md:w-10 md:h-10 object-contain cursor-pointer"
                              onMouseEnter={() => setActiveTooltip(`${category}-${index}`)}
                              onMouseLeave={() => setActiveTooltip(null)}
                            />
                            {activeTooltip === `${category}-${index}` && (
                              <span className="absolute bg-gray-900 text-white text-xs p-1 rounded-md shadow-lg">
                                {tech.title}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </SlideBottom>

              </SlideLeft>
            </div>

            {/* Image de profil affichée à droite seulement sur les écrans plus larges */}
            <SlideRight>
              <div className="p-4 max-w-xs hidden md:block">
                <img src={photo} alt="Pascal Kien" className="w-full h-auto object-cover rounded-lg" />
              </div>
            </SlideRight>
          </div>
        </>
      )}
    </div>
  );
};

export default Introduction;
