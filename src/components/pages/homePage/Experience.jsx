import React from "react";
import { data } from "@/data/info";

import DimplomaIcon from "@/components/icons/Diploma.jsx";
import BriefcaseIcon from "@/components/icons/Briefcase.jsx";

import useIsMobile from "../../modular/useIsMobile";

function Experience() {
  const { education, experience } = data;
  const isMobile = useIsMobile();

  // Associer les données par ID et trier par année
  const allItems = education.map((edu) => {
    const associatedExperience = experience.find((exp) => exp.id === edu.id);
    return { education: edu, experience: associatedExperience };
  });

  const sortedItems = allItems.sort((a, b) => a.education.year - b.education.year);

  return (
    <div className="container">
      <h2 id="experience" className="text-3xl font-bold text-center mb-8">
        Experience
      </h2>

      {/* Conteneur pour la présentation */}
      {isMobile ? (
        <div className="relative flex flex-col items-center">
          {/* Timeline en arrière-plan */}
          <div className="absolute w-1 bg-black h-full left-1/2 transform -translate-x-1/2 -z-10"></div>

          {sortedItems.map((item, index) => (
            <div key={index} className="w-[85%] mb-8 relative z-10">
              {/* Bloc Education */}
              {item.education && (
                <div className="bg-white shadow-lg rounded-lg p-4 mb-6 w-full md:w-3/4 mx-auto">
                  <div className="icon-container-left">
                    <DimplomaIcon className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">
                    {item.education.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {item.education.year}
                  </p>
                  <p className="text-gray-700 mt-2">{item.education.description}</p>
                </div>
              )}

              {/* Bloc Expérience */}
              {item.experience && (
                <div className="bg-white shadow-lg rounded-lg p-4 w-full md:w-3/4 mx-auto">
                  <div className="icon-container-right">
                    <BriefcaseIcon className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">
                    {item.experience.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {item.experience.year}
                  </p>
                  <p className="text-gray-700 mt-2">{item.experience.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        // Affichage Web : Timeline verticale
        <div className="relative flex flex-col items-center">
          <div className="absolute w-1 bg-black h-full left-1/2 transform -translate-x-1/2"></div>
          {sortedItems.map((item, index) => (
            <div key={index} className="w-full mb-8">
              <div className="flex flex-col md:flex-row items-center">
                {/* Education à gauche */}
                <div className="w-full md:w-1/2 flex justify-end pr-8">
                  {item.education && (
                    <div className="bg-white shadow-lg rounded-lg p-4 w-3/4">
                      <h4 className="text-lg font-bold text-gray-900">
                        {item.education.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {item.education.year}
                      </p>
                      <p className="text-gray-700 mt-2">{item.education.description}</p>
                    </div>
                  )}
                </div>
                {/* Connecteur au centre */}
                <div className="relative -ml-15 w-8 h-8 bg-black rounded-full border-2 border-white z-10">
                  <DimplomaIcon className="w-6 h-6 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
              </div>

              {/* Expérience à droite */}
              <div className="flex flex-col md:flex-row items-center justify-end">
                {/* Connecteur au centre */}
                <div className="relative -mr-16 w-8 h-8 bg-black rounded-full border-2 border-white z-10">
                  <BriefcaseIcon className="w-6 h-6 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
                <div className="w-full md:w-1/2 flex justify-start pl-8">
                  {item.experience && (
                    <div className="bg-white shadow-lg rounded-lg p-4 w-3/4">
                      <h4 className="text-lg font-bold text-gray-900">
                        {item.experience.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {item.experience.year}
                      </p>
                      <p className="text-gray-700 mt-2">{item.experience.description}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Experience;
