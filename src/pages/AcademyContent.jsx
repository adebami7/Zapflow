import { useParams } from "react-router-dom";

function AcademyContent() {
  const contentData = {
    "getting-started-with-email-marketing": {
      title: "Getting Started with Email Marketing",
      description:
        "Learn the basics of setting up effective email campaigns to engage your audience.",
      fullContent:
        "This comprehensive guide covers the fundamentals of email marketing, including how to build your email list, design engaging emails, and measure campaign success.",
    },
    "mastering-sms-marketing-strategies": {
      title: "Mastering SMS Marketing Strategies",
      description:
        "Discover how to craft compelling SMS messages to boost customer retention.",
      fullContent:
        "This article dives deep into SMS marketing, offering tips on crafting concise messages, timing your sends, and complying with regulations.",
    },
    "whatsapp-for-business-growth": {
      title: "WhatsApp for Business Growth",
      description:
        "Explore how to leverage WhatsApp for personalized customer interactions.",
      fullContent:
        "Learn how to use WhatsApp to connect with customers, automate responses, and drive sales through personalized messaging.",
    },
  };

  const { title } = useParams();

  const content = contentData[title] || {
    title: "Content Not Found",
    description: "The requested content could not be found.",
    fullContent:
      "Please check the URL or return to the Academy page to select another article.",
  };

  return (
    <div className="bg-[#F0F0F2] py-[77px] max-w-[1188px] mx-auto">
      <h1 className="text-3xl font-semibold text-[#232323] mb-4">
        {content.title}
      </h1>
      <p className="text-[#555] mb-6">{content.description}</p>
      <p className="text-[#232323]">{content.fullContent}</p>
    </div>
  );
}

export default AcademyContent;
