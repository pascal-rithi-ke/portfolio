import React from 'react';

import Info from '../component/Info';
import Experience from '../component/Experience';
import Techno from '../component/Techno';
import Contact from '../component/Contact';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="bg-white max-w-4xl w-full p-6 rounded-lg shadow-lg mt-10 mb-10">
        <Info />
        <Experience />
        <Techno />
        <Contact />
      </div>
    </div>
  );
}

export default App;
