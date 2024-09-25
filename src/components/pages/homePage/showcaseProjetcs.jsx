import React from 'react';
import { Link } from 'react-router-dom'; // Si tu utilises React Router pour la navigation
import { data } from "../../../data/info"; // Assurez-vous que le chemin est correct

const ProjectsShowcase = () => {
  // Récupère les 3 premiers projets
  const topThreeProjects = data.project.slice(0, 3);

  return (
    <div className="p-6 bg-gray-50">
      <h2 id='projects' className="text-2xl font-bold mb-4">Projets Notables</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {topThreeProjects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            {project.img && (
              <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
            )}
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-700 mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                Voir le projet
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link
          to="/projects" // Remplace par le chemin vers la page des projets complets
          className="inline-block px-6 py-3 mt-4 text-white bg-blue-500 hover:bg-blue-600 rounded-lg"
        >
          Voir tous les projets
        </Link>
      </div>
    </div>
  );
};

export default ProjectsShowcase;
