import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/authActions";
import { motion } from "framer-motion";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("All fields are required!");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long!");
      return;
    }
    dispatch(login());
    navigate("/dashboard");
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: 50 }} 
      transition={{ duration: 0.5 }}
      className="glassmorphism max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[25rem] mx-auto p-6 rounded-lg shadow-lg text-center"
    >
      <h2 className="text-3xl font-bold text-white mb-4">Login</h2>
      
      <input
        type="email"
        placeholder="Email"
        className="input-field"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="input-field"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      
      {error && <p className="text-red-400 text-sm">{error}</p>}

      <button 
        onClick={handleLogin} 
        className="mt-4 w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-6 rounded-lg hover:scale-105 transition-all duration-300"
      >
        Sign in
      </button>

      <p className="text-white mt-4">
        New User? <span className="text-blue-300 cursor-pointer hover:underline" onClick={() => navigate("/signup")}>Create an account</span>
      </p>
    </motion.div>
  );
};

export default Login;
