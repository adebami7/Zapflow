import Business01 from "../assets/images/business01.svg";
import Business02 from "../assets/images/business02.svg";
import Business03 from "../assets/images/business03.svg";
import Business04 from "../assets/images/business04.svg";
import SubHero06 from "../assets/images/sub-hero06.svg";
import SubHero07 from "../assets/images/sub-hero07.svg";
import SubHero08 from "../assets/images/sub-hero08.svg";
import SubHero10 from "../assets/images/sub-hero10.svg";

const BusinessCard = ({ image, title }) => {
  return (
    <div
      className="w-full h-[470px] p-[18px] rounded-lg bg-cover bg-center relative"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute top-9 w-full left-1/2 transform -translate-x-1/2 text-[#F0F0F2] text-2xl font-semibold">
        {title}
      </div>
    </div>
  );
};

const BusinessTypes = () => {
  return (
    <section className="bg-[#F5F9FF] px-6 md:px-[72px] pt-[51px] pb-[150px] relative overflow-hidden">
      <img
        src={SubHero06}
        alt="gray ellipse"
        className="absolute bottom-[120px] left-[23%]  z-0"
      />
      <img
        src={SubHero10}
        alt="blue ellipse"
        className="absolute top-[180px] left-[64%]  z-0"
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
        <h2 className="text-[32px] sm:text-[48px] font-bold text-[#3D414D] mb-5 leading-[50px]">
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
        </h2>
        <p className="text-base text-[#797D87] font-medium mb-[73px]">
          Zapflow works perfectly for:
        </p>

        <div className="grid lg:grid-cols-4 gap-[36px]">
          <BusinessCard image={Business01} title="eCommerce Brands" />
          <BusinessCard image={Business02} title="Local Businesses" />
          <BusinessCard image={Business03} title="Freelancers & Agencies" />
          <BusinessCard image={Business04} title="SaaS & Startups" />
        </div>
      </div>
    </section>
  );
};

export default BusinessTypes;
