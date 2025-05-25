/* src/pages/HomePage.jsx */
import { React } from "react";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center p-6">
      <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-xl max-w-5xl w-full overflow-hidden flex flex-col md:flex-row">
        {/* Text Content */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
            Welcome to My Company
          </h1>
          <p className="text-gray-600 mb-6">
            We’re thrilled to have you here. Discover our mission, learn about
            our team, and explore the exciting roles we have open.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/apply"
              className="inline-block px-6 py-3 text-center bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition"
            >
              Apply
            </Link>
            <Link
              to="/applications"
              className="inline-block px-6 py-3 text-center border-2 border-indigo-600 text-indigo-600 rounded-full font-medium hover:bg-indigo-600 hover:text-white transition"
            >
              My Applications
            </Link>
          </div>
        </div>

        <div className="md:w-1/2">
          <img
            src="logo.webp"
            alt="Office environment"
            className="w-full h-64 md:h-full object-contain"
          />
        </div>
      </div>
    </main>
  );
}
