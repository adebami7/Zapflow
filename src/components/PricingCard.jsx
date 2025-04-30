import React from "react";
import { Check } from "lucide-react";

const PricingCard = ({ title, price, features, highlighted, note, isPopular }) => {
  const bgTop = highlighted ? "#CEDFFE" : isPopular ? "#F0F0F2" : "#F0F0F2";

  return (
    <div
      className={`relative flex flex-col justify-between w-full max-w-[280px] min-h-[550px] rounded-[10px] overflow-hidden shadow-md border
        ${isPopular ? "border-[#BCF939]" : "border-gray-200"}
      `}
    >
      {/* POPULAR badge */}
      {isPopular && (
        <div className="absolute top-3 right-3 bg-[#BCF939] text-[#00329B] text-xs font-semibold px-3 py-1 rounded-full z-10 shadow-sm">
          POPULAR
        </div>
      )}

      {/* Top content */}
      <div className="p-6" style={{ backgroundColor: bgTop }}>
        <div className="text-left space-y-2">
          <h3 className="text-xl font-semibold text-[#1E1E1E]">{title}</h3>
          <p className="text-3xl font-bold text-[#1E1E1E]">
            {price}
            <span className="text-sm font-normal text-[#6B7280]"> /Month</span>
          </p>
          {note && <p className="text-xs text-gray-500">{note}</p>}
        </div>

        <button className="mt-6 w-full bg-[#1866FF] hover:bg-[#0049cc] transition text-white py-2 rounded-full font-medium text-sm">
          Subscribe Now
        </button>
      </div>

      {/* Features */}
      <ul className="flex-1 px-3 py-6 text-sm text-left space-y-3 bg-white">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <div className="bg-[#BCF939] rounded-full p-1 flex items-center justify-center w-6 h-6">
              <Check size={14} stroke="#00329B" strokeWidth={2} />
            </div>
            <span className="text-[#1E1E1E]">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
