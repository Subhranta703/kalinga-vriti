// src/pages/Founder.jsx

import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Star,
  Award,
  ChevronDown,
  Calendar,
  MapPin,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import bgFounder from "../assets/bg-founder.png"; // <-- ensure this exists

export default function Founder() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    role: "",
    company: "",
    story: "",
    tier: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.story) {
      alert("Please fill name, email and story.");
      return;
    }
    setSubmitting(true);
    // simulate network
    setTimeout(() => {
      alert(
        "Application submitted successfully! We'll review within 48 hours."
      );
      setSubmitting(false);
      setForm({
        fullName: "",
        email: "",
        phone: "",
        linkedin: "",
        role: "",
        company: "",
        story: "",
        tier: "",
      });
    }, 900);
  };

  const toggleFAQ = (idx) => setOpenFAQ(openFAQ === idx ? null : idx);

  const orange = "text-[#B45309]";

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      {/* HERO */}

    <section
      className="relative flex flex-col items-start justify-center text-left text-white h-[90vh] bg-cover bg-center px-6 md:px-20 overflow-hidden"
      style={{ backgroundImage: `url('/bg.png')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent" />

      <div className="relative container mx-auto px-6">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4"
        >
          <motion.span
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#4D1D02] inline-block"
          >
            Your{" "}
          </motion.span>
          <motion.span
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white inline-block"
          >
            STORY
          </motion.span>
          <br />
          <motion.span
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[#4D1D02] inline-block"
          >
            Deserves To Be{" "}
          </motion.span>
          <motion.span
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white inline-block"
          >
            TOLD
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="max-w-3xl text-md sm:text-lg md:text-xl mb-4 text-[#6C020A]"
        >
          Every founder, student, and professor has a remarkable journey. But
          most remain invisible.
        </motion.p>

        {/* Emphasized FOUNDERS WAY line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="max-w-3xl italic text-sm md:text-lg mb-6 text-[#4D1D02]"
        >
          <motion.strong
            animate={{
              scale: [1, 1.1, 1],
              y: [0, -3, 0],
            }}
            transition={{
              duration: 3,
              
              ease: "easeInOut",
            }}
            className="text-white text-xl md:text-2xl inline-block"
          >
            FOUNDERS WAY
          </motion.strong>{" "}
          amplifies your story, builds your brand, and opens doors to investors,
          customers, and opportunities.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-wrap justify-center md:justify-start gap-4 mt-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-6 py-3 rounded-md text-white font-medium shadow-md transition bg-[#E56708]"
          >
            Share Your Story <ArrowRight size={16} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-6 py-3 rounded-md font-medium border-2 border-[#F4C430] text-[#5B2C02] bg-white/80 hover:bg-[#F4C430] hover:text-white transition"
          >
            See Featured Stories
          </motion.button>
        </motion.div>
      </div>
    </section>

      
<section className="py-14 bg-gradient-to-r from-transparent via-[#fffaf5]/70 to-[#fffaf5] text-center overflow-hidden">
  <div className="container mx-auto px-6">
    {/* Top Star Image */}
    <img
      src="/star 2.png"
      alt="decorative star"
      className="w-40 h-20 mx-auto mb-4 object-contain"
    />

    <h2 className="text-[#B45309] text-lg md:text-xl font-medium flex items-center justify-center gap-2">
      The Complete Personal Branding Platform for the Startup Ecosystem
    </h2>

    <div className="w-16 h-[2px] bg-[#E56708] mx-auto rounded mt-3 mb-6" />

    <p className="max-w-4xl mx-auto text-gray-700 text-base md:text-lg leading-relaxed">
      <strong className="text-[#B45309]">FOUNDERS WAY</strong> helps founders, students, and professors share authentic stories, build influential brands, and connect with opportunities.
    </p>

    {/* Feature grid with animations */}
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 text-left">
      {[ 
        {
          title: "Tell your authentic founder journey",
          icon: "pl1.png",
        },
        {
          title: "Build your personal brand and visibility",
          icon: "pl2.png",
        },
        {
          title: "Reach 50,000+ readers",
          icon: "pl3.png",
        },
        {
          title: "Generate speaking opportunities and revenue",
          icon: "pl4.png",
        },
        {
          title: "Connect with investors, customers, and talent",
          icon: "pl5.png",
        },
        {
          title: "Join 100+ ecosystem builders",
          icon: "pl6.png",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-5 rounded-2xl shadow-md p-5 hover:shadow-xl transition border border-gray-100 bg-white/80 backdrop-blur-sm cursor-pointer"
        >
          <div className="min-w-[60px] h-[60px] flex items-center justify-center">
            <img
              src={`/${item.icon}`}
              alt="icon"
              className="w-14 h-14 object-contain"
            />
          </div>
          <p className="text-gray-800 text-sm md:text-base font-medium">
            {item.title}
          </p>
        </motion.div>
      ))}
    </div>

    {/* Bottom Highlight Box */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-3xl mx-auto mt-14 border-2 border-[#E56708] rounded-xl shadow-md py-8 px-6 bg-white/90 backdrop-blur-sm"
    >
      <div className="flex flex-col items-center justify-center">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          src="/star.png"
          alt="star icon"
          className="w-10 h-10 mb-4 object-contain"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-[#7A2D00] italic text-sm md:text-base"
        >
          We publish your story, amplify it everywhere, and help you become a recognized expert.
        </motion.p>
      </div>
    </motion.div>
  </div>
</section>

      <main className="flex-1">
        {/* Section 1 */}
{/* FIVE TYPES OF STORIES SECTION (Full Width + Smooth Infinite Scroll) */}
      <section className="relative h-screen bg-[#fffaf5] flex flex-col justify-center text-center overflow-hidden">
  <div className="container mx-auto px-6">
    {/* Heading */}
    <h2 className="text-[#B45309] text-lg md:text-xl font-medium mb-4">
      Five Types of Stories We Tell
    </h2>
    <div className="w-16 h-[2px] bg-[#E56708] mx-auto rounded mb-10" />

    {/* Infinite Auto Scroll Carousel */}
    <div className="relative w-full overflow-hidden">
      <div className="flex animate-scroll-x gap-10 md:gap-12">
        {[
          {
            title: "Founders",
            desc: "Share your company story, challenges, and vision.",
            img: "founder.png",
            icon: "ifounder.png",
          },
          {
            title: "Students",
            desc: "Share your campus innovations and startup journey.",
            img: "student.png",
            icon: "istudent.png",
          },
          {
            title: "Professors",
            desc: "Share mentorship impact, research, and contributions.",
            img: "professor.png",
            icon: "iprofessor.png",
          },
          {
            title: "Women",
            desc: "Showcase your leadership, ideas, and startup story.",
            img: "women.png",
            icon: "iwomen.png",
          },
          {
            title: "Startups/MSME",
            desc: "Highlight your startup success, impact, and milestones.",
            img: "msme.png",
            icon: "imsme.png",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="min-w-[320px] max-w-[340px] bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all flex-shrink-0"
          >
            <div className="h-44 relative">
              <img
                src={`/${item.img}`}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover rounded-t-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#E56708]/60 to-transparent rounded-t-2xl" />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-md">
                <img
                  src={`/${item.icon}`}
                  alt={`${item.title} icon`}
                  className="w-7 h-7 object-contain"
                />
              </div>
            </div>
            <div className="pt-10 pb-6 px-5">
              <h4 className="font-semibold text-[#7A2D00] text-lg mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}

        {/* Duplicate Slides for Infinite Loop */}
        {[
          {
            title: "Founders",
            desc: "Share your company story, challenges, and vision.",
            img: "founder.png",
            icon: "ifounder.png",
          },
          {
            title: "Students",
            desc: "Share your campus innovations and startup journey.",
            img: "student.png",
            icon: "istudent.png",
          },
          {
            title: "Professors",
            desc: "Share mentorship impact, research, and contributions.",
            img: "professor.png",
            icon: "iprofessor.png",
          },
          {
            title: "Women",
            desc: "Showcase your leadership, ideas, and startup story.",
            img: "women.png",
            icon: "iwomen.png",
          },
          {
            title: "Startups/MSME",
            desc: "Highlight your startup success, impact, and milestones.",
            img: "msme.png",
            icon: "imsme.png",
          },
        ].map((item, i) => (
          <div
            key={`dup-${i}`}
            className="min-w-[320px] max-w-[340px] bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex-shrink-0"
          >
            <div className="h-44 relative">
              <img
                src={`/${item.img}`}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover rounded-t-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#E56708]/60 to-transparent rounded-t-2xl" />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-md">
                <img
                  src={`/${item.icon}`}
                  alt={`${item.title} icon`}
                  className="w-7 h-7 object-contain"
                />
              </div>
            </div>
            <div className="pt-10 pb-6 px-5">
              <h4 className="font-semibold text-[#7A2D00] text-lg mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Animation Styles */}
  <style jsx>{`
    @keyframes scroll-x {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
    .animate-scroll-x {
      display: flex;
      width: max-content;
      animation: scroll-x 40s linear infinite;
    }
  `}</style>
      </section>

        {/* FROM STORY TO SUCCESS - Section */}
          

<section className="relative bg-white pt-10 md:pt-20 pb-20 overflow-hidden">
  {/* Wave divider at top */}
  <img
    src="/wave.png"
    alt="wave divider"
    className="absolute top-12 left-0 w-full pointer-events-none -translate-y-1/2"
  />

  <div className="container mx-auto px-6 relative z-10">
    {/* Small badge */}
    <div className="flex justify-center">
      <div className="inline-block px-3 py-1 text-xs rounded-full border border-[#F5DCC0] bg-white/90 text-[#7A2D00] font-medium">
        Simple Process
      </div>
    </div>

    {/* Heading */}
    <h3 className="text-center mt-4 text-[#7A2D00] text-lg md:text-xl font-medium">
      From Story to Success in 4 Weeks
    </h3>

    <div className="w-20 h-[3px] bg-[#E56708] rounded mx-auto mt-4 mb-10" />

    {/* Cards row */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
      {[
        {
          step: "01",
          img: "/step1.png",
          title: "Apply",
          short: "Simple form, reviewed in 48 hrs",
          long: "Submit your application in minutes, and our team reviews it within 48 hours.",
        },
        {
          step: "02",
          img: "/step2.png",
          title: "Story Coaching",
          short: "Personalized 60-min call",
          long: "Our editorial experts help shape your story’s core message and tone during a 1-hour session.",
        },
        {
          step: "03",
          img: "/step3.png",
          title: "Write & Edit",
          short: "2–3 feedback rounds",
          long: "Collaborate with our editors through two to three review rounds to finalize your story.",
        },
        {
          step: "04",
          img: "/step4.png",
          title: "Publish & Amplify",
          short: "50K+ reach",
          long: "Your story goes live and is promoted across social channels, newsletters, and partner networks.",
        },
      ].map((c, i) => (
        <motion.div
          key={c.step}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          whileHover={{ scale: 1.05, y: -6 }}
          className="relative group bg-white rounded-2xl border border-[#fde6c8] shadow-sm hover:shadow-lg transition-transform aspect-square max-w-[230px] mx-auto flex flex-col justify-center items-center p-5 cursor-pointer"
        >
          {/* Step badge */}
          <div className="absolute -top-3 right-4 w-10 h-10 rounded-full bg-gradient-to-b from-[#ff9a2a] to-[#e56708] flex items-center justify-center text-white font-semibold shadow-md">
            {c.step}
          </div>

          {/* Icon */}
          <div className="w-14 h-14 mb-3 flex items-center justify-center">
            <img src={c.img} alt={c.title} className="w-12 h-12 object-contain" />
          </div>

          {/* Title and short desc inside card */}
          <h4 className="text-center text-[#7A2D00] font-semibold text-base mb-1">
            {c.title}
          </h4>
          <p className="text-center text-gray-600 text-xs leading-snug max-w-[90%]">
            {c.short}
          </p>

          {/* Tooltip (detailed info) */}
          <div className="absolute bottom-[110%] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300">
            <div className="bg-[#E56708] text-white text-xs font-medium px-3 py-2 rounded-lg shadow-lg w-44 text-center">
              {c.long}
            </div>
            <div className="mx-auto w-3 h-3 bg-[#E56708] rotate-45 mt-1"></div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Bottom highlight box */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="max-w-4xl mx-auto mt-12"
    >
      <div className="border-2 border-[#E56708] rounded-2xl bg-white p-6 md:p-8 shadow-xl flex items-center gap-4">
        <img src="/star.png" alt="star" className="w-8 h-8" />
        <div className="text-[#7A2D00] italic text-sm md:text-base">
          <span className="font-semibold text-[#D05A00]">Ongoing:</span> Opportunities flow (Speaking invitations, investor connections, media features, consulting offers.)
        </div>
      </div>
    </motion.div>
  </div>

  {/* Wave adjustment for small screens */}
  <style>{`
    @media (max-width: 640px) {
      img[alt="wave divider"] {
        transform: translateY(-30%);
      }
    }
  `}</style>
</section>




        {/* COMPLETE PERSONAL BRANDING PACKAGE SECTION */}


<section className="relative py-16 bg-gradient-to-b from-[#fffaf5] to-white text-center overflow-hidden">
  {/* Decorative radial gradient background */}
  <div className="absolute inset-0">
    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-b from-[#FDEDD2]/50 to-transparent rounded-full blur-3xl opacity-50" />
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#F9D8B8]/40 rounded-full blur-3xl opacity-50" />
  </div>

  <div className="container mx-auto px-6 relative z-10">
    {/* Heading with animation */}
    <motion.h3
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-[#7A2D00] text-lg md:text-xl font-medium"
    >
      Complete Personal Branding Package
    </motion.h3>
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      className="w-20 h-[3px] bg-[#E56708] mx-auto rounded mt-3 mb-10 origin-center"
    />

    {/* Animated Feature Grid */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.15 },
        },
      }}
      className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto text-left"
    >
      {[
        "Published story (1,500–2,000 words, edited)",
        "Multi-platform amplification (LinkedIn, Twitter, Instagram, Newsletter)",
        "Personal profile page (SEO optimized)",
        "Community access (Slack/Discord + meetups)",
        "Speaking & investor opportunities",
      ].map((item, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.03, rotate: 0.3 }}
          className="flex items-center gap-4 border border-[#F5C58A] bg-white rounded-lg p-4 shadow-sm hover:shadow-lg transition cursor-default relative overflow-hidden"
        >
          {/* Subtle animated gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FDE7C5]/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />

          {/* Animated Check Icon */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-[#F47C20] to-[#E56708] flex items-center justify-center text-white font-bold text-sm shadow-md"
          >
            ✓
          </motion.div>

          {/* Text */}
          <p className="text-gray-700 text-sm md:text-base font-medium z-10">
            {item}
          </p>
        </motion.div>
      ))}
    </motion.div>

    {/* Decorative floating shapes (optional aesthetic accent) */}
    <motion.img
      src="/star.png"
      alt="decorative accent"
      className="absolute top-20 left-8 w-6 h-6 opacity-70"
      animate={{
        y: [0, -10, 0],
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.img
      src="/star.png"
      alt="decorative accent"
      className="absolute bottom-24 right-10 w-5 h-5 opacity-60 rotate-45"
      animate={{
        y: [0, 10, 0],
      }}
      transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
</section>



        {/* READY TO SHARE YOUR STORY SECTION */}
<section className="py-20 bg-gradient-to-b from-[#fffaf5] to-white text-center">
  <div className="container mx-auto px-6">
    {/* Badge */}
    <div className="inline-block bg-[#fff2df] text-[#E56708] text-xs px-3 py-1 rounded-full font-medium mb-4">
      ✦ Start Your Journey
    </div>

    {/* Heading */}
    <h3 className="text-[#7A2D00] text-lg md:text-xl font-medium mb-2">
      Ready to Share Your Story?
    </h3>
    <div className="w-16 h-[3px] bg-[#E56708] mx-auto rounded mt-2 mb-4" />
    <p className="text-gray-600 text-sm md:text-base mb-10">
      Fill out the form below and we’ll review your application within{" "}
      <span className="text-[#E56708] font-medium">48 hours</span>.
    </p>

    {/* Form Card */}
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 relative border border-[#fce7c6]">
      {/* Gradient border top */}
      <div className="absolute top-0 left-0 right-0 h-2 rounded-t-2xl bg-gradient-to-r from-[#f4c430] to-[#E56708]" />

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {/* Full Name */}
        <div className="flex flex-col text-left">
          <label className="text-sm text-gray-700 mb-1 font-medium">Full Name *</label>
          <input
            type="text"
            placeholder="Your full name"
            className="p-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-[#f4c430]/40 outline-none"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col text-left">
          <label className="text-sm text-gray-700 mb-1 font-medium">Email *</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="p-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-[#f4c430]/40 outline-none"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col text-left">
          <label className="text-sm text-gray-700 mb-1 font-medium">Phone *</label>
          <input
            type="text"
            placeholder="Your phone number"
            className="p-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-[#f4c430]/40 outline-none"
          />
        </div>

        {/* LinkedIn */}
        <div className="flex flex-col text-left">
          <label className="text-sm text-gray-700 mb-1 font-medium">LinkedIn Profile *</label>
          <input
            type="url"
            placeholder="https://linkedin.com/in/username"
            className="p-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-[#f4c430]/40 outline-none"
          />
        </div>

        {/* Role */}
        <div className="flex flex-col text-left">
          <label className="text-sm text-gray-700 mb-1 font-medium">Role *</label>
          <select className="p-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-[#f4c430]/40 outline-none text-gray-600">
            <option>Select your role</option>
            <option>Founder</option>
            <option>Student</option>
            <option>Professor</option>
          </select>
        </div>

        {/* Company */}
        <div className="flex flex-col text-left">
          <label className="text-sm text-gray-700 mb-1 font-medium">Company/University *</label>
          <input
            type="text"
            placeholder="Your organization name"
            className="p-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-[#f4c430]/40 outline-none"
          />
        </div>

        {/* Story Brief */}
        <div className="flex flex-col text-left md:col-span-2">
          <label className="text-sm text-gray-700 mb-1 font-medium">
            Your Story Brief (100 words) *
          </label>
          <textarea
            rows="4"
            placeholder="Tell us about your journey, achievements, and what makes your story unique..."
            className="p-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-[#f4c430]/40 outline-none resize-none"
          ></textarea>
        </div>

        {/* Membership Tier */}
        <div className="flex flex-col text-left md:col-span-2">
          <label className="text-sm text-gray-700 mb-1 font-medium">
            Preferred Membership Tier *
          </label>
          <select className="p-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-[#f4c430]/40 outline-none text-gray-600">
            <option>Select membership tier</option>
            <option>Founding Member (Free)</option>
            <option>Community — ₹3,000 / month</option>
            <option>Premium — ₹20,000 / month</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-center mt-4">
          <button
            type="submit"
            className="w-full md:w-auto px-10 py-3 bg-gradient-to-r from-[#f4c430] to-[#E56708] text-white font-medium rounded-md shadow-md hover:shadow-lg transition flex items-center justify-center gap-2"
          >
            Submit Application →
          </button>
        </div>
      </form>
    </div>
  </div>
</section>


        {/* FAQ SECTION */}
        <section className="py-16 bg-gradient-to-b from-[#fffaf5] to-[#fff]">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <span className="inline-block text-sm bg-[#fff2df] text-[#B45309] px-3 py-1 rounded-full mb-3">
              FAQs
            </span>
            <h3 className={`${orange} text-xl font-semibold mb-8`}>
              Quick Answers
            </h3>

            {[
              {
                q: "Who can apply?",
                a: "Any founder, student, or professor with a story to tell about innovation, impact, or learning can apply.",
              },
              {
                q: "How long does publication take?",
                a: "Our editorial process typically takes 3–4 weeks from application to publication.",
              },
              {
                q: "Do I need to be a writer?",
                a: "No — our editorial team helps shape and polish your story.",
              },
              {
                q: "What if I have an early stage startup?",
                a: "Perfect — we specifically support early innovators and founders.",
              },
              {
                q: "What does it cost?",
                a: "Founding membership is free. Paid tiers provide amplified reach and perks.",
              },
              {
                q: "What kind of results can I expect?",
                a: "More visibility, invitations to speak, investor intros and partnership opportunities.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="border border-[#fde1b0] rounded-xl bg-white mb-3 shadow-sm text-left overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex justify-between items-center px-5 py-4 text-[#5b2c02] font-medium"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[#E56708] text-lg">●</span> {f.q}
                  </span>
                  <ChevronDown
                    className={`transition-transform ${
                      openFAQ === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFAQ === i && (
                  <div className="px-6 pb-4 text-gray-600 text-sm">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* DARK CTA STRIP */}
        <section className="bg-[#0f172a] text-white py-12">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="text-2xl font-semibold mb-2">
                Your Story. Your Platform. Your Success.
              </div>
              <div className="text-gray-300 mb-6">
                Join 100+ ecosystem builders telling their stories.
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button className="px-6 py-3 bg-[#E56708] rounded-full shadow hover:bg-[#d65500] transition flex items-center gap-2">
                  Share Your Story
                </button>
                <button className="px-6 py-3 bg-transparent rounded-full border border-[#F4C430] text-[#F4C430] hover:bg-[#F4C430] hover:text-white transition">
                  Join Community
                </button>
                <button className="px-6 py-3 bg-transparent rounded-full border border-[#F4C430] text-[#F4C430] hover:bg-[#F4C430] hover:text-white transition">
                  Attend Event
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
      </main>
    </div>
  );
}
