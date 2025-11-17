import React, { useState } from "react";
import  api  from "../api/api";
import { useNavigate, Link } from "react-router-dom";
import signup from "../assets/signup.png";
import { FaGoogle, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import smallchakra from "../assets/smallchakra.png";
import { motion } from "framer-motion";
import {useGoogleLogin} from '@react-oauth/google'

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
      const res = await api.post("/auth/register", {
  name,
  email,
  password,
  confirmPassword,
});

      localStorage.setItem("kv_token", res.data.token);
      nav("/");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

 

 const googleLogin = useGoogleLogin({
  onSuccess: async (codeResponse) => {
    try {
      const res = await api.post('/auth/google', {
        code: codeResponse.code,
      });
      localStorage.setItem('kv_token', res.data.token);
      nav('/');
    } catch (err) {
      alert(err.response?.data?.message || 'Google login failed');
    }
  },
  onError: () => {
    alert('Google login error');
  },
  flow: 'auth-code',
});
  return (
    <div className="flex flex-col md:flex-row w-full overflow-hidden">
      {/* Left Section */}
      <motion.div
        className="flex flex-col justify-start items-center w-full md:w-1/2 bg-gradient-to-b from-yellow-100 via-orange-200 to-orange-300 px-6 sm:px-12 md:px-20 py-10 sm:py-14 md:py-1"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Chakra Icon */}
        <motion.div
          className="flex justify-center mb-6 mt-3 sm:mt-8 md:mt-10"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <motion.div
            className="bg-orange-500 text-white  p-1 rounded-full shadow-lg"
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <img
              src={smallchakra}
              alt="chakra"
              className="h-10 w-10 object-contain"
            />
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-orange-900 font-serif mb-3"
        >
          Welcome to Odisha's Digital <br /> Temple of Innovation
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center text-gray-700 text-sm sm:text-base md:text-lg mb-8 max-w-md"
        >
          Log in to start connecting, learning, and building with Odisha’s
          growing tech community.
        </motion.p>

        {/* Signup Card */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white/70 backdrop-blur-md shadow-2xl rounded-xl px-6 sm:px-8 py-6 w-full max-w-md"
        >
          <form
            onSubmit={submit}
            className="space-y-4"
          >
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 text-sm mb-1">
                Full Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 text-sm mb-1">
                Email or Username
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 text-sm mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-gray-700 text-sm mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Checkbox */}
            <label className="flex items-center text-sm text-gray-700 mt-2">
              <input type="checkbox" className="mr-2 accent-yellow-500" />
              Receive promotional mails and updates
            </label>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold py-2.5 rounded-md hover:from-yellow-500 hover:to-orange-600 transition duration-200 mt-2 shadow-md"
            >
              Sign Up
            </motion.button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-5">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-2 text-sm text-gray-500">Or Continue With</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Social Buttons */}
          <motion.div
            className="flex justify-center gap-4 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition" onClick={googleLogin} >
              <FaGoogle className="text-yellow-500 text-lg" />
            </button>
            <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition">
              <FaLinkedinIn className="text-yellow-600 text-lg" />
            </button>
            <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition">
              <FaPhoneAlt className="text-yellow-500 text-lg" />
            </button>
          </motion.div>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-yellow-600 font-semibold hover:underline"
            >
              Log in
            </Link>
          </p>
        </motion.div>
      </motion.div>                                        

      {/* Right Section */}
      <motion.div
        className="h-64 md:h-[1100px] w-full md:w-1/2 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${signup})`,
        }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Optional overlay text or gradient */}
        <div className="h-full w-full bg-gradient-to-t from-orange-500/30 to-transparent flex justify-center items-end md:items-center">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold mb-10 drop-shadow-lg"
          >
            Building Odisha’s Future 
          </motion.h3>
        </div>
      </motion.div>
    </div>
  );
}
