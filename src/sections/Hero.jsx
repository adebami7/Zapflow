import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import HeroMain1 from "../assets/images/hero-main1.png";
import SubHero01 from "../assets/images/sub-hero01.png";
import SubHero02 from "../assets/images/sub-hero02.png";
import SubHero3 from "../assets/images/sub-hero3.png";
import SubHero04 from "../assets/images/sub-hero04.png";
import SubHero05 from "../assets/images/sub-hero05.png";
import SubHero06 from "../assets/images/sub-hero06.svg";
import SubHero07 from "../assets/images/sub-hero07.svg";
import SubHero08 from "../assets/images/sub-hero08.svg";
import SubHero09 from "../assets/images/sub-hero09.svg";
import SubHero10 from "../assets/images/sub-hero10.svg";
import SubHero11 from "../assets/images/sub-hero11.svg";
import SubHero12 from "../assets/images/sub-hero12.svg";

function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="home"
      className="bg-[#f7f8fc] px-4 lg:px-[72px] pt-11 lg:pt-6 relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col gap-10 lg:gap-0 lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 w-full">
          <p className="text-base text-[#0A5FFA] font-semibold mb-2">
            Smarter Campaigns. Better Results{" "}
          </p>
          <h1 className="text-[29px] lg:text-[55px] leading-[40px] w-[80%] lg:w-full lg:leading-[72px] font-bold text-black mb-4">
            Best WhatsApp, SMS, Email and Voice{" "}
            {isMobile ? (
              <>
                automation{" "}
                <span
                  className="text-[#1e1e1e] px-3 py-1 rounded inline-block"
                  style={{
                    background:
                      "linear-gradient(90deg, #BCF939 0%, rgba(245, 255, 224, 0) 100%)",
                  }}
                >
                  software.
                </span>
              </>
            ) : (
              <span
                className="text-[#1e1e1e] px-3 py-1 rounded inline-block"
                style={{
                  background:
                    "linear-gradient(90deg, #BCF939 0%, rgba(245, 255, 224, 0) 100%)",
                }}
              >
                automation software.
              </span>
            )}
          </h1>

          <p className="text-[#797D87] font-semibold leading-[28px] text-base mb-8 max-w-[500px]">
            Your all-in-one marketing software to connect with customers via
            WhatsApp, SMS, Email & Voice at scale. Send broadcasts, automate
            messages, track performance, and grow revenue.
          </p>
          <div className="flex gap-4">
            <Button className="px-6 py-3 text-sm">Get Started</Button>
            <Button variant="secondary" className="px-8 py-3 text-sm">
              See Demo
            </Button>
          </div>
        </div>

        <div className="relative lg:w-1/2 w-full mb-10 lg:mb-0">
          <motion.img
            src={HeroMain1}
            alt="Hero Visual"
            className="md:w-[593px] md:h-[593px] h-[440px] right-[28px] object-contain relative z-10 mx-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />

          <motion.img
            src={SubHero01}
            alt="sub-hero-01"
            className="absolute md:top-[153px] top-[108px] right-[-62px] z-10 w-[156px] h-[92px] md:w-[265px] md:h-[156px]"
            whileHover={{ y: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />

          <motion.img
            src={SubHero02}
            alt="sub-hero-02"
            className="absolute left-[2px] top-[305px] md:top-[435px] z-10 w-[156px] h-[92px] md:w-[265px] md:h-[156px]"
            whileHover={{ y: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />

          <img
            src={SubHero3}
            alt="sub-hero-3"
            className="absolute md:top-[210px] md:left-[95px] top-[100px] left-[90px] z-10 md:w-[151px] md:h-[46px] h-[27px] w-[89px]"
          />

          <img
            src={SubHero04}
            alt="sub-hero-4"
            className="absolute md:top-[258px] md:left-[95px] top-[128px] left-[89px] z-10 md:w-[217px] md:h-[45px] h-[26px] w-[128px]"
          />

          <img
            src={SubHero05}
            alt="sub-hero-05"
            className="absolute bottom-[24px] right-[50px] z-10 md:w-[217px] md:h-[45px] h-[26px] w-[128px]"
          />

          <img
            src={SubHero06}
            alt="sub-hero-06"
            className="absolute top-[105px] left-[20px] md:w-[63px] md:h-[63px] h-[36px] w-[36px]"
          />

          <img
            src={SubHero07}
            alt="sub-hero-07"
            className="absolute top-[105px] right-[32px]"
          />

          <img
            src={SubHero08}
            alt="sub-hero-08"
            className="absolute top-[265px] left-[135px]"
          />

          <img
            src={SubHero09}
            alt="sub-hero-09"
            className="absolute bottom-[50px] left-[-50px]"
          />

          <img
            src={SubHero10}
            alt="sub-hero-10"
            className="absolute bottom-[-18px] md:left-[490px] left-[220px] z-0 md:w-[211px] md:h-[211px] h-[124px] w-[124px]"
          />

          <img
            src={SubHero11}
            alt="sub-hero-11"
            className="absolute md:bottom-0 md:left-[195px] left-[96px] bottom-[-47px] z-0 md:h-[443px] md:w-[334px] w-[215px] h-[375px]"
          />

          <img
            src={SubHero12}
            alt="sub-hero-12"
            className="absolute z-10 top-[175px] left-0 lg:left-[480px]"
          />
        </div>
      </div>

      <div className="bg-[#D7FB88] py-8 mt-10 mx-[-72px]">
        <div className="max-w-[1296px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center gap-10 md:gap-6">
          {/* Stat 1 */}
          <div className="flex items-center text-left gap-[10px]">
            <p className="text-[56px] font-bold text-[#20211B]">2x</p>
            <p className="text-base leading-7 text-[#20211B]">
              Customer <br /> Retention
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center text-left gap-[10px]">
            <p className="text-[56px] font-bold text-[#20211B]">100%</p>
            <p className="text-base leading-7 text-[#20211B]">
              Messages <br /> Automated
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center text-left gap-[10px]">
            <p className="text-[56px] font-bold text-[#20211B]">+35%</p>
            <p className="text-base leading-7 text-[#20211B]">
              Engagement on <br /> WhatsApp
            </p>
          </div>

          {/* Stat 4 */}
          <div className="flex items-center text-left gap-[10px]">
            <p className="text-[32px] font-semibold text-[#20211B]">
              Real ROI in <br /> Weeks
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;