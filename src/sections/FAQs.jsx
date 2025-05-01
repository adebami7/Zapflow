import { Disclosure, Transition } from "@headlessui/react";
// import SectionBadge from "../components/sectionBadge";
import { Plus, X } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Who can use ZapFlow?",
    answer:
      "Our tool is perfect for digital marketers, social media managers, e-commerce businesses, agencies, and anyone looking to automate and optimize their digital marketing.",
  },
  {
    question: "How does ZapFlow work?",
    answer:
      "Our platform integrates with your preferred communication channels (email, SMS, social media, etc.) crafting, scheduling, and sending automated messages based on your audience’s behavior and engagement.",
  },
  {
    question: "What makes ZapFlow different from other automation tools?",
    answer:
      "Unlike generic automation tools, we offer AI-powered personalization, advanced segmentation, real-time analytics, multi-channel support, and seamless integrations, all in one platform.",
  },
  {
    question: "What types of messages can I automate?",
    answer:
      "You can subscribe to our newsletter by entering your email address in the subscription box found at the bottom of our homepage.",
  },
  {
    question: "Where can I edit my address?",
    answer: [
      "You can automate various types of messages, including:",
      "Email marketing campaigns",
      "Social media posts and replies",
      "SMS notifications and promotions",
      "Chatbot responses",
      "Drip campaigns and follow-ups"
    ]
  },
  {
    question: "Does the tool provide analytics and reporting?",
    answer:
      "Absolutely! Our built-in analytics dashboard helps you track message performance, engagement rates, conversions, and other key metrics.",
  },
  {
    question: "Can I import my contact list from other platforms?",
    answer:
      "Yes! You can easily upload CSV files or integrate with CRMs like HubSpot, Salesforce, and Mailchimp to import your existing contact lists.",
  },
  {
    question: "Is there a limit to the number of messages I can send?",
    answer: "Message limits depend on your subscription plan. Check our Pricing Page for details on message allowances and upgrades.",
  },
  {
    question: "Does ZapFlow support A/B testing?",
    answer:
      "Yes! Our A/B testing feature allows you to compare different message variations to see which performs best, helping you optimize your marketing strategy.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes! We offer a 14 days free trial so you can explore all features before committing to a plan.",
  },
  {
    question: "What are your pricing plans?",
    answer:
      "We offer flexible pricing plans to suit businesses of all sizes. Visit our Pricing Page for detailed information on our plans and features.",
  },
  {
    question: "Is my data secure with ZapFlow?",
    answer:
      "Absolutely! We prioritize data security and comply with industry standards to protect your information.",
  },
  {
    question: "What if I need help using the platform?",
    answer:
      "Our support team is available 24/7 via live chat, email, and phone.",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "You can cancel your subscription anytime through your account settings. No hidden fees or contracts.",
  },
];

function FAQs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faqs" className="py-[70px] px-6 bg-[#f0f0f2]">
      <div className="max-w-[1296px] mx-auto">
        {/* <SectionBadge label="FAQs" /> */}
        <h1 className="mt-4 mb-2 font-semibold text-center text-[32px] lg:text-[36px] text-[#222f36]">
          Frequently asked{" "}
          <span
            className="text-[#1e1e1e] rounded inline-block"
            style={{
              background:
                "linear-gradient(90deg, #BCF939 0%, rgba(245, 255, 224, 0) 100%)",
            }}
          >
            questions?
          </span>
        </h1>
        <p className="text-[15px] mb-12 text-[#98a5c3] text-center">
        Got questions? We've got answers.
        </p>

        <div className="grid md:grid-cols-2 gap-4 max-w-[1200px] mx-auto">
          <div className="space-y-4">
            {faqs.slice(0, 6).map((faq, index) => (
              <Disclosure
                key={index}
                defaultOpen={index === 0}
                open={openIndex === index}
                onChange={(isOpen) => isOpen && setOpenIndex(index)}
              >
                {({ open }) => (
                  <div className="overflow-hidden transition-colors duration-200 rounded-[6px] border shadow-sm">
                    <Disclosure.Button
                      className={`flex w-full items-center justify-between px-4 py-3 text-left ${
                        open ? "bg-[#0A5FFA]-100" : "bg-white"
                      }`}
                    >
                      <span
                        className={`font-medium text-[13px] ${
                          open ? "text-[#0A5FFA]" : "text-[#222f36]"
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
                          <X className="h-3.5 w-3.25 text-white" strokeWidth={2} />
                        ) : (
                          <Plus className="h-3 w-3 text-[#0A5FFA]" />
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
                      {/* <Disclosure.Panel className="py-3 px-4 text-xs font-medium text-[#98a5c3]">
                        {faq.answer}
                      </Disclosure.Panel> */}
                      <Disclosure.Panel className="py-3 px-4 text-xs font-medium text-[#98a5c3]">
  {Array.isArray(faq.answer) ? (
    <>
      <p>{faq.answer[0]}</p> {/* Display the first sentence as normal text */}
      <ul className="pl-5 space-y-1">
  {faq.answer.slice(1).map((item, index) => (
    <li key={index} className="flex items-center gap-2">
      <span className="text-[#0A5FFA]">✅</span> {/* Custom bullet icon */}
      {item}
    </li>
  ))}
</ul>

    </>
  ) : (
    <p>{faq.answer}</p>
  )}
</Disclosure.Panel>


                    </Transition>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
          <div className="space-y-4">
            {faqs.slice(6, 12).map((faq, index) => (
              <Disclosure
                key={index + 6}
                open={openIndex === index + 6}
                onChange={(isOpen) => isOpen && setOpenIndex(index + 6)}
              >
                {({ open }) => (
                  <div className="overflow-hidden transition-colors duration-200 rounded-[6px] border shadow-sm">
                    <Disclosure.Button
                      className={`flex w-full items-center justify-between px-4 py-3 text-left ${
                        open ? "bg-[#0A5FFA]-100" : "bg-white"
                      }`}
                    >
                      <span
                        className={`font-medium text-[13px] ${
                          open ? "text-[#0A5FFA]" : "text-[#222f36]"
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
                          <X className="h-3.5 w-3.25 text-white" strokeWidth={2} />
                        ) : (
                          <Plus className="h-3 w-3 text-[#0A5FFA]" />
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
                      <Disclosure.Panel className="py-3 px-4 text-xs font-medium text-[#98a5c3]">
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
    </section>
  );
}

export default FAQs;
