import React from "react";
import SlideLeft from "../../animation/SlideInLeft";
import SlideRight from "../../animation/SlideInRight";
import SlideTop from "../../animation/SlideInTop";
import SlideBottom from "../../animation/SlideInBottom";

import photo from "../../../assets/photo.jpg";

const Introduction = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4 space-y-8 md:p-10 overflow-x-hidden"> {/* Ajout de overflow-x-hidden */}
      <SlideTop>
        <div className="p-8 w-full text-center">
          <h1 className="text-black text-3xl md:text-6xl font-bold">
            Welcome, I'm Pascal Kien
          </h1>
        </div>
      </SlideTop>

      <div className="flex flex-col md:flex-row items-center md:items-start w-full"> {/* Correction de la largeur */}
        <div className="w-full">
          <SlideLeft>
            <div className="p-8 w-full">
              <p className="text-black text-left text-lg md:text-2xl">
                As a web developer passionate about creating websites and interactive applications, I have experience in both front-end and back-end development, along with a solid understanding of artificial intelligence solutions such as machine learning, deep learning, natural language processing, and computer vision.
              </p>
            </div>
          </SlideLeft>

          <SlideBottom>
            <div className="p-8 w-full">
              <p className="text-black text-left text-lg md:text-2xl">
                I have worked on various projects ranging from personal websites to complex enterprise applications. I enjoy solving problems and creating solutions that have a positive impact on users.
              </p>
            </div>
          </SlideBottom>

          <SlideLeft>
            <div className="p-8 w-full">
              <p className="text-black text-left text-lg md:text-2xl">
                JS - PHP - Python - React - Node.js - Express - Django - Flask - TensorFlow - Keras - PyTorch - OpenCV - MySQL - PostgreSQL - MongoDB - Docker - AWS - Google Cloud - Heroku
              </p>
            </div>
          </SlideLeft>
        </div>

        <SlideRight>
          <div className="p-8">
            <img src={photo} alt="Pascal Kien" className="w-full h-auto object-cover rounded-lg" /> {/* Ajout de h-auto pour éviter de forcer la hauteur */}
          </div>
        </SlideRight>
      </div>
    </div>
  );
};

export default Introduction;
