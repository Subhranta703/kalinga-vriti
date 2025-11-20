import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import api from "../api/api";
import { useNavigate, Link } from "react-router-dom";
import { FaGoogle, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import loginImgae from "../assets/four.png";
import { useGoogleLogin } from "@react-oauth/google";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  // ----------------------------
  // NORMAL EMAIL/PASSWORD LOGIN
  // ----------------------------
const submit = async (e) => {
  e.preventDefault();
  try {
    const res = await api.post("/auth/login", { email, password });

    login(res.data.user, res.data.token);  
    nav("/community");  

  } catch (err) {
    alert(err.response?.data?.message || "Login failed");
  }
};



  // ----------------------------
  // GOOGLE LOGIN (FIXED)
  // ----------------------------
 const { login } = useContext(AuthContext);

const googleLogin = useGoogleLogin({
  flow: "auth-code",
  onSuccess: async (codeResponse) => {
    try {
      const res = await api.post("/auth/google", {
        code: codeResponse.code,
        redirect_uri: window.location.origin,
      });

      login(res.data.user, res.data.token);  // <-- CORRECT
      nav("/community");  // Redirect after login
    } catch (err) {
      alert(err.response?.data?.message || "Google login failed");
    }
  },
  onError: () => alert("Google Login Error"),
});


  return (
    <div className="flex flex-col md:flex-row h-screen bg-gradient-to-b from-yellow-50 to-orange-100">
      
      {/* LEFT SIDE */}
      <div className="hidden md:flex flex-col justify-center items-center w-1/3 px-10 text-center space-y-4 ml-24">
        <div className="flex flex-col items-center gap-3 mb-4">
          <div className="rounded-full bg-orange-600 border-[5px] border-dotted border-white h-14 w-14 flex justify-center items-center text-white font-bold text-xl shadow-md shadow-orange-400">
            ?
          </div>
          <h1 className="text-3xl font-bold text-orange-700">Kalinga Vriti</h1>
        </div>

        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          Connecting Odisha’s brightest minds in technology and <br /> innovation.
        </p>

        <img
          src={loginImgae}
          alt="Login Illustration"
          className="w-4/5 max-w-sm rounded-xl shadow-[0_10px_25px_rgba(255,87,34,0.3)] hover:scale-[1.02] transition-transform duration-300"
        />
      </div>

      {/* RIGHT SIDE - FORM */}
      <div className="flex flex-col justify-center items-center md:w-2/3 w-full min-h-screen">
        <div className="bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-2xl p-10 sm:p-12 w-full max-w-md transform transition-transform duration-300 hover:scale-[1.02]">
          
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-orange-900 font-serif mb-2">
            Welcome Back
          </h1>
          <h3 className="text-md sm:text-lg text-center text-gray-800 mb-2">
            to Odisha's Digital Temple of Innovation
          </h3>
          <p className="text-center text-gray-600 text-xs sm:text-xs mb-6">
            Log in to continue connecting, learning, and building with Odisha’s tech community.
          </p>

          {/* -------- FORM -------- */}
          <form onSubmit={submit} className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm mb-1">Email or Username</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Remember */}
            <div className="flex justify-between items-center text-sm text-gray-700">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 accent-yellow-500" />
                Remember me
              </label>
              <Link to="/forgot-password" className="text-orange-500 hover:underline">
                Forgot Password?
              </Link>
            </div>

            {/* LOGIN BUTTON (FIXED — NO GOOGLE HERE) */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-semibold py-3 rounded-md hover:from-yellow-500 hover:to-orange-500 transition duration-200"
            >
              Log In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-2 text-sm text-gray-500">Or Continue With</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* SOCIAL LOGIN BUTTONS */}
          <div className="flex justify-center gap-4 mb-4">
            {/* GOOGLE LOGIN BUTTON */}
            <button
              className="p-3 rounded-md border border-gray-300 hover:bg-gray-100 transition"
              onClick={() => googleLogin()}
            >
              <FaGoogle className="text-yellow-500 text-lg" />
            </button>

            <button className="p-3 rounded-md border border-gray-300 hover:bg-gray-100 transition">
              <FaLinkedinIn className="text-yellow-600 text-lg" />
            </button>

            <button className="p-3 rounded-md border border-gray-300 hover:bg-gray-100 transition">
              <FaPhoneAlt className="text-yellow-500 text-lg" />
            </button>
          </div>

          {/* Bottom text */}
          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-yellow-500 font-semibold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
