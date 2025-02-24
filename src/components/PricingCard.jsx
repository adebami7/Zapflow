import { CheckIcon } from "lucide-react";
import Button from "./Button";

export function PricingCard({
  tier,
  price,
  description,
  features,
  isRecommended,
  vatTax,
  total,
  trialDays,
  guaranteeDays,
}) {
  return (
    <div
      className={`relative bg-white p-6 rounded-lg ${
        isRecommended
          ? "border-2 border-brandPrimary"
          : "border border-gray-200"
      }`}
    >
      {isRecommended && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-brandPrimary text-white px-4 py-1 rounded-full text-sm">
            Recommended
          </span>
        </div>
      )}
      <div
        className={`text-center mb-6 p-4 rounded-md ${
          isRecommended ? "bg-brandPrimary-100" : "bg-gray-100"
        }`}
      >
        <h3 className="text-xl font-semibold mb-2">{tier}</h3>
        <p className="text-gray-500 text-sm mb-4">{description}</p>
        <div className="flex items-center justify-center">
          <span className="text-brandPrimary text-3xl font-bold">${price}</span>
          <span className="text-gray-500 text-sm ml-1">/ Price Per Month</span>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
            <span className="flex-grow text-xs lg:text-sm">{feature.name}</span>
            {feature.badge && (
              <span
                className={`
              text-[10px]   lg:text-xs px-2 py-1 rounded-full ml-2
                ${
                  feature.badge === "On Demand"
                    ? "bg-orange-100 text-orange-600"
                    : ""
                }
                ${
                  feature.badge === "Live Chat"
                    ? "bg-green-100 text-green-600"
                    : ""
                }
                ${
                  feature.badge === "24/7 Support"
                    ? "bg-purple-100 text-brandPrimary"
                    : ""
                }
                ${feature.badge === "New" ? "bg-blue-100 text-blue-600" : ""}
                ${
                  feature.badge === "Turbo"
                    ? "bg-yellow-100 text-yellow-600"
                    : ""
                }
              `}
              >
                {feature.badge}
              </span>
            )}
          </div>
        ))}

        <div className="flex items-center text-xs lg:text-sm">
          <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
          <span>Free Trial</span>
          <span className="text-xs lg:text-sm text-gray-500 ml-2">
            {trialDays} Days
          </span>
        </div>

        <div className="flex items-center text-xs lg:text-sm">
          <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
          <span>Money-Back Guarantee</span>
          <span className="text-xs lg:text-sm text-gray-500 ml-2">
            {guaranteeDays} Days
          </span>
        </div>
      </div>

      <div className="space-y-2 mb-6 text-xs lg:text-sm">
        <div className="flex justify-between text-sm">
          <span>Vat Tax</span>
          <span>${vatTax}</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span className="text-brandPrimary">${total}</span>
        </div>
      </div>

      <Button
        className={`w-full 
          ${
            isRecommended
              ? ""
              : "!border !border-brandPrimary !text-brandPrimary font-semibold bg-white hover:bg-purple-50"
          }`}
      >
        Schedule A Demo
      </Button>
    </div>
  );
}
