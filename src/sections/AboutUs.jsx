import { useEffect, useRef, useState } from "react";
import Works01 from "../assets/images/works01.svg";
import Works02 from "../assets/images/works02.svg";
import Works03 from "../assets/images/works03.svg";

const HowZapflowWorks = () => {
  const [visibleCards, setVisibleCards] = useState([false, false, false]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          // Animate cards one by one
          [0, 1, 2].forEach((index) => {
            setTimeout(() => {
              setVisibleCards((prev) => {
                const newCards = [...prev];
                newCards[index] = true;
                return newCards;
              });
            }, index * 300);
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
        <h1 className="text-[#F0F0F2] text-[32px] sm:text-[48px] text-center font-bold mb-20 leading-[50px]">
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
        </h1>

        <div className="grid lg:grid-cols-3 gap-[46px]">
          <div
            className={`w-full h-[572px] rounded-2xl bg-cover bg-center relative overflow-hidden transition-all duration-500 ${
              visibleCards[0]
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
            style={{ backgroundImage: `url(${Works01})` }}
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div
              className={`absolute bottom-0 rounded-b-2xl w-full bg-[#B6CFFE] pt-10 pb-6 px-6 transition-all duration-300 ${
                hoveredCard === 0 ? "h-[200px]" : "h-[120px]"
              }`}
            >
              <p className="text-[#3D414D] font-semibold text-[32px]">
                Connect Your Channels
              </p>
              {hoveredCard === 0 && (
                <p className="text-[#5B5F6A] mt-4 text-base font-medium max-w-[250px]">
                  Setup Sender IDs for Email, SMS, WhatsApp, and Voice.
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
              className={`absolute bottom-0 rounded-b-2xl w-full bg-[#D7FB88] pt-10 pb-6 px-6 transition-all duration-300 ${
                hoveredCard === 1 ? "h-[200px]" : "h-[120px]"
              }`}
            >
              <p className="text-[#3D414D] font-semibold text-[32px]">
                Create Campaigns
              </p>
              {hoveredCard === 1 && (
                <p className="text-[#5B5F6A] mt-4 text-base font-medium max-w-[250px]">
                  Schedule messages or trigger automation.
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
              className={`absolute bottom-0 rounded-b-2xl w-full bg-[#FDEEAB] pt-10 pb-6 px-6 transition-all duration-300 ${
                hoveredCard === 2 ? "h-[200px]" : "h-[120px]"
              }`}
            >
              <p className="text-[#3D414D] font-semibold text-[32px]">
                Track & Optimize
              </p>
              {hoveredCard === 2 && (
                <p className="text-[#5B5F6A] mt-4 text-base font-medium max-w-[250px]">
                  Measure performance. Improve results.
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
