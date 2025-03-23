import { PricingCard } from "../components/PricingCard";
import SectionBadge from "../components/sectionBadge";

function Pricing() {
  const pricingData = [
    {
      tier: "Basic",
      price: "15",
      description: "Next-level tools for advanced users",
      features: [
        { name: "Lists", badge: "3" },
        { name: "Contacts", badge: "2500" },
        { name: "WhatsApp Status Automation", badge: "Yes" },
        { name: "Number of WhatsApp Status Automations", badge: "7 Daily" },
        { name: "Email Marketing", badge: "Yes" },
        { name: "Bulk SMS Units(Can Purchase more)", badge: "10" },
        { name: "Forms (Leads & Sales)", badge: "2" },
      ],
      isRecommended: false,
      trialDays: 14,
      guaranteeDays: 60,
      vatTax: 10,
      total: 25,
    },
    {
      tier: "Gold",
      price: "50",
      description: "Next-level tools for advanced users",
      features: [
        { name: "Lists", badge: "10" },
        { name: "Contacts", badge: "10500" },
        { name: "WhatsApp Status Automation", badge: "Yes" },
        { name: "Number of WhatsApp Status Automations", badge: "25 Daily" },
        { name: "Email Marketing", badge: "Yes" },
        { name: "Bulk SMS Units(Can Purchase more)", badge: "20" },
        { name: "Forms (Leads & Sales)", badge: "10" },
      ],
      isRecommended: true,
      trialDays: 14,
      guaranteeDays: 60,
      vatTax: 10,
      total: 60,
    },
    {
      tier: "Diamond",
      price: "200",
      description: "Next-level tools for advanced users",
      features: [
        { name: "Lists", badge: "Unlimited" },
        { name: "Contacts", badge: "Unlimited" },
        { name: "WhatsApp Status Automation", badge: "Yes" },
        { name: "Number of WhatsApp Status Automations", badge: "Unlimited" },
        { name: "Email Marketing", badge: "Yes" },
        { name: "Bulk SMS Units(Can Purchase more)", badge: "Unlimited" },
        { name: "Forms (Leads & Sales)", badge: "Unlimited" },
      ],
      isRecommended: false,
      trialDays: 14,
      guaranteeDays: 60,
      vatTax: 10,
      total: 210,
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
