// src/sections/Pricing.jsx
import React from "react";

const Pricing = () => {
  const plans = [
    { title: "Basic", price: "$9/month", features: ["Feature A", "Feature B"] },
    { title: "Pro", price: "$29/month", features: ["Feature A", "Feature B", "Feature C"] },
    { title: "Enterprise", price: "Contact Us", features: ["Feature A", "Feature B", "Feature C", "Feature D"] },
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-100 text-center">
      <div className="pricing-container max-w-6xl mx-auto px-4">
        <span className="inline-block bg-orange-100 text-orange-500 uppercase text-xs px-2 py-1 rounded mb-2">
          Pricing
        </span>
        <h2 className="text-3xl font-semibold text-gray-800">Our Pricing Plans</h2>
        <p className="mt-2 text-gray-600">
          Choose a plan that suits your business needs.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-gray-800">{plan.title}</h3>
              <p className="mt-2 text-indigo-600 font-bold text-xl">{plan.price}</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center justify-center">
                    <span className="mr-2 text-indigo-600">●</span> {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded hover:opacity-90">
                {plan.title === "Enterprise" ? "Contact Sales" : "Choose Plan"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
