import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/autoplay";

import Avatar1 from "../assets/images/Osaro-Destiny.jpg";
import Avatar2 from "../assets/images/Toyin-Omotosho.jpg";
import Avatar3 from "../assets/images/Ronald-Nzimora.jpg";
import { AlignCenter } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Osaro Destiny | CEO, Ekiema Wellness",
    since: "2001",
    image: Avatar1,
    text: "The WhatsApp automation feature is next level—effortless lead nurturing and sales conversion.",
    rating: 5,
    daysAgo: 10,
  },
  {
    id: 2,
    name: "Toyin Omotosho | Internet Entrepreneur",
    since: "2023",
    image: Avatar2,
    text: "The WhatsApp automation feature is next level—effortless lead nurturing and sales conversion.",
    rating: 5,
    daysAgo: 10,
  },
  {
    id: 3,
    name: "Ronald Nzimora | Ecommerce Coach",
    since: "2022",
    image: Avatar3,
    text: "The WhatsApp automation feature is next level—effortless lead nurturing and sales conversion.",
    rating: 5,
    daysAgo: 8,
  },
];

function TestimonialCard({ name, role, text, image, isCenter }) {
  return (
    <div
      className={`flex flex-col items-center text-center rounded-lg p-6 transition-all duration-300 ${
        isCenter
          ? "bg-white shadow-xl scale-105"
          : "bg-white/20 backdrop-blur-sm scale-95"
      }`}
    >
      <img
        src={image}
        alt={name}
        className="w-16 h-16 rounded-full object-cover mb-4"
      />
      <svg
        className="w-8 h-8 text-gray-400 mb-2"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M7.17 8A4.17 4.17 0 003 12.17V21h6v-8.83A4.17 4.17 0 007.17 8zM17.17 8A4.17 4.17 0 0013 12.17V21h6v-8.83A4.17 4.17 0 0017.17 8z" />
      </svg>
      <p className={`text-sm ${isCenter ? "text-gray-700" : "text-white/80"}`}>
        {text}
      </p>
      <div className="mt-4">
        <h4
          className={`font-semibold ${
            isCenter ? "text-black" : "text-white"
          } text-sm`}
        >
          {name}
        </h4>
        <p
          className={`text-xs mt-1 ${
            isCenter ? "text-gray-500" : "text-white/70"
          }`}
        >
          {role}
        </p>
      </div>
    </div>
  );
}

function Testimonials ()  {
  return (
    <section className="py-20 bg-blue-700 relative">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
          What our customers are <span
            className="text-[#1e1e1e] rounded inline-block"
            style={{
              background:
                "linear-gradient(90deg, #BCF939 0%, rgba(245, 255, 224, 0) 100%)",
            }}
          >
            saying
          </span>
        </h2>
        <p className="text-white/80 mb-12">
          Customer satisfaction and experience are our top priorities
        </p>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          loop
          autoplay={{ delay: 4000 }}
          centeredSlides
          slidesPerView={3}
          spaceBetween={0}
          breakpoints={{
            0: {
              slidesPerView: 1, // Mobile: 1 card
            },
            640: {
              slidesPerView: 2, // Tablet: 2 cards
            },
            1024: {
              slidesPerView: 3, // Desktop: 3 cards
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  className={`relative rounded-3xl p-6 flex flex-col items-center text-center transition-all duration-300 ${
                    isActive
                      ? 'bg-white shadow-lg scale-105'
                      : 'bg-[#9DBFFD] backdrop-blur-md text-white scale-95'
                  }`}
                >
                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white absolute -top-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Quotation mark */}
                  <div className="text-9xl mt-10 mb-4 self-start text-left">
  <span className={isActive ? 'text-[#CEDFFE]' : 'text-white/70'}>
    &ldquo;
  </span>
</div>


                  {/* Testimonial text */}
                  <p
                    className={` self-start text-left text-[30px] mb-6 ${
                      isActive ? 'text-gray-700' : 'text-white'
                    }`}
                  >
                    {testimonial.text}
                  </p>

                  {/* Name */}
                  <h3 className="mb-1 self-start text-left">
  <span className={`block text-3xl font-bold ${
    isActive ? 'text-gray-900' : 'text-white'
  }`}>
    {testimonial.name.split('|')[0].trim()}
  </span>
  <span className={`block text-sm ${
    isActive ? 'text-gray-500' : 'text-white/70'
  }`}>
    {testimonial.name.split('|')[1]?.trim()}
  </span>
</h3>


                  {/* Role */}
                  <p
                    className={`text-sm ${
                      isActive ? 'text-gray-500' : 'text-white/70'
                    }`}
                  >
                    {testimonial.role}
                  </p>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;