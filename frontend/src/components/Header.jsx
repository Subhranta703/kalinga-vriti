import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import logo from "../assets/logo.jpg";
import odisha from "../assets/odisha.png";
import searchIcon from "../assets/search.png";

import useDebounce from "../hooks/useDebounce";

// Temporary sample data (replace later with backend data)
const sampleBlogs = [
  { id: 1, title: "How Odisha is Leading Startup Innovation", path: "/blog/odisha-startup" },
  { id: 2, title: "Building a Strong Tech Ecosystem in Bhubaneswar", path: "/blog/tech-ecosystem" },
  { id: 3, title: "Women in Tech: Odisha’s Rising Founders", path: "/blog/women-founders" },
  { id: 4, title: "Why Local Innovation Matters", path: "/blog/local-innovation" },
];

export default function Header() {
  const [showMore, setShowMore] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const debouncedSearch = useDebounce(searchTerm, 400);

  const dropdownRef = useRef(null);
  const navigate = useNavigate();

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

  // Debounced Search Suggestions
  useEffect(() => {
    if (!debouncedSearch.trim()) {
      setSuggestions([]);
      return;
    }

    const filtered = sampleBlogs.filter((b) =>
      b.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
    setSuggestions(filtered);
  }, [debouncedSearch]);

  // Search submit redirect
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!debouncedSearch.trim()) return;

    navigate(`/search?query=${encodeURIComponent(debouncedSearch.trim())}`);
    setSuggestions([]);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "About Us", path: "/about" },
    { name: "Founders Way", path: "/founder" },
  ];


  const handleLogout = () => {
  localStorage.removeItem('kv_token');
  window.location.href = '/login'; // or use navigate('/login')
};

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50 w-full  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">

        {/* LEFT LOGO */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="relative flex items-center h-12 w-auto">
            <img src={odisha} alt="Odisha Emblem" className="h-12 w-auto" />
            <img
              src={logo}
              alt="KV Logo"
              className="absolute left-4 top-3 h-5 w-auto object-contain mix-blend-multiply"
            />
          </div>

          <div className="flex flex-col leading-tight">
            <Link to="/" className="text-sm font-semibold text-gray-800">
              Kalinga Vriti
            </Link>
            <p className="text-[10px] text-gray-500">Empowering Odisha's Innovation</p>
          </div>
        </div>

        {/* DESKTOP SEARCH */}
        <form
          onSubmit={handleSearchSubmit}
          className="relative hidden lg:flex items-center border border-yellow-500 rounded-md px-3 py-1.5 ml-8 w-64 focus-within:ring-2 focus-within:ring-yellow-400 transition bg-white"
        >
          <img src={searchIcon} className="h-4 w-4 mr-2 opacity-70" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search stories..."
            className="w-full text-sm outline-none bg-transparent"
          />

          {/* Auto-suggestion dropdown */}
          {suggestions.length > 0 && (
            <ul className="absolute top-full mt-1 left-0 bg-white border border-gray-200 shadow-md rounded-md w-full z-50">
              {suggestions.map((s) => (
                <li
                  key={s.id}
                  className="px-3 py-2 text-sm hover:bg-yellow-50 cursor-pointer text-gray-700"
                  onClick={() => {
                    navigate(s.path);
                    setSuggestions([]);
                    setSearchTerm("");
                  }}
                >
                  {s.title}
                </li>
              ))}
            </ul>
          )}
        </form>

        {/* NAVIGATION */}
        <nav className="hidden md:flex items-center gap-6 text-sm ml-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-500 font-semibold border-b-2 border-yellow-400 pb-1"
                  : "text-gray-700 hover:text-yellow-600"
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* MORE DROPDOWN */}
          <div className="relative" ref={dropdownRef}>
            <motion.button
              onClick={() => setShowMore(!showMore)}
              className={`flex items-center gap-1 ${
                showMore ? "text-yellow-600 font-semibold" : "hover:text-yellow-600"
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
                  className="absolute right-0 mt-2 w-44 bg-white shadow-lg border border-gray-100 rounded-md z-50"
                >
                  <Link
                    to="/community"
                    className="block px-4 py-2 hover:bg-yellow-50 text-sm"
                    onClick={() => setShowMore(false)}
                  >
                    Community
                  </Link>
                  <Link
                    to="/blog"
                    className="block px-4 py-2 hover:bg-yellow-50 text-sm"
                    onClick={() => setShowMore(false)}
                  >
                    Blog
                  </Link>
                  <Link
                    to="/contact"
                    className="block px-4 py-2 hover:bg-yellow-50 text-sm"
                    onClick={() => setShowMore(false)}
                  >
                    Contact Us
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* JOIN BUTTON */}
          <Link
            to="/signup"
            className="px-5 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white rounded-md shadow hover:shadow-lg transition"
          >
            Join Us
          </Link>
        </nav>

        {/* MOBILE MENU ICON */}
        <button className="md:hidden ml-auto" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="md:hidden bg-white border-t shadow-lg"
          >
            <div className="flex flex-col items-center py-4 gap-3">

              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-700 hover:text-yellow-500"
                >
                  {item.name}
                </NavLink>
              ))}

              {/* Mobile More */}
              <Link to="/community" onClick={() => setMenuOpen(false)}>Community</Link>
              <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

              {/* MOBILE SEARCH */}
              <form
                onSubmit={handleSearchSubmit}
                className="flex items-center mt-3 border border-yellow-500 px-3 py-1 rounded-md w-64"
              >
                <img src={searchIcon} className="h-4 w-4 mr-2 opacity-70" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search..."
                  className="w-full outline-none bg-transparent text-sm"
                />
              </form>

              {/* MOBILE JOIN */}
              <Link
                to="/signup"
                className="mt-3 px-5 py-2 bg-yellow-500 text-white rounded-md"
                onClick={() => setMenuOpen(false)}
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
