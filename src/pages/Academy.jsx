import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import HeroBg from "../assets/images/academyHero.png";
import Button from "../components/Button";

function Academy() {
  const academyContent = [
    {
      title: "Getting Started with Email Marketing",
      description:
        "Learn the basics of setting up effective email campaigns to engage your audience.",
    },
    {
      title: "Mastering SMS Marketing Strategies",
      description:
        "Discover how to craft compelling SMS messages to boost customer retention.",
    },
    {
      title: "WhatsApp for Business Growth",
      description:
        "Explore how to leverage WhatsApp for personalized customer interactions.",
    },
  ];

  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  return (
    <div className="bg-[#F0F0F2]">
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        <div className="lg:pl-[72px] py-[135px] px-6">
          <h1 className="lg:text-[56px] font-bold text-[#F0F0F2]">
            <span
              className="text-[#F0F0F2] rounded inline-block pl-2"
              style={{
                background:
                  "linear-gradient(90deg, #BCF939 0%, rgba(245, 255, 224, 0) 60%)",
              }}
            >
              Zapflow Academy
            </span>
          </h1>
          <p className="text-base font-semibold mt-4 mb-10 max-w-[559px] text-[#F0F0F2] leading-[28px]">
            Get free, quick, expert-led tutorials to help you create better
            campaigns, automate workflows, and grow with data-driven marketing.
            Learn how to use Zapflow to connect smarter
          </p>
          <ScrollLink to="academy" smooth={true} duration={300} offset={-175}>
            <Button className="px-6">Explore Courses</Button>
          </ScrollLink>
        </div>
      </div>

      <div id="academy" className="py-[77px] max-w-[1188px] mx-auto">
        <h2 className="text-3xl font-semibold text-[#232323] mb-8">
          Zapflow Academy
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {academyContent.map((content, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#232323] mb-2">
                {content.title}
              </h3>
              <p className="text-[#555] mb-4">{content.description}</p>
              <Link
                to={`/academy/${createSlug(content.title)}`}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Academy;
