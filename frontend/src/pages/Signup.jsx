import React, { useState } from "react";
import { api } from "../api/api";
import { useNavigate, Link } from "react-router-dom";
import bgImage from "../assets/signup.png";
import { FaGoogle, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import smallchakra from '../assets/smallchakra.png'
import {motion} from 'framer-motion'
export default function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const res = await api.post("/auth/register", { name, email, password });
      localStorage.setItem("kv_token", res.data.token);
      nav("/");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className=" h-screen flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-gradient-to-b from-yellow-200 to-orange-300   sm:py-10 md:p-16 ">
        {/* Top Icon */}
     <div className="flex justify-center mb-4 mt-12 sm:mt-16 md:mt-1">
  <motion.div className="bg-orange-600 text-white px-3 py-2 rounded-full text-xl shadow-md">
    <img src={smallchakra} alt="chakra" className="h-8 w-8 object-contain" />
  </motion.div>
</div>


        {/* Title */}
        <motion.h2 initial={{opacity:0,y:-5}} whileInView={{opacity:1,y:0}}  transition={{
    duration: 0.8,
    ease: [0.05, 0.1, 0.25, 1], // smooth "ease-in-out" curve
  }}
  viewport={{ once: true }}  className="text-2xl sm:text-4xl font-bold text-center text-orange-950 font-serif mb-2">
          Welcome to Odisha's Digital <br /> Temple of Innovation
        </motion.h2>
        <p className="text-center text-gray-600 text-sm sm:text-base mb-6">
          Log in to start connecting, learning, and building with Odisha’s tech
          <br/> community.
        </p>

        {/* Signup Card */}
         <div className="bg-white/70 backdrop-blur-md shadow-lg rounded-xl sm:py-3 sm:px-6   w-full max-w-md">
  <motion.form initial={{opacity:0,x:-30}}
  whileInView={{opacity:1,x:0}}
  transition={{duration:0.8}}
  viewport={{once:true}}
  onSubmit={submit}
  className="space-y-2 flex flex-col justify-center items-center w-full"
>
  {/* Full Name */}
  <div className="w-full">
    <label className="block text-gray-700 text-sm mb-1">Full Name</label>
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
       className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
    />
  </div>

  {/* Email */}
  <div className="w-full">
    <label className="block text-gray-700 text-sm mb-1">
      Email or Username
    </label>
    <input
      value={email}
      onChange={(e) => setEmail(e.target.value)}
       className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
    />
  </div>

  {/* Password */}
  <div className="w-full">
    <label className="block text-gray-700 text-sm mb-1">Password</label>
    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
       className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
    />
  </div>

  {/* Confirm Password */}
  <div className="w-full">
    <label className="block text-gray-700 text-sm mb-1">
      Confirm Password
    </label>
    <input
      type="password"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
       className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
    />
  </div>

  {/* Checkbox */}
  <label className="flex items-center text-sm text-gray-700 mt-1">
    <input type="checkbox" className="mr-2 accent-yellow-500" />
    Receive promotional mails and updates
  </label>

  {/* Submit Button */}
  <button
    type="submit"
    className="w-3/4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-semibold py-2.5 rounded-md hover:from-yellow-500 hover:to-orange-500 transition duration-200 mt-2"
  >
    Sign Up
  </button>
</motion.form>


  {/* Divider */}
  <div className="flex items-center my-3">
    <div className="flex-grow border-t border-gray-300"></div>
    <span className="px-2 text-sm text-gray-500">Or Continue With</span>
    <div className="flex-grow border-t border-gray-300"></div>
  </div>

  {/* Social Buttons */}
  <div className="flex justify-center gap-4 mb-3">
    <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition">
      <FaGoogle className="text-yellow-500 text-lg" />
    </button>
    <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition">
      <FaLinkedinIn className="text-yellow-600 text-lg" />
    </button>
    <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition">
      <FaPhoneAlt className="text-yellow-500 text-lg" />
    </button>
  </div>

  <p className="text-center text-sm text-gray-600">
    Already have an account?{" "}
    <Link to="/login" className="text-yellow-500 font-semibold hover:underline">
      Log in
    </Link>
  </p>
</div>

      </div>

      {/* Right Section - Image */}
      <div
        className="hidden md:block w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      ></div>
    </div>
  );
}
