import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { data } from "../data/info";

const Allprojects = () => {
  const [selectedTech, setSelectedTech] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Déclenche les animations après un délai de 500ms
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

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
      const techMatches = selectedTech.length === 0 || selectedTech.every((tech) => project.tech.includes(tech));

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

  return (
    <div className="container mx-auto p-4 pb-8">
      <h1 className="text-3xl font-bold mb-6 pb-4 pt-4">Projects</h1>
      <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-8 pb-6">
        
        {/* Aside: Animation de gauche à droite */}
        <aside
          className={`${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          } transition-all duration-1000 ease-in-out transform w-full lg:w-64 text-left mb-6 lg:mb-0`}
        >
          <label className="block text-lg font-semibold mb-4 text-gray-700 underline">
            Filter :
          </label>
          {Object.keys(techFilters).map((category) => (
            <div key={category} className="mb-4">
              <h3 className="text-lg font-semibold mb-2">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {techFilters[category]
                  .sort((a, b) => a.title.localeCompare(b.title))
                  .map((tech) => (
                    <label key={tech.title} className="inline-flex items-center">
                      <input
                        type="checkbox"
                        value={tech.title}
                        checked={selectedTech.includes(tech.title)}
                        onChange={() => handleTechChange(tech.title)}
                        className="form-checkbox h-5 w-5 text-indigo-600"
                      />
                      <span className="ml-2 text-gray-700">{tech.title}</span>
                    </label>
                  ))}
              </div>
            </div>
          ))}
        </aside>

        {/* Contenu: Animation de droite à gauche */}
        <div
          className={`${
            isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          } transition-all duration-1000 ease-in-out transform flex-grow`}
        >
          <div className="flex justify-between items-center mb-6 pb-4">
            <Tabs value={activeTab} onValueChange={handleTabChange}>
              <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 pb-4">
                {tabs.map((tab) => (
                  <TabsTrigger key={tab.value} value={tab.value}>
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>

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
                            <CardDescription>{project.subtitle}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-700">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {project.type.map((t, index) => (
                                <span
                                  key={index}
                                  className={`inline-block px-3 py-1 text-sm font-semibold rounded-full text-white ${
                                    data.type_project.find((tp) => tp.title === t)?.color
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allprojects;
