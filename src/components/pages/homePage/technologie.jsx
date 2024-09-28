import React from 'react';
import { data } from '../../../data/info';
import SlideLeft from '../../animation/SlideInLeft.jsx';
import SlideRight from '../../animation/SlideInRight.jsx';

const groupedTechnologies = {
  langages: data.tech_lang,
  frameworks: data.tech_framework,
  database: data.tech_Database,
  cloud: data.tech_cloud,
  tools: data.tech_tool,
};

const Technologies = () => {
  return (
    <div className="container mr-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mt-8">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {Object.keys(groupedTechnologies).map((category, index) => (
          <div key={index} className="space-y-6">
            <h2 className="text-xl font-bold capitalize text-center mb-4">
              {category}
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {groupedTechnologies[category].map((item, idx) => {
                const Component = idx % 2 === 0 ? SlideLeft : SlideRight;
                return (
                  <Component key={idx}>
                    <div className="flex flex-col items-center space-y-3">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-16 h-16 object-contain"
                      />
                      <span className="text-sm font-semibold">{item.title}</span>
                    </div>
                  </Component>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
