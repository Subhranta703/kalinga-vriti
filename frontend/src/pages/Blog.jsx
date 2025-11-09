import React, { useState } from "react";
import cal from "../assets/cal.png";
import human from "../assets/human.png";
import bloga from "../assets/bloga.png";
import blogb from "../assets/blogb.png";
import blogc from "../assets/blogc.png";
import blogd from "../assets/blogd.png";
import blackcal from '../assets/blackcal.png'
import tech from '../assets/tech.png'
import eco from '../assets/eco.png'
import career from '../assets/career.png'
import rocket from '../assets/rocket.png'
export default function OdishaTechEcosystem() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const blogs = [
    {
      category: "Tech & Innovation",
      categoryColor: "text-blue-600 bg-blue-50",
      readTime: "3 min read",
      title: "5 Technologies Every Odisha Startup Should Adopt in 2026",
      description:
        "From AI to blockchain, explore emerging technologies giving startups a competitive edge in Odisha's growing tech scene.",
      author: "Priya Sharma",
      image: bloga,
    },
    {
      category: "Career & Growth",
      categoryColor: "text-green-600 bg-green-50",
      readTime: "7 min read",
      title: "From Campus to CTO: The Journey of a Bhubaneswar Developer",
      description:
        "Ankit’s inspiring journey from computer science student to tech leader in a fast-growing startup.",
      author: "Ankit Kumar",
      image: blogb,
    },
    {
      category: "Ecosystem Updates",
      categoryColor: "text-purple-600 bg-purple-50",
      readTime: "4 min read",
      title: "New Startup Odisha Policies Every Founder Should Know",
      description:
        "Stay updated on new government initiatives and policy changes that can benefit your startup journey.",
      author: "Meera Patel",
      image: blogc,
    },
    {
      category: "Event Chronicles",
      categoryColor: "text-orange-600 bg-orange-50",
      readTime: "6 min read",
      title: "Kalinga Code Sprint 1.0 — What We Learned",
      description:
        "Highlights from Odisha’s biggest coding competition that brought together the state’s brightest minds.",
      author: "Vikash Nayak",
      image: blogd,
    },
  ];

  return (
    <div className="min-h-screen bg-orange-50">
      {/* 🌟 Hero Section */}
      <div className="bg-gradient-to-br from-amber-100 to-orange-100 px-6 py-36">
        <div className="max-w-6xl mx-auto ">
          <h1 className="text-4xl md:text-6xl font-serif mb-2 ">
            <span className="text-gray-800 font-semibold ">Stories from Odisha's </span>
            <span className="text-orange-500 font-semibold">Tech <br/>Ecosystem</span>
          </h1>
          <p className="text-gray-500 my-10">
            Real founders. Real challenges. Real solutions.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="bg-orange-500 text-white px-5 py-3 rounded text-sm font-medium">
              Contribute Your Story
            </button>
            <button className="bg-white text-gray-700 px-5 py-2 rounded text-sm font-medium border border-gray-300">
              Explore Articles
            </button>
          </div>
        </div>
      </div>

      {/* 🧭 Filter Buttons */}
<div className="max-w-6xl mx-auto  py-12 flex flex-wrap justify-between gap-4 ">
        <button className="bg-orange-500 text-white  py-1 rounded-full text-sm flex items-center gap-2 flex-1 justify-center">
           <img src={rocket} className="py-1  "/>
            Founder Journey
        </button>
        <button className="bg-gray-200 text-black  py-3 rounded-full text-sm flex items-center gap- flex-1 justify-center">
           <img src={tech}/> Tech & Innovation
        </button>
        <button className="bg-gray-200 text-black  py-3 rounded-full text-sm flex items-center gap-2 flex-1 justify-center">
           <img src={career}/> Career & Growth
        </button>
        <button className="bg-gray-200 text-black  py-3 rounded-full text-sm flex items-center gap-2 flex-1 justify-center">
           <img src={eco}/> Ecosystem Updates
        </button>
        <button className="bg-gray-200 text-black  py-3 rounded-full text-sm flex items-center gap-2 flex-1 justify-center">
         
   <img src={blackcal}/>
 Event Chronicles
        </button>
      </div>

      {/* 🌟 Featured Story */}
      <div className="max-w-full mx-auto px-44 py-16 pb-16 grid md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-amber-100 to-orange-100">
        {/* Left - Image */}
        <img src={human} alt="founder" className="rounded-lg shadow-md w-full" />

        {/* Right - Text */}
        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center gap-6 mb-3">
            <button className="bg-orange-500 text-white rounded-md px-3 py-1 text-sm font-medium">
              Featured Story
            </button>
            <span className="text-gray-600 text-sm">5 min read</span>
          </div>

          <h1 className="font-extrabold text-gray-900 text-3xl mb-3 font-serif">
            How I Built a ₹5 Cr Startup from Cuttack Without Moving to Bangalore
          </h1>

          <p className="text-gray-600 leading-relaxed mb-6">
            Discover how Rajesh Mohanty transformed a local idea into a
            multi-crore business while staying rooted in Odisha's culture and
            leveraging local talent.
          </p>

          <div className="flex items-center gap-4">
            <img
              src={human}
              alt="author"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <h2 className="font-semibold text-gray-900">Rajesh Mohanty</h2>
              <p className="text-gray-600 text-sm">Founder & CEO</p>
            </div>
          </div>
        </div>
      </div>

      {/* 📰 Blogs + Sidebar */}
      <div className="max-w-full px-44 mx-auto   pb-20 grid lg:grid-cols-[3fr_1fr] gap-10 bg-gradient-to-br from-amber-100 to-orange-100">
        {/* Left - Blog Cards */}
        <div className="grid md:grid-cols-2 gap-8 w-full">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="py-4 px-6 h-56">
                <div className="flex items-center gap-2 text-sm mb-3">
                  <span
                    className={`px-3 py-1 rounded-full font-medium ${blog.categoryColor}`}
                  >
                    {blog.category}
                  </span>
                  <span className="text-gray-500">{blog.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight font-serif">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed ">
                  {blog.description}
                </p>
                <p className="text-sm font-medium text-gray-700">
                  {blog.author}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right - Sidebar */}
        <div className="flex flex-col gap-6">
          {/* 📚 Most Read Stories */}
          <div className="bg-white rounded-xl shadow-sm p-6 h-1/3">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Most Read Stories
            </h2>
            <div className="flex flex-col gap-4">
              {[
                {
                  rank: 1,
                  title: "Building India's First Odia Voice Assistant",
                  reads: "2.4k reads",
                },
                {
                  rank: 2,
                  title: "Why I Chose Bhubaneswar Over Bangalore",
                  reads: "1.8k reads",
                },
                {
                  rank: 3,
                  title: "Odisha's Tech Talent Retention Strategy",
                  reads: "1.5k reads",
                },
              ].map((story, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold text-lg">
                    {story.rank}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-gray-800 leading-snug">
                      {story.title}
                    </p>
                    <p className="text-xs text-gray-500">{story.reads}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 📨 Newsletter Signup */}
          <div className="bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-white mb-2">
              Newsletter Signup
            </h2>
            <p className="text-sm text-white mb-4">
              Get the Weekly Wrap: Odisha's Tech Digest
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button
                type="submit"
                className="bg-orange-500 text-white font-medium text-sm py-2 rounded-md hover:bg-orange-600 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
