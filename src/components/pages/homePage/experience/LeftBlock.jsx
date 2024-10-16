import React from 'react';

function LeftBlock({ title, date, description, year }) {
  return (
    <div className="flex w-full justify-start mb-12 relative">
      <div className="w-1/2 flex justify-start">
        <div className="bg-white shadow-lg p-6 mr-10 rounded-lg max-w-md">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-gray-600 mt-1">{date}</p>
          <p className="mt-2 text-gray-700">{description}</p>
        </div>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 left-[50%] w-8 h-8 flex items-center justify-center bg-black rounded-full">
        <div className="w-4 h-4 bg-white rounded-full"></div>
      </div>
      <div className="absolute left-[50%] transform translate-x-1/2 bottom-5 text-gray-600 font-bold text-2xl">
        {year}
      </div>
    </div>
  );
}

export default LeftBlock;
