import { useState, useRef } from "react";
import About01 from "../assets/images/about01.png";

function About() {
  const items = [
    { name: "How We Started", id: "how-we-started" },
    {
      name: "What Makes ZapFlow Different",
      id: "what-makes-zapflow-different",
    },
    { name: "Who We Serve", id: "who-we-serve" },
    { name: "Our Mission", id: "our-mission" },
    { name: "Built By Marketers", id: "built-by-marketers" },
  ];

  const [activeItem, setActiveItem] = useState(items[0].id);

  const sectionRefs = useRef({});

  const handleItemClick = (id) => {
    setActiveItem(id);
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

  return (
    <div className="bg-[#F0F0F2] min-h-screen">
      <div className="py-[77px] max-w-[1280px] mx-auto xl:px-0 px-6">
        <div>
          <h1 className="text-[32px] text-center font-bold text-[#5B5F6A]">
            Welcome to ZapFlow , The ALL-IN-ONE
          </h1>
          <h1 className="text-[32px] mb-4 text-center font-bold text-[#5B5F6A]">
            <span
              className="text-[#5B5F6A] rounded inline-block pl-2"
              style={{
                background:
                  "linear-gradient(90deg, #BCF939 0%, rgba(245, 255, 224, 0) 60%)",
              }}
            >
              Marketing Automation Tool
            </span>
          </h1>{" "}
          <p className="max-w-[739px] mx-auto leading-7 text-center text-[#5B5F6A] mb-16">
            Making money online shouldn’t feel like rocket science. Whether
            you’re a coach, creator, startup, or seven-figure agency, ZapFlow
            gives you the tools you need to capture leads, nurture them
            automatically, and convert them into paying customers, all from one
            dashboard.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col  items-start gap-10 lg:gap-[86px]">
          <div className="h-[256px] bg-[#CEDFFE] lg:w-[27%] w-full pt-4 shadow-lg overflow-hidden relative lg:sticky lg:top-[77px]">
            <div className="h-full overflow-y-auto">
              {items.map((item) => (
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

          <div className="lg:w-[73%] w-full">
            <img src={About01} className="w-full mb-4" alt="About ZapFlow" />

            <div
              className="text-sm lg:text-base"
              ref={(el) => {
                if (el) {
                  const sections = el.querySelectorAll("h3[id]");
                  sections.forEach((section) => {
                    sectionRefs.current[section.id] = section;
                  });
                }
              }}
            >
              <p className="text-[#5B5F6A] text-base mb-11">
                We’re not just another marketing tool. We’re a full-scale
                automation powerhouse built for the modern digital hustler.
              </p>

              <section className="max-w-[750px]">
                <h3
                  id="how-we-started"
                  className="text-[#5B5F6A] text-lg lg:text-xl font-bold mb-4"
                >
                  How We Started
                </h3>
                <p className="text-[#5B5F6A] mb-4">
                  We saw business owners juggling multiple tools: one for
                  emails, one for landing pages, another for SMS. And the list
                  goes on. It wasn’t even just the cost of the tools that was
                  the problem. They couldn’t talk to each other.
                </p>
                <p className="text-[#5B5F6A] mb-4">
                  So we built ZapFlow. An all-in-one marketing automation
                  platform that gives you everything you need to grow, without
                  the tech overwhelm.
                </p>
              </section>

              <section>
                <h3
                  id="what-makes-zapflow-different"
                  className="text-[#5B5F6A] text-lg lg:text-xl font-bold mb-4 mt-8"
                >
                  What Makes ZapFlow Different?
                </h3>
                <p className="text-[#5B5F6A] mb-4 leading-7 max-w-[750px]">
                  We studied the landscape. From MailChimp to ConvertKit,
                  Systeme to Mailchimp. Great tools, but missing the
                  flexibility, power, and affordability today’s creators and
                  marketers need.
                </p>
                <p className="text-[#5B5F6A] mb-4 leading-7">
                  Here’s what sets ZapFlow apart:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[45px]">
                  <div className="bg-[#FFF7B7] py-5 px-6 rounded-lg h-[188px]">
                    <h4 className="text-[#5B5F6A] text-2xl mb-4 font-semibold">
                      Email + SMS + WhatsApp Automation
                    </h4>
                    <p className="text-[#5B5F6A] text-base">
                      Reach your audience where it matters. Schedule, segment,
                      and personalize, all from one screen.
                    </p>
                  </div>
                  <div className="bg-[#D7E8FF] py-5 px-6 rounded-lg h-[188px]">
                    <h4 className="text-[#5B5F6A] text-2xl mb-4 font-semibold">
                      Voice Call Automation
                    </h4>
                    <p className="text-[#5B5F6A] text-base">
                      You’ve seen emails and SMS. Now add the power of AI voice
                      calls to your funnel.
                    </p>
                  </div>
                  <div className="bg-[#D7E8FF] py-5 px-6 rounded-lg h-[188px]">
                    <h4 className="text-[#5B5F6A] text-2xl mb-4 font-semibold">
                      Custom Landing Pages
                    </h4>
                    <p className="text-[#5B5F6A] text-base">
                      Build high-converting pages in minutes. No code needed.
                    </p>
                  </div>
                  <div className="bg-[#FFE5E5] py-5 px-6 rounded-lg h-[188px]">
                    <h4 className="text-[#5B5F6A] text-2xl mb-4 font-semibold">
                      Drag & Drop Email Builder
                    </h4>
                    <p className="text-[#5B5F6A] text-base">
                      Your emails deserve better than plain text. Design emails
                      that sell.
                    </p>
                  </div>
                  <div className="bg-[#E5D7FF] py-5 px-6 rounded-lg h-[188px]">
                    <h4 className="text-[#5B5F6A] text-2xl mb-4 font-semibold">
                      Link-in Bio & Storefront Tools
                    </h4>
                    <p className="text-[#5B5F6A] text-base">
                      Perfect for creators and solopreneurs who want to showcase
                      and sell without needing a full website.
                    </p>
                  </div>
                  <div className="bg-[#FFD7C5] py-5 px-6 rounded-lg h-[188px]">
                    <h4 className="text-[#5B5F6A] text-2xl mb-4 font-semibold">
                      Flexible Payments
                    </h4>
                    <p className="text-[#5B5F6A] text-base">
                      Sell worldwide with Stripe, PayPal, Paystack, Flutterwave,
                      and more.
                    </p>
                  </div>
                  <div className="bg-[#D7E8FF] py-5 px-6 rounded-lg h-[188px]">
                    <h4 className="text-[#5B5F6A] text-2xl mb-4 font-semibold">
                      Lead Automation + Reporting
                    </h4>
                    <p className="text-[#5B5F6A] text-base">
                      Automate, analyze, optimize. Rinse and repeat.
                    </p>
                  </div>
                </div>
              </section>

              <section className="max-w-[750px]">
                <h3
                  id="who-we-serve"
                  className="text-[#5B5F6A] text-lg lg:text-xl font-bold mb-4 mt-8"
                >
                  Who We Serve
                </h3>
                <p className="text-[#5B5F6A] mb-4 leading-7">
                  From Nigeria to New York, Ghana to the UK—ZapFlow is trusted
                  by digital creators, coaches, agencies, content creators, and
                  ecommerce entrepreneurs in over 18 countries.
                </p>
                <p className="text-[#5B5F6A] mb-4 leading-7">
                  If you’re growing your first email list or nurturing
                  full-funnel launches every month, ZapFlow scales with you.
                </p>
              </section>

              <section className="max-w-[750px]">
                <h3
                  id="our-mission"
                  className="text-[#5B5F6A] text-lg lg:text-xl font-bold mb-4 mt-8"
                >
                  Our Mission
                </h3>
                <p className="text-[#5B5F6A] mb-4 leading-7">
                  To help creators and businesses generate more revenue with
                  smarter automation—without hiring a tech team or burning
                  through budgets.
                </p>
                <p className="text-[#5B5F6A] mb-4 leading-7">
                  When your marketing runs like a machine, you get to focus on
                  what truly matters: your craft, your brand, and your
                  customers.
                </p>
              </section>

              <section className="max-w-[750px]">
                <h3
                  id="built-by-marketers"
                  className="text-[#5B5F6A] text-lg lg:text-xl font-bold mb-4 mt-8"
                >
                  Built By Marketers, For Marketers
                </h3>
                <p className="text-[#5B5F6A] mb-4 leading-7">
                  We’re marketers, developers, and creators who live and breathe
                  online growth, just like you. We know the grind, the hustle,
                  and the community.
                </p>
                <p className="text-[#5B5F6A] mb-4 leading-7">
                  That’s why ZapFlow isn’t just a tool—it’s a partner built to
                  scale. Every feature inside ZapFlow is tested in real-world
                  campaigns, not just theory.
                </p>
                <h4 className="text-[#5B5F6A] font-semibold mb-2 mt-6">
                  Ready To Zap Growth Into Your Business?
                </h4>
                <ul className="text-[#5B5F6A] list-disc pl-5 leading-7">
                  <li>
                    Join the growing community of smart marketers who are
                    ditching chaos and choosing clarity.
                  </li>
                  <li>Create Your Free Account</li>
                  <li>Join Our ZapFlow Community</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
