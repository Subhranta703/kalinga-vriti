import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Star } from "lucide-react";
import four from "../assets/four.png";
import sambbg from "../assets/sambbg.png";

export default function UpcomingEvents() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="py-16 bg-white relative overflow-hidden"
      style={{
        backgroundImage: `url(${sambbg})`,
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-10">
        {/* ✨ Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-gray-900">
            Upcoming Events
          </h2>
          <p className="text-gray-600 text-center mb-12 text-sm sm:text-base">
            Join us for exciting tech events and workshops
          </p>
        </motion.div>

        {/* 🌟 Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-center">
          
          {/* 🎯 LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-start"
          >
            {/* Featured Event */}
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 sm:p-8 w-full sm:w-[90%] md:w-[85%] lg:w-[530px] rounded-2xl shadow-lg relative hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute top-4 right-4">
                <Star className="text-white" fill="white" size={20} />
              </div>
              <span className="bg-white/30 text-sm px-3 py-1 rounded-full mb-3 inline-block">
                Featured Event
              </span>
              <h3 className="text-2xl font-bold mb-2">Kalinga Code Sprint 1.0</h3>
              <p className="text-white/90 mb-4 text-sm sm:text-base">
                A 48-hour hackathon bringing together the best minds in Odisha's tech community.
              </p>

              <div className="flex flex-wrap items-center gap-3 text-sm mb-4">
                <div className="flex items-center gap-1">
                  <Calendar size={16} className="font-bold" /> Dec 15–17, 2024
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={16} /> Bhubaneswar
                </div>
              </div>

              <p className="font-semibold text-2xl sm:text-3xl">Event<br />Started!</p>
              <button className="bg-white text-orange-600 font-semibold px-4 py-2 rounded-md hover:bg-gray-100 transition mt-5 text-sm sm:text-base">
                Register Now
              </button>
            </div>

            {/* Other Events */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="mt-6 space-y-4 w-full sm:w-[90%] md:w-[85%] lg:ml-10"
            >
              <div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer hover:scale-[1.02]">
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                    Tech Talk: Cloud Native Applications
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500">
                    January 20, 2025 • Online
                  </p>
                </div>
                <span className="text-orange-500 text-lg">→</span>
              </div>

              <div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer hover:scale-[1.02]">
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                    Workshop: React & Next.js
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500">
                    February 5, 2025 • Cuttack
                  </p>
                </div>
                <span className="text-orange-500 text-lg">→</span>
              </div>
            </motion.div>
          </motion.div>

          {/* 🖼️ RIGHT SIDE (Image with Glow) */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden w-[90%] sm:w-[400px] md:w-[480px] lg:w-[550px] h-[220px] sm:h-[280px] md:h-[320px] lg:h-[350px]"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl shadow-[0_0_25px_2px_rgba(250,204,21,0.6)] pointer-events-none"></div>

              {/* Image Wrapper */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
                style={{ transformOrigin: "center" }}
              >
                <img
                  src={four}
                  alt="Event"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
