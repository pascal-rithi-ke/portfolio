// Experience.js
import React from 'react';
import RightBlock from './experience/RightBlock';
import LeftBlock from './experience/LeftBlock';

import { data } from '@/data/info';

function Experience() {
  // Extraire les données d'éducation et d'expérience du JSON
  const { education, experience } = data;

  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      {/* La timeline */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full bg-black w-[4px]"></div>
      
      {/* Contenu de la timeline */}
      <div className="w-full max-w-4xl flex flex-col items-center">
        {education.map((edu) => (
          <React.Fragment key={edu.id}>
            {/* Bloc d'éducation à gauche */}
            <LeftBlock
              title={edu.title}
              date={edu.date}
              description={edu.description}
              year={edu.year}
            />
            {/* Filtrer les expériences associées à l'éducation */}
            {experience
              .filter((exp) => exp.id === edu.id)
              .map((exp) => (
                <RightBlock
                  key={exp.title}
                  title={exp.title}
                  date={exp.date}
                  description={exp.description}
                />
              ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Experience;
