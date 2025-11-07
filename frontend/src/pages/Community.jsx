import React from "react";
import {
  Users,
  MessageSquare,
  Briefcase,
  Handshake,
  Linkedin,
  Mail,
  Shield,
  Heart,
  BookOpen,
} from "lucide-react";

import sambalpuriBar from "../assets/sambalpuri_bar_community.png";

export default function Community() {
  return (
    <div className="text-gray-800">
      {/* HERO SECTION */}
      <section
        className="relative text-center text-gray-800"
        style={{
          background: "linear-gradient(180deg, #FDE68A 0%, #F4C430 50%, #FCB900 100%)",
        }}
      >
        {/* Gradient overlay for smooth finish */}
        <div className="bg-gradient-to-b from-white/0 via-white/10 to-white/20">
          <div className="container mx-auto px-4 py-24">
            <p className="text-sm text-yellow-800 mb-2 font-medium">
              🔸 1,000+ Active Members
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Connect with{" "}
              <span className="text-[#B45309]">
                1,000+ Tech Professionals in Odisha
              </span>
            </h1>
            <p className="text-gray-800 mt-4 max-w-2xl mx-auto">
              Join a growing community of founders, developers, and innovators
              building Odisha’s tech future.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href="#"
                className="bg-[#F4C430] hover:bg-[#FCB900] text-white px-6 py-3 rounded-full shadow font-medium transition flex items-center gap-2"
              >
                Join Our WhatsApp Community
              </a>
              <a
                href="#"
                className="border-2 border-[#F4C430] text-[#B45309] px-6 py-3 rounded-full font-medium hover:bg-[#F4C430] hover:text-white transition flex items-center gap-2"
              >
                Subscribe to Weekly Wrap
              </a>
            </div>
          </div>
        </div>

        {/* Sambalpuri decorative bar */}
        <img
          src={sambalpuriBar}
          alt="Sambalpuri Pattern"
          className="w-full object-cover"
        />
      </section>

      {/* COMMUNITY BENEFITS */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Community Benefits
          </h2>
          <p className="text-gray-600 mb-12 max-w-xl mx-auto">
            Discover the advantages of being part of Odisha’s most vibrant tech
            community.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <Users className="w-8 h-8 text-yellow-500 mb-4 mx-auto" />
                ),
                title: "Mentorship",
                text: "Connect with experienced professionals and get guidance for your tech journey.",
              },
              {
                icon: (
                  <MessageSquare className="w-8 h-8 text-yellow-500 mb-4 mx-auto" />
                ),
                title: "Events",
                text: "Attend exclusive workshops, hackathons, and networking events in Odisha.",
              },
              {
                icon: (
                  <Briefcase className="w-8 h-8 text-yellow-500 mb-4 mx-auto" />
                ),
                title: "Job Opportunities",
                text: "Access exclusive job postings and career opportunities in the region.",
              },
              {
                icon: (
                  <Handshake className="w-8 h-8 text-yellow-500 mb-4 mx-auto" />
                ),
                title: "Collaboration",
                text: "Find co-founders, team members, and collaborators for your next project.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-yellow-50 rounded-xl shadow-md hover:shadow-lg transition p-6"
              >
                {item.icon}
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAYS TO CONNECT */}
      <section className="py-20 bg-gradient-to-b from-white to-yellow-50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ways to Connect
          </h2>
          <p className="text-gray-600 mb-12">
            Choose how you want to stay connected with our community.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <MessageSquare className="w-10 h-10 text-yellow-500 mx-auto mb-3" />
                ),
                title: "WhatsApp Community",
                text: "Join our active WhatsApp group for daily discussions, quick help, and instant updates.",
                btn: "Join WhatsApp",
              },
              {
                icon: (
                  <Linkedin className="w-10 h-10 text-yellow-500 mx-auto mb-3" />
                ),
                title: "LinkedIn Group",
                text: "Connect professionally, share opportunities, and build your network on LinkedIn.",
                btn: "Join LinkedIn",
              },
              {
                icon: (
                  <Mail className="w-10 h-10 text-yellow-500 mx-auto mb-3" />
                ),
                title: "Weekly Newsletter",
                text: "Get curated tech news, events, and opportunities delivered to your inbox weekly.",
                btn: "Subscribe",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow-md border hover:shadow-lg transition"
              >
                {card.icon}
                <h4 className="text-lg font-semibold mb-2">{card.title}</h4>
                <p className="text-sm text-gray-600 mb-5">{card.text}</p>
                <button className="px-5 py-2 bg-yellow-500 text-white rounded-md font-medium hover:bg-yellow-600 transition">
                  {card.btn}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY GUIDELINES */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Community Guidelines
          </h2>
          <p className="text-gray-600 mb-12">
            Our values that make this community special.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <Heart className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                ),
                title: "Respect",
                text: "Treat every member with dignity and respect, regardless of background.",
              },
              {
                icon: (
                  <Users className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                ),
                title: "Inclusivity",
                text: "Welcome everyone and create an environment where all voices are heard.",
              },
              {
                icon: (
                  <Shield className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                ),
                title: "Integrity",
                text: "Share knowledge honestly and maintain professional standards.",
              },
              {
                icon: (
                  <BookOpen className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                ),
                title: "Resilience",
                text: "See every challenge as a chance to learn, adapt, and grow together.",
              },
            ].map((g, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-yellow-50 shadow hover:shadow-lg transition"
              >
                {g.icon}
                <h4 className="font-semibold mb-1">{g.title}</h4>
                <p className="text-sm text-gray-600">{g.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WEEKLY WRAP */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-600 py-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            The Weekly Wrap: Odisha’s Tech Digest
          </h2>
          <p className="max-w-xl mx-auto mb-8 text-yellow-100">
            Stay updated with the latest tech news, events, job opportunities,
            and community highlights from Odisha’s growing tech ecosystem.
          </p>
          <form className="max-w-md mx-auto flex bg-white rounded-full overflow-hidden shadow">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 text-gray-700 text-sm outline-none"
            />
            <button
              type="submit"
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 font-medium transition"
            >
              Subscribe Now
            </button>
          </form>
          <p className="text-sm text-yellow-100 mt-4">
            Join 500+ subscribers. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}
