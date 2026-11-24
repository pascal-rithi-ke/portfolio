import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { techColor } from "@/lib/techColor";

const isGithub = (link) => link.includes("github.com");

/** Carte projet partagée entre la page d'accueil et la page Projects. */
export default function ProjectCard({ project }) {
  return (
    <article className="group flex flex-col h-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-gray-600 motion-reduce:hover:translate-y-0">
      <div className="aspect-video bg-white border-b border-gray-100 overflow-hidden">
        <img
          src={project.img}
          alt={project.title}
          loading="lazy"
          className={`w-full h-full ${
            project.imgFit === "contain" ? "object-contain p-6" : "object-cover"
          } grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300`}
        />
      </div>

      <div className="flex flex-col flex-1 p-5">
        <div className="flex flex-wrap gap-2 mb-2">
          {project.type.map((type) => (
            <span
              key={type}
              className="text-xs font-semibold uppercase tracking-wide text-gray-500"
            >
              {type}
            </span>
          ))}
        </div>

        <h3 className="font-sans normal-case tracking-normal text-xl font-bold text-gray-900">
          {project.title}
        </h3>
        <p className="text-gray-700 mt-2">{project.description}</p>

        {/* Bas de carte, toujours aligné */}
        <div className="mt-auto pt-4">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                style={techColor(tech)}
                className="px-2.5 py-1 text-xs font-semibold border rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 mt-4 text-sm font-semibold text-gray-800 hover:text-gray-500 transition-colors duration-300 before:absolute before:-bottom-0.5 before:left-1/2 before:w-0 before:h-[2px] before:bg-gray-500 before:transition-all before:duration-300 before:-translate-x-1/2 hover:before:w-full"
          >
            {isGithub(project.link) ? (
              <>
                <FaGithub className="w-4 h-4" /> View on GitHub
              </>
            ) : (
              <>
                <FiExternalLink className="w-4 h-4" /> Live demo
              </>
            )}
          </a>
        </div>
      </div>
    </article>
  );
}
