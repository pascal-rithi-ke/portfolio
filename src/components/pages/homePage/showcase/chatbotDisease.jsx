import chatbot from '../../../../assets/detect-disease.gif';

function ChatbotDisease() {
  return (
    <div className="flex flex-row w-full h-full bg-gray-900 rounded-lg shadow-lg overflow-hidden">
      {/* Section gauche avec texte */}
      <div className="w-1/2 bg-gray-900 text-white flex flex-col justify-center items-start p-10">
        <h1 className="text-4xl font-bold mb-4 text-left">Medical Disease Prediction Chatbot</h1>
        <p className="text-lg mb-6 text-left">
          Ce projet est un chatbot médical qui permet de prédire les maladies potentielles d'un patient en se basant sur les symptômes décrits. Le système utilise une interface développée avec React, une API backend en Python Flask et un modèle de machine learning.
        </p>
        <p className="text-lg mb-6 text-left">
          Le modèle de machine learning est un Random Forest combiné avec du NLP (Natural Language Processing) pour analyser les descriptions de symptômes, même si les termes employés par le patient diffèrent de ceux utilisés lors de l'entraînement du modèle. Cela permet une flexibilité linguistique et améliore la précision des prédictions.
        </p>
        <p className="text-lg text-left">
          L'objectif de ce chatbot est d'améliorer le diagnostic médical préliminaire et d'aider à la détection rapide des maladies en fonction des symptômes clés fournis par les utilisateurs.
        </p>
      </div>

      {/* Section droite avec le GIF */}
      <div className="w-1/2 bg-gray-800 flex justify-center items-center">
        <div className="w-4/5 h-auto flex justify-center items-center p-5">
          <img src={chatbot} alt="Medical Chatbot Disease Detection GIF" className="max-w-full max-h-full object-contain border border-gray-700" />
        </div>
      </div>
    </div>
  );
}

export default ChatbotDisease;
