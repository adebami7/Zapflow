// src/sections/About.jsx
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block bg-orange-100 text-orange-500 uppercase text-xs px-2 py-1 rounded mb-2">
          About Us
        </span>
        <h2 className="text-3xl font-semibold text-gray-800">
          Delivering More Than Expected!
        </h2>
        <p className="mt-4 text-gray-600">
          Welcome to Zapflow, where we provide a unique and personalized experience
          designed to surpass your expectations.
        </p>
        <ul className="mt-6 space-y-2 text-gray-700">
          {[
            "Having accumulated years of experience, we have earned a reputable standing in our field.",
            "We have assembled a team of knowledgeable and proficient individuals.",
            "We recognize that every client is unique, and we customize our services accordingly.",
            "Designed with convenience in mind, our services aim to make your experience effortless.",
            "Our support is available around the clock, every day of the year.",
          ].map((point, i) => (
            <li key={i} className="flex items-center justify-center">
              <span className="text-indigo-600 mr-2">●</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
