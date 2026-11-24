import React from "react";
import { data } from "@/data/info";

const byYearDesc = (a, b) => Number(b.year) - Number(a.year);

function Experience() {
  const experiences = [...data.experience].sort(byYearDesc);
  const educations = [...data.education].sort(byYearDesc);

  return (
    <div className="container w-full max-w-3xl mx-auto px-4">
      <h2 id="experience" className="text-3xl font-bold text-center mb-8">
        Experience
      </h2>

      {/* Expériences : timeline verticale, la plus récente en haut */}
      <ol className="relative border-l-2 border-black ml-3">
        {experiences.map((exp, index) => (
          <li key={index} className="mb-8 ml-6 last:mb-0">
            <span className="absolute -left-[9px] mt-5 w-4 h-4 bg-black rounded-full border-2 border-white" />
            <div className="bg-white shadow-lg rounded-lg p-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h4 className="text-lg font-bold text-gray-900">{exp.title}</h4>
                <span className="text-sm text-gray-600 whitespace-nowrap">{exp.date}</span>
              </div>
              <p className="text-sm font-medium text-gray-800">{exp.subtitle}</p>
              <p className="text-gray-700 mt-2">{exp.description}</p>
            </div>
          </li>
        ))}
      </ol>

      {/* Formations : liste compacte */}
      <h3 className="text-2xl font-bold text-center mt-20 mb-6">Education</h3>
      <ul className="bg-white shadow-lg rounded-lg divide-y divide-gray-200">
        {educations.map((edu, index) => (
          <li
            key={index}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 p-4"
          >
            <div>
              <p className="font-bold text-gray-900">{edu.title}</p>
              <p className="text-sm text-gray-600">IPSSI</p>
            </div>
            <span className="text-sm text-gray-600 whitespace-nowrap">
              {edu.year} - {edu.yearEnd}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Experience;
