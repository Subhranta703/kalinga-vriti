import React, { useState } from "react";
import { Calendar, MapPin, Users, Award, Clock } from "lucide-react";
import { motion } from "framer-motion";
import star from "../assets/star.png";
import event1 from "../assets/event1.png";
import event2 from "../assets/event2.png";
import event3 from "../assets/event3.png";

export default function Events() {
  const upcomingEvents = [
    {
      type: "Meetup",
      color: "text-yellow-500",
      border: "border-yellow-400",
      title: "Founder Meetup #1",
      date: "November 15, 2025",
      location: "O-Hub, Bhubaneswar",
      description: "Free community networking event for founders and developers.",
      buttonText: "Reserve Spot",
      buttonColor: "bg-yellow-400 hover:bg-yellow-500",
    },
    {
      type: "Workshop",
      color: "text-orange-500",
      border: "border-orange-400",
      title: "React Best Practices",
      date: "November 22, 2025",
      location: "KIIT Innovation Cell",
      description: "Hands-on coding workshop led by industry experts.",
      buttonText: "Register Now",
      buttonColor: "bg-orange-400 hover:bg-orange-500",
    },
    {
      type: "Panel",
      color: "text-red-500",
      border: "border-red-400",
      title: "Building in Tier 2 Cities",
      date: "December 5, 2025",
      location: "IIT Bhubaneswar",
      description: "A conversation with Odisha's leading founders and investors.",
      buttonText: "Join Discussion",
      buttonColor: "bg-red-500 hover:bg-red-600",
    },
    {
      type: "Networking",
      color: "text-yellow-600",
      border: "border-yellow-400",
      title: "Year-End Mixer",
      date: "December 15, 2025",
      location: "The Presidency Lounge",
      description: "Celebrate a year of innovation with Odisha's top tech minds.",
      buttonText: "Attend Mixer",
      buttonColor: "bg-yellow-500 hover:bg-yellow-600",
    },
  ];

  const events = [
    { date: 15, type: "Meetup" },
    { date: 12, type: "Workshop" },
  ];

  const categories = ["All", "Hackathons", "Meetups", "Workshops", "Panels"];
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="font-sans overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-yellow-400 to-orange-300 py-16 px-6 flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left  "
        >
          <h1 className="text-4xl md:text-7xl font-bold leading-tight">
            Where Odisha's{" "}
            <span className="text-orange-700">Tech Community</span> Connects
          </h1>
          <p className="text-gray-700 mt-14 text-lg">
            From hackathons to meetups, discover events that power <br className="hidden md:block" />
            Odisha's innovation movement.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg shadow transition-all">
              Explore Events
            </button>
            <button className="px-6 py-2 border-2 border-orange-400 text-orange-700 font-medium rounded-lg hover:bg-yellow-100 transition-all">
              Join Community
            </button>
          </div>
        </motion.div>

        {/* Right Side Featured Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-lg border border-yellow-500 rounded-2xl p-8 w-full md:w-1/3"
        >
          <h1 className="text-black font-bold text-2xl mb-1 text-center">
            Kalinga Code Sprint 1.0
          </h1>
          <p className="text-red-600 font-semibold mb-4 text-center">
            Featured Event
          </p>

          {/* Event Details */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
              <li className="flex items-center gap-2">
                <Calendar size={18} className="text-yellow-500" /> January 4-5, 2026
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-yellow-500" /> O-Hub, Bhubaneswar
              </li>
              <li className="flex items-center gap-2">
                <Users size={18} className="text-yellow-500" /> 100 participants
              </li>
              <li className="flex items-center gap-2">
                <Award size={18} className="text-yellow-500" /> 2 Lakh in prizes
              </li>
              <li className="flex items-center gap-2">
                <Clock size={18} className="text-yellow-500" /> 24-hour hackathon
              </li>
            </ul>

            {/* Star Badge */}
            <div
              className="h-24 w-24 flex flex-col bg-orange-100 items-center justify-center text-center rounded-full text-sm font-semibold border-4 border-yellow-300 shadow-md"
              style={{
                backgroundImage: `url(${star})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              3 Lakh <br />
              <p className="text-red-600">Prize Money</p>
            </div>
          </div>

          {/* Countdown Section */}
          <div className="flex justify-center mt-8">
            <ul className="flex flex-wrap gap-4 text-center">
              {[
                { time: "45", label: "Days" },
                { time: "12", label: "Hours" },
                { time: "30", label: "Minutes" },
                { time: "15", label: "Seconds" },
              ].map((t, i) => (
                <li
                  key={i}
                  className="bg-yellow-100 text-yellow-800 px-4 py-3 rounded-lg font-semibold shadow-sm min-w-[70px]"
                >
                  {t.time}
                  <br />
                  <span className="text-sm font-normal">{t.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Register Button */}
          <div className="mt-8">
            <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-3 font-semibold rounded-lg shadow-md transition-all">
              Register Now
            </button>
          </div>
        </motion.div>
        {/* upcoming events.. */}
      </section>
<motion.section  
className="py-16 bg-gradient-to-r from-yellow-200 to-white text-center">
      <h2 className="text-3xl font-semibold mb-2">Upcoming Events</h2>
<p className="text-gray-400 mb-20">Join Odisha's most exciting tech gatherings</p>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 mb-24">
          {upcomingEvents.map((ev, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: i * 0.2, // 👈 staggered delay per card
              ease: "easeOut",
            }}
            className={`bg-white rounded-2xl shadow-md p-6 border-l-4 ${ev.border} hover:shadow-lg transition-all`}
          >
            {/* Event Header */}
            <div className={`text-sm font-semibold flex items-center gap-2  ${ev.color}`}>
              <span className="h-2 w-2 rounded-full bg-current "></span>
              {ev.type}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 mt-2 flex">{ev.title}</h3>

           

            {/* Date & Location */}
            <div className="flex items-center text-gray-600 text-sm mt-3 gap-2">
              <Calendar className={`h-4 w-4 ${ev.color} `} />
              <span >{ev.date}</span>
            </div>
            <div className="flex items-center text-gray-600 text-sm mt-1 gap-2">
              <MapPin className={`h-4 w-4 ${ev.color} `} />
              <span>{ev.location}</span>
            </div>
  {/* Details */}
            <div className="text-gray-600 text-sm mt-3 leading-relaxed">
              {ev.description}
            </div>
            {/* Button */}
            <button
              className={`mt-5 w-full py-2 text-white rounded-md font-medium ${ev.buttonColor} transition`}
            >
              {ev.buttonText}
            </button>
          </motion.div>
        ))}
      </div>
    </motion.section>
      {/* EVENT CALENDAR */}
      <section className="bg-gradient-to-r from-orange-200 to-yellow-100 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-2">Event Calendar</h2>
        <p className="text-gray-600 mb-8">
          Plan your tech journey with our comprehensive calendar
        </p>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-10">
          <div className="flex bg-white rounded-full shadow-md p-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 text-sm font-medium rounded-full transition-all ${
                  activeCategory === cat
                    ? "bg-yellow-400 text-white shadow-sm"
                    : "text-gray-600 hover:text-yellow-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Calendar */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 overflow-x-auto">
          <div className="grid grid-cols-7 text-gray-700 mb-6 min-w-[600px]">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="font-medium text-gray-500 text-sm uppercase">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-6 text-gray-700 text-lg min-w-[600px]">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i}></div>
            ))}
            {Array.from({ length: 30 }, (_, i) => {
              const day = i + 1;
              const event = events.find((e) => e.date === day);
              return (
                <motion.div
                  key={day}
                  whileHover={{ scale: 1.1 }}
                  className={`relative flex items-center justify-center h-16 w-16 mx-auto rounded-xl transition-all ${
                    event
                      ? "bg-yellow-400 text-white font-semibold"
                      : "hover:bg-yellow-100"
                  }`}
                >
                  {day}
                  {event && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full"></span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PAST EVENTS */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-2">Past Events Highlights</h2>
        <p className="mb-8 text-gray-600">Celebrating our community's achievements</p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {[event1, event2, event3].map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl bg-white"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={img}
                  alt={`Past Event ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">
                  {i === 0
                    ? "Startup Summit 2024"
                    : i === 1
                    ? "AI Bootcamp"
                    : "DevConnect 2024"}
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  {i === 0
                    ? "A celebration of innovation in Odisha."
                    : i === 1
                    ? "Exploring the future of machine learning."
                    : "Building strong networks among developers."}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
