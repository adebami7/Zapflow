import Cover from "../assets/testimonials-cover.png";
import SectionBadge from "../components/sectionBadge";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import User from "../assets/testimonial-face.jpg";
import "swiper/css";

const testimonials = [
  {
    id: 1,
    name: "Donovan Frost",
    since: "2001",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jc2nx20KcBKrkRGKPbR6rtQ9YRdkno.png",
    text: "The sleek design immediately caught my eye, and the functionality sealed the deal. It's not just eye candy; it performs exceptionally well",
    rating: 5,
    daysAgo: 10,
  },
  {
    id: 2,
    name: "Autumn Quinn",
    since: "2023",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jc2nx20KcBKrkRGKPbR6rtQ9YRdkno.png",
    text: "The sleek design immediately caught my eye, and the functionality sealed the deal. It's not just eye candy; it performs exceptionally well",
    rating: 5,
    daysAgo: 10,
  },
  {
    id: 3,
    name: "Sarah Johnson",
    since: "2022",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jc2nx20KcBKrkRGKPbR6rtQ9YRdkno.png",
    text: "The sleek design immediately caught my eye, and the functionality sealed the deal. It's not just eye candy; it performs exceptionally well",
    rating: 5,
    daysAgo: 8,
  },
  {
    id: 4,
    name: "Michael Chen",
    since: "2021",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jc2nx20KcBKrkRGKPbR6rtQ9YRdkno.png",
    text: "The sleek design immediately caught my eye, and the functionality sealed the deal. It's not just eye candy; it performs exceptionally well",
    rating: 5,
    daysAgo: 12,
  },
  {
    id: 5,
    name: "Emma Wilson",
    since: "2023",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jc2nx20KcBKrkRGKPbR6rtQ9YRdkno.png",
    text: "The sleek design immediately caught my eye, and the functionality sealed the deal. It's not just eye candy; it performs exceptionally well",
    rating: 5,
    daysAgo: 5,
  },
  {
    id: 6,
    name: "James Miller",
    since: "2022",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jc2nx20KcBKrkRGKPbR6rtQ9YRdkno.png",
    text: "The sleek design immediately caught my eye, and the functionality sealed the deal. It's not just eye candy; it performs exceptionally well",
    rating: 5,
    daysAgo: 15,
  },
];

function TestimonialCard({ name, since, text, rating, daysAgo }) {
  return (
    <div className="bg-[#7d67fd] backdrop-blur-sm rounded-lg p-4 transition-all duration-300 border-2 border-[#7f6cfd]">
      <div className="flex items-center gap-3 p-2 mb-4 bg-[#907efd] rounded-[4px]">
        <img
          src={User}
          alt="user"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h3 className="text-white font-medium">{name}</h3>
          <p className="text-white/60 text-xs">User since {since}</p>
        </div>
      </div>
      <p className="text-white/90 mb-4 text-[13px] font-medium">
        {text}
        <button className="text-white/60 hover:text-white ml-1 text-xs">
          -- Read More
        </button>
      </p>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <span className="text-white/60 text-sm">Rating: </span>
          <div className="flex">
            {[...Array(rating)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 text-yellow-400 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
        <span className="text-green-500 text-sm">{daysAgo} days ago</span>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <section
      className="px-6 py-[70px] bg-contain bg-center bg-repeat"
      style={{ backgroundImage: `url(${Cover})` }}
    >
      <div className="max-w-[1296px] mx-auto">
        <div className="mt-6">
          <SectionBadge
            label="Testimonials"
            sectionText="text-white"
            border="1px solid rgba(255, 255, 255, 0.08)"
            boxShadow="3px 3px 0 0 rgba(255, 255, 255, 0.2)"
          />

          <h1 className="mt-4 mb-2 font-semibold text-center lg:text-[28px] text-white">
            See What People Are Saying About Us
          </h1>
          <p className="text-[15px] mb-12 text-white text-center">
            Customer satisfaction and experience are our top priorities.
          </p>

          <div className="mt-8">
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              loop={true}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
              }}
              className="testimonials-swiper "
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <TestimonialCard {...testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
