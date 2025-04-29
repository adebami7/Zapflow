import React from "react";
import FeatureCard from "../components/FeatureCard";

import Image18 from "../assets/image 18.png";
import Image20 from "../assets/image 20.png";
import Image21 from "../assets/image 21.png";
import Image22 from "../assets/image 22.png";

const HowZapflowWorks = () => {
  return (
    <section className="bg-[#00329B] py-20 px-4" id="how-it-works">
      <div className="max-w-[1296px] mx-auto">
        <h2 className="text-white text-[32px] sm:text-[36px] text-center font-semibold mb-12">
          How Zapflow{" "}
          <span
            className="text-[#ffffff] rounded inline-block"
            style={{
              background:
                "linear-gradient(90deg, #BCF939 0%, rgba(255, 255, 255, 0) 100%)",
            }}
          >
            works
          </span>
        </h2>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          <FeatureCard
            bgColor="#B6CFFE"
            title="Connect Your Channels"
            images={[
              {
                src: Image20,
                style: {
                  top: "-140px",
                  left: "0px",
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                },
                zIndex: 1,
              },
              {
                src: Image18,
                style: {
                  top: "90px",
                  left: "0px",
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                },
                zIndex: 2,
              },
            ]}
          />

          <FeatureCard
            bgColor="#D7FB88"
            title="Create Campaigns"
            images={[
              {
                src: Image21,
                style: {
                  top: "0px",
                  left: "0px",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                },
                zIndex: 1,
              },
            ]}
          />

          <FeatureCard
            bgColor="#FDEEAB"
            title="Track & Optimize"
            images={[
              {
                src: Image22,
                style: {
                  top: "0px",
                  left: "0px",
                  width: "100%",
                  height: "100%",
                  objectFit: "fill",
                },
                zIndex: 1,
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default HowZapflowWorks;
