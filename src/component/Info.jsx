// Exemple pour le composant Info
import React from 'react';
import photo from '../images/photo.jpg';

function Info() {
  return (
    <section className="text-center">
      {/* Section de présentation */}
      <div className="bg-white rounded-xl overflow-hidden max-w-4xl mx-auto p-8 mb-10">
        {/* Photo de profil */}
        <img 
          className="w-36 h-36 rounded-full border-4 border-blue-600 mb-6 object-cover shadow-md"
          src={photo}
          alt="Photo de profil"
        />
        
        {/* Texte de présentation */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          I'm<br />
          Kien Eng Pascal<br />
          A Fullstack Developer
        </h2>
        
        {/* Description */}
        <p className="text-lg text-gray-700 mb-6">
          Passionate about programming and new technologies,<br />
          I practice by creating projects in themes that fascinate me.
        </p>

        {/* Élément de vague (si nécessaire) */}
        <div className="w-full h-12 bg-blue-500 rounded-full mb-6 shadow-inner"></div>
      </div>
    </section>
  );
}

export default Info;
