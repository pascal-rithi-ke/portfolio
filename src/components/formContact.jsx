import React, { useState } from "react";
import emailjs from "emailjs-com";

const formContact = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Create a new object with the form data
  const templateParams = {
    from_email: formData.email,
    message: formData.message,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAIL_serviceId;
    const templateId = import.meta.env.VITE_EMAIL_templateId;
    const publicKey = import.meta.env.VITE_EMAIL_publicKey;

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setSubmitted(true);
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className="flex flex-col justify-center items-center p-5">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        {submitted ? (
          <p className="text-green-600 font-bold text-center mb-4">
            Thank you for your message, I will get back to you soon!
          </p>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold"
                >
                  Your email :
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold"
                >
                  Message :
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="mt-2 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition duration-300"
              >
                Send
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default formContact;
