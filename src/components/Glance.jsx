// src/sections/Glance.jsx
import React from "react";

const Glance = () => {
  return (
    <section id="glance" className="py-16 bg-gray-100 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <span className="inline-block bg-orange-100 text-orange-500 uppercase text-xs px-2 py-1 rounded mb-2">
          Glance
        </span>
        <h2 className="text-3xl font-semibold text-gray-800">
          Why Choose Zapflow?
        </h2>
        <p className="mt-2 text-gray-600">
        The all-in-one marketing automation tool 
        designed to simplify sales, nurture leads, and skyrocket conversions—all in one place!
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Generate High-Quality Leads – Fast & Easy!",
              desc: "Effortlessly create high-converting landing pages and lead forms with a single click. Our AI-powered copy generator helps you craft compelling content in minutes.",
            },
            {
              title: "Automate & Nurture Leads with WhatsApp, sms, voice & Email",
              desc: "Stay connected with your audience! Set up automated follow-ups, broadcasts, and personalized messages that engage and convert leads into loyal customers.",
            },
            {
              title: "Save Time, Effort & Money with ZapFlow",
              desc: "Ditch multiple subscriptions and complex systems—ZapFlow does it all!",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src="https://via.placeholder.com/80"
                alt="Service Icon"
                className="mx-auto"
              />
              <h3 className="mt-4 text-xl font-medium text-gray-800">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
              <a
                href={`#readmore${index + 1}`}
                className="mt-4 inline-block text-indigo-600 font-semibold hover:underline"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Glance;
