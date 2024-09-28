import weapon from '../../../../assets/detect-weapon.gif';

function WeaponDetection() {
  return (
    <div className="flex flex-row w-full h-full bg-gray-900 rounded-lg shadow-lg overflow-hidden">
      {/* Section gauche avec texte */}
      <div className="w-1/2 bg-gray-900 text-white flex flex-col justify-center items-start p-10">
        <h1 className="text-4xl font-bold mb-4">Weapon Detection</h1>
        <p className="text-lg mb-6 text-left">
          Ce projet utilise Python, OpenCV et YOLO pour détecter des armes telles que des fusils, des pistolets ou des couteaux en temps réel.
        </p>
        <p className="text-lg text-left">
          La détection d'armes est essentielle pour améliorer la sécurité et réagir rapidement dans des situations potentiellement dangereuses. Ce système de deep learning assure une identification rapide et précise.
        </p>
      </div>

      {/* Section droite avec le GIF */}
      <div className="w-1/2 bg-gray-800 flex justify-center items-center">
        <div className="w-full h-full flex justify-center items-center p-5">
          <img src={weapon} alt="Weapon Detection GIF" className="w-full h-full object-contain border border-gray-700" />
        </div>
      </div>
    </div>
  );
}

export default WeaponDetection;
