import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900 px-4 pt-28 pb-10">
      <div className="max-w-2xl w-full bg-gray-100 dark:bg-slate-800 rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Contact Us
        </h2>
        <div className='mt-6 text-center'>
          <Link
           to="/"
               className="inline-block mt-4 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition"
        >
           ← Back to Home
             </Link>
        </div>
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full mt-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
