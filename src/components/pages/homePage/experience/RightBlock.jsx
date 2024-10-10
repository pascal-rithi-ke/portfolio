// components/RightBlock.js
import React from 'react';

function RightBlock({ title, date, description }) {
  return (
    <div className="flex w-full justify-start mb-12 relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 flex items-center justify-center bg-black rounded-full">
        <div className="w-4 h-4 bg-white rounded-full" />
      </div>
      <div className="w-1/2 pl-16 flex justify-start">
        <div className="bg-white shadow-lg p-6 mr-10 rounded-lg max-w-md">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-gray-600">{date}</p>
          <p className="mt-2 text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default RightBlock;
