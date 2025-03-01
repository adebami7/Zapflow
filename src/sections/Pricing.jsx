import { PricingCard } from "../components/PricingCard";
import SectionBadge from "../components/sectionBadge";

function Pricing() {
  const pricingData = [
    {
      tier: "Basic",
      price: "9.99",
      description: "Next-level tools for advanced users",
      features: [
        { name: "Unicorn Support", badge: "On Demand" },
        { name: "Teleportation Technology" },
        { name: "Gravity-Defying Speed", badge: "New" },
        { name: "Quantum Leap Security" },
        { name: "Infinite Updates" },
      ],
      isRecommended: false,
      trialDays: 14,
      guaranteeDays: 60,
      vatTax: 10,
      total: 29,
    },
    {
      tier: "Standard",
      price: "19.99",
      description: "Next-level tools for advanced users",
      features: [
        { name: "Unicorn Support", badge: "Live Chat" },
        { name: "Teleportation Technology" },
        { name: "Gravity-Defying Speed", badge: "Turbo" },
        { name: "Quantum Leap Security" },
        { name: "Infinite Updates" },
      ],
      isRecommended: true,
      trialDays: 14,
      guaranteeDays: 60,
      vatTax: 10,
      total: 59,
    },
    {
      tier: "Premium",
      price: "29.99",
      description: "Next-level tools for advanced users",
      features: [
        { name: "Unicorn Support", badge: "24/7 Support" },
        { name: "Teleportation Technology" },
        { name: "Gravity-Defying Speed", badge: "New" },
        { name: "Quantum Leap Security" },
        { name: "Infinite Updates" },
      ],
      isRecommended: false,
      trialDays: 14,
      guaranteeDays: 60,
      vatTax: 10,
      total: 99,
    },
  ];

  return (
    <section id="pricing" className="max-w-[1296px] mx-auto py-[70px] px-6">
      <SectionBadge label="Pricing" />

      <h3 className="text-[28px] mt-4 mb-2 text-[#222f36] font-semibold text-center">
        We Provide the Most Competitive Pricing
      </h3>
      <p className="text-[#98a5c3] mb-6 text-center max-w-[746px] mx-auto">
        Our plans are designed to be highly affordable, catering to every
        category with a focus on value and accessibility.
      </p>
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid md:grid-cols-3 gap-8">
          {pricingData.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
