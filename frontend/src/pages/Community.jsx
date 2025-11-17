import React from "react";
import { motion } from "framer-motion";
import communitybg from "../assets/communitybg.png";
import wp from "../assets/wp.png";
import fire from "../assets/fire.png";
import mail from "../assets/mail.png";
import roundedpeople from "../assets/roundedpeople.png";
import roundedcal from "../assets/roundedcal.png";
import roundedjob from "../assets/roundedjob.png";
import roundedhand from "../assets/roundedhand.png";

import roundedwp from "../assets/roundedwp.png";
import roundedlinkedin from "../assets/roundedlinkedin.png";
import roundedmail from "../assets/roundedmail.png";

import heart from "../assets/heart.png";
import integrity from "../assets/integrity.png";
import inclusivity from "../assets/inclusivity.png";

export default function Community() {
  return (
    <div className="text-gray-800 overflow-hidden">
      {/* HERO SECTION */}
     <section
  className="relative bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-center py-20 px-6 space-y-8"
  style={{
    backgroundImage: `url(${communitybg})`,
  }}
>
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/80 to-orange-600/70"></div>

        <div className="relative z-10 flex flex-col items-center space-y-8">
          {/* Active Members */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-white rounded-lg flex items-center gap-2 px-4 py-2 shadow"
          >
            <img src={fire} alt="Active Members" className="w-6 h-6" />
            <h1 className="text-gray-800 font-medium">1,000+ Active Members</h1>
          </motion.button>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="px-2"
          >
            <h1 className="text-orange-400 text-4xl sm:text-5xl font-bold font-serif my-4">
              Connect with 1,000+ Tech
            </h1>
            <h1 className="text-yellow-400 text-4xl sm:text-5xl font-bold font-serif mb-6">
              Professionals in Odisha
            </h1>
            <p className="font-sans text-sm sm:text-base text-white leading-relaxed">
              Join a growing community of founders, developers, and innovators <br className="hidden sm:block" />
              building Odisha's tech future.
            </p>
          </motion.div>

          {/* Join Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-yellow-500 rounded-lg flex items-center gap-2 px-5 py-2 hover:bg-yellow-600 transition"
            >
              <img src={wp} alt="WhatsApp" className="w-5 h-5" />
              <h2 className="text-white">Join Our WhatsApp</h2>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="border-2 border-white rounded-lg flex items-center gap-2 px-5 py-2 hover:bg-white/10 transition"
            >
              <img src={mail} alt="Mail" className="w-5 h-5" />
              <h2 className="text-white">Subscribe to Weekly Wrap</h2>
            </motion.button>
          </div>
        </div>
      </section>

      {/* COMMUNITY BENEFITS */}
      <section className="py-20 bg-white text-center px-6 sm:px-10 md:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-gray-800 mb-4"
          >
            Community Benefits
          </motion.h2>
          <p className="text-gray-600 mb-12 max-w-xl mx-auto">
            Discover the advantages of being part of Odisha’s most vibrant tech community.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: roundedpeople,
                title: "Mentorship",
                text: "Connect with experienced professionals and get guidance for your tech journey.",
              },
              {
                icon: roundedcal,
                title: "Events",
                text: "Attend exclusive workshops, hackathons, and networking events in Odisha.",
              },
              {
                icon: roundedjob,
                title: "Job Opportunities",
                text: "Access exclusive job postings and career opportunities in the region.",
              },
              {
                icon: roundedhand,
                title: "Collaboration",
                text: "Find co-founders, team members, and collaborators for your next project.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-yellow-100/80 border-2 border-yellow-400 rounded-xl shadow-md transition-all duration-300 p-8 flex flex-col items-start text-left"
              >
                <img src={item.icon} alt={item.title} className="mb-4 w-16 h-16" />
                <h4 className="text-xl font-bold mb-4 ml-1 text-orange-900">
                  {item.title}
                </h4>
                <p className="text-sm text-orange-700 ml-1 font-medium leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WAYS TO CONNECT */}
      <section className="py-20 bg-gradient-to-b from-orange-100 to-orange-200 text-center px-6 sm:px-10 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-orange-800 mb-4">Ways to Connect</h2>
          <p className="text-orange-700 mb-12">
            Choose how you want to stay connected with our community.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: roundedwp,
                title: "WhatsApp Community",
                text: "Join our active WhatsApp group for daily discussions, quick help, and instant updates.",
                btn: "Join WhatsApp",
              },
              {
                icon: roundedlinkedin,
                title: "LinkedIn Group",
                text: "Connect professionally, share opportunities, and build your network on LinkedIn.",
                btn: "Join LinkedIn",
              },
              {
                icon: roundedmail,
                title: "Weekly Newsletter",
                text: "Get curated tech news, events, and opportunities delivered to your inbox weekly.",
                btn: "Subscribe",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-md border hover:shadow-lg transition-all"
              >
                <img src={card.icon} alt={card.title} className="mx-auto mb-3 w-16 h-16" />
                <h4 className="text-xl font-bold mb-2 text-orange-800">{card.title}</h4>
                <p className="text-sm mb-5 text-orange-700 font-normal leading-relaxed">
                  {card.text}
                </p>
                <button className="px-5 py-2 bg-amber-500 text-white rounded-full font-medium hover:bg-yellow-600 transition">
                  {card.btn}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY GUIDELINES */}
      <section className="py-20 bg-white text-center px-6 sm:px-10 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-orange-800 mb-4">Community Guidelines</h2>
          <p className="text-orange-700 mb-12">
            Our values that make this community special.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: heart,
                title: "Respect",
                text: "Treat every member with dignity and respect, regardless of background.",
              },
              {
                icon: inclusivity,
                title: "Inclusivity",
                text: "Welcome everyone and create an environment where all voices are heard.",
              },
              {
                icon: integrity,
                title: "Integrity",
                text: "Share knowledge honestly and maintain professional standards.",
              },
              {
                icon: integrity,
                title: "Resilience",
                text: "See every challenge as a chance to learn, adapt, and grow together.",
              },
            ].map((g, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-yellow-50 shadow hover:shadow-lg transition"
              >
                <img
                  src={g.icon}
                  alt={g.title}
                  className="mx-auto mb-3 w-14 h-14 bg-amber-500 rounded-full p-4"
                />
                <h4 className="font-bold mb-1 text-orange-800 text-xl">{g.title}</h4>
                <p className="text-sm text-orange-700 leading-relaxed">{g.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WEEKLY WRAP */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-orange-400/90 to-yellow-400/90 py-20 text-center text-white px-6 sm:px-10 md:px-20"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            The Weekly Wrap: Odisha’s Tech <br className="hidden sm:block" /> Digest
          </h2>
          <p className="max-w-xl mx-auto mb-8 text-yellow-100 leading-relaxed">
            Stay updated with the latest tech news, events, job opportunities, and community highlights from Odisha’s growing tech ecosystem.
          </p>
          <form className="max-w-md mx-auto flex flex-col bg-white/10 p-6 rounded-md shadow">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <input
                type="email"
                placeholder="Enter your email address"
                className="rounded-full flex-1 px-4 py-3 text-gray-700 text-sm outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-yellow-900 hover:bg-yellow-700 text-white px-6 py-3 font-medium transition"
              >
                Subscribe Now
              </button>
            </div>
            <p className="text-sm text-yellow-100 mt-4">
              Join 500+ subscribers. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </motion.section>
    </div>
  );
}
