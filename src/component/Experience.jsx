import React from "react";
import { data } from "../data/info";

function Experience() {
  return (
    <section className="bg-white py-12">
      <div className="bg-white max-w-4xl mx-auto p-6 rounded-lg">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">My Experience</h2>
        <ul className="space-y-6">
          {data.experience.map((exp, index) => (
            <li
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div
                style={{ backgroundImage: `url(${exp.img})` }}
                className="h-48 bg-cover bg-center"
              ></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    className="w-12 h-12 rounded-full object-cover mr-4"
                    src={exp.img}
                    alt={exp.title}
                  />
                  <div>
                    <p className="text-xl font-semibold text-gray-800">
                      {exp.title}
                    </p>
                    <p className="text-gray-600">{exp.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-700">{exp.description}</p>
                <p className="text-gray-500">{exp.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Experience;
