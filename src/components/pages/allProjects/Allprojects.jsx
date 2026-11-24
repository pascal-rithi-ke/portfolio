import React, { useEffect, useMemo, useState } from "react";
import { data } from "../../../data/info";
import Reveal from "../../animation/Reveal";
import ProjectCard from "../../projects/ProjectCard";
import { techColor } from "@/lib/techColor";


const projectTypes = ["All", ...data.type_project.map((type) => type.title)];

// Liste des technos générée à partir des projets (toujours complète),
// triée de la plus utilisée à la moins utilisée
const techCounts = data.project
  .flatMap((project) => project.tech)
  .reduce((acc, tech) => ({ ...acc, [tech]: (acc[tech] ?? 0) + 1 }), {});
const allTechs = Object.keys(techCounts).sort(
  (a, b) => techCounts[b] - techCounts[a] || a.localeCompare(b)
);
const VISIBLE_TECHS = 12;

const Allprojects = () => {
  const [activeType, setActiveType] = useState("All");
  const [selectedTech, setSelectedTech] = useState([]);
  const [showAllTechs, setShowAllTechs] = useState(false);

  // Les technos sélectionnées restent visibles même quand la liste est repliée
  const visibleTechs = showAllTechs
    ? allTechs
    : allTechs.filter((tech, index) => index < VISIBLE_TECHS || selectedTech.includes(tech));
  const hiddenCount = allTechs.length - visibleTechs.length;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const projects = useMemo(
    () =>
      data.project.filter(
        (project) =>
          (activeType === "All" || project.type.includes(activeType)) &&
          selectedTech.every((tech) => project.tech.includes(tech))
      ),
    [activeType, selectedTech]
  );

  const toggleTech = (tech) =>
    setSelectedTech((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );

  const clearFilters = () => {
    setActiveType("All");
    setSelectedTech([]);
  };

  const hasFilters = activeType !== "All" || selectedTech.length > 0;

  return (
    <div className="container mx-auto px-4 pt-24 sm:pt-16 pb-12 text-left">
      <Reveal>
      <h1 id="projects" className="text-3xl font-bold text-center mb-8">
        Projects
      </h1>

      {/* Catégories */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 mb-4 sm:justify-center">
        {projectTypes.map((type) => (
          <button
            key={type}
            onClick={() => setActiveType(type)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-300 ${
              activeType === type
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-500 hover:text-white"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 sm:justify-center mb-4">
        {visibleTechs.map((tech) => {
          const isSelected = selectedTech.includes(tech);
          return (
            <button
              key={tech}
              onClick={() => toggleTech(tech)}
              aria-pressed={isSelected}
              style={isSelected ? techColor(tech, { selected: true }) : undefined}
              className={`px-3 py-1 rounded-full text-xs font-semibold border transition-colors duration-300 ${
                isSelected
                  ? ""
                  : "bg-white text-gray-600 border-gray-300 hover:bg-gray-500 hover:border-gray-500 hover:text-white"
              }`}
            >
              {tech}
            </button>
          );
        })}
        {(hiddenCount > 0 || showAllTechs) && (
          <button
            onClick={() => setShowAllTechs((prev) => !prev)}
            className="px-3 py-1 text-xs font-semibold text-gray-800 underline hover:text-gray-500 transition-colors duration-300"
          >
            {showAllTechs ? "Show less" : `+${hiddenCount} more`}
          </button>
        )}
      </div>

      </Reveal>

      {/* Résultats */}
      <div className="flex items-center justify-center gap-3 text-sm text-gray-500 mb-8 min-h-[1.5rem]">
        <span>
          {projects.length} project{projects.length > 1 ? "s" : ""}
        </span>
        {hasFilters && (
          <button onClick={clearFilters} className="underline hover:text-gray-800 transition-colors duration-300">
            Clear filters
          </button>
        )}
      </div>

      {projects.length === 0 ? (
        <p className="text-center text-gray-500 py-16">
          No project matches these filters.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Reveal
              key={`${activeType}-${selectedTech.join()}-${project.title}-${project.link}`}
              delay={(index % 3) * 100}
              className="h-full"
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
};

export default Allprojects;
