// src/pages/Founder.jsx
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
      alert("Application submitted successfully! We'll review within 48 hours.");
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
        className="relative flex flex-col items-center justify-center text-center text-white h-[90vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgFounder})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            <span className="text-[#F4C430]">Your </span>
            <span className="text-white">STORY</span>
            <br />
            <span className="text-[#F4C430]">Deserves To Be </span>
            <span className="text-white">TOLD</span>
          </h1>

          <p className="max-w-3xl mx-auto text-md sm:text-lg md:text-xl mb-4 text-yellow-100">
            Every founder, student, and professor has a remarkable journey. But most remain invisible.
          </p>

          <p className="max-w-3xl mx-auto italic text-sm md:text-md mb-6 text-yellow-200">
            <strong className="text-white">FOUNDERS WAY</strong> amplifies your story, builds your brand, and opens doors to investors, customers, and opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <button className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium shadow-md transition transform hover:-translate-y-0.5 bg-[#E56708]">
              Share Your Story <ArrowRight size={16} />
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-full font-medium border-2 border-[#F4C430] text-[#5B2C02] bg-white/60 hover:bg-[#F4C430] hover:text-white transition">
              See Featured Stories
            </button>
          </div>
        </div>
      </section>

      <main className="flex-1">
        {/* Section 1 */}
        <section className="py-14 bg-[#fffaf5] text-center">
          <div className="container mx-auto px-6">
            <h2 className={`text-3xl font-semibold ${orange}`}>
              The Complete Personal Branding Platform for the Startup Ecosystem
            </h2>
            <div className="w-24 h-1 bg-[#E56708] mx-auto rounded mt-4 mb-6" />
            <p className="max-w-3xl mx-auto text-gray-700">
              FOUNDERS WAY helps founders, students, and professors share authentic stories,
              build influential brands, and connect with opportunities.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-10">
              {[
                {
                  title: "Tell your authentic founder journey",
                  icon: <BookOpen className="text-white" size={22} />,
                },
                {
                  title: "Build your personal brand and visibility",
                  icon: <Award className="text-white" size={22} />,
                },
                {
                  title: "Reach 50,000+ readers",
                  icon: <Star className="text-white" size={22} />,
                },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-md border border-yellow-100">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-[#F47C20] to-[#E56708] mb-4 shadow">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-[#5b2c02] text-lg mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">Create trust with genuine storytelling and real results.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Unified Swiper for Sections 2, 3 & 5 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <Swiper
              modules={[Navigation, Pagination, Keyboard]}
              navigation
              pagination={{ clickable: true }}
              keyboard
              spaceBetween={48}
              slidesPerView={1}
              className="mySwiper"
            >
              {/* Slide A: Three Types of Stories (Section 2) */}
              <SwiperSlide>
                <div className="text-center">
                  <h3 className={`${orange} text-2xl font-semibold mb-4`}>Three Types of Stories We Tell</h3>
                  <div className="w-24 h-1 bg-[#E56708] mx-auto rounded mb-6" />

                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      { title: "Founders", desc: "Share your company story, challenges, and vision." },
                      { title: "Students", desc: "Share campus innovations and startup journey." },
                      { title: "Professors", desc: "Share mentorship impact, research, and contributions." },
                    ].map((card, i) => (
                      <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                        <div className="h-44 bg-gradient-to-br from-[#F47C20]/20 to-[#E56708]/10 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow">
                            <BookOpen className="text-[#E56708]" />
                          </div>
                        </div>
                        <div className="p-6">
                          <h4 className="font-semibold text-[#5b2c02] mb-2">{card.title}</h4>
                          <p className="text-sm text-gray-600">{card.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide B: Process (Section 3 content) */}
              <SwiperSlide>
                <div className="text-center">
                  <h3 className={`${orange} text-2xl font-semibold mb-4`}>From Story to Success in 4 Weeks</h3>
                  <div className="w-24 h-1 bg-[#E56708] mx-auto rounded mb-6" />
                  <div className="grid md:grid-cols-4 gap-6">
                    {[
                      { step: "01", title: "Apply", desc: "Simple form, reviewed in 48 hrs" },
                      { step: "02", title: "Story Coaching", desc: "60-min call" },
                      { step: "03", title: "Write & Edit", desc: "2–3 feedback rounds" },
                      { step: "04", title: "Publish & Amplify", desc: "50K+ reach" },
                    ].map((s, i) => (
                      <div key={i} className="p-6 border rounded-2xl shadow-sm">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#fff2df] border border-[#f4c430] text-[#E56708] font-semibold mb-4">
                          {s.step}
                        </div>
                        <h4 className="font-semibold text-[#5b2c02] mb-2">{s.title}</h4>
                        <p className="text-sm text-gray-600">{s.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide C: Testimonials (Section 5 content) */}
              <SwiperSlide>
                <div className="text-center">
                  <h3 className={`${orange} text-2xl font-semibold mb-4`}>Real Results From Real People</h3>
                  <div className="w-24 h-1 bg-[#E56708] mx-auto rounded mb-6" />
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { name: "Rahul Kumar", quote: "I landed a ₹50 lakh contract 3 months after my story was published.", role: "Founder, TechServe Solutions" },
                      { name: "Priya Patel", quote: "My FOUNDERS WAY profile helped me get a ₹12L placement at Amazon.", role: "Student, KIIT University" },
                      { name: "Mehita Dash", quote: "Two VCs reached out after reading my story. We closed a ₹2 Cr seed round.", role: "Founder, HealthFirst" },
                      { name: "Dr. Vikram Singh", quote: "Now I'm invited to speak at national conferences and advise startups.", role: "Professor, NIT Rourkela" },
                    ].map((t, i) => (
                      <div key={i} className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-[#E56708] text-left">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-[#E56708] flex items-center justify-center text-white font-bold">{t.name.charAt(0)}</div>
                          <div>
                            <blockquote className="italic text-gray-700">“{t.quote}”</blockquote>
                            <div className="mt-3 font-semibold text-[#B45309]">{t.name}</div>
                            <div className="text-xs text-gray-500">{t.role}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        {/* FORM SECTION */}
        <section className="py-20 bg-[#fffaf5]">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h3 className={`${orange} text-2xl font-semibold`}>Ready to Share Your Story?</h3>
              <div className="w-24 h-1 bg-[#E56708] mx-auto rounded mt-3 mb-4" />
              <p className="text-gray-700">Fill out the form below — we’ll review your application within 48 hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-8 border border-[#fde1b0] grid gap-4 md:gap-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input name="fullName" value={form.fullName} onChange={handleChange} placeholder="Full Name *" className="p-3 border rounded-md focus:ring-2 focus:ring-[#f4c430]/40" />
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email *" className="p-3 border rounded-md focus:ring-2 focus:ring-[#f4c430]/40" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="p-3 border rounded-md focus:ring-2 focus:ring-[#f4c430]/40" />
                <input name="linkedin" value={form.linkedin} onChange={handleChange} placeholder="LinkedIn Profile" className="p-3 border rounded-md focus:ring-2 focus:ring-[#f4c430]/40" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <select name="role" value={form.role} onChange={handleChange} className="p-3 border rounded-md text-gray-700">
                  <option value="">Select Role</option>
                  <option>Founder</option>
                  <option>Student</option>
                  <option>Professor</option>
                </select>
                <input name="company" value={form.company} onChange={handleChange} placeholder="Company / University" className="p-3 border rounded-md focus:ring-2 focus:ring-[#f4c430]/40" />
              </div>

              <textarea name="story" value={form.story} onChange={handleChange} rows={5} placeholder="Your Story Brief (100 words) *" className="p-3 border rounded-md focus:ring-2 focus:ring-[#f4c430]/40" />

              <select name="tier" value={form.tier} onChange={handleChange} className="p-3 border rounded-md text-gray-700">
                <option value="">Select Membership Tier</option>
                <option>Founding Member (Free)</option>
                <option>Community — ₹3,000 / month</option>
                <option>Premium — ₹20,000 / month</option>
              </select>

              <div className="flex items-center justify-between gap-4">
                <div className="text-sm text-gray-600">We will review and get back within 48 hours.</div>
                <button type="submit" disabled={submitting} className="px-6 py-3 bg-[#E56708] text-white rounded-md font-medium hover:bg-[#d65500] transition disabled:opacity-60">
                  {submitting ? "Submitting..." : "Submit Application →"}
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 bg-gradient-to-b from-[#fffaf5] to-[#fff]">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <span className="inline-block text-sm bg-[#fff2df] text-[#B45309] px-3 py-1 rounded-full mb-3">FAQs</span>
            <h3 className={`${orange} text-xl font-semibold mb-8`}>Quick Answers</h3>

            {[
              { q: "Who can apply?", a: "Any founder, student, or professor with a story to tell about innovation, impact, or learning can apply." },
              { q: "How long does publication take?", a: "Our editorial process typically takes 3–4 weeks from application to publication." },
              { q: "Do I need to be a writer?", a: "No — our editorial team helps shape and polish your story." },
              { q: "What if I have an early stage startup?", a: "Perfect — we specifically support early innovators and founders." },
              { q: "What does it cost?", a: "Founding membership is free. Paid tiers provide amplified reach and perks." },
              { q: "What kind of results can I expect?", a: "More visibility, invitations to speak, investor intros and partnership opportunities." },
            ].map((f, i) => (
              <div key={i} className="border border-[#fde1b0] rounded-xl bg-white mb-3 shadow-sm text-left overflow-hidden">
                <button onClick={() => toggleFAQ(i)} className="w-full flex justify-between items-center px-5 py-4 text-[#5b2c02] font-medium">
                  <span className="flex items-center gap-2">
                    <span className="text-[#E56708] text-lg">●</span> {f.q}
                  </span>
                  <ChevronDown className={`transition-transform ${openFAQ === i ? "rotate-180" : ""}`} />
                </button>
                {openFAQ === i && <div className="px-6 pb-4 text-gray-600 text-sm">{f.a}</div>}
              </div>
            ))}
          </div>
        </section>

        {/* DARK CTA STRIP */}
        <section className="bg-[#0f172a] text-white py-12">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="text-2xl font-semibold mb-2">Your Story. Your Platform. Your Success.</div>
              <div className="text-gray-300 mb-6">Join 100+ ecosystem builders telling their stories.</div>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button className="px-6 py-3 bg-[#E56708] rounded-full shadow hover:bg-[#d65500] transition flex items-center gap-2">Share Your Story</button>
                <button className="px-6 py-3 bg-transparent rounded-full border border-[#F4C430] text-[#F4C430] hover:bg-[#F4C430] hover:text-white transition">Join Community</button>
                <button className="px-6 py-3 bg-transparent rounded-full border border-[#F4C430] text-[#F4C430] hover:bg-[#F4C430] hover:text-white transition">Attend Event</button>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        
      </main>
    </div>
  );
}
