/* src/pages/ApplicationsPage.jsx */
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

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

  if (!applications.length) {
    return (
      <div className="container mx-auto bg-white shadow rounded p-8 my-8 text-center">
        <h2 className="text-xl font-bold mb-4">No Applications Found</h2>
        <Link to="/apply" className="text-blue-600 underline">
          Submit a new application
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto bg-white shadow rounded p-8 my-8 space-y-6">
      <h2 className="text-2xl font-bold">My Applications</h2>
      {applications.map((app, idx) => (
        <div key={idx} className="border rounded p-4">
          <p>
            <strong>Name:</strong> {app.name}
          </p>
          <p>
            <strong>Applied On:</strong> {new Date(app.date).toLocaleString()}
          </p>
          <p>
            <strong>City:</strong> {app.city}
          </p>
          <p>
            <strong>Salary Range:</strong> {app.salary}
          </p>
          <p>
            <strong>Motivation:</strong> {app.motivation}
          </p>
          <p>
            <strong>Answers:</strong>
          </p>
          <ul className="list-disc ml-6">
            {app.answers &&
              Object.entries(app.answers).map(([i, ans]) => (
                <li key={i}>
                  {questions[i]}: {ans}
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
