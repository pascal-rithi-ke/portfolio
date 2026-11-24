import React from "react";
import { Link } from "react-router-dom";
import { FiMail } from "react-icons/fi";
import SlideLeft from "../../animation/SlideInLeft";
import SlideRight from "../../animation/SlideInRight";
import SlideBottom from "../../animation/SlideInBottom";
import photo from "../../../assets/photo.jpg";
import { data } from "../../../data/info";

const skillGroups = [
  { label: "Languages", key: "tech_lang" },
  { label: "Frameworks", key: "tech_framework" },
  { label: "Databases", key: "tech_Database" },
];

const Introduction = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-24 md:py-0 text-left">
      <div className="flex flex-col-reverse md:flex-row md:items-center gap-10 md:gap-16">
        {/* Texte */}
        <div className="md:flex-1">
          <SlideLeft>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black">
              Pascal Kien
            </h1>
            <p className="mt-2 text-xl sm:text-2xl font-medium text-gray-700">
              Fullstack Web Developer
            </p>

            <p className="mt-6 text-lg text-gray-700 max-w-xl">
              4+ years building web and mobile applications, from apprenticeships to
              freelance missions: SaaS platforms, back-offices and mobile apps with
              React, Next.js, Go, Laravel and PHP. Master&apos;s degree in Development,
              Big Data &amp; AI.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contacts"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-black bg-black text-white font-semibold hover:bg-gray-500 hover:border-gray-500 transition-colors duration-300"
              >
                Contact me
                <FiMail
                  className="w-4 h-4 transition-transform duration-200 group-hover:-rotate-12"
                  aria-hidden="true"
                />
              </a>
              <Link
                to="/projects"
                className="px-6 py-3 rounded-lg border border-black text-black font-semibold hover:bg-gray-500 hover:border-gray-500 hover:text-white transition-colors duration-300"
              >
                View projects
              </Link>
            </div>
          </SlideLeft>
        </div>

        {/* Photo */}
        <SlideRight>
          <div className="flex justify-center md:justify-end">
            <img
              src={photo}
              alt="Pascal Kien"
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
            />
          </div>
        </SlideRight>
      </div>

      {/* Compétences : badges logo + nom, groupés par catégorie */}
      <SlideBottom>
        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {skillGroups.map(({ label, key }) => (
            <div key={key}>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                {label}
              </p>
              <div className="flex flex-wrap gap-2">
                {data[key].map((tech) => (
                  <span
                    key={tech.title}
                    className="inline-flex items-center gap-2 pl-1.5 pr-3 py-1 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-800"
                  >
                    <img src={tech.img} alt="" className="w-5 h-5 rounded-full object-contain" />
                    {tech.title}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SlideBottom>
    </div>
  );
};

export default Introduction;
