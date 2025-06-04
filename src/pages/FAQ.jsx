import { useState, useRef } from "react";
 import { Helmet } from "react-helmet";

import { Disclosure, Transition } from "@headlessui/react";
import { Plus, X } from "lucide-react";

function FAQ() {
  const sections = [
    {
      id: "general",
      name: "General",
      faqs: [
        {
          question: "Who can use Zapflow?",
          answer:
            "Our tool is perfect for digital marketers, social media managers, e-commerce businesses, agencies, and anyone looking to automate and optimize their digital marketing.",
        },
        {
          question: "How does Zapflow work?",
          answer:
            "Zapflow integrates with your existing marketing tools and platforms to automate workflows, provide analytics, and optimize your marketing campaigns in real-time.",
        },
        {
          question: "Is there a free version?",
          answer:
            "Yes, we offer a free tier with basic features. You can upgrade to our premium plans for access to advanced features and higher usage limits.",
        },
      ],
    },
    {
      id: "pricing",
      name: "Pricing",
      faqs: [
        {
          question: "What are the pricing plans?",
          answer:
            "We offer three pricing tiers: Basic, Pro, and Enterprise. Each tier provides different levels of access and features tailored to your business needs.",
        },
        {
          question: "Can I change plans later?",
          answer:
            "Yes, you can upgrade or downgrade your plan at any time from your account settings.",
        },
      ],
    },
    {
      id: "integration",
      name: "Integration",
      faqs: [
        {
          question: "Can I import external contact lists?",
          answer:
            "Absolutely! Zapflow supports importing contacts from CSV files and integrates with popular CRM platforms.",
        },
        {
          question: "Which platforms does Zapflow integrate with?",
          answer:
            "Zapflow integrates with major social media platforms, email marketing tools, CRMs, and analytics platforms. Check our integrations page for a full list.",
        },
      ],
    },
    {
      id: "invoice-receipt",
      name: "Invoice & Receipt",
      faqs: [
        {
          question: "How do I get invoices for my payments?",
          answer:
            "Invoices are automatically generated for all payments and can be downloaded from your account dashboard.",
        },
      ],
    },
    {
      id: "analytics",
      name: "Analytics & Reporting",
      faqs: [
        {
          question: "Are there analytics & reporting tools?",
          answer:
            "Yes, Zapflow provides comprehensive analytics and reporting tools to track your marketing performance and ROI.",
        },
      ],
    },
  ];

  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRefs = useRef({});

  const handleSectionClick = (id) => {
    setActiveSection(id);
    const element = sectionRefs.current[id];
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  const currentSection = sections.find(
    (section) => section.id === activeSection
  );

  return (
    <div className="bg-[#F0F0F2] min-h-screen">
      {/* SEO META TAGS */}
      <Helmet>
         <title>Zapflow FAQs | Get Answers to Common Questions</title>
        <meta
          name="description"
          content="Have questions about Zapflow? Browse our frequently asked questions for quick answers on features, pricing, usage, and more."
        />
        <link rel="canonical" href="https://www.zapflow.co/faqs" />
      </Helmet>

      <div className="py-[77px] max-w-[1280px] mx-auto xl:px-0 px-6">
        <div>
          <h1 className="text-[32px] mb-4 text-center font-bold text-[#5B5F6A]">
            <span
              className="text-[#5B5F6A] rounded inline-block pl-2"
              style={{
                background:
                  "linear-gradient(90deg, #BCF939 0%, rgba(245, 255, 224, 0) 60%)",
              }}
            >
              Frequently Asked Questions
            </span>
          </h1>
          <p className="max-w-[491px] mx-auto leading-7 text-center text-[#5B5F6A] mb-16">
            Need help? Check out the answers to your questions about Zapflow, or
            send an email to hi@zapflow.co
          </p>
        </div>
        <div className="flex lg:flex-row flex-col  items-start gap-10 lg:gap-[86px]">
          <div className="h-[256px] bg-[#CEDFFE] lg:w-[27%] w-full pt-4 shadow-lg overflow-hidden relative lg:sticky lg:top-[77px]">
            <div className="h-full overflow-y-auto">
              {sections.map((section) => (
                <div
                  key={section.id}
                  onClick={() => handleSectionClick(section.id)}
                  className={`text-${
                    activeSection === section.id ? "[#0A5FFA]" : "[#5B5F6A]"
                  } text-base px-5 py-2 mb-4 cursor-pointer hover:text-[#0A5FFA] transition-colors duration-200 font-semibold`}
                >
                  {section.name}
                </div>
              ))}
            </div>
            <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-[#CEDFFE] to-transparent pointer-events-none"></div>
          </div>

          <div className="lg:w-[73%] w-full">
            <div
              className="text-sm lg:text-base"
              ref={(el) => {
                if (el) {
                  const sectionElements = el.querySelectorAll("h3[id]");
                  sectionElements.forEach((section) => {
                    sectionRefs.current[section.id] = section;
                  });
                }
              }}
            >
              <div className="flex flex-col gap-6">
                {currentSection.faqs.map((faq, index) => (
                  <Disclosure
                    key={index}
                    open={openIndex === index}
                    onChange={(isOpen) => isOpen && setOpenIndex(index)}
                  >
                    {({ open }) => (
                      <div
                        className={`overflow-hidden transition-colors duration-200 rounded-[16px] ${
                          open ? "border" : "border-none"
                        }`}
                      >
                        <Disclosure.Button
                          className={`flex w-full items-center justify-between px-6 py-5 text-left ${
                            open ? "bg-white" : "bg-white"
                          }`}
                        >
                          <span
                            className={`font-medium text-base lg:text-[18px] ${
                              open ? "text-[#0A5FFA]" : "text-[#3D414D]"
                            }`}
                          >
                            {faq.question}
                          </span>
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center transition-transform duration-200 ${
                              open
                                ? "bg-[#0A5FFA] rotate-180"
                                : "bg-[#0A5FFA]-100 rotate-0"
                            }`}
                          >
                            {open ? (
                              <X
                                className="h-3.5 w-3.25 text-white"
                                strokeWidth={2}
                              />
                            ) : (
                              <Plus className="min-h-[24px] min-w-[24px] text-[#0A5FFA]" />
                            )}
                          </div>
                        </Disclosure.Button>
                        <Transition
                          enter="transition duration-100 ease-out"
                          enterFrom="transform scale-95 opacity-0"
                          enterTo="transform scale-100 opacity-100"
                          leave="transition duration-75 ease-out"
                          leaveFrom="transform scale-100 opacity-100"
                          leaveTo="transform scale-95 opacity-0"
                        >
                          <Disclosure.Panel className="px-6 py-5 text-base font-medium text-[#98a5c3] bg-white">
                            {faq.answer}
                          </Disclosure.Panel>
                        </Transition>
                      </div>
                    )}
                  </Disclosure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
