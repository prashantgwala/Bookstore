import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900 px-4 pt-28 pb-10">
      <div className="max-w-3xl w-full bg-gray-100 dark:bg-slate-800 rounded-xl shadow-md p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-6">
          About Us
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Welcome to <span className="font-semibold text-blue-600">BookeStore</span> — your one-stop platform for
          discovering and buying books online. We aim to provide a wide variety of books to support your learning
          and reading journey.
        </p>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          This project is built using <strong>MERN Stack</strong>: MongoDB, Express.js, React, and Node.js. It is designed to be fast,
          responsive, and user-friendly.
        </p>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Our mission is to make learning accessible and affordable for everyone.
        </p>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Created by <span className="font-semibold text-blue-600">Prashant Gwala</span> — aspiring full-stack developer.
        </p>

        {/* Go Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(-1)}
            className="inline-block mt-4 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition"
          >
            ← Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
