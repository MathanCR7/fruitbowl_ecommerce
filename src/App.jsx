import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import './styles/glassmorphism.css';

function App() {
  const location = useLocation();
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  const hideNavbar = location.pathname === '/' || !isLoggedIn;

  return (
    <div className="flex flex-col min-h-screen">
      {!hideNavbar && <Navbar />}
      <ThemeToggle />
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
