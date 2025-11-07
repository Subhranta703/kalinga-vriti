import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import upchakra from "../assets/upchakra.png"

export default function FeaturedContent() {
  const articles = [
    {
      category: "AI & Machine Learning",
      categoryColor: "text-orange-600 bg-orange-50",
      title: "The Future of AI in Odisha's Tech Landscape",
      description:
        "Exploring how artificial intelligence is shaping the future of technology in our state...",
      image: one,
      link: "#",
    },
    {
      category: "Startups",
      categoryColor: "text-orange-600 bg-orange-50",
      title: "Building Successful Startups in Tier-2 Cities",
      description:
        "Success stories and strategies from Odisha's emerging startup ecosystem...",
      image: two,
      link: "#",
    },
    {
      category: "Community",
      categoryColor: "text-purple-600 bg-purple-50",
      title: "Building Strong Tech Communities",
      description:
        "Learn how we're fostering collaboration and growth in Odisha's tech community...",
      image: three,
      link: "#",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-16 px-6 overflow-hidden relative">
      <div className="max-w-6xl mx-auto  ">
        {/* 🧭 Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Featured Content
          </h2>
          <p className="text-gray-600">
            Latest insights from our tech community
          </p>
        </motion.div>

        {/* 🪄 Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {articles.map((article, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform z-10"
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              {/* 🖼️ Image with subtle parallax */}
              <motion.div
                className="h-48 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* 📄 Content */}
              <div className="p-6">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${article.categoryColor}`}
                >
                  {article.category}
                </span>

                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {article.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {article.description}
                </p>

                {/* Read More */}
                <motion.a
                  href={article.link}
                  className="inline-flex items-center text-orange-600 font-semibold text-sm hover:text-orange-700 transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  Read More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      <img
  src={upchakra}
  alt="down Chakra"
  className="absolute bottom-0 left-0 w-64 h-64 md:w-80 md:h-80  z-0"
/>

      </div>
    </section>
  );
}
