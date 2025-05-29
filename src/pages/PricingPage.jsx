import { Link } from "react-router-dom";
import React, { useState } from "react";
import Button from "../components/Button";
import { Check, X } from "lucide-react";

function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  const pricingPlans = [
    {
      title: "Free",
      price: "₦0",
      description: "Test the waters with essential features.",
      buttonText: "Get Started",
      route: "/",
    },
    {
      title: "Basic",
      monthlyPrice: "₦50,000",
      yearlyPrice: "₦500,000",
      description: "Boost your outreach with expanded messaging.",
      buttonText: "Subscribe Now",
      route: "/",
    },
    {
      title: "Standard",
      monthlyPrice: "₦100,000",
      yearlyPrice: "₦1,000,000",
      description: "Automate and scale your marketing efforts.",
      buttonText: "Subscribe Now",
      route: "/",
    },
    {
      title: "Premium",
      monthlyPrice: "₦200,000",
      yearlyPrice: "₦2,000,000",
      description: "Full marketing power with priority support.",
      buttonText: "Subscribe Now",
      route: "/",
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "Custom solutions for large-scale marketing success.",
      buttonText: "Contact Us",
      route: "/",
    },
  ];

  const comparisonData = [
    {
      feature: "Email Contacts",
      free: "250",
      basic: "1500",
      standard: "2500",
      premium: "5000",
      enterprise: "Custom",
    },
    {
      feature: "Monthly Emails",
      free: "10,000",
      basic: "Unlimited",
      standard: "Unlimited",
      premium: "Unlimited",
      enterprise: "Custom",
    },
    {
      feature: "Lead Generation Forms",
      free: "3",
      basic: "Unlimited",
      standard: "Unlimited",
      premium: "Unlimited",
      enterprise: "Custom",
    },
    {
      feature: "Email Templates (Drag & Drop)",
      free: true,
      basic: true,
      standard: true,
      premium: true,
      enterprise: "Custom",
    },
    {
      feature: "SMS Credits",
      free: "50",
      basic: "1000",
      standard: "2500",
      premium: "6000",
      enterprise: "Custom",
    },
    {
      feature: "WhatsApp Broadcast",
      free: false,
      basic: "Unlimited",
      standard: "Unlimited",
      premium: "Unlimited",
      enterprise: "Custom",
    },
    {
      feature: "WhatsApp Accounts",
      free: false,
      basic: "1",
      standard: "2",
      premium: "5",
      enterprise: "Custom",
    },
    {
      feature: "Custom Domain Integration",
      free: false,
      basic: true,
      standard: true,
      premium: true,
      enterprise: "Custom",
    },
  ];

  const renderFeatureValue = (value) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="w-5 h-5 text-green-500 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-red-500 mx-auto" />
      );
    }
    return <span className="text-center block">{value}</span>;
  };

  return (
    <>
      <div className="bg-[#F0F0F2] px-6 py-11 flex items-center flex-col">
        <h1 className="text-[32px] mb-4 text-center font-bold text-[#5B5F6A]">
          <span
            className="text-[#5B5F6A] rounded inline-block pl-2"
            style={{
              background:
                "linear-gradient(90deg, #BCF939 0%, rgba(245, 255, 224, 0) 60%)",
            }}
          >
            Flexible Plans for Every Business.
          </span>
          <span>Start Free</span>
        </h1>
        <p className="max-w-[739px] mx-auto leading-7 text-center text-[#5B5F6A] mb-10">
          Zapflow’s pricing is designed for businesses of all sizes, whether
          you’re just starting or scaling fast. Choose a plan that fits your
          communication needs, automate your workflows, and grow.
        </p>
        <Button className="text-base px-[65px] py-[10px]">Get Started</Button>
      </div>
      <div className="bg-[#06348A] w-full lg:pt-[56px] lg:px-[72px] py-10 px-6 pb-[120px]">
        <div>
          <h2 className="text-3xl text-center sm:text-[32px] font-bold mb-4 text-[#F0F0F2] leading-[50px]">
            We've got a plan for every{" "}
            <span
              className="inline-block text-[#F0F0F2] pl-2"
              style={{
                background:
                  "linear-gradient(90deg, #BCF939 0%, rgba(255,255,255,0) 100%)",
              }}
            >
              need
            </span>
          </h2>

          <div className="mt-4 flex justify-center items-center gap-4 text-[#F0F0F2] text-base flex-wrap font-medium">
            <span>Pay Monthly</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                onChange={() => setIsYearly(!isYearly)}
              />
              <div className="w-12 h-6 bg-transparent border border-white rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[4px] after:left-[8px] after:bg-[#BCF939] after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
            </label>
            <span>Pay Yearly</span>
            <button className="ml-2 bg-[#BCF939] text-[#00329B] font-medium px-4 py-1.5 rounded-full text-sm">
              Save 30%
            </button>
          </div>
        </div>

        <div className="mt-12 grid xl:grid-cols-5 md:grid-cols-3 gap-2">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-[#084BC4] py-6 px-4 rounded-lg h-[285px]"
            >
              <p className="text-base text-[#F0F0F2] mb-4">{plan.title}</p>
              <h1 className="text-[#F0F0F2] mb-4 font-bold text-[32px]">
                {plan.price
                  ? plan.price
                  : isYearly
                  ? plan.yearlyPrice
                  : plan.monthlyPrice}
                {plan.price !== "Custom" && (
                  <span className="text-[#F0F0F2] text-xs font-normal">
                    {isYearly ? "/year" : "/month"}
                  </span>
                )}
              </h1>
              <p className="font-medium h-[32px] text-[#F0F0F2] text-xs mb-4">
                {plan.description}
              </p>
              <Link to={plan.route}>
                <Button variant="secondary" className="w-full py-[10px]">
                  {plan.buttonText}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#F0F0F2]">
        <div className="px-6 lg:px-[117px] py-[72px]">
          <h2 className="text-center text-2xl mb-14 lg:text-[32px] font-bold text-[#3D414D]">
            Compare
            <span
              className="inline-block text-[#3D414D] pl-2"
              style={{
                background:
                  "linear-gradient(90deg, #BCF939 0%, rgba(255,255,255,0) 100%)",
              }}
            >
              Plans
            </span>
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 bg-white rounded-lg shadow-sm">
              <thead>
                <tr>
                  <th className="bg-gray-50 border-r border-gray-300 p-4 font-semibold text-gray-700 text-left">
                    Features
                  </th>
                  {pricingPlans.map((plan) => (
                    <th
                      key={plan.title}
                      className={`border-r border-gray-300 p-4 text-center font-semibold text-gray-700 ${
                        plan.title === "Free"
                          ? "bg-blue-200"
                          : plan.title === "Basic"
                          ? "bg-green-200"
                          : plan.title === "Standard"
                          ? "bg-yellow-200"
                          : plan.title === "Premium"
                          ? "bg-purple-200"
                          : "bg-cyan-200"
                      }`}
                    >
                      {plan.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, rowIndex) => (
                  <tr key={`row-${rowIndex}`}>
                    <td className="border-t border-r border-gray-300 p-4 font-medium text-gray-700 hover:bg-gray-50">
                      {row.feature}
                    </td>
                    <td className="border-t border-r border-gray-300 p-4 text-center hover:bg-gray-50">
                      {renderFeatureValue(row.free)}
                    </td>
                    <td className="border-t border-r border-gray-300 p-4 text-center hover:bg-gray-50">
                      {renderFeatureValue(row.basic)}
                    </td>
                    <td className="border-t border-r border-gray-300 p-4 text-center hover:bg-gray-50">
                      {renderFeatureValue(row.standard)}
                    </td>
                    <td className="border-t border-r border-gray-300 p-4 text-center hover:bg-gray-50">
                      {renderFeatureValue(row.premium)}
                    </td>
                    {rowIndex === 0 ? (
                      <td
                        className="border-t border-gray-300 p-4 text-center hover:bg-gray-50 align-middle"
                        rowSpan={comparisonData.length}
                      >
                        <span className="flex items-center justify-center h-full text-lg font-semibold text-gray-700">
                          Custom
                        </span>
                      </td>
                    ) : null}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default PricingPage;
