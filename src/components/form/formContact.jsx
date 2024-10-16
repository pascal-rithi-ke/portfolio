import React, { useState } from "react";
import emailjs from "emailjs-com";

const formContact = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fonction de validation des champs
  const validateForm = () => {
    if (!formData.email) {
      return "L'email est requis.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      return "Please enter a valid email address.";
    } else if (!formData.message) {
      return "A message is required.";
    }
    return null; // Aucun problème, formulaire valide
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Réinitialiser les messages d'erreur avant de soumettre
    setError(null);

    // Validation du formulaire
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    const serviceId = "";
    const templateId = "";
    const publicKey = "";

    emailjs
      .send(serviceId, templateId, {
        from_email: formData.email,
        message: formData.message,
      }, publicKey)
      .then(() => {
        setSubmitted(true);
      })
      .catch((err) => {
        console.error(err);
        setError("An error occurred while sending the message. Please try again later.");
      });
  };

  return (
    <div className="flex flex-col justify-center items-center p-5">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        {submitted ? (
          <p className="text-green-600 font-bold text-center mb-4">
            Thank you for your message! I will get back to you as soon as possible.
          </p>
        ) : (
          <>
            {error && (
              <p className="text-red-600 font-bold text-center mb-4">
                {error}
              </p>
            )}
            <p className="text-red-500 font-bold text-center mb-4">
              The service is currently unavailable.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold"
                >
                  Your email<span className="text-red-500">*</span> :
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
                  Message<span className="text-red-500">*</span> :
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
