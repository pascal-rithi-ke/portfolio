import React from 'react';
import { data } from '../data/info';

function Techno() {
  return (
    <section className="bg-white py-12">
      <div className="bg-white max-w-4xl mx-auto p-6 rounded-lg">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">Technologies</h2>

        {/* Section pour chaque catégorie */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          {/* Langages */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Languages</h3>
            <ul className="grid grid-cols-2 gap-4">
              {data.tech_lang.map((tech, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <img src={tech.img} alt={tech.title} className="w-8 h-8" />
                  <span className="text-gray-700 font-medium">{tech.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Frameworks */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Frameworks</h3>
            <ul className="grid grid-cols-2 gap-4">
              {data.tech_framework.map((tech, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <img src={tech.img} alt={tech.title} className="w-8 h-8" />
                  <span className="text-gray-700 font-medium">{tech.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bases de données */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Databases</h3>
            <ul className="grid grid-cols-2 gap-4">
              {data.tech_bdd.map((tech, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <img src={tech.img} alt={tech.title} className="w-8 h-8" />
                  <span className="text-gray-700 font-medium">{tech.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Outils */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Tools</h3>
            <ul className="grid grid-cols-2 gap-4">
              {data.tech_tool.map((tech, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <img src={tech.img} alt={tech.title} className="w-8 h-8" />
                  <span className="text-gray-700 font-medium">{tech.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cloud */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Cloud</h3>
            <ul className="grid grid-cols-2 gap-4">
              {data.tech_cloud.map((tech, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <img src={tech.img} alt={tech.title} className="w-8 h-8" />
                  <span className="text-gray-700 font-medium">{tech.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Techno;
