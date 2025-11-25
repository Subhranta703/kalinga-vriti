import React from "react";
import { motion } from "framer-motion";
import mail from "../assets/mail.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import api from "../api/api";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactUs() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const data = Object.fromEntries(form.entries());

    try {
      const res = await api.post("/api/auth/contact", data);
      alert("Message sent successfully!");
      e.target.reset();
    } catch (err) {
      console.log(err);
      alert("Failed to send message.");
    }
  };

  return (
    <div className="w-full bg-gradient-to-l from-[#bca482] to-[#cdbeb5] py-16 px-6">
      <motion.div
        className="max-w-6xl mx-auto mb-12"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
      >
        <motion.div className="mb-8" variants={fadeUp}>
          <span className="px-4 py-1 border-2 bg-white hover:bg-orange-400 font-bold hover:text-white cursor-pointer border-orange-400 text-black rounded-full text-xs tracking-wide">
            🛑 CONNECT & INQUIRIES
          </span>
        </motion.div>

        <motion.h2
          className="text-4xl sm:text-7xl font-semibold text-gray-900 mb-8"
          variants={fadeUp}
          transition={{ delay: 0.1 }}
        >
          Get in Touch
        </motion.h2>

        <motion.p
          className="text-white max-w-2xl"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
        >
          Connect with our team for collaboration, corporate partnership,
          <br /> or technical support.
        </motion.p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Card */}
        <motion.div
          className="bg-orange-500 text-white p-8 rounded-xl shadow-lg pt-24"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-3">Get in touch</h3>
          <p className="text-sm mb-4">
            We’re here to answer your questions and explore opportunities
            together.
          </p>

          {/* Email */}
          <motion.div
            className="flex items-center gap-3 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <img src={mail} className="h-5 w-5" />
            <a href="mailto:info@kalingavriti.in">info@kalingavriti.in</a>
          </motion.div>

          {/* Social */}
          <h4 className="text-2xl font-semibold mb-2">Join us on social.</h4>
          <p className="text-sm mb-4">
            Be part of the journey. Follow us for insights, news, and progress.
          </p>

          <div className="flex gap-4 text-xl">
            {[linkedin, twitter, facebook, instagram].map((icon, i) => (
              <motion.img
                key={i}
                src={icon}
                className="h-6 w-6 cursor-pointer"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.div
          className="bg-white p-8 rounded-xl shadow-lg"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold mb-4">Enter Details</h3>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="border p-3 rounded-md w-full"
                whileFocus={{ scale: 1.02 }}
              />
              <motion.input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="border p-3 rounded-md w-full"
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <motion.input
              type="text"
              name="phone"
              placeholder="Phone"
              required
              className="border p-3 rounded-md w-full"
              whileFocus={{ scale: 1.02 }}
            />

            <motion.textarea
              name="message"
              placeholder="Message"
              rows="4"
              required
              className="border p-3 rounded-md w-full"
              whileFocus={{ scale: 1.02 }}
            ></motion.textarea>

            <motion.button
              className="bg-orange-500 text-white px-6 py-2 rounded-md w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
