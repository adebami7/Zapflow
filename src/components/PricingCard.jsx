import { CheckIcon, XIcon } from "lucide-react";
import Button from "./Button";

export function PricingCard({ tier, price, description, features, isRecommended }) {
  return (
    <div
      className={`relative bg-white p-6 rounded-lg flex flex-col h-full border ${
        isRecommended ? "border-purple-500 shadow-lg" : "border-gray-200 shadow-md"
      }`}
    >
      {/* Recommended Badge */}
      {isRecommended && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm">
            Recommended
          </span>
        </div>
      )}

      {/* Header Section */}
      <div className="text-center mb-6 p-4 rounded-md bg-gray-100">
        <h3 className="text-xl font-semibold mb-2">{tier}</h3>
        <p className="text-gray-500 text-sm mb-4">{description}</p>
        <div className="flex items-center justify-center">
          <span className="text-purple-600 text-3xl font-bold">{price}</span>
          <span className="text-gray-500 text-sm ml-1">/ Price Per Month</span>
        </div>
      </div>

      {/* Features Section */}
      <div className="space-y-4 mb-6 flex-grow">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center">
            {feature.enabled ? (
              <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
            ) : (
              <XIcon className="h-5 w-5 text-red-500 mr-2" />
            )}
            <span className="flex-grow text-xs lg:text-sm">{feature.name}</span>
          </div>
        ))}
      </div>

      {/* Button */}
      <Button className="w-full bg-purple-500 text-white hover:bg-purple-600">
        Subscribe
      </Button>
    </div>
  );
}
