import { CircleArrowRight } from "lucide-react";
import About from "../assets/about-us.png";
import SectionBadge from "../components/sectionBadge";

function AboutUs() {
  const features = [
    "Having accumulated years of experience, we have earned a reputable standing in our field.",
    "We have assembled a team of knowledgeable and proficient individuals.",
    "We recognize that every client is unique, and we customize our services accordingly.",
    "Designed with convenience in mind, our services aim to make your experience effortless.",
    "Our support is available around the clock, every day of the year.",
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
          Delivering More Than Expected!
        </h3>
        <p className="text-[#98a5c3] mb-6">
          Welcome to Zapflow, where we provide a unique and personalized
          experience designed to surpass your expectations. Choose us and
          discover what true excellence looks like.
        </p>

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
