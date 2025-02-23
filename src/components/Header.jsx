// src/sections/Header.jsx
import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-indigo-600">Zapflow</div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#hero" className="hover:text-indigo-500">Home</a>
          <a href="#about" className="hover:text-indigo-500">About</a>
          <a href="#services" className="hover:text-indigo-500">Services</a>
          <a href="#features" className="hover:text-indigo-500">Features</a>
          <a href="#team" className="hover:text-indigo-500">Team</a>
          <a href="#pricing" className="hover:text-indigo-500">Pricing</a>
          <a href="#contact" className="hover:text-indigo-500">Contact</a>
        </nav>
        {/* Hamburger Icon */}
        <button className="md:hidden" onClick={toggleMenu}>
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-gray-700"></span>
            <span className="block w-6 h-0.5 bg-gray-700"></span>
            <span className="block w-6 h-0.5 bg-gray-700"></span>
          </div>
        </button>
        <div className="hidden md:block">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:opacity-90">
            Sign Up
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li><a href="#hero" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#services" onClick={toggleMenu}>Services</a></li>
            <li><a href="#features" onClick={toggleMenu}>Features</a></li>
            <li><a href="#team" onClick={toggleMenu}>Team</a></li>
            <li><a href="#pricing" onClick={toggleMenu}>Pricing</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
