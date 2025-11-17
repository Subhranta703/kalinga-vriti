import React, { useState } from "react";
import { motion } from "framer-motion";
import leaf from "../assets/leaf.png";
import cal from "../assets/cal.png";
import bulb from "../assets/bulb.png";
import sidechakra from "../assets/sidechakra.png";
import downchakra from "../assets/downchakra.png"
const Whatwedo = () => {
  const [works] = useState([
    {
      img: bulb,
      title: "Thought Leadership",
      description:
        "Sharing insights, trends, and innovations in technology through our blog and community discussions.",
    },
    {
      img: cal,
      title: "Community Events",
      description:
        "Organizing workshops, hackathons, and networking events to bring tech enthusiasts together.",
    },
    {
      img: leaf,
      title: "Ecosystem Growth",
      description:
        "Fostering innovation and supporting startups to build a thriving tech ecosystem in Odisha.",
    },
    {
      img: bulb,
      title: "Founders Way",
      description:
        "A journey from idea to impact – where innovators, dreamers, and doers find their path to build the next big thing.",
    },
    {
      img: cal,
      title: "University Partnership",
      description:
        "Engaging universities in dynamic collaborations – from coding hackathons to career networking – shaping future-ready talent.",
    },
  ]);

  return (
    <section className="relative text-center py-16 px-6 sm:px-10 overflow-hidden">
      {/* 🌸 Floating background image */}
      <motion.img
        src={sidechakra}
        alt="Decor"
        className="absolute right-0 top-10 w-40 md:w-56 opacity-50"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
 < img
    src={downchakra}
    alt="down Chakra"
    className="absolute top-0 right-0 w-36 h-36 md:w-72 md:h-72  z-0  "
    />
      {/* Title */}
      <motion.h1
        className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        What We Do
      </motion.h1>

      <motion.p
        className="text-gray-600 mb-10 text-sm sm:text-base"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        Empowering Odisha's tech ecosystem through community, knowledge, and
        <br className="hidden sm:block" />
        innovation
      </motion.p>

      {/* 🔶 First Row */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-9"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {works.slice(0, 3).map((work, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col justify-between h-64 rounded-xl shadow-md p-8 text-left bg-amber-100/80 backdrop-blur-sm hover:shadow-xl transition transform"
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <div>
              <img
                src={work.img}
                alt={work.title}
                className="h-10 mb-3 bg-gradient-to-r from-yellow-500 to-orange-500 px-3 py-2 rounded-md"
              />
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {work.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {work.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* 🔶 Second Row */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {works.slice(3, 5).map((work, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col justify-between h-64 rounded-xl shadow-md px-8 py-8 text-left backdrop-blur-sm hover:shadow-xl transition bg-amber-100/80"
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <div>
              <img
                src={work.img}
                alt={work.title}
                className="h-10 mb-3 bg-gradient-to-r from-yellow-500 to-orange-500 px-3 py-2 rounded-md"
              />
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {work.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {work.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Whatwedo;
