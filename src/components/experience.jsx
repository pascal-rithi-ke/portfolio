// ExperienceList.jsx
import React from "react";

// Exemple de données pour les expériences
const experiences = [
  {
    title: "Développeur Frontend",
    company: "Entreprise XYZ",
    description:
      "Développement de fonctionnalités interactives et responsive pour des applications web.",
    date: "Janvier 2022 - Présent",
  },
  {
    title: "Développeur Backend",
    company: "Entreprise ABC",
    description:
      "Conception et gestion d'API RESTful, optimisation des bases de données.",
    date: "Mai 2020 - Décembre 2021",
  },
  // Ajoute d'autres expériences si nécessaire
];

const Experience = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Expériences Professionnelles</h2>
      <ul className="space-y-4">
        {experiences.map((exp, index) => (
          <li key={index} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <h4 className="text-lg font-medium text-gray-600">{exp.company}</h4>
            <p className="text-gray-800 mt-2">{exp.description}</p>
            <p className="text-gray-500 mt-1">{exp.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
