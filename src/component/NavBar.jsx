import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-end items-center">
        {/* Liens de navigation */}
        <div className="space-x-4">
          <Link
            to="/"
            className="hover:text-blue-400 transition-colors"
          >
            Home
          </Link>
          <span className="text-gray-400">|</span>
          <Link
            to="/projects"
            className="hover:text-blue-400 transition-colors"
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
