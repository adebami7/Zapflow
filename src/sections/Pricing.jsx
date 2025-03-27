import { PricingCard } from "../components/PricingCard";
import SectionBadge from "../components/sectionBadge";

function Pricing() {
  const pricingData = [
    {
      tier: "Free",
      price: "0",
      description: "Basic features to get started",
      features: [
        { name: "Email Contacts", badge: "500" },
        { name: "Monthly Emails", badge: "15,000" },
        { name: "Custom Email Integration", badge: "❌" },
        { name: "Lead Generation Forms", badge: "3" },
        { name: "Email Templates (Drag & Drop)", badge: "❌" },
        { name: "Link in Bio Tool", badge: "✅" },
        { name: "WhatsApp Accounts", badge: "❌" },
        { name: "WhatsApp Status Automation", badge: "❌" },
        { name: "WhatsApp Broadcast", badge: "❌" },
        { name: "Custom Payment Wallet", badge: "❌" },
        { name: "Facebook Integration", badge: "❌" },
        { name: "Sell Digital Products", badge: "❌" },
        { name: "E-commerce Store (Physical Products)", badge: "❌" },
        { name: "Landing Pages", badge: "❌" },
        { name: "User Seats", badge: "1" },
        { name: "SMS Credits", badge: "❌" },
        { name: "Restful APIs", badge: "❌" },
        { name: "Enhanced Reporting", badge: "❌" },
        { name: "24/7 Support", badge: "✅ (Live Chat & Email)" },
      ],
      isRecommended: false,
    },
    {
      tier: "Starter",
      price: "99",
      description: "For small businesses and professionals",
      features: [
        { name: "Email Contacts", badge: "2,500" },
        { name: "Monthly Emails", badge: "Unlimited" },
        { name: "Custom Email Integration", badge: "✅" },
        { name: "Lead Generation Forms", badge: "Unlimited" },
        { name: "Email Templates (Drag & Drop)", badge: "✅" },
        { name: "Link in Bio Tool", badge: "✅" },
        { name: "WhatsApp Accounts", badge: "2" },
        { name: "WhatsApp Status Automation", badge: "✅ (Unlimited)" },
        { name: "WhatsApp Broadcast", badge: "✅ (Unlimited)" },
        { name: "Custom Payment Wallet", badge: "Coming Soon" },
        { name: "Facebook Integration", badge: "Coming Soon" },
        { name: "Sell Digital Products", badge: "Coming Soon" },
        { name: "E-commerce Store (Physical Products)", badge: "Coming Soon" },
        { name: "Landing Pages", badge: "Unlimited" },
        { name: "User Seats", badge: "3" },
        { name: "SMS Credits", badge: "5,000" },
        { name: "Restful APIs", badge: "❌" },
        { name: "Enhanced Reporting", badge: "❌" },
        { name: "24/7 Support", badge: "✅ (Live Chat & Email)" },
      ],
      isRecommended: true,
    },
    {
      tier: "Advanced",
      price: "249",
      description: "Advanced features for growing businesses",
      features: [
        { name: "Email Contacts", badge: "5,500" },
        { name: "Monthly Emails", badge: "Unlimited" },
        { name: "Custom Email Integration", badge: "✅" },
        { name: "Lead Generation Forms", badge: "Unlimited" },
        { name: "Email Templates (Drag & Drop)", badge: "✅" },
        { name: "Link in Bio Tool", badge: "✅" },
        { name: "WhatsApp Accounts", badge: "5" },
        { name: "WhatsApp Status Automation", badge: "✅ (Unlimited)" },
        { name: "WhatsApp Broadcast", badge: "✅ (Unlimited)" },
        { name: "Custom Payment Wallet", badge: "Coming Soon" },
        { name: "Facebook Integration", badge: "Coming Soon" },
        { name: "Sell Digital Products", badge: "Coming Soon" },
        { name: "E-commerce Store (Physical Products)", badge: "Coming Soon" },
        { name: "Landing Pages", badge: "Unlimited" },
        { name: "User Seats", badge: "10" },
        { name: "SMS Credits", badge: "15,000" },
        { name: "Restful APIs", badge: "✅ (Coming Soon)" },
        { name: "Enhanced Reporting", badge: "✅ (Coming Soon)" },
        { name: "24/7 Support", badge: "✅ (Live Chat & Email)" },
      ],
      isRecommended: false,
    },
    {
      tier: "Enterprise",
      price: "Custom",
      description: "For large-scale businesses with custom needs",
      features: [
        { name: "Email Contacts", badge: "Custom" },
        { name: "Monthly Emails", badge: "Custom" },
        { name: "Custom Email Integration", badge: "✅" },
        { name: "Lead Generation Forms", badge: "Unlimited" },
        { name: "Email Templates (Drag & Drop)", badge: "Everything in Advanced" },
        { name: "Link in Bio Tool", badge: "✅" },
        { name: "WhatsApp Accounts", badge: "Custom" },
        { name: "WhatsApp Status Automation", badge: "✅" },
        { name: "WhatsApp Broadcast", badge: "✅" },
        { name: "Custom Payment Wallet", badge: "Coming Soon" },
        { name: "Facebook Integration", badge: "Coming Soon" },
        { name: "Sell Digital Products", badge: "Coming Soon" },
        { name: "E-commerce Store (Physical Products)", badge: "Coming Soon" },
        { name: "Landing Pages", badge: "Unlimited" },
        { name: "User Seats", badge: "20" },
        { name: "SMS Credits", badge: "Custom" },
        { name: "Restful APIs", badge: "✅" },
        { name: "Enhanced Reporting", badge: "✅" },
        { name: "24/7 Support", badge: "Dedicated Support" },
      ],
      isRecommended: false,
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
        <div className="grid md:grid-cols-4 gap-8">
          {pricingData.map((plan, index) => (
            <div key={index} className="flex">
              <PricingCard {...plan} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
