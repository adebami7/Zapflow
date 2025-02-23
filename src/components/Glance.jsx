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
          Why Opt For Our Services?
        </h2>
        <p className="mt-2 text-gray-600">
          We are dedicated to supporting you in achieving your objectives.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Unparalleled Expertise",
              desc: "Our team brings years of combined and diverse professional experience designed to address your specific needs.",
            },
            {
              title: "Proven Track Record",
              desc: "Having accomplished many projects, we have earned a reputable standing in our field.",
            },
            {
              title: "Commitment to Quality",
              desc: "We go above and beyond to ensure you receive the highest level of service possible.",
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
