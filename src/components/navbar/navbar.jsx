import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-screen z-50">
      <div className="container mx-auto flex justify-end items-center p-4"> {/* Justify-start pour aligner à gauche */}

        {/* Navigation links for desktop/tablet */}
        <ul className="hidden md:flex space-x-10 scale-75">
          <li>
            <Link
              to="/#introduction"
              className="text-xl relative hover:text-black before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-black before:transition-all before:duration-300 before:transform before:-translate-x-1/2 hover:before:w-full"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects/#projects"
              className="text-xl relative hover:text-black before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-black before:transition-all before:duration-300 before:transform before:-translate-x-1/2 hover:before:w-full"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/#contacts"
              className="text-xl relative hover:text-black before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-black before:transition-all before:duration-300 before:transform before:-translate-x-1/2 hover:before:w-full"
            >
              Contacts
            </Link>
          </li>
        </ul>


        {/* Hamburger button for mobile */}
        <button
          className={`md:hidden block focus:outline-none w-12 h-12 flex items-center justify-center hover:bg-gray-300 rounded ${menuOpen ? "bg-gray-300" : ""
            }`}
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Full screen sliding menu for mobile */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black text-white transform ${menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-500 ease-in-out z-40`}
      >
        <button
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <ul className="flex flex-col items-center justify-center h-full space-y-8">
          <li>
            <Link
              to="/#introduction"
              className="text-2xl hover:text-black"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects/#projects"
              className="text-2xl hover:text-black"
              onClick={toggleMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/#contacts"
              className="text-2xl hover:text-black"
              onClick={toggleMenu}
            >
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
