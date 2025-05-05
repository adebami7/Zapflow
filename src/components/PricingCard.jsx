import { Check } from "lucide-react";

const PricingCard = ({
  title,
  price,
  features,
  highlighted,
  note,
  isPopular,
}) => {
  const bgTop = highlighted ? "#CEDFFE" : isPopular ? "#F0F0F2" : "#F0F0F2";

  return (
    <div
      className={`relative flex flex-col justify-between w-full min-h-[550px] h-[700px] lg:h-full rounded-[10px] overflow-hidden shadow-md border
        ${isPopular ? "border-[#0A5FFA] border-dashed" : "border-transparent"}
      `}
    >
      {isPopular && (
        <div className="absolute top-6 right-8 bg-[#BCF939] text-[#00329B] text-xs font-semibold px-3 py-1 rounded-full z-10 shadow-sm">
          POPULAR
        </div>
      )}

      <div className="py-6 px-8" style={{ backgroundColor: bgTop }}>
        <div className="text-left space-y-4">
          <h3 className="text-base font-semibold text-[#3D414D]">{title}</h3>
          <p className="text-[48px] font-bold text-[#3D414D] leading-[50px]">
            {price}
            <span className="text-xs font-normal text-[#797D87]"> /Month</span>
          </p>
          {note && <p className="text-xs text-[#797D87] font-medium">{note}</p>}
        </div>

        <button className="mt-6 w-full bg-[#0A5FFA] hover:bg-[#BCF939] text-base transition text-white hover:text-[#3D414D] py-2 rounded-full font-medium">
          Subscribe Now
        </button>
      </div>

      <ul className="flex-1 px-4 py-6 text-base text-left space-y-[22px] bg-white">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <div className="bg-[#BCF939] rounded-full p-1 flex items-center justify-center w-6 h-6">
              <Check size={14} stroke="#00329B" strokeWidth={2} />
            </div>
            <span className="text-[#1E1E1E]">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
