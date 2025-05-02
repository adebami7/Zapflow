import Quote from "../assets/images/quote.svg";
import Testimonial01 from "../assets/images/testimonial01.svg";
import Testimonial02 from "../assets/images/testimonial02.svg";
import Testimonial03 from "../assets/images/testimonial03.svg";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Testimonials() {
  return (
    <div className="bg-[#06348A] pt-[56px] pb-[114px] px-[128px]">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-[32px] sm:text-[48px] text-center font-bold text-[#F0F0F2] mb-5 leading-[50px]">
          What our customers are{" "}
          <span
            className="text-[#F0F0F2] inline-block pl-2"
            style={{
              background:
                "linear-gradient(90deg, #BCF939 0%, rgba(255, 255, 255, 0) 100%)",
            }}
          >
            {" "}
            saying
          </span>
        </h2>
        <p className="text-base text-[#F0F0F2] text-center font-medium">
          Customer satisfaction and experience are our top priorities
        </p>

        <div className="flex items-center justify-center relative pt-[5rem]">
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
            <ChevronLeft className="text-white w-10 h-10" />
          </button>

          <div className="bg-[#CEDFFE] w-[305px] h-[250px] rounded-xl p-4 relative mt-6 mr-[-24px] z-0">
            <img
              src={Testimonial01}
              className="absolute top-[-35px] w-[68px] h-[68px] left-1/2 transform -translate-x-1/2"
            />
            <img src={Quote} />
            <p className="text-base font-medium text-[#5B5F6A] leading-7 mt-[-50px]">
              From Email to SMS, we finally have one tool to reach all our
              customers. The best part? It&apos;s ridiculously easy to use.
            </p>
            <h1 className="text-[#3D414D] font-bold text-xl mt-4">Tolu B.</h1>
            <p className="text-[#797D87] font-medium text-xs">
              Founder of Sprout&Scale
            </p>
          </div>

          <div className="bg-white w-[445px] h-[365px] rounded-xl py-6 pl-4 pr-16 relative z-10">
            <img
              src={Testimonial03}
              className="absolute top-[-35px] w-[100px] h-[100px] left-1/2 transform -translate-x-1/2"
            />
            <img src={Quote} className="w-[73px]" />
            <p className="text-2xl font-medium text-[#5B5F6A] leading-[40px] mt-[-64px]">
              Zapflow helped us cut down on manual follow-ups by 80%. Now, our
              campaigns run themselves and conversions are way up!
            </p>
            <h1 className="text-[#3D414D] font-bold text-[32px] mt-4">
              Chidi A.
            </h1>
            <p className="text-[#797D87] font-medium text-base">
              Growth Lead at NovaMart
            </p>
          </div>

          <div className="bg-[#CEDFFE] w-[305px] h-[250px] rounded-xl p-4 relative mt-6 ml-[-24px] z-0">
            <img
              src={Testimonial02}
              className="absolute top-[-35px] w-[68px] h-[68px] left-1/2 transform -translate-x-1/2"
            />
            <img src={Quote} />
            <p className="text-base font-medium text-[#5B5F6A] leading-7 mt-[-50px]">
              The analytics dashboard is a game changer. We know exactly
              what&apos;s working, and we&apos;ve doubled our lead conversions.
            </p>
            <h1 className="text-[#3D414D] font-bold text-xl mt-4">Sarah E.</h1>
            <p className="text-[#797D87] font-medium text-xs">
              CEO at FinSpace
            </p>
          </div>

          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
            <ChevronRight className="text-white w-10 h-10" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
