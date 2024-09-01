import React from "react";

function Contact() {
  return (
    <section
      id="contact-info"
      className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto my-10 border border-gray-200"
    >
      <h3 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">Contact</h3>
      <div className="flex flex-col space-y-4">
        {/* Email Contact */}
        <a
          href="mailto:pascal.rithi@gmail.com"
          className="flex items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg shadow-md transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-500 mr-3"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16v16H4z" />
            <path d="M22 4L12 14 2 4" />
          </svg>
          <span className="text-lg font-medium text-gray-800">
            pascal.rithi@gmail.com
          </span>
        </a>

        {/* GitHub Contact */}
        <a
          href="https://github.com/pascal-rithi-ke"
          className="flex items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-lg shadow-md transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800 mr-3"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3v18M21 12H3" />
          </svg>
          <span className="text-lg font-medium text-gray-800">
            Github: pascal-rithi-ke
          </span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
