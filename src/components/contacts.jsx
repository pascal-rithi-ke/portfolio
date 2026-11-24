import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

import Reveal from "./animation/Reveal";

const contacts = [
  {
    label: "Email",
    value: "pascal.rithi@gmail.com",
    href: "mailto:pascal.rithi@gmail.com",
    Icon: FiMail,
  },
  {
    label: "GitHub",
    value: "pascal-rithi-ke",
    href: "https://github.com/pascal-rithi-ke",
    Icon: FaGithub,
    external: true,
  },
];

export function Contacts() {
  return (
    <Reveal>
      <div className="px-6">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <ul className="flex flex-col items-center space-y-3">
          {contacts.map(({ label, value, href, Icon, external }) => (
            <li key={label} className="flex items-center gap-2">
              <Icon className="w-5 h-5" aria-hidden="true" />
              <span className="font-bold">{label} :</span>
              <a
                href={href}
                {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                className="relative inline-block text-gray-800 group hover:text-gray-500 transition-colors duration-300"
              >
                {value}
                <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-gray-500 transition-all duration-300 ease-out group-hover:left-0 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export default Contacts;
