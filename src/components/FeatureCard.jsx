import React from "react";

const FeatureCard = ({ bgColor, images, title }) => {
  return (
    <div className="w-full max-w-[325px] h-[520px] rounded-[20px] overflow-hidden shadow-md relative bg-[#F0F0F2] flex items-end">
      {/* Customizable Images */}
      <div className="absolute inset-0">
        {images.map((imgObj, idx) => (
          <img
            key={idx}
            src={imgObj.src}
            alt={`feature-${idx}`}
            className="absolute"
            style={{
              ...imgObj.style,
              zIndex: imgObj.zIndex ?? 0,
            }}
          />
        ))}
      </div>

      {/* Text Label Overlay */}
      <div
        className="w-full h-[60px] flex items-center justify-center text-[#222F36] text-[23px] font-semibold relative z-[2]"
        style={{ backgroundColor: bgColor }}
      >
        {title}
      </div>
    </div>
  );
};

export default FeatureCard;
