import React, { useState, useEffect } from 'react';
import { data } from '@/data/info';

function Experience({ isVisible }) {
  const { education, experience } = data;

  // State to track the hovered item and the visibility of experiences
  const [hoveredItem, setHoveredItem] = useState(null);

  // Associate education and experiences by ID
  const allItems = education.map(edu => {
    const associatedExperience = experience.find(exp => exp.id === edu.id);
    return { education: edu, experience: associatedExperience };
  });

  // Sort by year
  const sortedItems = allItems.sort((a, b) => a.education.year - b.education.year);

  return (
    <div className="container mx-auto p-4 h-screen md:h-auto">
      <h2 id="experience" className="text-3xl font-bold text-center mb-8 hidden md:block">Experience</h2>

      {/* Timeline for Desktop */}
      <div className="hidden md:flex flex-col items-center">
        <div className="relative flex items-center w-full h-24">
          {/* Animate the timeline line */}
          <div className={`absolute h-1 bg-gray-300 w-full ${isVisible ? 'animate-drawLine' : ''}`}></div>
          <div className="flex justify-between w-full px-4 space-x-16">
            {sortedItems.map((item, index) => (
              <React.Fragment key={index}>
                {/* Education */}
                <div
                  className={`flex flex-col items-center transition-opacity duration-900 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}
                  onMouseEnter={() => setHoveredItem(item.education)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="relative flex flex-col items-center" style={{ top: '10px' }}>
                    <div className="w-1 h-8"></div>
                    <div className="w-6 h-6 bg-black rounded-full"></div>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-sm font-semibold">{item.education.year}</p>
                    <p className="text-sm">{item.education.title}</p>
                  </div>

                  {/* Display description on hover */}
                  {hoveredItem === item.education && (
                    <div className="absolute top-16 bg-white shadow-lg p-2 rounded-lg w-64">
                      <img
                        src={item.education.img}
                        className="w-24 h-auto mx-auto mb-2 object-contain"
                        alt="Education"
                      />
                      <p className="text-sm text-gray-700">{item.education.description}</p>
                    </div>
                  )}
                </div>

                {/* Experience associated */}
                {item.experience && (
                  <div
                    className={`flex flex-col items-center transition-opacity duration-900 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}
                    onMouseEnter={() => setHoveredItem(item.experience)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className="relative flex flex-col items-center" style={{ top: '10px' }}>
                      <div className="w-1 h-8"></div>
                      <div className="w-6 h-6 bg-gray-500 rounded-full"></div>
                    </div>
                    <div className="mt-4 text-center">
                      <p className="text-sm font-semibold">{item.experience.year}</p>
                      <p className="text-sm">{item.experience.title}</p>
                    </div>

                    {/* Display description on hover */}
                    {hoveredItem === item.experience && (
                      <div className="absolute top-16 bg-white shadow-lg p-2 rounded-lg w-64 text-left">
                        <img
                          src={item.experience.img}
                          className="w-24 h-auto mx-auto mb-2 object-contain"
                          alt="Experience"
                        />
                        <p className="text-sm text-gray-700">{item.experience.description}</p>
                      </div>
                    )}
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Cards for Mobile */}
      <div className={`md:hidden grid grid-cols-1 gap-8`}>
        {/* Experience Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center">
            <span className="mr-2">📋</span>Experience
          </h3>
          {experience.map((exp, index) => (
            <div key={index} className="mb-6 text-left">
              <h4 className="text-xl font-semibold text-gray-900 text-left">{exp.title}</h4>
              <p className="text-gray-600">{exp.company} {exp.date}</p>
              <p className="text-gray-700 mt-2 text-left">{exp.description}</p>
              {exp.skills && (
                <div className="flex flex-wrap mt-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-gray-200 text-gray-800 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
              {index < experience.length - 1 && <hr className="mt-4" />}
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center">
            <span className="mr-2">🎓</span>Education
          </h3>
          {education.map((edu, index) => (
            <div key={index} className="mb-6 text-left">
              <h4 className="text-xl font-semibold text-gray-900 text-left">{edu.title}</h4>
              <p className="text-gray-600">{edu.institution} {edu.date}</p>
              <p className="text-gray-700 mt-2">{edu.description}</p>
              {index < education.length - 1 && <hr className="mt-4" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
