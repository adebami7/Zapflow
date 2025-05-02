import PricingCard from "../components/PricingCard";

const Pricing = () => {
  return (
    <section
      className="bg-[#00329B] pt-[56px] pb-[86px] px-[128px]"
      id="pricing"
    >
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl sm:text-[48px] font-bold mb-4 text-[#F0F0F2] leading-[50px]">
          We’ve got a plan for every{" "}
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

        {/* Toggle Switch */}
        <div className="mt-4 flex justify-center items-center gap-4 text-[#F0F0F2] text-base font-medium">
          <span>Pay Monthly</span>
          <div className="w-[50px] h-[24px] bg-transparent border border-white rounded-full p-1 flex items-center justify-start">
            <div className="w-[18px] h-[18px] rounded-full bg-[#BCF939]" />
          </div>
          <span>Pay Yearly</span>

          {/* Save 30% button */}
          <button className="ml-2 bg-[#BCF939] text-[#00329B] font-medium px-4 py-1.5 rounded-full text-sm">
            Save 30%
          </button>
        </div>

        {/* First Row */}
        <div className="mt-12 grid lg:grid-cols-3 gap-10">
          <PricingCard
            title="Free"
            price="$0"
            note="Test the waters with essential features"
            features={[
              "Add up to 500 contacts",
              "15000 mails monthly",
              "3 Lead Generation Forms",
              "100 SMS credits",
              "1 User Seat",
            ]}
          />
          <PricingCard
            title="Basic"
            price="$15"
            note="Pay annually ($54) and save $126"
            features={[
              "Add up to 1000 contacts",
              "Unlimited mails monthly",
              "Unlimited Lead Generation Forms",
              "5000 SMS credits",
              "Custom Email Integration",
              "1 WhatsApp Account",
              "Unlimited WhatsApp Status Automation",
              "Unlimited WhatsApp Broadcast",
              "10 Landing Pages",
              "3 User Seats",
            ]}
          />
          <PricingCard
            title="Standard"
            price="$29"
            note="Pay annually ($105) and save $243"
            isPopular
            highlighted
            features={[
              "Everything in Basic",
              "Add up to 2500 contacts",
              "10,000 SMS credits",
              "2 WhatsApp Account",
              "Unlimited Landing Pages",
              "5 User Seats",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
