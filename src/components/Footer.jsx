/* src/components/Footer.jsx */
import React from "react";
import { Link } from "react-router";
import { FaTwitter, FaDiscord, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#111828] to-[#1e293b] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand & Social */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">My Company</h3>
          <p className="text-gray-400">
            We’re dedicated to providing exceptional services. We value passion,
            commitment, and innovation in everything we do.
          </p>
          <div className="flex space-x-4">
            {[FaTwitter, FaDiscord, FaGithub].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 bg-gray-700 rounded-full hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                aria-label="social link"
              >
                <Icon className="text-xl text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            {[
              { label: "Home", to: "/" },
              { label: "About", to: "/about" },
              { label: "Careers", to: "/apply" },
              { label: "My Applications", to: "/applications" },
            ].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="hover:text-white transition focus:outline-none focus:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">
            Get in Touch
          </h4>
          <p className="text-gray-400">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:info@mycompany.com"
              className="hover:text-white transition focus:outline-none focus:underline"
            >
              info@mycompany.com
            </a>
          </p>
          <p className="text-gray-400">
            <strong>Support:</strong>{" "}
            <a
              href="mailto:support@mycompany.com"
              className="hover:text-white transition focus:outline-none focus:underline"
            >
              support@mycompany.com
            </a>
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm text-gray-500">
          &copy; 2025 My Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
