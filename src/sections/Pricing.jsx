import { motion } from "framer-motion";
import PricingCard from "../components/PricingCard";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import { Check } from "lucide-react";

const Pricing = () => {
  const [viewportMargin, setViewportMargin] = useState("-200px");
  const [isYearly, setIsYearly] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setViewportMargin("-50px");
    } else {
      setViewportMargin("-200px");
    }

    const handleResize = () => {
      const isMobileNow = window.innerWidth < 768;
      setViewportMargin(isMobileNow ? "-50px" : "-200px");
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const pricingData = {
    basic: {
      monthly: "₦50,000",
      yearly: "₦500,000",
    },
    standard: {
      monthly: "₦100,000",
      yearly: "₦1,000,000",
    },
    premium: {
      monthly: "₦200,000",
      yearly: "₦2,000,000",
    },
  };

  return (
    <section
      className="bg-[#00329B] pt-[56px] pb-[86px] px-6 xl:px-[128px]"
      id="pricing"
    >
      <div className="max-w-[1200px] mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: viewportMargin }}
          variants={container}
        >
          <motion.h2
            variants={item}
            className="text-3xl sm:text-[48px] font-bold mb-4 text-[#F0F0F2] leading-[50px]"
          >
            We&apos;ve got a plan for every{" "}
            <span
              className="inline-block text-[#F0F0F2] pl-2"
              style={{
                background:
                  "linear-gradient(90deg, #BCF939 0%, rgba(255,255,255,0) 100%)",
              }}
            >
              need
            </span>
          </motion.h2>

          <motion.div
            variants={item}
            className="mt-4 flex justify-center items-center gap-4 text-[#F0F0F2] text-base font-medium"
          >
            <span>Pay Monthly</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={isYearly}
                onChange={(e) => setIsYearly(e.target.checked)}
              />{" "}
              <div className="w-12 h-6 bg-transparent border border-white rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[4px] after:left-[8px] after:bg-[#BCF939] after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
            </label>
            <span>Pay Yearly</span>

            <button className="ml-2 bg-[#BCF939] text-[#00329B] font-medium px-4 py-1.5 rounded-full text-sm">
              Save 30%
            </button>
          </motion.div>
        </motion.div>

        <div className="rounded-2xl hidden mb-10 lg:flex w-full mt-20">
          <div className="w-[31%] flex items-start flex-col rounded-l-xl bg-[#F0F0F2] py-6 px-4">
            <p className="text-[#3D414D] text-base text-semibold">Free</p>
            <h1 className="xl:text-[48px] md:text-[32px] text-[#3D414D] font-bold">
              ₦0<span className="text-xs text-[#797D87]">/month</span>
            </h1>
            <p className="text-xs mb-4 text-[#797D87] font-medium">
              Test the waters with essential features.
            </p>
            <Button className="w-full h-[45px]">Get Started</Button>
          </div>
          <div className="w-[69%] bg-white rounded-r-xl py-14 grid grid-cols-2 xl:grid-cols-3 gap-x-3 gap-y-2 px-6">
            <div className="flex items-start gap-2">
              <div className="bg-[#BCF939] rounded-full p-1 flex items-center justify-center w-6 h-6">
                <Check size={14} stroke="#00329B" strokeWidth={2} />
              </div>
              <span className="text-[#1E1E1E] text-start">
                Add up to 500 contacts
              </span>
            </div>{" "}
            <div className="flex items-start gap-2">
              <div className="bg-[#BCF939] rounded-full p-1 flex items-center justify-center w-6 h-6">
                <Check size={14} stroke="#00329B" strokeWidth={2} />
              </div>
              <span className="text-[#1E1E1E] text-start">
                3 Lead Generation Forms
              </span>
            </div>
            <div className="flex items-start gap-2">
              <div className="bg-[#BCF939] rounded-full p-1 flex items-center justify-center w-6 h-6">
                <Check size={14} stroke="#00329B" strokeWidth={2} />
              </div>
              <span className="text-[#1E1E1E] text-start">1 User Seat</span>
            </div>{" "}
            <div className="flex items-start gap-2">
              <div className="bg-[#BCF939] rounded-full p-1 flex items-center justify-center w-6 h-6">
                <Check size={14} stroke="#00329B" strokeWidth={2} />
              </div>
              <span className="text-[#1E1E1E] text-start">
                15000 mails monthly
              </span>
            </div>{" "}
            <div className="flex items-start gap-2">
              <div className="bg-[#BCF939] rounded-full p-1 flex items-center justify-center w-6 h-6">
                <Check size={14} stroke="#00329B" strokeWidth={2} />
              </div>
              <span className="text-[#1E1E1E] text-start">100 SMS credits</span>
            </div>{" "}
            <div className="flex items-start gap-2">
              <div className="bg-[#BCF939] rounded-full p-1 flex items-center justify-center w-6 h-6">
                <Check size={14} stroke="#00329B" strokeWidth={2} />
              </div>
              <span className="text-[#1E1E1E] text-start">
                Flexible Add-ons Available
              </span>
            </div>{" "}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: viewportMargin }}
          transition={{ duration: 0.5 }}
          className="mt-12 grid lg:grid-cols-3 gap-10"
        >
          <div className="lg:hidden block">
            <PricingCard
              title="Free"
              price="₦0"
              note="Pay annually ($54) and save $126"
              features={[
                "Add up to 250 contacts",
                "3 Lead Generation Forms",
                "1 User Seat",
                "10000 mails monthly",
                "100 SMS credits",
                "Flexible Add-ons Available",
              ]}
            />
          </div>

          <PricingCard
            title="Basic"
            price={
              isYearly ? pricingData.basic.yearly : pricingData.basic.monthly
            }
            note="Boost your outreach with expanded messaging."
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
            price={
              isYearly
                ? pricingData.standard.yearly
                : pricingData.standard.monthly
            }
            note="Automate and scale your marketing efforts."
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
          <PricingCard
            title="Premium"
            price={
              isYearly
                ? pricingData.premium.yearly
                : pricingData.premium.monthly
            }
            note="Full marketing power with priority support"
            features={[
              "Everything in Standard",
              "Add up to 4000 contacts",
              "15,000 SMS credits",
              "4 WhatsApp Account",
            ]}
          />

          <div className="lg:hidden block">
            <PricingCard
              title="Enterprise"
              price="Custom"
              note="Custom solutions for large-scale marketing success."
              features={[
                "Scalable usage",
                "Dedicated account manager",
                "Custom integrations",
                "Priority support",
                "SLA & security compliance",
              ]}
            />
          </div>
        </motion.div>
        <div className="rounded-2xl mb-10 hidden lg:flex w-full mt-20">
          <div className="w-[31%] flex items-start flex-col rounded-l-xl bg-[#F0F0F2] py-6 px-4">
            <p className="text-[#3D414D] text-base text-semibold">Enterprise</p>
            <h1 className="xl:text-[48px] md:text-[32px] text-[#3D414D] font-bold">
              Custom<span className="text-xs text-[#797D87]">/month</span>
            </h1>
            <p className="text-xs mb-4 text-[#797D87] font-medium">
              Custom solutions for large-scale marketing success.{" "}
            </p>
            <Button className="w-full h-[45px]">Contact Us</Button>
          </div>
          <div className="w-[69%] bg-white rounded-r-xl py-14 grid grid-cols-2 xl:grid-cols-3 gap-x-3 gap-y-2 px-6">
            <div className="flex items-start gap-2">
              <div className="bg-[#BCF939] rounded-full p-1 flex items-center justify-center w-6 h-6">
                <Check size={14} stroke="#00329B" strokeWidth={2} />
              </div>
              <span className="text-[#1E1E1E] text-start">Scalable usage</span>
            </div>{" "}
            <div className="flex items-start gap-2">
              <div className="bg-[#BCF939] rounded-full p-1 flex items-center justify-center w-6 h-6">
                <Check size={14} stroke="#00329B" strokeWidth={2} />
              </div>
              <span className="text-[#1E1E1E] text-start">
                Dedicated account manager
              </span>
            </div>
            <div className="flex items-start gap-2">
              <div className="bg-[#BCF939] rounded-full p-1 flex items-center justify-center w-6 h-6">
                <Check size={14} stroke="#00329B" strokeWidth={2} />
              </div>
              <span className="text-[#1E1E1E] text-start">
                Custom integrations
              </span>
            </div>{" "}
            <div className="flex items-start gap-2">
              <div className="bg-[#BCF939] rounded-full p-1 flex items-center justify-center w-6 h-6">
                <Check size={14} stroke="#00329B" strokeWidth={2} />
              </div>
              <span className="text-[#1E1E1E] text-start">
                Priority support
              </span>
            </div>{" "}
            <div className="flex items-start gap-2">
              <div className="bg-[#BCF939] rounded-full p-1 flex items-center justify-center w-6 h-6">
                <Check size={14} stroke="#00329B" strokeWidth={2} />
              </div>
              <span className="text-[#1E1E1E] text-start">
                SLA & security compliance
              </span>
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
