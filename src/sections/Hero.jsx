import { ArrowRight, Eye, Handshake, Lightbulb, Star } from "lucide-react";
import Cover from "../assets/hero-cover.png";
import CoverMobile from "../assets/hero-mobile.png";
import Main from "../assets/hero-main.png";
import Button from "../components/Button";
import SectionBadge from "../components/sectionBadge";
import { Card } from "../components/HeroCard";

function Hero() {
  return (
    <section id="home">
      <div
        className="hero-background bg-cover bg-center py-[70px] min-h-[640px] xl:min-h-[540px]"
        style={{ backgroundImage: `url(${Cover})` }}
      >
        <style>
          {`
            @media (max-width: 1024px) {
              .hero-background {
                background-image: url(${CoverMobile}) !important;
              }
            }
          `}
        </style>

        <div className="max-w-[1296px] mx-auto px-10 flex items-center justify-between">
          <div>
            <p className="text-white text-base mb-2 font-medium">
              Streamlined and Inclusive
            </p>
            <h1 className="text-[32px] mb-4 text-white font-semibold uppercase">
              Streamlined design, intuitively functional discover the{" "}
              <span className="text-[#ff9a13]">zapflow</span> template
            </h1>
            <p className="mb-12 text-base text-white max-w-[750px]">
              Experience seamless management with an admin template designed for
              optimal efficiency, featuring a sleek and contemporary interface
              that enhances task performance.
            </p>
            <div className="flex items-center gap-3">
              <Button className="h-[46px] !bg-[#0cc763] text-xs md:text-sm">
                View Demos
                <Eye size={14} color="#ffffff" />
              </Button>
              <Button className="h-[46px] !bg-[#ff5a29e6] text-xs md:text-sm">
                Learn More
                <ArrowRight size={14} color="#ffffff" />
              </Button>
            </div>
          </div>
          <img src={Main} alt="hero-main" className="hidden lg:block" />
        </div>
      </div>

      <div className="pt-[48px] pb-[70px] px-6 bg-[#f5f6fa]">
        <SectionBadge label="Glance" />

        <h1 className="mt-4 mb-2 font-semibold text-center lg:text-[28px] text-[#222f36]">
          Why Opt for Our Services?
        </h1>
        <p className="text-[15px] mb-12 text-[#98a5c3] text-center">
          We are dedicated to supporting you in achieving your objectives.
        </p>

        <div className="grid lg:grid-cols-3 max-w-[1320px] mx-auto gap-6">
          <Card
            icon={<Lightbulb color="white" />}
            iconBg="bg-[#735dff26]"
            iconColor="bg-[#735dff]"
            title="Commitment to Quality"
            description="We are dedicated to maintaining the highest standards in everything we do, from the initial consultation to the final delivery."
            buttonText="Read More"
          />
          <Card
            icon={<Star color="white" />}
            iconBg="bg-[#ff5a2926]"
            iconColor="bg-[#ff5a29]"
            title="Proven Track Record"
            description="With a portfolio of successful projects and satisfied clients, we have a history of delivering high-quality outcomes on time and within budget."
            buttonText="Read More"
          />
          <Card
            icon={<Handshake color="white" />}
            iconBg="bg-[#0cc76326]"
            iconColor="bg-[#0cc763]"
            title="Commitment to Quality"
            description="We are dedicated to maintaining the highest standards in everything we do, from the initial consultation to the final delivery."
            buttonText="Read More"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
