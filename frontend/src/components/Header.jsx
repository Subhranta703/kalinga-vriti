import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import odisha from '../assets/odisha.png';
import search from '../assets/search.png';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">

        {/* LEFT SIDE — logo + tagline + search */}
        <div className="flex flex-wrap items-center justify-between w-full md:w-1/2 gap-3">

          {/* Combined Logo */}
          <div className="relative flex items-center h-14 w-auto">
            {/* Odisha emblem */}
            <img src={odisha} alt="Odisha Emblem" className="h-14 w-auto" />

            {/* Kalinga Vriti logo overlay */}
            <img
              src={logo}
              alt="Kalinga Vriti Logo"
              className="absolute left-5 top-3 h-6 w-auto object-contain mix-blend-multiply"
            />

            {/* Caption under logos */}
            <h6 className="absolute top-8 left-2 text-[8px] font-medium text-gray-700">
              Kalinga Vriti
            </h6>
          </div>

          {/* Text + tagline */}
          <div className="flex flex-col">
            <Link to="/" className="text-sm font-semibold text-gray-800">
              Kalinga Vriti
            </Link>
            <p className="text-[10px] text-gray-500">Empowering Odisha's Innovation</p>
          </div>

          {/* Search Bar */}
          <div className="flex items-center border border-yellow-500 rounded-lg px-2 py-1 w-full sm:w-1/2 focus-within:ring-1 focus-within:ring-yellow-400">
            <img src={search} alt="Search" className="h-4 w-4 mr-2 opacity-70" />
            <input
              type="text"
              placeholder="Search Stories..."
              className="w-full text-sm focus:outline-none"
            />
          </div>
        </div>

        {/* RIGHT SIDE — navigation + button */}
        <div className="flex items-center justify-center md:justify-end w-full md:w-1/2 flex-wrap gap-3 text-sm">

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-yellow-500 font-semibold'
                  : 'text-gray-700 hover:text-yellow-500'
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/community"
              className={({ isActive }) =>
                isActive
                  ? 'text-yellow-500 font-semibold'
                  : 'text-gray-700 hover:text-yellow-500'
              }
            >
              Community
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'text-yellow-500 font-semibold'
                  : 'text-gray-700 hover:text-yellow-500'
              }
            >
              About Us
            </NavLink>

            <NavLink
              to="/founder"
              className={({ isActive }) =>
                isActive
                  ? 'text-yellow-500 font-semibold'
                  : 'text-gray-700 hover:text-yellow-500'
              }
            >
              Founders Way
            </NavLink>

            {/* More Dropdown (no border) */}
            <select
              className="text-gray-700 text-sm bg-transparent focus:outline-none cursor-pointer hover:text-yellow-500"
              defaultValue=""
            >
              <option value="" disabled>More</option>
              <option value="team">Our Team</option>
              <option value="careers">Careers</option>
              <option value="contact">Contact Us</option>
              <option value="events">Events </option>
            </select>
          </nav>

          {/* Join Button */}
          <Link
            to="/signup"
            className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition"
          >
            Join Us
          </Link>
        </div>
      </div>
    </header>
  );
}
