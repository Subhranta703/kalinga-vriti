import React from "react";
import { Users, Heart, Globe2, Star, Award } from "lucide-react";
import bgAbout from "../assets/bg_about.png";
import storyImage from "../assets/our_story_about.png";
import polyImg from "../assets/poly.jpg";
import bishnuImg from "../assets/bishnu.jpeg";

// ✅ Team images
import subhrantaImg from "../assets/Subhranta.jpeg";
import sipraImg from "../assets/sipra.jpg";
import rakeshImg from "../assets/rakesh.jpeg";
import suvajeetImg from "../assets/suvajeet.jpeg";
import sahilImg from "../assets/sahil.jpeg";
import khushbooImg from "../assets/Khusboo.jpg";
import sharmilaImg from "../assets/Sharmila.jpeg";

export default function About() {
  const teamMembers = [
    {
      name: "Subhranta Ku. Nayak",
      role: "Software Engineer",
      img: subhrantaImg,
    },
    {
      name: "Sipra Panda",
      role: "Fullstack Developer",
      img: sipraImg,
    },
    {
      name: "Rakesh Ku. Patra",
      role: "Frontend Developer & UI/UX Designer",
      img: rakeshImg,
    },
    {
      name: "Suvajeet Nayak",
      role: "Data Analyst & Content Creator",
      img: suvajeetImg,
    },
    {
      name: "Sahil Parida",
      role: "Community Manager — Social Media & Content",
      img: sahilImg,
    },
    {
      name: "Khushboo Singh",
      role: "UI/UX Designer",
      img: khushbooImg,
    },
    {
      name: "Sharmila Das",
      role: "Program Manager",
      img: sharmilaImg,
    },
  ];

  return (
    <div className="text-gray-800">
      {/* HERO SECTION */}
      <section
        className="relative text-center text-gray-800 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgAbout})`,
        }}
      >
        {/* Gradient Overlay for soft fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF7D1]/80 via-[#FDE68A]/90 to-[#F4C430]/95"></div>

        {/* Hero content */}
        <div className="relative container mx-auto px-4 py-28">
          <h1 className="text-4xl md:text-5xl font-bold text-[#78350F] mb-4 drop-shadow-sm">
            The Vision Behind{" "}
            <span className="text-[#B45309]">Kalinga Vriti</span>
          </h1>
          <p className="text-gray-900 max-w-2xl mx-auto text-lg mb-8 font-medium">
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
              className="border-2 border-[#F4C430] text-[#78350F] px-6 py-3 rounded-full font-medium hover:bg-[#F4C430] hover:text-white transition"
            >
              Our Mission
            </a>
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section id="mission" className="py-20 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#B45309]">
              Our Story
            </h2>
            <blockquote className="border-l-4 border-[#F4C430] pl-4 italic text-gray-700 text-lg leading-relaxed mb-6">
              "In ancient times, temples were centers of learning, commerce, and
              community. Today, Kalinga Vriti serves as Odisha's digital temple —
              where innovation is celebrated, stories are shared, and connections
              are made."
            </blockquote>
            <div className="grid md:grid-cols-2 gap-6 mt-10">
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

          {/* Our Story Image */}
          <div className="flex justify-center">
            <img
              src={storyImage}
              alt="Our Story"
              className="rounded-xl shadow-lg object-cover w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-20 bg-gradient-to-b from-yellow-50 to-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#78350F] mb-10">
            Our Values
          </h2>
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

      {/* OUR TEAM SECTION */}
      <section
        className="py-20 text-center"
        style={{
          background: "linear-gradient(180deg, #FFF9E5 0%, #FDE68A 50%, #F4C430 100%)",
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#78350F] mb-10">
            Our Team
          </h2>

          {/* First row (3 people) */}
          <div className="grid md:grid-cols-3 gap-10 justify-center mb-10">
            {teamMembers.slice(0, 3).map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 duration-300 p-6 border border-yellow-100"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mb-4 shadow-md border-4 border-yellow-300"
                  />
                  <h4 className="font-semibold text-lg text-[#78350F] mb-1">
                    {member.name}
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                  <p className="text-xs text-gray-500 mb-4">
                    Connecting innovators across Odisha.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Second row (4 people) */}
          <div className="grid md:grid-cols-4 gap-10 justify-center">
            {teamMembers.slice(3).map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 duration-300 p-6 border border-yellow-100"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mb-4 shadow-md border-4 border-yellow-300"
                  />
                  <h4 className="font-semibold text-lg text-[#78350F] mb-1">
                    {member.name}
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                  <p className="text-xs text-gray-500 mb-4">
                    Connecting innovators across Odisha.
                  </p>
                </div>
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
            <p className="text-sm text-[#78350F] mt-2 italic">
              We're growing fast — join the movement.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
