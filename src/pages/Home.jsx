import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      navigate("/login");
    }, 2000); // Extended for a premium feel

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 opacity-60 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-pattern opacity-20"></div>

      {showSplash && (
        <motion.div
          className="relative flex flex-col items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <motion.img
            src="/logo.png"
            alt="Logo"
            className="w-40 h-40 sm:w-56 sm:h-56"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default Home;
