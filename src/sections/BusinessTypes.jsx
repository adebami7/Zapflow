import React from "react";
import Ellipse4 from "../assets/Ellipse 4.png"; // gray
import Ellipse7 from "../assets/Ellipse 7.png"; // blue
import Ellipse8 from "../assets/Ellipse 8.png"; // green
import Ellipse6 from "../assets/Ellipse 6.png"; // red 

const BusinessCard = ({ image, title }) => {
  return (
    <div className="w-full max-w-[230px] h-[320px] rounded-[16px] overflow-hidden shadow-md relative z-10">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="absolute top-4 left-4 text-white text-[16px] font-semibold drop-shadow-lg">
        {title}
      </div>
    </div>
  );
};

const BusinessTypes = () => {
  return (
    <section className="bg-[#F5F9FF] py-20 px-4 relative overflow-hidden">
    
    <img
      src={Ellipse4}
      alt="gray ellipse"
      className="absolute bottom-[60px] left-[24%] w-[45px] h-[45px] z-0"
    />
    <img
      src={Ellipse7}
      alt="blue ellipse"
      className="absolute top-[180px] left-[58%] w-[180px] h-[180px] z-0"
    />
    <img
      src={Ellipse8}
      alt="lemon dot"
      className="absolute top-[180px] left-[10%] w-[35px] h-[35px] z-0"
    />
    <img
      src={Ellipse6}
      alt="pink dot"
      className="absolute bottom-[40px] right-[60px] w-[16px] h-[16px] z-0"
    />
    

      <div className="max-w-[1296px] mx-auto text-center relative z-10">
        <h2 className="text-[32px] sm:text-[36px] font-semibold text-[#222F36] mb-2">
          Built for businesses that talk to{" "}
          <span
            className="text-[#000000] rounded inline-block"
            style={{
              background:
                "linear-gradient(90deg, #BCF939 0%, rgba(255, 255, 255, 0) 100%)",
            }}
          >
            customers
          </span>
        </h2>
        <p className="text-sm text-[#6B7280] mb-12">
          Zapflow works perfectly for:
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <BusinessCard image="/src/assets/Business 1.png" title="eCommerce Brands" />
          <BusinessCard image="/src/assets/Business 2.png" title="Local Businesses" />
          <BusinessCard image="/src/assets/Business 3.png" title="Freelancers & Agencies" />
          <BusinessCard image="/src/assets/Business 4.png" title="SaaS & Startups" />
        </div>
      </div>
    </section>
  );
};

export default BusinessTypes;
