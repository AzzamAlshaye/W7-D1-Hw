/* src/pages/ApplicationsPage.jsx */
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  FiUser,
  FiCalendar,
  FiMapPin,
  FiDollarSign,
  FiMessageCircle,
  FiCheck,
  FiX,
  FiFileText,
} from "react-icons/fi";

const questions = [
  "Do you have previous experience?",
  "Are you willing to relocate?",
  "Can you start immediately?",
];

export default function ApplicationsPage() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("applications") || "[]");
    setApplications(saved);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {!applications.length ? (
          <div className="bg-white rounded-2xl shadow-lg p-10 text-center space-y-6">
            <FiFileText className="mx-auto text-6xl text-indigo-600" />
            <h2 className="text-2xl font-semibold text-gray-800">
              No Applications Found
            </h2>
            <p className="text-gray-600">
              You haven't submitted any applications yet.
            </p>
            <Link
              to="/apply"
              className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition"
            >
              Submit a New Application
            </Link>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              My Applications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {applications.map((app, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow hover:shadow-xl transition p-6 flex flex-col"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-gray-800">
                      {app.name}
                    </span>
                    <span className="text-sm text-green-600 flex items-center">
                      <FiCheck className="mr-1" /> Submitted
                    </span>
                  </div>

                  {/* Details */}
                  <div className="space-y-3 flex-1">
                    <p className="flex items-center text-gray-700">
                      <FiCalendar className="mr-2" />
                      {new Date(app.date).toLocaleString()}
                    </p>
                    <p className="flex items-center text-gray-700">
                      <FiMapPin className="mr-2" /> {app.city}
                    </p>
                    <p className="flex items-center text-gray-700">
                      <FiDollarSign className="mr-2" /> {app.salary}
                    </p>
                    <p className="flex items-start text-gray-700">
                      <FiMessageCircle className="mt-1 mr-2" />
                      <span>{app.motivation}</span>
                    </p>
                  </div>

                  {/* Answers */}
                  <div className="mt-4">
                    <h4 className="text-md font-medium text-gray-800 mb-2">
                      Additional Questions
                    </h4>
                    <ul className="space-y-2">
                      {Object.entries(app.answers).map(([i, ans]) => (
                        <li key={i} className="flex items-center text-gray-700">
                          {ans === "Yes" ? (
                            <FiCheck className="text-green-500 mr-2" />
                          ) : (
                            <FiX className="text-red-500 mr-2" />
                          )}
                          <span className="flex-1">{questions[Number(i)]}</span>
                          <span className="font-semibold">{ans}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
