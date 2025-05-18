import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import Business01 from "../assets/images/business01.png";
import Business02 from "../assets/images/business02.png";
import Business03 from "../assets/images/business03.png";
import Business04 from "../assets/images/business04.png";
import Business05 from "../assets/images/business05.png";
import SubHero06 from "../assets/images/sub-hero06.svg";
import SubHero07 from "../assets/images/sub-hero07.svg";
import SubHero08 from "../assets/images/sub-hero08.svg";
import SubHero10 from "../assets/images/sub-hero10.svg";
import "swiper/css";
import "swiper/css/navigation";

const BusinessCard = ({ image, title, subtext }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full h-[470px] relative">
      <motion.div
        className={`w-full h-full p-[18px] rounded-lg bg-cover bg-center`}
        style={{ backgroundImage: `url(${image})` }}
        whileHover={{ y: -12 }}
        transition={{ type: "spring", stiffness: 300 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)",
          }}
          className="absolute rounded-t-lg top-0 w-full pt-6 h-[127px] left-1/2 transform -translate-x-1/2 text-[#F0F0F2] text-2xl font-semibold"
        >
          {title}
        </div>
        <motion.div
          className="absolute bottom-0 left-0 right-0 overflow-hidden rounded-b-lg"
          initial={{ height: 0 }}
          animate={{
            height: isHovered ? 96 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)",
          }}
        >
          <motion.div
            className="p-4"
            initial={{ opacity: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-[#F0F0F2] text-base text-start">{subtext}</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const BusinessTypes = () => {
  const sectionRef = useRef(null);
  const swiperRef = useRef(null);

  const businessTypes = [
    {
      image: Business01,
      title: "eCommerce Brands",
      subtext: "Convert more visitors into paying customers.",
    },
    {
      image: Business02,
      title: "Local Businesses",
      subtext: "Engage customers and drive sales on autopilot.",
    },
    {
      image: Business03,
      title: "Freelancers & Agencies",
      subtext: "Automate client outreach and follow-ups.",
    },
    {
      image: Business04,
      title: "SaaS & Startups",
      subtext: "Onboard users, nurture leads, and scale outreach.",
    },
    {
      image: Business05,
      title: "Schools & Education",
      subtext: "Send updates & reminders directly to students and parents.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-[#F5F9FF] px-6 md:px-[72px] pt-[51px] pb-[100px] relative overflow-hidden"
    >
      <img
        src={SubHero06}
        alt="gray ellipse"
        className="absolute bottom-[120px] left-[23%] z-0"
      />
      <img
        src={SubHero10}
        alt="blue ellipse"
        className="absolute top-[180px] left-[64%] z-0"
      />
      <img
        src={SubHero08}
        alt="lemon dot"
        className="absolute top-[185px] left-[7%] z-0"
      />
      <img
        src={SubHero07}
        alt="pink dot"
        className="absolute bottom-[65px] right-[90px] z-0"
      />

      <div className="max-w-[1440px] mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-200px 0px -200px 0px" }}
          className="text-[32px] sm:text-[48px] font-bold text-[#3D414D] mb-5 leading-[50px]"
        >
          Built for businesses that talk to{" "}
          <span
            className="text-[#3D414D] inline-block pl-2"
            style={{
              background:
                "linear-gradient(90deg, #BCF939 0%, rgba(255, 255, 255, 0) 100%)",
            }}
          >
            customers
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, margin: "-200px 0px -200px 0px" }}
          className="text-base text-[#797D87] font-medium mb-[73px]"
        >
          Zapflow works perfectly for:
        </motion.p>

        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay, Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 12,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 0,
              },
            }}
            loop={true}
            onSwiper={(swiper) => console.log(swiper)}
            className="!pb-12 !mr-0"
          >
            {businessTypes.map((business, index) => (
              <SwiperSlide key={index}>
                <div className="h-full flex items-center justify-center p-4">
                  <BusinessCard
                    image={business.image}
                    title={business.title}
                    subtext={business.subtext}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BusinessTypes;
