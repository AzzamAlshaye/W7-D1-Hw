/* src/pages/JobApplicationForm.jsx */
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router";
import "react-toastify/dist/ReactToastify.css";

const cities = ["Riyadh", "Jeddah", "Dammam", "Mecca", "Medina"];
const salaryRanges = [
  { label: "3,000 - 8,000", value: "range1" },
  { label: "9,000 - 13,000", value: "range2" },
  { label: "15,000 and above", value: "range3" },
];
const questions = [
  "Do you have previous experience?",
  "Are you willing to relocate?",
  "Can you start immediately?",
];

export default function JobApplicationForm() {
  const [form, setForm] = useState({
    name: "",
    birthDate: "",
    city: "",
    salary: "",
    motivation: "",
    answers: questions.reduce((acc, _, i) => ({ ...acc, [i]: "" }), {}),
  });
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAnswer = (i, value) => {
    setForm((prev) => ({
      ...prev,
      answers: { ...prev.answers, [i]: value },
    }));
  };

  const validate = () => {
    const errs = {};
    if (form.name.trim().length < 4)
      errs.name = "Name must be at least 4 characters.";
    if (!form.birthDate) errs.birthDate = "Birth date is required.";
    else {
      const age =
        new Date().getFullYear() - new Date(form.birthDate).getFullYear();
      if (age < 18 || age > 70)
        errs.birthDate = "Age must be between 18 and 70.";
    }
    if (!form.city) errs.city = "Please select a city.";
    if (!form.salary) errs.salary = "Please choose a salary range.";
    if (!form.motivation.trim()) errs.motivation = "Motivation is required.";
    questions.forEach((_, i) => {
      if (!form.answers[i]) errs[i] = "Please answer this question.";
    });
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      toast.error("Please fix the errors in the form.");
    } else {
      setErrors({});
      const existing = JSON.parse(localStorage.getItem("applications") || "[]");
      const entry = { ...form, date: new Date().toISOString() };
      localStorage.setItem(
        "applications",
        JSON.stringify([...existing, entry])
      );
      setShowModal(true);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="container mx-auto bg-white shadow rounded p-8 my-8">
        <h2 className="text-2xl font-bold mb-4">Job Application</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <label className="block font-medium mb-1">Birth Date</label>
            <input
              type="date"
              name="birthDate"
              value={form.birthDate}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
            {errors.birthDate && (
              <p className="text-red-500 text-sm mt-1">{errors.birthDate}</p>
            )}
          </div>
          <div>
            <label className="block font-medium mb-1">Desired City</label>
            <select
              name="city"
              value={form.city}
              onChange={handleChange}
              className="w-full border rounded p-2"
            >
              <option value="">Select a city</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            {errors.city && (
              <p className="text-red-500 text-sm mt-1">{errors.city}</p>
            )}
          </div>
          <div>
            <p className="block font-medium mb-1">Expected Salary</p>
            {salaryRanges.map((range) => (
              <label key={range.value} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="salary"
                  value={range.value}
                  checked={form.salary === range.value}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span>{range.label}</span>
              </label>
            ))}
            {errors.salary && (
              <p className="text-red-500 text-sm mt-1">{errors.salary}</p>
            )}
          </div>
          <div>
            <label className="block font-medium mb-1">
              Why are you applying?
            </label>
            <textarea
              name="motivation"
              value={form.motivation}
              onChange={handleChange}
              className="w-full border rounded p-2 h-24"
            />
            {errors.motivation && (
              <p className="text-red-500 text-sm mt-1">{errors.motivation}</p>
            )}
          </div>
          <div>
            <p className="block font-medium mb-2">Additional Questions</p>
            {questions.map((q, i) => (
              <div key={i} className="flex items-center space-x-4">
                <span className="flex-1">{q}</span>
                <button
                  type="button"
                  onClick={() => handleAnswer(i, "Yes")}
                  className={`px-4 py-1 rounded ${
                    form.answers[i] === "Yes"
                      ? "bg-blue-500 text-white"
                      : "border"
                  }`}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => handleAnswer(i, "No")}
                  className={`px-4 py-1 rounded ${
                    form.answers[i] === "No"
                      ? "bg-blue-500 text-white"
                      : "border"
                  }`}
                >
                  No
                </button>
              </div>
            ))}
            {questions.map(
              (_, i) =>
                errors[i] && (
                  <p key={i} className="text-red-500 text-sm">
                    {errors[i]}
                  </p>
                )
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700"
          >
            Submit
          </button>
        </form>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded p-8 max-w-sm w-full text-center space-y-4">
              <h2 className="text-xl font-bold">Application Submitted!</h2>
              <p>Thank you, {form.name}. Your application has been saved.</p>
              <Link to="/applications" className="mt-2 text-blue-600 underline">
                View My Applications
              </Link>
              <button
                onClick={() => setShowModal(false)}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
