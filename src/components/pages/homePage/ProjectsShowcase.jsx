import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { data } from "../../../data/info";

import WeaponDetection from "./showcase/weaponDetection";
import ChatbotDisease from "./showcase/chatbotDisease";

const ProjectsShowcase = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center">
        Showcase of Projects
      </h2>
      <div className="mt-6 text-center">
        <WeaponDetection />
      </div>
      <div className="mt-6 text-center">
        <ChatbotDisease />
      </div>
      {/* Utilisation d'une ancre pour défiler en haut */}
      <Link to="/projects#title">
        <Button className="block mx-auto mt-6">View All Projects</Button>
      </Link>
    </div>
  );
};

export default ProjectsShowcase;
