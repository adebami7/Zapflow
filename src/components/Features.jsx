// src/sections/Features.jsx
import React from "react";

const Features = () => {
  const icons = ["B", "HTML5", "Sass", "Coffee", "Redux"];

  return (
    <section id="features" className="py-16 bg-indigo-600 text-white text-center">
      <div className="max-w-3xl mx-auto px-4">
        <span className="inline-block bg-orange-100 text-orange-500 uppercase text-xs px-2 py-1 rounded mb-2">
          Features
        </span>
        <h2 className="text-3xl font-semibold">Exceptional Features</h2>
        <p className="mt-2 text-indigo-100">
          Offers unparalleled capabilities, diverse global networks, and global reach.
          With cutting-edge technology, innovative solutions, and seamless integration.
        </p>
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
          <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded hover:opacity-90">
            Get Started Now
          </button>
          <button className="px-6 py-3 border border-white rounded hover:opacity-90 flex items-center">
            Discover More <span className="ml-2">→</span>
          </button>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          {icons.map((icon, index) => (
            <img
              key={index}
              src={`https://via.placeholder.com/60?text=${icon}`}
              alt={icon}
              className="w-16 transition-transform hover:scale-110"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
