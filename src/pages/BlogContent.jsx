import { useParams } from "react-router-dom";
import { useState, useRef } from "react";
import Blog01 from "../assets/images/blog01.png";

function BlogContent() {
  const contentData = {
    "the-smartest-way-to-stay-connected-with-your-customers": {
      title: "The Smartest Way to Stay Connected With Your Customers",
      author: "Nora Adekunle",
      image: Blog01,
      fullContent: (
        <>
          <p className="text-[#5B5F6A] mb-4">
            In today’s fast-paced digital world, staying in touch with your
            customers is more important than ever. Email marketing is one of the
            easiest, most effective ways to build relationships, share updates,
            and drive sales.
          </p>

          <h3
            id="what-is-email-marketing"
            className="font-medium text-lg text-[#5B5F6A] mb-2"
          >
            What is Email Marketing?
          </h3>
          <p className="text-[#5B5F6A] mb-2">
            Email marketing is the use of email to promote your products or
            services, share valuable content, or simply stay connected with your
            audience. Whether it’s a weekly newsletter, a special promo, or a
            welcome message, email helps you speak directly to your
            customers—right in their inbox.
          </p>

          <h3
            id="why-email-marketing-works"
            className="font-medium text-lg text-[#5B5F6A] mb-2 mt-10"
          >
            Why Email Marketing Works
          </h3>
          <ul className="list-disc pl-5 text-[#5B5F6A] mb-2">
            <li>
              Direct and Personal: Email feels more personal than social media.
              You can greet your customers by name and tailor messages to their
              interests.
            </li>
            <li>
              High ROI: Email marketing consistently delivers one of the highest
              returns on investment in digital marketing.
            </li>
            <li>
              Easy to Automate: With platforms like Zapflow, you can set up
              automated messages, schedule campaigns, and track performance—all
              from one place.
            </li>
          </ul>

          <h3
            id="how-zapflow-helps-you-win-with-email"
            className="font-medium text-lg text-[#5B5F6A] mb-2 mt-10"
          >
            How Zapflow Helps You Win with Email
          </h3>
          <p className="text-[#5B5F6A] mb-2">
            Zapflow’s email marketing tools are designed to be user-friendly and
            powerful:
          </p>
          <ul className="list-disc pl-5 text-[#5B5F6A] mb-2">
            <li>
              Broadcast to Thousands: Send promotional messages, product
              updates, or newsletters to your entire list in just a few clicks.
            </li>
            <li>
              Track Your Results: Know who opened your emails, clicked your
              links, and took action—so you can keep improving.
            </li>
            <li>
              Personalize Your Campaigns: Segment your audience and send the
              right message to the right people.
            </li>
            <li>
              Automate Workflows: From welcome emails to follow-ups, set up
              smart automations that run while you focus on your business.
            </li>
          </ul>

          <h3
            id="quick-tips-for-great-email-marketing"
            className="font-medium text-lg text-[#5B5F6A] mb-2 mt-10"
          >
            Quick Tips for Great Email Marketing
          </h3>
          <ol className="list-decimal pl-5 text-[#5B5F6A] mb-2">
            <li>Keep it short and sweet—Respect your reader’s time.</li>
            <li>Use a catchy subject line—it’s the first thing they see.</li>
            <li>
              Add a clear call-to-action (CTA)—Tell them exactly what to do
              next.
            </li>
            <li>Be consistent—Send emails regularly to stay top-of-mind.</li>
          </ol>
        </>
      ),
    },
  };

  const { title: urlTitle } = useParams();

  const content = contentData[urlTitle] || {
    title: "Content Not Found",
    description: "The requested content could not be found.",
    fullContent: (
      <p className="text-[#5B5F6A]">
        Please check the URL or return to the Blog page to select another
        article.
      </p>
    ),
    author: "Unknown Author",
    image: Blog01,
  };

  const items = [
    { name: "What is Email Marketing?", id: "what-is-email-marketing" },
    { name: "Why Email Marketing Works", id: "why-email-marketing-works" },
    {
      name: "How Zapflow Helps You Win with Email",
      id: "how-zapflow-helps-you-win-with-email",
    },
    {
      name: "Quick Tips for Great Email Marketing",
      id: "quick-tips-for-great-email-marketing",
    },
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
        <div className="flex flex-col items-center gap-2 max-w-[590px] mx-auto mb-12 lg:mb-16">
          <h2 className="font-medium text-2xl text-[#5B5F6A] text-center">
            {content.title}
          </h2>
          <p className="text-base text-[#5B5F6A]">
            By{" "}
            <span className="text-[#0A5FFA] underline underline-offset-2">
              {content.author}
            </span>{" "}
            Email marketing specialist
          </p>
        </div>
        <div className="flex lg:flex-row flex-col items-start gap-10 lg:gap-[86px]">
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
            <img
              src={content.image}
              alt={content.title}
              className="w-full mb-4"
            />
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
              {content.fullContent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogContent;
