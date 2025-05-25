/* src/pages/AboutPage.jsx */
import React from "react";
import { FaFireAlt, FaHandshake, FaLightbulb } from "react-icons/fa";

export default function AboutPage() {
  const values = [
    {
      title: "Passion",
      desc: "We pour our hearts into every project to deliver the best results.",
      icon: <FaFireAlt />,
    },
    {
      title: "Commitment",
      desc: "Your success is our priority—always on time, always on target.",
      icon: <FaHandshake />,
    },
    {
      title: "Innovation",
      desc: "We push boundaries to create solutions that matter.",
      icon: <FaLightbulb />,
    },
  ];

  return (
    <main className=" min-h-screen  bg-gradient-to-br from-gray-50 to-gray-200 py-16 px-6">
      {/* Hero Section with Grid */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        {/* Image */}
        <div className="h-64 lg:h-auto">
          <img
            src="AboutUs.webp"
            alt="Team at work"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="p-8 flex flex-col justify-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            About Us
          </h1>
          <p className="text-gray-700 leading-relaxed">
            My Company is dedicated to providing exceptional services. We value
            passion, commitment, and innovation in everything we do.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Join our team and help us make a difference—together we’ll build
            something amazing.
          </p>
          <button className="self-start inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-full shadow hover:bg-indigo-700 transition cursor-pointer">
            Explore Careers
          </button>
        </div>
      </div>

      {/* Values Grid */}
      <section className="mt-16 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((item) => (
          <div
            key={item.title}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition flex flex-col items-center text-center"
          >
            <div className="text-4xl mb-4 text-[#5039f6]">{item.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
