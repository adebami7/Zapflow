import { Disclosure, Transition } from "@headlessui/react";
import SectionBadge from "../components/sectionBadge";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Where can I sign up for your newsletter?",
    answer:
      "You can sign up for our newsletter through the subscription form in the footer of our website or on our dedicated newsletter page.",
  },
  {
    question: "General Terms & Conditions (GTC)",
    answer:
      "Our terms and conditions outline the rules, guidelines, and agreements between our company and our customers. Please review them carefully.",
  },
  {
    question: "Do I need to create an account to make an order?",
    answer:
      "Yes, you'll need to create an account to place an order. This helps us manage your orders and provide better service.",
  },
  {
    question: "Where can I subscribe to your newsletter?",
    answer:
      "You can subscribe to our newsletter by entering your email address in the subscription box found at the bottom of our homepage.",
  },
  {
    question: "Where can in edit my address?",
    answer:
      "You can edit your address in your account settings under the 'Profile' or 'Addresses' section.",
  },
  {
    question: "What are your opening hours?",
    answer:
      "Our standard opening hours are Monday to Friday, 9 AM to 6 PM. We're closed on weekends and major holidays.",
  },
  {
    question: "Do I have the right to return an item?",
    answer:
      "Yes, you have the right to return items within 30 days of purchase, provided they are in their original condition.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers.",
  },
  {
    question: "How can I track my order?",
    answer:
      "You can track your order by logging into your account and viewing the order status.",
  },
  {
    question: "What is your shipping policy?",
    answer:
      "We offer free shipping on orders over $50. Standard shipping takes 3-5 business days.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach our customer support team via email, phone, or live chat during business hours.",
  },
  {
    question: "What is your privacy policy?",
    answer:
      "Our privacy policy details how we collect, use, and protect your personal information.",
  },
];

function FAQs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-[70px] px-6 bg-[#f5f6fa]">
      <div className="max-w-[1296px] mx-auto">
        <SectionBadge label="FAQs" />
        <h1 className="mt-4 mb-2 font-semibold text-center lg:text-[28px] text-[#222f36]">
          Frequently asked questions?
        </h1>
        <p className="text-[15px] mb-12 text-[#98a5c3] text-center">
          We have shared some of the most frequently asked questions to help you
          out.
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
                        open ? "bg-brandPrimary-100" : "bg-white"
                      }`}
                    >
                      <span
                        className={`font-medium text-[13px] ${
                          open ? "text-brandPrimary" : "text-[#222f36]"
                        }`}
                      >
                        {faq.question}
                      </span>
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center transition-transform duration-200 ${
                          open
                            ? "bg-brandPrimary rotate-180"
                            : "bg-brandPrimary-100 rotate-0"
                        }`}
                      >
                        {open ? (
                          <Minus className="h-3 w-3 text-white" />
                        ) : (
                          <Plus className="h-3 w-3 text-brandPrimary" />
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
                        open ? "bg-brandPrimary-100" : "bg-white"
                      }`}
                    >
                      <span
                        className={`font-medium text-[13px] ${
                          open ? "text-brandPrimary" : "text-[#222f36]"
                        }`}
                      >
                        {faq.question}
                      </span>
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center transition-transform duration-200 ${
                          open
                            ? "bg-brandPrimary rotate-180"
                            : "bg-brandPrimary-100 rotate-0"
                        }`}
                      >
                        {open ? (
                          <Minus className="h-3 w-3 text-white" />
                        ) : (
                          <Plus className="h-3 w-3 text-brandPrimary" />
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
