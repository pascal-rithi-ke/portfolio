import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import useIsMobile  from '../modular/useIsMobile';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const isMobile = useIsMobile();

  // Séparation (bordure + flou) une fois que la page a défilé,
  // et détection de la section visible de l'accueil pour l'état actif du menu
  const [isScrolled, setIsScrolled] = useState(false);
  const [homeSection, setHomeSection] = useState("introduction");
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      let current = "introduction";
      for (const id of ["contacts"]) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top < window.innerHeight / 2) {
          current = id;
        }
      }
      if (atBottom && document.getElementById("contacts")) current = "contacts";
      setHomeSection(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const location = useLocation();
  const isHome = location.pathname === "/";

  // Re-vérifie la section visible quand on change de page
  useEffect(() => {
    window.dispatchEvent(new Event("scroll"));
  }, [location.pathname]);

  const links = [
    { label: "Home", to: "/#introduction", active: isHome && homeSection !== "contacts" },
    { label: "Projects", to: "/projects", active: location.pathname.startsWith("/projects") },
    { label: "Contact", to: "/#contacts", active: isHome && homeSection === "contacts" },
  ];

  const title = links.find((link) => link.active)?.label ?? "Home";

  const desktopLinkClass = (active) =>
    `text-xl relative hover:text-gray-500 transition-colors duration-300 before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-gray-500 before:transition-all before:duration-300 before:transform before:-translate-x-1/2 hover:before:w-full ${
      active ? "text-black font-bold" : "text-gray-800"
    }`;

  const mobileLinkClass = (active) =>
    active
      ? "text-2xl text-white font-bold"
      : "text-2xl text-gray-300 hover:text-white transition-colors duration-300";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-300 ${
        isScrolled && !menuOpen
          ? "bg-white/80 backdrop-blur-md border-gray-200 shadow-sm"
          : "bg-white border-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-end items-center p-2 md:p-4">
        {isMobile && !menuOpen && (
          <div className="flex-1 text-left">
            <p className="text-xl font-bold text-black">{title}</p>
          </div>
        )}
        <ul className="hidden md:flex space-x-10 scale-75">
          {links.map(({ label, to, active }) => (
            <li key={label}>
              <Link to={to} className={desktopLinkClass(active)} aria-current={active ? "page" : undefined}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger button for mobile */}
        {!menuOpen && (
          <button
            className="md:hidden focus:outline-none w-12 h-12 flex items-center justify-center rounded bg-white"
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
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Full screen sliding menu for mobile */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black text-white transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
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
          {links.map(({ label, to, active }) => (
            <li key={label}>
              <Link to={to} className={mobileLinkClass(active)} onClick={toggleMenu} aria-current={active ? "page" : undefined}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
