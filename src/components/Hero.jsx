// src/sections/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6 mt-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <small className="uppercase tracking-wider opacity-80">AUTOMATE and SCALE</small>
          <h1 className="text-3xl md:text-5xl font-bold mt-4">
            AUTOMATE AND SCALE YOUR
            <br />
            BUSINESS WITH <span className="text-yellow-300">ZAPFLOW</span> 
          </h1>
          <p className="mt-4 max-w-md mx-auto md:mx-0">
          Zapflow is an all-in-one marketing software for 
          businesses that lets you reach out to your customers on WhatsApp, 
          Sms, Emails, Voice at scale. Zapflow let's you send message broadcasts, 
          setup transactional notifications, track campaign analytics, setup automations & 
          chatbots and most importantly grow your revenue from your customers on WhatsApp, 
          emails, Sms, Voice. 
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
