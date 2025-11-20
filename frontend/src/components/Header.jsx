import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import { AuthContext } from "../context/AuthContext";

import logo from "../assets/logo.jpg";
import odisha from "../assets/odisha.png";
import searchIcon from "../assets/search.png";
import useDebounce from "../hooks/useDebounce";

// TEMPORARY SEARCH DATA
const sampleBlogs = [
  { id: 1, title: "How Odisha is Leading Startup Innovation", path: "/blog/odisha-startup" },
  { id: 2, title: "Building a Strong Tech Ecosystem in Bhubaneswar", path: "/blog/tech-ecosystem" },
  { id: 3, title: "Women in Tech: Odisha’s Rising Founders", path: "/blog/women-founders" },
  { id: 4, title: "Why Local Innovation Matters", path: "/blog/local-innovation" },
];

export default function Header() {
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const { user, logout } = useContext(AuthContext);

  const [showMore, setShowMore] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const debouncedSearch = useDebounce(searchTerm, 400);

  // SEARCH FILTERING
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

  // CLOSE DROPDOWN ON OUTSIDE CLICK
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowMore(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // DISABLE HORIZONTAL SCROLL
  useEffect(() => {
    document.body.style.overflowX = "hidden";
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "About Us", path: "/about" },
    { name: "Founders Way", path: "/founder" },
  ];

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50 w-full">
      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center h-12">
            <img src={odisha} className="h-12" />
            <img src={logo} className="absolute left-4 top-3 h-5 mix-blend-multiply" />
          </div>
          <div>
            <Link to="/" className="font-semibold text-gray-800">Kalinga Vriti</Link>
            <p className="text-[10px] text-gray-500">Empowering Odisha's Innovation</p>
          </div>
        </div>

        {/* SEARCH BAR */}
        <form
          onSubmit={handleSearchSubmit}
          className="relative hidden lg:flex items-center border border-yellow-500 rounded-md px-3 py-1.5 w-64 bg-white"
        >
          <img src={searchIcon} className="h-4 w-4 mr-2 opacity-70" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-sm bg-transparent outline-none"
            placeholder="Search stories..."
          />

          {/* Suggestions */}
          {suggestions.length > 0 && (
            <ul className="absolute top-full left-0 w-full mt-1 bg-white shadow-md border rounded-md z-50">
              {suggestions.map((s) => (
                <li
                  key={s.id}
                  className="px-3 py-2 text-sm hover:bg-yellow-50 cursor-pointer"
                  onClick={() => {
                    navigate(s.path);
                    setSuggestions([]);
                  }}
                >
                  {s.title}
                </li>
              ))}
            </ul>
          )}
        </form>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-6 ml-auto">

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

          {/* MORE MENU */}
          <div className="relative" ref={dropdownRef}>
            <motion.button
              onClick={() => setShowMore(!showMore)}
              className="hover:text-yellow-600"
            >
              More ▾
            </motion.button>

            <AnimatePresence>
              {showMore && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-44 bg-white border shadow-md rounded-md z-50"
                >
                  <Link className="block px-4 py-2 hover:bg-yellow-50" to="/community">Community</Link>
                  <Link className="block px-4 py-2 hover:bg-yellow-50" to="/blog">Blog</Link>
                  <Link className="block px-4 py-2 hover:bg-yellow-50" to="/contact">Contact Us</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* USER MENU */}
          {user ? (
            <div className="relative group">
              <button className="px-4 py-2 bg-yellow-400 text-white rounded-md">
                {user.name.split(" ")[0]} ▾
              </button>

              <div className="absolute right-0 mt-2 hidden group-hover:block bg-white w-40 shadow-md border rounded-md">
                <div className="px-4 py-2 border-b text-gray-600 text-sm">{user.email}</div>
                <button
                  onClick={logout}
                  className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-yellow-100"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <Link to="/signup" className="px-5 py-2 bg-yellow-500 text-white rounded-md">
              Join Us
            </Link>
          )}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* ⭐⭐⭐ MOBILE MENU — FIXED ⭐⭐⭐ */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white shadow-lg border-t"
          >
            <div className="flex flex-col items-center py-4 gap-3">

              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-700 hover:text-yellow-600"
                >
                  {item.name}
                </NavLink>
              ))}

              {/* More items */}
              <Link to="/community" onClick={() => setMenuOpen(false)}>Community</Link>
              <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>

              {/* USER STATE */}
              {user ? (
                <button
                  onClick={() => {
                    logout();
                    setMenuOpen(false);
                  }}
                  className="px-4 py-2 bg-red-500 text-white rounded-md"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/signup"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-2 bg-yellow-500 text-white rounded-md"
                >
                  Join Us
                </Link>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
