import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { data } from "../../../data/info";

import SlideInTop from "../../animation/SlideInTop";
import SlideInLeft from "../../animation/SlideInLeft";
import SlideInRight from "../../animation/SlideInRight";
import Contact from "../../contacts.jsx";

const Allprojects = () => {
  const [selectedTech, setSelectedTech] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [isAnimating, setIsAnimating] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    // Simule la fin de l'animation après un délai de 500ms
    const timer = setTimeout(() => {
      setIsContentVisible(true);
    }, 500); // Ce délai doit correspondre à la durée de l'animation

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isContentVisible) {
      // Une fois que le contenu est visible, faire défiler vers l'élément avec l'id 'projects'
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [isContentVisible]);

  const techFilters = data.type_techo.reduce((acc, tech) => {
    if (acc[tech.type]) {
      acc[tech.type].push(tech);
    } else {
      acc[tech.type] = [tech];
    }
    return acc;
  }, {});

  const filterProjects = (type) => {
    return data.project.filter((project) => {
      const typeMatches = type === "all" || project.type.includes(type);
      const techMatches =
        selectedTech.length === 0 ||
        selectedTech.every((tech) => project.tech.includes(tech));

      return typeMatches && techMatches;
    });
  };

  const tabs = [
    { label: "All", value: "all" },
    ...data.type_project.map((type) => ({
      label: type.title,
      value: type.title,
    })),
  ];

  const handleTechChange = (tech) => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedTech((prevSelected) =>
        prevSelected.includes(tech)
          ? prevSelected.filter((t) => t !== tech)
          : [...prevSelected, tech]
      );
      setIsAnimating(false);
    }, 200);
  };

  const handleTabChange = (value) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(value);
      setIsAnimating(false);
    }, 200);
  };

  const toggleFilterModal = () => {
    setShowFilterModal(!showFilterModal);
  };

  return (
    <div className="container mx-auto p-4 pb-8">
      {/* Le titre du projet avec un ID pour le scroll */}
      <SlideInTop>
        <h1 id="projects" className="text-3xl font-bold mb-6 pb-4 pt-10">
          Projects
        </h1>
      </SlideInTop>

      {/* Rendu du contenu seulement après la fin de l'animation */}
      {isContentVisible && (
        <div>
          <div className="hidden lg:block mb-6">
            <SlideInTop>
              <Tabs value={activeTab} onValueChange={handleTabChange}>
                <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 pb-4">
                  {tabs.map((tab) => (
                    <TabsTrigger key={tab.value} value={tab.value}>
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </SlideInTop>
          </div>

          <SlideInTop>
            <button
              onClick={toggleFilterModal}
              className="block lg:hidden mb-4 bg-black text-white px-4 py-2 rounded-lg w-full text-center"
            >
              Filter
            </button>
          </SlideInTop>

          {showFilterModal && (
            <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-75 flex justify-center items-center">
              <div className="bg-white p-6 rounded-lg w-3/4 max-w-md relative">
                <button
                  onClick={toggleFilterModal}
                  className="absolute top-2 right-2 text-gray-600 text-2xl font-bold"
                >
                  &times;
                </button>

                <label className="block text-lg font-semibold mb-4 text-gray-700 underline">
                  Categories:
                </label>
                <div className="flex flex-col gap-2 pb-4">
                  {tabs.map((tab) => (
                    <label key={tab.value} className="inline-flex items-center">
                      <input
                        type="checkbox"
                        value={tab.value}
                        checked={activeTab === tab.value}
                        onChange={() => {
                          handleTabChange(tab.value);
                          toggleFilterModal();
                        }}
                        className="form-checkbox h-5 w-5 text-indigo-600"
                      />
                      <span className="ml-2 text-gray-700">{tab.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-8 pb-6">
            <SlideInLeft>
              <div className="hidden lg:block w-full lg:w-64">
                <aside className="mt-6">
                  <label className="block text-lg font-semibold mb-4 text-gray-700 underline">
                    Filter :
                  </label>
                  {Object.keys(techFilters).map((category) => (
                    <div key={category} className="mb-4">
                      <h3 className="text-lg font-semibold mb-2">{category}</h3>
                      <div className="flex flex-col space-y-2">
                        {" "}
                        {/* Organisation en colonnes et espace entre chaque ligne */}
                        {techFilters[category]
                          .sort((a, b) => a.title.localeCompare(b.title))
                          .map((tech) => (
                            <label
                              key={tech.title}
                              className="inline-flex items-center"
                            >
                              <input
                                type="checkbox"
                                value={tech.title}
                                checked={selectedTech.includes(tech.title)}
                                onChange={() => handleTechChange(tech.title)}
                                className="form-checkbox h-5 w-5 text-indigo-600"
                              />
                              <span className="ml-2 text-gray-700">
                                {tech.title}
                              </span>
                            </label>
                          ))}
                      </div>
                    </div>
                  ))}
                </aside>
              </div>
            </SlideInLeft>

            <SlideInRight>
              <Tabs value={activeTab} onValueChange={handleTabChange}>
                {tabs.map((tab) => (
                  <TabsContent key={tab.value} value={tab.value}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filterProjects(tab.value).map((project) => (
                        <a
                          key={project.title}
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`block transition-all duration-500 ${
                            isAnimating
                              ? "transform scale-0 opacity-0"
                              : "transform scale-100 opacity-100"
                          }`}
                        >
                          <Card className="w-full group transition-transform transform hover:scale-105">
                            <CardHeader>
                              <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-[200px] object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                              />
                              <CardTitle>{project.title}</CardTitle>
                              <CardDescription>
                                {project.subtitle}
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <p className="text-gray-700">
                                {project.description}
                              </p>
                              <div className="flex flex-wrap gap-2 mt-2">
                                {project.type.map((t, index) => (
                                  <span
                                    key={index}
                                    className={`inline-block px-3 py-1 text-sm font-semibold rounded-full text-white ${
                                      data.type_project.find(
                                        (tp) => tp.title === t
                                      )?.color
                                    }`}
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                              <div className="flex flex-wrap gap-2 mt-2">
                                {project.tech.map((tech, index) => (
                                  <span
                                    key={index}
                                    className="inline-block px-3 py-1 text-sm font-semibold bg-gray-200 rounded-full text-gray-700"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        </a>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </SlideInRight>
          </div>
        </div>
      )}
    </div>
  );
};

export default Allprojects;
