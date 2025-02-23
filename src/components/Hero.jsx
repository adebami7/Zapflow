// src/sections/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6 mt-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <small className="uppercase tracking-wider opacity-80">Streamlined and Inclusive</small>
          <h1 className="text-3xl md:text-5xl font-bold mt-4">
            STREAMLINED DESIGN, INTUITIVELY FUNCTIONAL
            <br />
            DISCOVER THE <span className="text-yellow-300">ZAPFLOW</span> TEMPLATE
          </h1>
          <p className="mt-4 max-w-md mx-auto md:mx-0">
            Experience seamless management with an admin template for optimal efficiency.
          </p>
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded hover:opacity-90">
              View Demos
            </button>
            <button className="px-6 py-3 border border-white rounded hover:opacity-90">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
