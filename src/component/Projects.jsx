import React, { useState } from 'react';
import { data } from '../data/info';
import Contact from './Contact';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

function Projects() {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedTech, setSelectedTech] = useState([]);
  const [showTechFilters, setShowTechFilters] = useState(false);

  // Créer un objet de mappage pour les couleurs des types de projet
  const typeColors = data.type_project.reduce((acc, type) => {
    acc[type.title] = type.color;
    return acc;
  }, {});

  // Obtenir toutes les technologies disponibles pour le filtre
  const techOptions = Array.from(new Set(data.project.flatMap(project => project.tech)));
  
  // Obtenir tous les types disponibles pour le filtre
  const typeOptions = data.type_project.map(type => type.title);

  // Filtrer les projets en fonction du type sélectionné et des technologies
  const filteredProjects = data.project.filter(project =>
    (selectedType === 'All' || project.type.includes(selectedType)) &&
    (selectedTech.length === 0 || project.tech.some(tech => selectedTech.includes(tech)))
  );

  // Fonction pour réinitialiser les filtres
  const clearFilters = () => {
    setSelectedType('All');
    setSelectedTech([]);
    setShowTechFilters(false);
  };

  return (
    <div className="px-4 py-10 bg-gray-100 min-h-screen">
      {/* Section des Projets */}
      <section className="max-w-4xl mx-auto mb-12">
        <div className="flex items-center mb-6">
          {/* Flèche de Retour */}
          <Link to="/portfolio" className="text-gray-600 hover:text-gray-800 transition-colors mr-4">
            <ArrowLeftIcon className="w-6 h-6" />
          </Link>
          {/* Titre des Projets */}
          <h2 className="text-3xl font-bold text-gray-800">My Projects</h2>
          <p className="text-gray-600 ml-2">({filteredProjects.length} projects)</p>
        </div>

        {/* Barre de Recherche par Type */}
        <div className="mb-6">
          <label htmlFor="project-type" className="block text-lg font-medium text-gray-700 mb-2">Filter by Type:</label>
          <select
            id="project-type"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="All">All</option>
            {typeOptions.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Barre de Recherche par Technologie */}
        <div className="mb-6">
          <label htmlFor="project-tech" className="block text-lg font-medium text-gray-700 mb-2">Filter by Technology:</label>
          {showTechFilters && (
            <div className="flex flex-wrap gap-4 mb-4">
              {techOptions.map((tech, index) => (
                <label key={index} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    value={tech}
                    checked={selectedTech.includes(tech)}
                    onChange={(e) => {
                      const value = e.target.value;
                      setSelectedTech(prev =>
                        e.target.checked
                          ? [...prev, value]
                          : prev.filter(item => item !== value)
                      );
                    }}
                    className="form-checkbox h-5 w-5 text-indigo-600"
                  />
                  <span className="ml-2 text-gray-700">{tech}</span>
                </label>
              ))}
            </div>
          )}
          <button
            onClick={() => setShowTechFilters(!showTechFilters)}
            className="text-blue-500 hover:text-blue-700 transition-colors"
          >
            {showTechFilters ? 'Show Less Filters' : 'More Filters'}
          </button>
        </div>

        {/* Bouton pour Réinitialiser les Filtres */}
        <div className="flex justify-end mb-6">
          <button
            onClick={clearFilters}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
          >
            Clear Filters
          </button>
        </div>

        {/* Liste des Projets en Grille */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <li key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div
                style={{ backgroundImage: `url(${project.img})` }}
                className="h-48 bg-cover bg-center"
              ></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    className="w-12 h-12 rounded-full object-cover mr-4"
                    src={project.img}
                    alt={project.title}
                  />
                  <div>
                    <p className="text-xl font-semibold text-gray-800">{project.title}</p>
                    <p className="text-gray-600">{project.subtitle}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 transition-colors mt-2 block"
                    >
                      Link to Project
                    </a>
                  </div>
                </div>
                <p className="text-gray-700 mb-2">{project.description}</p>
                {/* Affichage des Types de Projet */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.type.map((t, index) => (
                    <span key={index} className={`inline-block px-3 py-1 text-sm font-semibold rounded-full text-white ${typeColors[t]}`}>
                      {t}
                    </span>
                  ))}
                </div>
                {/* Affichage des Technologies */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="inline-block px-3 py-1 text-sm font-semibold bg-gray-200 rounded-full text-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <Contact />
    </div>
  );
}

export default Projects;