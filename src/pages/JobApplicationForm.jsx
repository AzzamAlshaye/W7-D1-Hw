import React, { useState, useMemo } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router";
import {
  FiUser,
  FiCalendar,
  FiMapPin,
  FiDollarSign,
  FiEdit,
  FiHelpCircle,
  FiCheckCircle,
  FiXCircle,
  FiArrowRight,
} from "react-icons/fi";
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
  // compute date limits for age between 18 and 70
  const today = new Date();
  const maxDate = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  )
    .toISOString()
    .split("T")[0];
  const minDate = new Date(
    today.getFullYear() - 70,
    today.getMonth(),
    today.getDate()
  )
    .toISOString()
    .split("T")[0];

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
    setErrors((prev) => ({ ...prev, [name]: null }));
  };
  const handleAnswer = (i, value) => {
    setForm((prev) => ({
      ...prev,
      answers: { ...prev.answers, [i]: value },
    }));
    setErrors((prev) => ({ ...prev, [i]: null }));
  };

  const validate = () => {
    const errs = {};
    if (form.name.trim().length < 4)
      errs.name = "Name must be at least 4 characters.";
    if (!form.birthDate) errs.birthDate = "Birth date is required.";
    else if (form.birthDate < minDate || form.birthDate > maxDate)
      errs.birthDate = `Date must be between ${minDate} and ${maxDate}.`;
    if (!form.city) errs.city = "Please select a city.";
    if (!form.salary) errs.salary = "Please choose a salary range.";
    if (!form.motivation.trim()) errs.motivation = "Motivation is required.";
    questions.forEach((_, i) => {
      if (!form.answers[i]) errs[i] = "Please answer this question.";
    });
    return errs;
  };

  const isFormComplete = useMemo(() => {
    const base =
      form.name.trim().length >= 4 &&
      form.birthDate &&
      form.city &&
      form.salary &&
      form.motivation.trim();
    const allAnswers = questions.every((_, i) => form.answers[i]);
    return base && allAnswers;
  }, [form]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      toast.error("Please fix the errors in the form.");
    } else {
      setErrors({});
      const existing = JSON.parse(localStorage.getItem("applications") || "[]");
      localStorage.setItem(
        "applications",
        JSON.stringify([
          ...existing,
          { ...form, date: new Date().toISOString() },
        ])
      );
      setShowModal(true);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-12 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="flex items-center space-x-2 bg-indigo-600 text-white px-6 py-4">
            <FiEdit size={24} />
            <h2 className="text-2xl font-semibold">Job Application</h2>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6"
          >
            {/* Name */}
            <div>
              <label className="flex items-center text-gray-700 mb-1">
                <FiUser className="mr-2" /> Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                minLength={4}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-300"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Birth Date */}
            <div>
              <label className="flex items-center text-gray-700 mb-1">
                <FiCalendar className="mr-2" /> Birth Date
              </label>
              <input
                type="date"
                name="birthDate"
                value={form.birthDate}
                onChange={handleChange}
                required
                min={minDate}
                max={maxDate}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-300"
              />
              {errors.birthDate && (
                <p className="text-red-500 text-sm mt-1">{errors.birthDate}</p>
              )}
            </div>

            {/* City */}
            <div>
              <label className="flex items-center text-gray-700 mb-1">
                <FiMapPin className="mr-2" /> Desired City
              </label>
              <select
                name="city"
                value={form.city}
                onChange={handleChange}
                required
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-300"
              >
                <option value="" disabled>
                  Select a city
                </option>
                {cities.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">{errors.city}</p>
              )}
            </div>

            {/* Salary */}
            <div>
              <p className="flex items-center text-gray-700 mb-1">
                <FiDollarSign className="mr-2" /> Expected Salary
              </p>
              <div className="space-y-2">
                {salaryRanges.map((r) => (
                  <label key={r.value} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="salary"
                      value={r.label}
                      checked={form.salary === r.label}
                      onChange={handleChange}
                      required
                      className="h-4 w-4 text-indigo-600"
                    />
                    <span className="text-gray-800">{r.label}</span>
                  </label>
                ))}
              </div>
              {errors.salary && (
                <p className="text-red-500 text-sm mt-1">{errors.salary}</p>
              )}
            </div>

            {/* Motivation */}
            <div className="md:col-span-2">
              <label className="flex items-center text-gray-700 mb-1">
                <FiEdit className="mr-2" /> Why are you applying?
              </label>
              <textarea
                name="motivation"
                value={form.motivation}
                onChange={handleChange}
                required
                className="w-full border rounded-lg p-2 h-24 focus:ring-2 focus:ring-indigo-300"
              />
              {errors.motivation && (
                <p className="text-red-500 text-sm mt-1">{errors.motivation}</p>
              )}
            </div>

            {/* Additional Questions */}
            <div className="md:col-span-2 space-y-4">
              <p className="flex items-center text-gray-700 mb-2">
                <FiHelpCircle className="mr-2" /> Additional Questions
              </p>
              {questions.map((q, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-50 p-4 rounded-lg"
                >
                  <span className="mb-2 sm:mb-0 text-gray-800">{q}</span>
                  <div className="space-x-2">
                    {["Yes", "No"].map((ans) => (
                      <button
                        key={ans}
                        type="button"
                        onClick={() => handleAnswer(i, ans)}
                        className={`px-4 py-1 rounded-lg font-medium ${
                          form.answers[i] === ans
                            ? "bg-indigo-600 text-white"
                            : "border border-gray-300 text-gray-700"
                        }`}
                      >
                        {ans}
                      </button>
                    ))}
                  </div>
                  {errors[i] && (
                    <p className="text-red-500 text-sm mt-1 sm:mt-0">
                      {errors[i]}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Submit */}
            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={!isFormComplete}
                className={`w-full py-3 font-semibold rounded-lg shadow 
                  ${
                    isFormComplete
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : "bg-gray-300 text-gray-600 cursor-not-allowed"
                  }
                `}
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 px-3 md:px-0">
          <div className="bg-white rounded-xl p-8 max-w-sm w-full text-center space-y-3 shadow-lg flex flex-col items-center justify-center ">
            <FiCheckCircle size={48} className="text-green-600" />
            <h3 className="text-xl font-bold text-gray-800">
              Application Submitted!
            </h3>
            <p className="text-gray-600">
              Thank you, <span className="font-semibold">{form.name}</span>.
              Your application has been saved.
            </p>
            <Link
              to="/applications"
              className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 hover:bg-indigo-200 hover:text-indigo-800 font-semibold px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              View My Applications <FiArrowRight size={16} />
            </Link>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 inline-flex items-center justify-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg"
            >
              <FiXCircle className="mr-2" /> Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
