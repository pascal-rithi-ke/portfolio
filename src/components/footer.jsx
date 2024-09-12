// Footer.js
import React from "react";
import { FaGithub, FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            {/* Email */}
            <a
              href="mailto:pascal.rithi@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaMailBulk size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaGithub size={20} />
            </a>
          </div>

          {/* Copyright Notice */}
          <p className="text-sm">&copy; 2024 Eng Pascal Kien Portfolio. </p>
          <p className="text-sm">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
