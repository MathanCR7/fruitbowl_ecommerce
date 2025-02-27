import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import GoogleAuthButton from "../components/GoogleAuthButton";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    dob: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    if (!form.username || !form.dob || !form.email || !form.password) {
      setError("All fields are required!");
      return;
    }
    if (form.password.length < 8) {
      setError("Password must be at least 8 characters long!");
      return;
    }
    navigate("/");
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: 50 }} 
      transition={{ duration: 0.5 }}
      className="glassmorphism max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[25rem] mx-auto p-6 rounded-lg shadow-lg text-center"
    >
      <h2 className="text-3xl font-bold text-white mb-4">Sign Up</h2>

      <input type="text" name="username" placeholder="Username" className="input-field" onChange={handleChange} />
      <input type="date" name="dob" className="input-field" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" className="input-field" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" className="input-field" onChange={handleChange} />

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <button 
        onClick={handleSignup} 
        className="mt-4 w-full bg-gradient-to-r from-green-500 to-green-700 text-white py-2 px-6 rounded-lg hover:scale-105 transition-all duration-300"
      >
        Sign Up
      </button>

      <div className="mt-4">
        <GoogleAuthButton onSuccess={handleSignup} />
      </div>

      <p className="text-white mt-4">
        Already have an account? <span className="text-blue-300 cursor-pointer hover:underline" onClick={() => navigate("/login")}>Sign in</span>
      </p>
    </motion.div>
  );
};

export default Signup;
