import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import HeroBg from "../assets/images/academyHero.png";
import Button from "../components/Button";
import Academy01 from "../assets/images/academy01.png";
import { ArrowRight } from "lucide-react";

function Academy() {
  const academyContent = [
    {
      title: "Setting up WhatsApp, Email, SMS, and Voice",
      img: Academy01,
    },
  ];

  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  return (
    <div className="bg-[#F0F0F2]">
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        <div className="lg:pl-[72px] py-[135px] px-6">
          <h1 className="lg:text-[56px] text-[32px] font-bold text-[#F0F0F2]">
            <span
              className="text-[#F0F0F2] rounded inline-block pl-2"
              style={{
                background:
                  "linear-gradient(90deg, #BCF939 0%, rgba(245, 255, 224, 0) 60%)",
              }}
            >
              Zapflow Academy
            </span>
          </h1>
          <p className="lg:text-base text-sm font-semibold mt-4 mb-10 max-w-[559px] text-[#F0F0F2] leading-[28px]">
            Get free, quick, expert-led tutorials to help you create better
            campaigns, automate workflows, and grow with data-driven marketing.
            Learn how to use Zapflow to connect smarter
          </p>
          <ScrollLink to="academy" smooth={true} duration={300} offset={-175}>
            <Button className="px-6">Explore Courses</Button>
          </ScrollLink>
        </div>
      </div>

      <div
        id="academy"
        className="py-[77px] max-w-[1296px] mx-auto px-6 xl:px-0"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
          {academyContent.map((content, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <img
                src={content.img}
                className="rounded-t-lg object-cover h-[162px] w-full"
              />
              <div className="flex items-center gap-1 font-normal px-3 my-3">
                <div className="rounded-full bg-[#0A5FFA] w-2 h-2" />
                <p className="text-[#0A5FFA]">5 min</p>
              </div>
              <h3 className="lg:text-2xl text-lg font-medium text-[#5B5F6A] mb-1 px-3">
                {content.title}
              </h3>
              <Link
                to={`/academy/${createSlug(content.title)}`}
                className="p-3 text-[#989BA3] text-sm lg:ext-base flex items-center gap-1"
              >
                Get Started
                <ArrowRight size={16} color="#989BA3" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Academy;
