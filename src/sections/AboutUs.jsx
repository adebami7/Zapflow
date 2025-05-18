import { useEffect, useRef, useState } from "react";
import Works01 from "../assets/images/works01.png";
import Works02 from "../assets/images/works02.png";
import Works03 from "../assets/images/works03.png";
import Works04 from "../assets/images/works04.png";

const HowZapflowWorks = () => {
  const [visibleCards, setVisibleCards] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          [0, 1, 2, 3].forEach((index) => {
            setTimeout(() => {
              setVisibleCards((prev) => {
                const newCards = [...prev];
                newCards[index] = true;
                return newCards;
              });
            }, index * 400);
          });
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
      }
    );

    observer.observe(sectionElement);

    return () => {
      observer.unobserve(sectionElement);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#00329B] px-6 md:px-[72px] pt-[51px] pb-[87px]"
      id="how-it-works"
    >
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-[#F0F0F2] text-[32px] sm:text-[48px] text-center font-bold mb-20 leading-[50px]">
          How Zapflow{" "}
          <span
            className="text-[#F0F0F2] inline-block pl-2"
            style={{
              background:
                "linear-gradient(90deg, #BCF939 0%, rgba(255, 255, 255, 0) 100%)",
            }}
          >
            works
          </span>
        </h2>

        <div className="grid lg:grid-cols-4 gap-[24px]">
          <div
            className={`w-full h-[572px] rounded-2xl bg-[#F0F0F2] bg-cover bg-center relative overflow-hidden transition-all duration-500 ${
              visibleCards[0]
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
            style={{ backgroundImage: `url(${Works01})` }}
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div
              className={`absolute bottom-0 rounded-b-2xl w-full bg-[#B6CFFE] pt-4 pb-6 px-4 transition-all duration-300 ${
                hoveredCard === 0 ? "h-[150px]" : "h-[80px]"
              }`}
            >
              <p className="text-[#3D414D] font-semibold text-[24px]">
                Import Your Leads
              </p>
              {hoveredCard === 0 && (
                <p className="text-[#5B5F6A] mt-4 text-base font-medium max-w-[250px]">
                  Upload contacts or collect leads from forms, or CRM
                  integrations.{" "}
                </p>
              )}
            </div>
          </div>

          <div
            className={`w-full h-[572px] rounded-2xl bg-cover bg-center relative overflow-hidden transition-all duration-500 delay-150 ${
              visibleCards[1]
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
            style={{ backgroundImage: `url(${Works02})` }}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div
              className={`absolute bottom-0 rounded-b-2xl w-full bg-[#D7FB88] pt-4 pb-6 px-4 transition-all duration-300 ${
                hoveredCard === 1 ? "h-[150px]" : "h-[80px]"
              }`}
            >
              <p className="text-[#3D414D] font-semibold text-[24px]">
                Send Campaigns
              </p>
              {hoveredCard === 1 && (
                <p className="text-[#5B5F6A] mt-4 text-base font-medium max-w-[250px]">
                  Create & send personalized multi-channel broadcasts in
                  minutes.
                </p>
              )}
            </div>
          </div>

          <div
            className={`w-full h-[572px] rounded-2xl bg-cover bg-center relative overflow-hidden transition-all duration-500 delay-300 ${
              visibleCards[2]
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
            style={{ backgroundImage: `url(${Works03})` }}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div
              className={`absolute bottom-0 rounded-b-2xl w-full bg-[#FDEEAB] pt-4 pb-6 px-4 transition-all duration-300 ${
                hoveredCard === 2 ? "h-[150px]" : "h-[80px]"
              }`}
            >
              <p className="text-[#3D414D] font-semibold text-[24px]">
                Automate Conversations
              </p>
              {hoveredCard === 2 && (
                <p className="text-[#5B5F6A] mt-4 text-base font-medium max-w-[250px]">
                  Automate flows that respond, follow up, and engage customers.
                </p>
              )}
            </div>
          </div>

          <div
            className={`w-full h-[572px] rounded-2xl bg-cover bg-center relative overflow-hidden transition-all duration-500 delay-150 ${
              visibleCards[3]
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
            style={{ backgroundImage: `url(${Works04})` }}
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div
              className={`absolute bottom-0 rounded-b-2xl w-full bg-[#E2CCFF] pt-4 pb-6 px-4 transition-all duration-300 ${
                hoveredCard === 3 ? "h-[150px]" : "h-[80px]"
              }`}
            >
              <p className="text-[#3D414D] font-semibold text-[24px]">
                Track And Optimize
              </p>
              {hoveredCard === 3 && (
                <p className="text-[#5B5F6A] mt-4 text-base font-medium max-w-[250px]">
                  Track clicks to conversions in real time for smarter
                  decisions.{" "}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowZapflowWorks;
