// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import { FaGamepad } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const linkClass = (path) =>
    `block px-6 py-3 font-medium rounded-md transition
     ${
       pathname === path
         ? "bg-white text-gray-900"
         : "text-white hover:bg-gray-700"
     }`;

  return (
    <nav className="bg-gray-900 text-white shadow-md relative">
      <div className="container mx-auto flex items-center justify-between lg:justify-normal lg:gap-10 p-4">
        {/* Brand */}
        <Link to="/" className="flex items-center space-x-2 justify-center">
          <img src="react-icon.webp" alt=" website icon" className="h-12" />
          <span className="text-xl font-bold">My Compeny</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex space-x-4">
          <Link to="/" className={linkClass("/")}>
            Home
          </Link>
          <Link to="/about" className={linkClass("/about")}>
            About
          </Link>
          <Link to="/apply" className={linkClass("/apply")}>
            Apply
          </Link>

          <Link to="/applications" className={linkClass("/applications")}>
            My Applications
          </Link>
        </div>

        {/* Burger button */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="lg:hidden text-white focus:outline-none"
        >
          {menuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-gray-900 overflow-hidden transition-[max-height] duration-300
          ${menuOpen ? "max-h-screen" : "max-h-0"}`}
      >
        <ul className="flex flex-col">
          <li>
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className={linkClass("/")}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={linkClass("/about")}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/Apply"
              onClick={() => setMenuOpen(false)}
              className={linkClass("/Apply")}
            >
              Apply
            </Link>
          </li>
          <li>
            <Link
              to="/applications"
              onClick={() => setMenuOpen(false)}
              className={linkClass("/applications")}
            >
              My applications
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
