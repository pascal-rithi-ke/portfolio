// ProjectsShowcase.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Si tu utilises React Router pour la navigation

// Exemple de données pour les projets
const projects = [
  {
    title: 'Portfolio Personnel',
    description: 'Un site web personnel pour présenter mes projets et mon parcours professionnel.',
    imageUrl: 'https://via.placeholder.com/300', // Remplace par l'URL de ton image
    link: 'https://example.com/portfolio', // Remplace par le lien vers ton projet
  },
  {
    title: 'Application de Gestion de Tâches',
    description: 'Une application web pour gérer les tâches quotidiennes avec des fonctionnalités de drag-and-drop.',
    imageUrl: 'https://via.placeholder.com/300', // Remplace par l'URL de ton image
    link: 'https://example.com/todolist', // Remplace par le lien vers ton projet
  },
  {
    title: 'Site de E-commerce',
    description: 'Un site de commerce en ligne avec des fonctionnalités de panier d\'achat et de gestion des utilisateurs.',
    imageUrl: 'https://via.placeholder.com/300', // Remplace par l'URL de ton image
    link: 'https://example.com/ecommerce', // Remplace par le lien vers ton projet
  },
  // Ajoute d'autres projets si nécessaire
];

const ProjectsShowcase = () => {
  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-2xl font-bold mb-4">Projets Notables</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            {project.imageUrl && (
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
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
          to="/projetcs" // Remplace par le chemin vers la page des projets complets
          className="inline-block px-6 py-3 mt-4 text-white bg-blue-500 hover:bg-blue-600 rounded-lg"
        >
          Voir tous les projets
        </Link>
      </div>
    </div>
  );
};

export default ProjectsShowcase;
