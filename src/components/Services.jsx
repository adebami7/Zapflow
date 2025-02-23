// src/sections/Services.jsx
import React from "react";

const Services = () => {
  const services = [
    {
      title: "Business Audit",
      desc: "Get insights and analysis of your business operations to improve efficiency.",
    },
    {
      title: "Marketing",
      desc: "Sell or promote products and services with our proven marketing strategies.",
    },
    {
      title: "Trading",
      desc: "Quick real-time trading solutions and stock market insights.",
    },
    {
      title: "Ecommerce",
      desc: "Grow your online presence and manage your store seamlessly.",
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-100 text-center">
      <div className="max-w-6xl mx-auto px-4">
        <span className="inline-block bg-orange-100 text-orange-500 uppercase text-xs px-2 py-1 rounded mb-2">
          Services
        </span>
        <h2 className="text-3xl font-semibold text-gray-800">
          Premium Services at Your Fingertips
        </h2>
        <p className="mt-2 text-gray-600">
          Enjoy top-tier services with just one click.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={`https://via.placeholder.com/60`}
                alt="Service Icon"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-medium text-gray-800">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
