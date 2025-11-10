import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpg";
import odisha from "../assets/odisha.png";
import search from "../assets/search.png";

export default function Header() {
  const [showMore, setShowMore] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowMore(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent horizontal scroll
  useEffect(() => {
    document.body.style.overflowX = "hidden";
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Community", path: "/community" },
    { name: "About Us", path: "/about" },
    { name: "Founders Way", path: "/founder" },
  ];

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        
        {/* LEFT SIDE — Logo + tagline */}
        <div className="flex items-center gap-2 sm:gap-3 absolute left-3 sm:left-6 md:left-10 lg:left-12">
          <div className="relative flex items-center h-12 sm:h-14 w-auto">
            <img src={odisha} alt="Odisha Emblem" className="h-12 sm:h-14 w-auto" />
            <img
              src={logo}
              alt="Kalinga Vriti Logo"
              className="absolute left-5 sm:left-6 top-3 h-5 sm:h-6 w-auto object-contain mix-blend-multiply"
            />
            <h6 className="absolute top-8 left-2 text-[7px] sm:text-[8px] font-medium text-gray-700">
              Kalinga Vriti
            </h6>
          </div>

          <div className="flex flex-col leading-tight">
            <Link to="/" className="text-xs sm:text-sm font-semibold text-gray-800">
              Kalinga Vriti
            </Link>
            <p className="text-[9px] sm:text-[10px] text-gray-500">
              Empowering Odisha's Innovation
            </p>
          </div>
        </div>

        {/* SEARCH BAR */}
        <div className="hidden lg:flex items-center border border-yellow-500 rounded-lg px-2 py-1 w-44 sm:w-56 ml-auto mr-6 focus-within:ring-1 focus-within:ring-yellow-400">
          <img src={search} alt="Search" className="h-4 w-4 mr-2 opacity-70" />
          <input
            type="text"
            placeholder="Search Stories..."
            className="w-full text-sm focus:outline-none"
          />
        </div>

        {/* HAMBURGER (mobile only) */}
        <button
          className="md:hidden ml-auto text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* NAVIGATION (Desktop) */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-6 text-sm ml-auto pr-3">
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-500 font-semibold border-b-2 border-yellow-400 pb-1 transition-all"
                    : "text-gray-700 hover:text-yellow-500 transition-all"
                }
              >
                {item.name}
              </NavLink>
            </motion.div>
          ))}

          {/* MORE DROPDOWN */}
          <div className="relative" ref={dropdownRef}>
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowMore(!showMore)}
              className={`text-gray-700 text-sm focus:outline-none cursor-pointer flex items-center gap-1 ${
                showMore ? "text-yellow-500 font-semibold" : "hover:text-yellow-500"
              }`}
            >
              More ▾
            </motion.button>

            <AnimatePresence>
              {showMore && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="absolute right-0 mt-2 w-44 bg-white shadow-lg border border-gray-100 rounded-md z-50"
                >
                  <Link
                    to="/about#team"
                    className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 text-sm transition"
                    onClick={() => setShowMore(false)}
                  >
                    Our Team
                  </Link>
                  <Link
                    to="/contact"
                    className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 text-sm transition"
                    onClick={() => setShowMore(false)}
                  >
                    Contact Us
                  </Link>
                  <Link
                    to="/events"
                    className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 text-sm transition"
                    onClick={() => setShowMore(false)}
                  >
                    Events
                  </Link>
                  <Link
                    to="/blog"
                    className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 text-sm transition"
                    onClick={() => setShowMore(false)}
                  >
                    Blogs
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* JOIN BUTTON */}
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              to="/signup"
              className="px-5 py-1.5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
            >
              Join Us
            </Link>
          </motion.div>
        </nav>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white shadow-lg border-t border-gray-100"
          >
            <div className="flex flex-col items-center py-4 gap-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-500 font-semibold"
                      : "text-gray-700 hover:text-yellow-500"
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              {/* MOBILE DROPDOWN */}
              <button
                onClick={() => setShowMore(!showMore)}
                className="text-gray-700 hover:text-yellow-500 text-sm"
              >
                More ▾
              </button>

              {showMore && (
                <div className="flex flex-col items-center gap-1 mt-2">
                  <Link to="/about#team" onClick={() => setMenuOpen(false)}>
                    Our Team
                  </Link>
                  <Link to="/contact" onClick={() => setMenuOpen(false)}>
                    Contact Us
                  </Link>
                  <Link to="/events" onClick={() => setMenuOpen(false)}>
                    Events
                  </Link>
                  <Link to="/blog" onClick={() => setMenuOpen(false)}>
                    Blogs
                  </Link>
                </div>
              )}

              <Link
                to="/signup"
                onClick={() => setMenuOpen(false)}
                className="mt-3 px-5 py-1.5 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition"
              >
                Join Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
