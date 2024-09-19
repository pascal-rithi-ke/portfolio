import React from 'react';
import { data } from '../data/info.js'; // Importation des données depuis info.js
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const groupedTechnologies = {
  langages: data.tech_lang,
  frameworks: data.tech_framework,
  database: data.tech_Database,
  cloud: data.tech_cloud,
  tools: data.tech_tool,
};

const ShowcaseTechnologies = () => {
  return (
    <div className="container mx-auto py-4 px-2"> {/* Réduction du padding global */}
      {/* Grille plus compacte */}
      <div className="space-y-4">
        {/* Affichage des catégories en fonction des clés */}
        {Object.keys(groupedTechnologies).map((category, index) => (
          <div key={index} className='space-y-2'> {/* Réduction de l'espacement vertical */}
            {/* Titre de la catégorie */}
            <h2 className="text-xl font-semibold mb-2 capitalize">{category}</h2> {/* Réduction de la taille du titre */}
            {/* Grille d'affichage des technologies */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2"> {/* Grille plus serrée */}
              {groupedTechnologies[category].map((item, idx) => (
                <Card key={idx} className="w-full md:w-56 p-2"> {/* Cartes plus petites avec padding réduit */}
                  <CardHeader className="text-sm font-medium leading-tight">{item.title}</CardHeader> {/* Réduction de la taille et de la hauteur du titre */}
                  <CardContent className="p-2"> {/* Réduction du padding interne */}
                    <img src={item.img} alt={item.title} className="w-full h-24 object-cover mb-1" /> {/* Image plus petite */}
                    <p className="text-gray-600 text-xs leading-tight">{item.description}</p> {/* Texte plus petit et compact */}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowcaseTechnologies;
