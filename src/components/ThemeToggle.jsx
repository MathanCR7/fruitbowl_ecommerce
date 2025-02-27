import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("bg-gray-900", "text-white"); // Dark mode colors
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("bg-gray-900", "text-white");
      document.body.classList.add("bg-gray-100", "text-gray-900"); // Light mode colors
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <motion.button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-5 right-5 p-3 rounded-full shadow-lg transition-all 
                 bg-gray-300 dark:bg-gray-800 text-gray-900 dark:text-white"
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
    >
      {darkMode ? <Sun size={24} /> : <Moon size={24} />}
    </motion.button>
  );
};

export default ThemeToggle;
