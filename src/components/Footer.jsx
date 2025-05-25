// src/components/Footer.jsx
import React from "react";
import { FaTwitter, FaDiscord, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand & Social */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">GameScope</h3>
          <p className="text-gray-400">
            Your portal to the world of video games—genres, reviews, and
            community insights.
          </p>
          <div className="flex space-x-4">
            {[FaTwitter, FaDiscord, FaGithub].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 bg-gray-700 rounded-full hover:bg-blue-600 transition-colors"
                aria-label="social link"
              >
                <Icon className="text-xl text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="/" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="/games" className="hover:text-white transition">
                Games
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">
            Get in Touch
          </h4>
          <p className="text-gray-400">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:hello@gamescope.com"
              className="hover:text-white transition"
            >
              hello@gamescope.com
            </a>
          </p>
          <p className="text-gray-400">
            <strong>Support:</strong>{" "}
            <a
              href="mailto:support@gamescope.com"
              className="hover:text-white transition"
            >
              support@gamescope.com
            </a>
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-4 text-center text-sm text-gray-500">
          &copy; 2025 GameScope. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
