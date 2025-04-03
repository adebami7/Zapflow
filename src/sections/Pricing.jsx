import { useState } from "react";
import { Check, X } from "lucide-react";
import SectionBadge from "../components/sectionBadge";

function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState("Yearly");

  const pricingData = [
    { tier: "Free", price: "0", description: "Basic features to get started", isRecommended: false },
    { tier: "Basic", price: "15", description: "Basic features to get started", isRecommended: false },
    { tier: "Standard", price: "29", description: "For small businesses and professionals", isRecommended: true },
    { tier: "Premium", price: "69", description: "Advanced features for growing businesses", isRecommended: false },
    { tier: "Enterprise", price: "Custom", description: "For large-scale businesses with custom needs", isRecommended: false },
  ];

  const features = [
    { feature: "Email Contacts", values: ["500", "1,000", "2,500", "4,000", "Custom"] },
    { feature: "Monthly Emails", values: ["15,000", "Unlimited", "Unlimited", "Unlimited", "Custom"] },
    { feature: "Custom Email Integration", values: ["❌", "✅", "✅", "✅", "✅"] },
    { feature: "Lead Generation Forms", values: ["3", "Unlimited", "Unlimited", "Unlimited", "Unlimited"] },
    { feature: "Email Templates (Drag & Drop)", values: ["❌", "✅", "✅", "✅", "Everything in Advanced"] },
    { feature: "Link in Bio Tool", values: ["✅", "✅", "✅", "✅", "✅"] },
    { feature: "WhatsApp Accounts", values: ["❌", "1", "2", "4", "Custom"] },
    { feature: "WhatsApp Status Automation", values: ["❌", "Unlimited", "Unlimited", "Unlimited", "✅"] },
    { feature: "WhatsApp Broadcast", values: ["❌", "Unlimited", "Unlimited", "Unlimited", "✅"] },
    { feature: "Facebook Integration", values: ["❌", "Coming soon", "Coming soon", "Coming soon", "Coming soon"] },
    { feature: "Store Front", values: ["❌", "Coming soon", "Coming soon", "Coming soon", "Coming soon"] },
    { feature: "Landing Pages", values: ["❌", "10", "25", "Unlimited", "Unlimited"] },
    { feature: "User Seats", values: ["1", "3", "5", "10", "Unlimited"] },
    { feature: "Import Contacts from External Tools", values: ["Import from Mailchimp, Shopify, Zendesk etc", "Import from Mailchimp, Shopify, Zendesk etc", "Import from Mailchimp, Shopify, Zendesk etc", "Import from Mailchimp, Shopify, Zendesk etc", "Import from Mailchimp, Shopify, Zendesk etc"] },
    { feature: "Voice Call", values: ["", "", "", "", ""] },
    { feature: "SMS Credits", values: ["100", "5,000", "10,000", "15,000", "Custom"] },
    { feature: "Restful APIs", values: ["❌", "❌", "❌", "Coming Soon", "✅"] },
    { feature: "Reporting", values: ["Basic", "Basic", "Basic", "Enhanced", "✅"] },
    { feature: "24/7 Support", values: ["Live Chat & Email", "Live Chat & Email", "Live Chat & Email", "Live Chat & Email", "Dedicated Support"] },
  ];

  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      <SectionBadge label="Pricing" />

      <h3 className="text-[18px] mt-4 mb-2 text-[#222f36] font-semibold text-center">
        We Provide the Most Competitive Pricing
      </h3>

      <p className="text-[#98a5c3] mb-6 text-center max-w-[746px] mx-auto">
        Our plans are designed to be highly affordable, catering to every category with a focus on value and accessibility.
      </p>

      {/* Pricing Table */}
      <div className="mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="grid grid-cols-6 border-b">
          <div className="bg-gray-100 p-4 font-medium">Features</div>
          {pricingData.map((plan, index) => (
            <div key={index} className={`p-4 text-center font-medium ${plan.isRecommended ? "border-[#735dff] border-2 rounded-lg" : ""}`}>
              <h4 className="text-xl text-gray-700 ">{plan.tier}</h4>
              <p className="text-3xl font-bold">
                {plan.price === "Custom" ? plan.price : `$${plan.price}`}
              </p>
              <button className="bg-[#735dff] text-white px-4 py-2 mt-2 rounded hover:bg-purple-600">
                Subscribe Now
              </button>
            </div>
          ))}
        </div>

        {/* Features List */}
        {features.map((feature, featureIndex) => (
          <div key={featureIndex} className="grid grid-cols-6 border-t">
            <div className="bg-gray-100 p-4">{feature.feature}</div>
            {feature.values.map((value, planIndex) => (
              <div key={planIndex} className="p-4 text-center">
                {value === "✅" ? <Check className="text-green-500 inline-block" size={20} /> 
                : value === "❌" ? <X className="text-red-500 inline-block" size={20} /> 
                : value}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
