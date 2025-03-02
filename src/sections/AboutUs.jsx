import { CircleArrowRight } from "lucide-react";
import About from "../assets/about-us.png";
import SectionBadge from "../components/sectionBadge";

function AboutUs() {
  const features = [
    "Automate Sales & Marketing – Save time and increase conversions with AI-powered automation.",
    "Lead Generation Made Simple – Create high-converting landing pages and lead forms in minutes.",
    "Engage & Nurture Leads – Send automated follow-ups via WhatsApp, email, and SMS.",
    "Sell Any Product, Anywhere – Digital products, courses, services, memberships, and more!",
  ];

  return (
    <section
      id="about"
      className="max-w-[1296px] mx-auto flex flex-col lg:flex-row items-center justify-between py-[70px] px-6"
    >
      <div className="xl:min-w-[550px] min-w-[450px] hidden lg:flex justify-start">
        <img src={About} alt="about" />
      </div>

      <div className="flex flex-col items-start">
        <SectionBadge label="About Us" className="!justify-start" />

        <h3 className="text-[28px] mt-4 mb-2 text-[#222f36] font-semibold">
        ZapFlow – The ALL-IN-ONE Marketing Automation Tool!
        </h3>
        <p className="text-[#98a5c3] mb-6">
          What is Zapflow?
        ZapFlow is an all-in-one marketing automation platform designed for <em> businesses, creators, and marketers </em> to capture leads, nurture prospects, and close sales effortlessly. With built-in <em>email, SMS, WhatsApp automation, landing page creation.</em> 
         ZapFlow helps you scale your business faster and smarter.
        </p>
        <h4 className="text-[28px] mt-4 mb-2 text-[#222f36] font-semibold">
        Why Zapflow?
        </h4>

        <div className="flex flex-col gap-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <CircleArrowRight
                color="#735dff"
                className="w-[14px] h-[14px] min-w-[14px] min-h-[14px]"
              />
              <p className="font-medium text-sm text-[#222f36]">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
