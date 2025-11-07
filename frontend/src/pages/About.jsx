import React from "react";
import { Users, Heart, Globe2, Star, Award } from "lucide-react";
import polyImg from "../assets/poly.png"; // replace with your actual image filename
import bishnuImg from "../assets/bishnu.png"; // replace with your actual image filename

export default function About() {
  return (
    <div className="text-gray-800">
      {/* HERO SECTION */}
      <section
        className="relative text-center text-gray-800"
        style={{
          background: "linear-gradient(180deg, #FDE68A 0%, #F4C430 50%, #FCB900 100%)",
        }}
      >
        <div className="bg-gradient-to-b from-white/0 via-white/5 to-white/20">
          <div className="container mx-auto px-4 py-24">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The Vision Behind{" "}
              <span className="text-[#B45309]">Kalinga Vriti</span>
            </h1>
            <p className="text-gray-800 max-w-2xl mx-auto text-lg mb-8">
              A digital temple where Odisha's innovation, stories, and community
              thrive.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#team"
                className="bg-[#F4C430] hover:bg-[#FCB900] text-white px-6 py-3 rounded-full shadow font-medium transition"
              >
                Meet the Team
              </a>
              <a
                href="#mission"
                className="border-2 border-[#F4C430] text-[#B45309] px-6 py-3 rounded-full font-medium hover:bg-[#F4C430] hover:text-white transition"
              >
                Our Mission
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section id="mission" className="py-20 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
            "In ancient times, temples were centers of learning, commerce, and
            community. Today, Kalinga Vriti serves as Odisha's digital temple —
            where innovation is celebrated, stories are shared, and connections
            are made."
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-yellow-50 shadow rounded-lg p-6">
              <h4 className="font-semibold text-lg text-[#B45309] mb-2">
                Our Mission
              </h4>
              <p className="text-gray-700">
                To amplify Odisha's tech voices through storytelling and
                meaningful events.
              </p>
            </div>
            <div className="bg-yellow-50 shadow rounded-lg p-6">
              <h4 className="font-semibold text-lg text-[#B45309] mb-2">
                Our Vision
              </h4>
              <p className="text-gray-700">
                An Odisha where every founder's journey is celebrated and every
                innovator finds their tribe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-20 bg-gradient-to-b from-yellow-50 to-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Authenticity", text: "Genuine stories, real connections." },
              { title: "Community", text: "Together we grow stronger." },
              { title: "Inclusivity", text: "Every voice matters." },
              { title: "Impact", text: "Creating meaningful change." },
            ].map((val, i) => (
              <div
                key={i}
                className="bg-white rounded-full shadow-lg p-8 border-2 border-yellow-200 hover:shadow-xl transition"
              >
                <div className="flex justify-center mb-3">
                  <Heart className="w-6 h-6 text-yellow-500" />
                </div>
                <h4 className="font-semibold text-lg mb-2 text-[#B45309]">
                  {val.title}
                </h4>
                <p className="text-sm text-gray-600">{val.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
            What Makes Us Different
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Globe2 className="w-8 h-8 text-yellow-500 mx-auto mb-3" />,
                title: "Odisha-first approach",
                text: "Local roots, global standards.",
              },
              {
                icon: <Users className="w-8 h-8 text-yellow-500 mx-auto mb-3" />,
                title: "Founder-led",
                text: "Built by entrepreneurs for entrepreneurs.",
              },
              {
                icon: <Star className="w-8 h-8 text-yellow-500 mx-auto mb-3" />,
                title: "Story-driven",
                text: "Every journey has a narrative.",
              },
              {
                icon: <Award className="w-8 h-8 text-yellow-500 mx-auto mb-3" />,
                title: "Community-owned",
                text: "By the community, for the community.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-yellow-50 rounded-xl shadow p-6 hover:shadow-lg transition"
              >
                {item.icon}
                <h4 className="font-semibold text-[#B45309] mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDERS SECTION */}
      <section
        id="team"
        className="py-20 text-center"
        style={{
          background: "linear-gradient(180deg, #FDE68A 0%, #F4C430 50%, #FCB900 100%)",
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-[#78350F]">
            The People Behind Kalinga Vriti
          </h2>
          <p className="text-gray-700 mb-12">
            Meet the minds shaping Odisha's digital temple of innovation.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Poly Sarkar */}
            <div className="bg-white rounded-xl shadow-lg p-8 border hover:shadow-xl transition">
              <img
                src={polyImg}
                alt="Poly Sarkar"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-yellow-400"
              />
              <h4 className="font-semibold text-lg text-[#B45309]">
                Poly Sarkar
              </h4>
              <p className="text-sm text-gray-500 mb-3">Co-Founder & CTO</p>
              <p className="text-gray-700 italic mb-4">
                “Tech is the new craftsmanship — we build, not copy.”
              </p>
              <p className="text-sm text-gray-600">
                Utkal University | Building Odisha’s Digital Temple of Innovation
              </p>
            </div>

            {/* Bishnu Das */}
            <div className="bg-white rounded-xl shadow-lg p-8 border hover:shadow-xl transition">
              <img
                src={bishnuImg}
                alt="Bishnu Das"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-yellow-400"
              />
              <h4 className="font-semibold text-lg text-[#B45309]">
                Bishnu Das
              </h4>
              <p className="text-sm text-gray-500 mb-3">Founder & CEO</p>
              <p className="text-gray-700 italic mb-4">
                “Every Odia innovator deserves a global stage.”
              </p>
              <p className="text-sm text-gray-600">
                Ex-LSEG, JP Morgan, HSBC | IIM Ahmedabad | Building Odisha’s
                innovation movement with deep financial expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR TEAM */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Our Team</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { name: "Subhranta Ku. Nayak", role: "Head of Community & Partnerships" },
              { name: "Sipra Panda", role: "Head of Community & Partnerships" },
              { name: "Rakesh Ku. Patra", role: "Head of Community & Partnerships" },
              { name: "Suvajeet Nayak", role: "Head of Community & Partnerships" },
              { name: "Sahil Parida", role: "Head of Community & Partnerships" },
            ].map((member, i) => (
              <div
                key={i}
                className="bg-yellow-50 rounded-xl p-6 shadow hover:shadow-lg transition"
              >
                <Users className="w-10 h-10 text-yellow-500 mx-auto mb-3" />
                <h4 className="font-semibold text-lg text-[#B45309]">
                  {member.name}
                </h4>
                <p className="text-sm text-gray-500">{member.role}</p>
                <p className="text-xs text-gray-600 mt-2">
                  Connecting innovators across Odisha.
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <a
              href="#"
              className="bg-[#F4C430] hover:bg-[#FCB900] text-white px-6 py-3 rounded-full shadow font-medium transition"
            >
              Meet the Whole Team →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
