import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "../assets/logo.jpg"; // replace with your Kalinga Vritti logo

export default function Footer() {
  return (
    <footer className="bg-[#0E1422] text-gray-300 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        
        {/* 🌟 Logo & About */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src={logo} alt="Kalinga Vritti" className="h-10" />
            <div>
              <h1 className="text-lg font-semibold text-yellow-400">
                Kalinga Vriti
              </h1>
              <p className="text-xs text-gray-400">
                Empowering Odisha’s Innovation
              </p>
            </div>
          </div>
          <p className="text-sm leading-relaxed mb-4">
            Connecting Odisha's tech ecosystem through meaningful events and
            community building.
          </p>
          <div className="flex gap-4 text-gray-400 text-xl">
            <a href="https://x.com/KalingaVriti" className="hover:text-yellow-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/company/kalinga-vriti/?viewAsMember=true" className="hover:text-yellow-400">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/kalingavriti/" className="hover:text-yellow-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/share/1ZB5evkcdY/" className="hover:text-yellow-400">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>

        {/* 🔗 Quick Links */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="events" className="hover:text-yellow-400">All Events</a></li>
            <li><a href="events" className="hover:text-yellow-400">Events</a></li>
            <li><a href="community" className="hover:text-yellow-400">Community</a></li>
            <li><a href="about" className="hover:text-yellow-400">About Us</a></li>
            <li><a href="blog" className="hover:text-yellow-400">Blog</a></li>
            <li><a href="founder" className="hover:text-yellow-400">Founders Way</a></li>
          </ul>
        </div>

        {/* 🎯 Event Types */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-3">Event Types</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-400">Challenges & Hackathons</a></li>
            <li><a href="#" className="hover:text-yellow-400">Meetups</a></li>
            <li><a href="#" className="hover:text-yellow-400">Workshops</a></li>
            <li><a href="#" className="hover:text-yellow-400">Conferences</a></li>
            <li><a href="#" className="hover:text-yellow-400">Networking</a></li>
          </ul>
        </div>

        {/* 📞 Contact */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-3">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-yellow-400" /> 
              events@odishatech.in
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-yellow-400" /> 
              +91 9876543210
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-yellow-400" /> 
              O-Hub, Bhubaneswar
            </li>
          </ul>
          <button className="mt-4 bg-yellow-400 text-black font-medium text-sm px-4 py-2 rounded-md hover:bg-yellow-300 transition">
            Partner With Us
          </button>
        </div>
      </div>

      {/* 🔸 Bottom Section */}
      <div className="text-center text-sm text-gray-500 mt-6">
        © 2025 Kalinga Vriti. All rights reserved.
      </div>
    </footer>
  );
}
