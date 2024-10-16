import React from 'react';

function BottomBlock({ title, date, description, year }) {
    return (
        <div className="flex w-full justify-center relative">
            {/* Bloc de contenu */}
            <div className="flex flex-col items-start w-1/2">
                <div className="bg-white shadow-lg p-4 rounded-lg max-w-sm">
                    <h3 className="font-bold text-md">{title}</h3>
                    <p className="text-gray-600 text-sm">{date}</p>
                    <p className="mt-2 text-gray-700 text-sm">{description}</p>
                </div>
            </div>
            {/* Cercle central sur la timeline */}
            <div className="absolute bottom-1/2 transform translate-y-1/2 left-[50%] w-6 h-6 flex items-center justify-center bg-black rounded-full">
                <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
        </div>
    );
}

export default BottomBlock;
