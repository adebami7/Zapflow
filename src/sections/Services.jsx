import {
  Building2,
  CalendarCheck2,
  CircleDollarSign,
  Earth,
  HandCoins,
  Mail,
  ShoppingCartIcon,
  UserCheck,
} from "lucide-react";
import SectionBadge from "../components/sectionBadge";
import { ServiceCard } from "../components/ServiceCard";

const services = [
  {
    id: 1,
    icon: <Earth color="white" />,
    backgroundColor: "bg-brandPrimary",
    iconBgColor: "bg-brandPrimary-100",
    title: "Business Audit",
    description:
      "This is just a placeholder for an actual text that will be added later for business audit",
  },
  {
    id: 2,
    icon: <CircleDollarSign color="white" />,
    backgroundColor: "bg-[#ff5a29]",
    iconBgColor: "bg-[#ff5a291a]",
    title: "Automate Sales & Marketing",
    description:
      "Save time and increase conversions with AI-powered automation.",
  },
  {
    id: 3,
    icon: <Building2 color="white" />,
    backgroundColor: "bg-[#0cc763]",
    iconBgColor: "bg-[#0cc7631a]",
    title: "Trading",
    description:
      "This is just a placeholder for an actual text that will be added later for trading.",
  },
  {
    id: 4,
    icon: <ShoppingCartIcon color="white" />,
    backgroundColor: "bg-[#0c9cfc]",
    iconBgColor: "bg-[#0c9cfc1a]",
    title: "Sell Any Product, Anywhere",
    description:
      "Digital products, courses, services, memberships, and more!",
  },
  {
    id: 5,
    icon: <HandCoins color="white" />,
    backgroundColor: "bg-[#ff9a13]",
    iconBgColor: "bg-[#ff9a131a]",
    title: "Financial Plans",
    description:
      "This is just a placeholder for an actual text that will be added later for financial plans",
  },
  {
    id: 6,
    icon: <Mail color="white" />,
    backgroundColor: "bg-[#00d8d8]",
    iconBgColor: "bg-[#00d8d81a]",
    title: "Engage & Nurture Leads",
    description:
      "Send automated follow-ups via WhatsApp, email, and SMS.",
  },
  {
    id: 7,
    icon: <UserCheck color="white" />,
    backgroundColor: "bg-[#ff383c]",
    iconBgColor: "bg-[#ff383c1a]",
    title: "Lead Generation Made Simple",
    description:
      "Create high-converting landing pages and lead forms in minutes.",
  },
  {
    id: 8,
    icon: <CalendarCheck2 color="white" />,
    backgroundColor: "bg-[#fe549b]",
    iconBgColor: "bg-[#fe549b1a]",
    title: "Planning",
    description:
      "This is just a placeholder for an actual text that will be added later for planning.",
  },
];

function Services() {
  return (
    <section id="services" className="py-[70px] px-6 bg-[#f5f6fa]">
      <div className="max-w-[1296px] mx-auto">
        <SectionBadge label="Services" />
        <h1 className="mt-4 mb-2 font-semibold text-center lg:text-[28px] text-[#222f36]">
          Why Zapflow
        </h1>
        <p className="text-[15px] mb-12 text-[#98a5c3] text-center">
          Enjoying top-tier services with ease and convenience.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              backgroundColor={service.backgroundColor}
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
