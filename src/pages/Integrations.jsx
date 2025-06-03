import WhatsApp from "../assets/images/whatsappInt.png";
import Zapier from "../assets/images/zapierInt.png";
import Slack from "../assets/images/slackInt.png";
import HubSpot from "../assets/images/hubspotInt.png";
import GoogleSheets from "../assets/images/googleSheetsInt.png";

function Integrations() {
  const integrations = [
    {
      src: WhatsApp,
      alt: "WhatsApp Integration",
      width: "168px",
      height: "108px",
    },
    { src: Zapier, alt: "Zapier Integration", width: "175px", height: "47px" },
    { src: Slack, alt: "Slack Integration", width: "186px", height: "66px" },
    {
      src: HubSpot,
      alt: "HubSpot Integration",
      width: "170px",
      height: "49px",
    },
    {
      src: GoogleSheets,
      alt: "Google Sheets Integration",
      width: "194px",
      height: "38px",
    },
  ];

  return (
    <div className="bg-[#F0F0F2]">
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
               Our Integrations
            </span>
          </h2>
          <p className="lg:text-base text-center text-sm mt-[22px] font-medium text-[#F0F0F2]">
            Discover how teams use Zapflow to simplify communication, boost
            engagement, and drive results across industries, channels, and
            customer journeys.
          </p>
        </div>
      </div>

      <div className="py-[77px] max-w-[1188px] mx-auto px-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-x-[80px] gap-y-[36px]">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="h-[201px] w-full bg-white flex items-center justify-center rounded-lg"
            >
              <img
                src={integration.src}
                alt={integration.alt}
                className="w-[168px] h-[108px]"
                style={{ width: integration.width, height: integration.height }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Integrations;
