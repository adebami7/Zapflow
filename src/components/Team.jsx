// src/sections/Team.jsx
import React from "react";

const teamMembers = [
  { name: "Mason Wallace", role: "Chief Strategist", img: "https://via.placeholder.com/150/FFC4B2/000000?text=Mason" },
  { name: "Henry Morgan", role: "Lead Developer", img: "https://via.placeholder.com/150/FFC4B2/000000?text=Henry" },
  { name: "Lucas Hayes", role: "UX Designer", img: "https://via.placeholder.com/150/FFC4B2/000000?text=Lucas" },
  { name: "Chloe Lewis", role: "Project Manager", img: "https://via.placeholder.com/150/FFC4B2/000000?text=Chloe" },
];

const Team = () => {
  return (
    <section id="team" className="py-16 bg-gray-100 text-center">
      <div className="max-w-6xl mx-auto px-4">
        <span className="inline-block bg-orange-100 text-orange-500 uppercase text-xs px-2 py-1 rounded mb-2">
          Our Team
        </span>
        <h2 className="text-3xl font-semibold text-gray-800">The Team Behind Our Success</h2>
        <p className="mt-2 text-gray-600">
          Meet our talented team who ensure every project runs smoothly.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-medium text-gray-800">{member.name}</h3>
              <p className="text-indigo-600">{member.role}</p>
              <div className="mt-4 flex justify-center space-x-3">
                {["F", "T", "L", "G"].map((social, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center hover:opacity-90"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
