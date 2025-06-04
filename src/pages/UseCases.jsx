import { useState } from "react";
import { Helmet } from "react-helmet";
import FlashSalesImg from "../assets/images/flashSaleImg.png";
import OnboardingImg from "../assets/images/OnboardingImg.png";
import AppointmentImg from "../assets/images/AppointmentImg.png";
import LeadNurturingImg from "../assets/images/LeadNurturingImg.png";
import EventPromoImg from "../assets/images/EventPromoImg.png";
import ReactivateImg from "../assets/images/ReactivateImg.png";

const UseCaseSection = ({ id, name, image, useCase, howZapflowHelps }) => {
  return (
    <section id={id}>
      <h3 className="text-[#5B5F6A] p-6 text-lg lg:text-2xl font-semibold">
        {name}
      </h3>
      <img src={image} className="w-full" alt={name} />
      <div className="p-6">
        <p className="text-[#5B5F6A] leading-7 font-medium">Use Case:</p>
        <p className="text-[#5B5F6A] leading-7 mb-4">{useCase}</p>
        <p className="text-[#5B5F6A] leading-7 font-medium">
          How Zapflow Helps:
        </p>
        <p className="text-[#5B5F6A] leading-7 mb-4">{howZapflowHelps}</p>
      </div>
    </section>
  );
};

function UseCases() {
  const useCases = [
    {
      name: "E-commerce Flash Sales",
      id: "ecommerce-flash-sales",
      img: FlashSalesImg,
      useCase:
        "A fashion brand needs to promote a 48-hour flash sale to drive quick revenue.",
      howZapflowHelps:
        "With Zapflow, the brand can send coordinated broadcasts across WhatsApp, Email, SMS, and Voice to ensure maximum visibility. By creating a multi-channel campaign with countdown reminders and targeted messages based on purchase history, the brand boosts urgency and conversions—all from one dashboard.",
    },
    {
      name: "Automated Customer Onboarding",
      id: "automated-customer-onboarding",
      img: OnboardingImg,
      useCase:
        "A SaaS company wants to guide new users through a 7-day product onboarding journey.",
      howZapflowHelps:
        "Using Automation Workflows, the company can trigger a series of emails and WhatsApp messages based on when a user signs up. The workflow includes welcome messages, feature highlights, and personalized check-ins—ensuring users are educated, engaged, and more likely to convert to paid plans.",
    },
    {
      name: "Appointment Reminders",
      id: "appointment-reminders",
      img: AppointmentImg,
      useCase:
        "A clinic wants to reduce no-shows by reminding patients of their upcoming appointments.",
      howZapflowHelps:
        "The clinic uses SMS and Voice automation to send timely reminders 24 hours before appointments. They also include reschedule options and confirmations. This keeps communication consistent and significantly reduces missed bookings.",
    },
    {
      name: "Lead Nurturing",
      id: "lead-nurturing",
      img: LeadNurturingImg,
      useCase:
        "A real estate agency wants to follow up with leads from website inquiries.",
      howZapflowHelps:
        "Zapflow Forms capture new leads and automatically assign them to grouped contacts. An automation sequence sends personalized follow-up messages via WhatsApp and Email, offering property listings based on location or budget preferences. Agents can then reach out manually if leads respond or engage.",
    },
    {
      name: "Event Promotions",
      id: "event-promotions",
      img: EventPromoImg,
      useCase:
        "A training company is hosting a webinar and needs to maximize attendance.",
      howZapflowHelps:
        "The company can build a multi-step campaign: form collection for registration, automated reminders (Email + WhatsApp), and post-event follow-ups with replay links. Real-time analytics show engagement, so they can identify hot leads for future outreach.",
    },
    {
      name: "Reactivating Dormant Customers",
      id: "reactivating-dormant-customers",
      img: ReactivateImg,
      useCase:
        "A subscription service wants to re-engage inactive users who haven’t logged in for 30 days.",
      howZapflowHelps:
        "An automation rule detects inactivity and sends a series of re-engagement messages. These include a personalized 'We Miss You' email, an exclusive offer via SMS, and a reminder call using Voice broadcast. The workflow updates contact tags based on engagement to help the team follow up manually if needed.",
    },
  ];

  const [activeItem, setActiveItem] = useState(useCases[0].id);

  const handleItemClick = (id) => {
    setActiveItem(id);
  };

  const activeUseCase = useCases.find((useCase) => useCase.id === activeItem);

  return (
    <div>
      {/* SEO META TAGS */}
      <Helmet>
        <title>Use Cases | Zapflow Automation for Business Growth</title>
        <meta
          name="description"
          content="Discover how businesses in e-commerce, real estate, coaching, and more use Zapflow to automate marketing, nurture leads, and boost conversions."
        />
        <link rel="canonical" href="https://www.zapflow.co/use-cases" />
      </Helmet>
      
      <div className="bg-[#06348A] h-[346px] px-6 flex items-center justify-center">
        <div className="max-w-[627px] mx-auto">
          <h2 className="lg:text-[32px] text-2xl text-center font-bold text-[#F0F0F2] mb-5">
            <span
              className="text-[#F0F0F2] leading-[50px] inline-block pl-2"
              style={{
                background:
                  "linear-gradient(90deg, #BCF939 0%, rgba(255, 255, 255, 0) 100%)",
              }}
            >
              Use Cases
            </span>
          </h2>
          <p className="lg:text-base text-center text-sm mt-[22px] font-medium text-[#F0F0F2]">
            Discover how teams use Zapflow to simplify communication, boost
            engagement, and drive results across industries, channels, and
            customer journeys.
          </p>
        </div>
      </div>
      <div className="bg-[#F0F0F2] lg:py-[55px] lg:px-[72px] p-6">
        <div className="flex lg:flex-row flex-col items-start gap-10 lg:gap-[86px]">
          <div className="h-[256px] bg-[#CEDFFE] lg:w-[27%] w-full pt-4 shadow-lg overflow-hidden relative lg:sticky lg:top-[77px]">
            <div className="h-full overflow-y-auto">
              {useCases.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`text-${
                    activeItem === item.id ? "[#0A5FFA]" : "[#5B5F6A]"
                  } text-base px-5 py-2 mb-4 cursor-pointer hover:text-[#0A5FFA] transition-colors duration-200 font-semibold`}
                >
                  {item.name}
                </div>
              ))}
            </div>
            <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-[#CEDFFE] to-transparent pointer-events-none"></div>
          </div>

          <div className="lg:w-[73%] w-full bg-white rounded-lg">
            <div className="text-sm lg:text-base">
              {activeUseCase && (
                <UseCaseSection
                  key={activeUseCase.id}
                  id={activeUseCase.id}
                  name={activeUseCase.name}
                  image={activeUseCase.img}
                  useCase={activeUseCase.useCase}
                  howZapflowHelps={activeUseCase.howZapflowHelps}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseCases;
