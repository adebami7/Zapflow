import { ServiceCard } from "../components/ServiceCard";

import IconRevenue from "../assets/icons/Frame 64.png";
import IconTime from "../assets/icons/Frame 63.png";
import IconLeads from "../assets/icons/Frame 62.png";
import IconDecisions from "../assets/icons/Frame 61.png";

import Ellipse4 from "../assets/Ellipse 4.png"; // gray
import Ellipse7 from "../assets/Ellipse 7.png"; // blue
import Ellipse8 from "../assets/Ellipse 8.png"; // green
import Ellipse6 from "../assets/Ellipse 6.png"; // red 

const services = [
  {
    id: 1,
    icon: <img src={IconRevenue} alt="Revenue Icon" className="w-10 h-10" />,
    iconBgColor: "bg-[#7C3AED1a]",
    title: "Increase Revenue",
    description:
      "Drive more conversions by meeting customers on their favorite channels at the right time.",
  },
  {
    id: 2,
    icon: <img src={IconTime} alt="Save Time Icon" className="w-10 h-10" />,
    iconBgColor: "bg-[#A3E6351a]",
    title: "Save Time & Resources",
    description:
      "Ditch multiple subscriptions and complex systems. Zapflow does it all!",
  },
  {
    id: 3,
    icon: <img src={IconLeads} alt="Automate Leads Icon" className="w-10 h-10" />,
    iconBgColor: "bg-[#FACC151a]",
    title: "Automate Leads",
    description:
      "Automate messages, follow-ups, and campaigns so your team can focus on what matters.",
  },
  {
    id: 4,
    icon: <img src={IconDecisions} alt="Smarter Decisions Icon" className="w-10 h-10" />,
    iconBgColor: "bg-[#C084FC1a]",
    title: "Make Smarter Decisions",
    description:
      "Get real-time insights on every campaign and customer touchpoint, no guesswork needed.",
  },
];

function Services() {
  return (
    <section id="services" className="relative py-[70px] px-6 bg-[#f5f6fa] overflow-hidden">
    
      <img src={Ellipse4} alt="gray ellipse" className="absolute top-[120px] left-[100px] w-16 z-0" />
      <img src={Ellipse8} alt="green ellipse" className="absolute bottom-[40px] left-[24%] w-8 z-0" />
      <img src={Ellipse7} alt="blue ellipse" className="absolute bottom-[5px] right-[80px] w-[200px] z-0" />
      <img src={Ellipse6} alt="red ellipse" className="absolute top-[182px] right-[260px] w-4 z-0" />

      <div className="relative z-10 max-w-[1296px] mx-auto">

        <h1 className="mt-4 mb-2 font-semibold text-center text-[32px] lg:text-[36px] text-[#222f36]">
          Why choose{" "}
          <span
            className="text-[#1e1e1e] rounded inline-block"
            style={{
              background:
                "linear-gradient(90deg, #BCF939 0%, rgba(245, 255, 224, 0) 100%)",
            }}
          >
            Zapflow?
          </span>
        </h1>

        <p className="text-[15px] mb-12 text-[#98a5c3] text-center leading-relaxed">
          The all-in-one marketing automation tool designed to simplify sales, nurture <br />
          leads, and skyrocket conversions—all in one place!
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              iconBgColor={service.iconBgColor}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
