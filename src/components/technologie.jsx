// TechnologiesList.jsx
import React from 'react';

// Exemple de données pour les technologies
const technologies = [
  {
    name: 'React',
    description: 'Bibliothèque JavaScript pour construire des interfaces utilisateur.',
    level: 'Avancé',
  },
  {
    name: 'Tailwind CSS',
    description: 'Framework CSS utilitaire pour un design rapide et flexible.',
    level: 'Intermédiaire',
  },
  {
    name: 'Node.js',
    description: 'Environnement d\'exécution JavaScript côté serveur.',
    level: 'Intermédiaire',
  },
  {
    name: 'Git',
    description: 'Système de gestion de versions décentralisé.',
    level: 'Avancé',
  },
  // Ajoute d'autres technologies si nécessaire
];

const Technologie = () => {
  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-2xl font-bold mb-4">Technologies Connaissances</h2>
      <ul className="space-y-4">
        {technologies.map((tech, index) => (
          <li key={index} className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
            <h3 className="text-xl font-semibold">{tech.name}</h3>
            <p className="text-gray-700 mt-2">{tech.description}</p>
            <p className="text-gray-500 mt-1"><strong>Niveau :</strong> {tech.level}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Technologie;
