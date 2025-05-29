import { useParams } from "react-router-dom";
import { useState, useRef } from "react";
import Academy01 from "../assets/images/academy01.png";

function AcademyContent() {
  const contentData = {
    "setting-up-whatsapp-email-sms-and-voice": {
      title: "Setting up WhatsApp, Email, SMS, and Voice",
      author: "Nora Adekunle",
      image: Academy01,
      fullContent: (
        <>
          <p className="text-[#5B5F6A] mb-4">
            In today’s fast-paced digital world, staying in touch with your
            customers is more important than ever. Email marketing is one of the
            easiest, most effective ways to build relationships, share updates,
            and drive sales.
          </p>

          <h3
            id="whatsapp-setup"
            className="font-medium text-lg text-[#5B5F6A] mb-2"
          >
            1. WhatsApp Setup
          </h3>
          <p className="text-[#5B5F6A] mb-2">
            To start sending messages via WhatsApp:
          </p>
          <ul className="list-disc pl-5 text-[#5B5F6A] mb-2">
            <li>Go to Channels {">"} WhatsApp</li>
            <li>
              Connect your WhatsApp Business Number (or register if you don’t
              have one)
            </li>
            <li>Verify your phone number</li>
            <li>Create your messages in Zapflow</li>
            <li>
              Set up auto-replies or flows for incoming messages if needed
            </li>
          </ul>
          <p className="text-[#5B5F6A]">
            <span className="font-medium">Tip:</span> Ensure your phone number
            is not already registered with WhatsApp Messenger. Use a new or
            business-only number.
          </p>

          <h3
            id="email-setup"
            className="font-medium text-lg text-[#5B5F6A] mb-2 mt-10"
          >
            2. Email Setup
          </h3>
          <p className="text-[#5B5F6A] mb-2">
            To set up your email-sending domain:
          </p>
          <ul className="list-disc pl-5 text-[#5B5F6A] mb-2">
            <li>Go to Channels {">"} Email</li>
            <li>Add your sender domain (e.g., marketing@yourcompany.com)</li>
            <li>Add your port number, username, and password</li>
            <li>
              Once set up, create your first Email campaign under the Campaigns
              section
            </li>
          </ul>
          <p className="text-[#5B5F6A]">
            <span className="font-medium">Tip:</span> Use a subdomain like
            email.yourcompany.com to maintain deliverability.
          </p>

          <h3
            id="sms-setup"
            className="font-medium text-lg text-[#5B5F6A] mb-2 mt-10"
          >
            3. SMS Setup
          </h3>
          <p className="text-[#5B5F6A] mb-2">To activate SMS messaging:</p>
          <ul className="list-disc pl-5 text-[#5B5F6A] mb-2">
            <li>Navigate to Channels {">"} SMS</li>
            <li>Set a default sender ID (if allowed in your country)</li>
            <li>
              You’re now ready to send SMS broadcasts or triggers via automation
            </li>
          </ul>
          <p className="text-[#5B5F6A]">
            <span className="font-medium">Tip:</span> For transactional
            messages, ensure your SMS templates are short and compliant with
            local regulations.
          </p>

          <h3
            id="voice-setup"
            className="font-medium text-lg text-[#5B5F6A] mb-2 mt-10"
          >
            4. Voice Setup
          </h3>
          <p className="text-[#5B5F6A] mb-2">
            To make automated voice calls or recordings:
          </p>
          <ul className="list-disc pl-5 text-[#5B5F6A] mb-2">
            <li>Go to Channels {">"} Voice</li>
            <li>
              Connect to a supported voice platform (e.g., Twilio) via API
            </li>
            <li>Upload your recordings or use text-to-speech options</li>
            <li>Test call flow and caller ID</li>
            <li>
              Enable voice as a channel in your workflows or broadcast settings
            </li>
          </ul>
          <p className="text-[#5B5F6A]">
            <span className="font-medium">Tip:</span> Voice works best for
            appointment reminders, alerts, and personalized customer updates.
          </p>

          <p className="text-[#5B5F6A] mt-4">Need Help?</p>
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
        Please check the URL or return to the Academy page to select another
        article.
      </p>
    ),
    author: "Unknown Author",
    image: Academy01,
  };

  const items = [
    { name: "WhatsApp Setup", id: "whatsapp-setup" },
    { name: "Email Setup", id: "email-setup" },
    { name: "SMS Setup", id: "sms-setup" },
    { name: "Voice Setup", id: "voice-setup" },
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
            </span>
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

export default AcademyContent;
