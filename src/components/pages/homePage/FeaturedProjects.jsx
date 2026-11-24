import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { data } from "@/data/info";
import Reveal from "@/components/animation/Reveal";
import ProjectCard from "@/components/projects/ProjectCard";

const featuredProjects = data.project.filter((project) => project.featured);

/** Section de la page d'accueil : quelques projets choisis + lien vers la page complète. */
function FeaturedProjects() {
  return (
    <div className="container w-full max-w-6xl mx-auto px-4 text-left">
      <Reveal>
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map((project, index) => (
          <Reveal key={project.title} delay={(index % 3) * 100} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 flex justify-center">
        <Link
          to="/projects"
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-black text-black font-semibold hover:bg-gray-500 hover:border-gray-500 hover:text-white transition-colors duration-300"
        >
          See all projects
          <FiArrowRight
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </Reveal>
    </div>
  );
}

export default FeaturedProjects;
