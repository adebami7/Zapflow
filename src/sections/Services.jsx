import { useEffect, useRef, useState } from "react";
import { ServiceCard } from "../components/ServiceCard";
import Services01 from "../assets/images/services01.svg";
import Services02 from "../assets/images/services02.svg";
import Services03 from "../assets/images/services03.svg";
import Services04 from "../assets/images/services04.svg";
import SubHero06 from "../assets/images/sub-hero06.svg";
import SubHero07 from "../assets/images/sub-hero07.svg";
import SubHero08 from "../assets/images/sub-hero08.svg";
import SubHero10 from "../assets/images/sub-hero10.svg";

const services = [
  {
    id: 1,
    icon: Services01,
    title: "Increase Revenue",
    description:
      "Drive more conversions by meeting customers on their favorite channels at the right time.",
  },
  {
    id: 2,
    icon: Services02,
    title: "Save Time & Resources",
    description:
      "Ditch multiple subscriptions and complex systems. Zapflow does it all!",
  },
  {
    id: 3,
    icon: Services03,
    title: "Automate Leads",
    description:
      "Automate messages, follow-ups, and campaigns so your team can focus on what matters.",
  },
  {
    id: 4,
    icon: Services04,
    title: "Make Smarter Decisions",
    description:
      "Get real-time insights on every campaign and customer touchpoint, no guesswork needed.",
  },
];

function Services() {
  const [animatedItems, setAnimatedItems] = useState({
    header: false,
    subtext: false,
    cards: Array(services.length).fill(false),
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setTimeout(() => {
            setAnimatedItems((prev) => ({ ...prev, header: true }));

            setTimeout(() => {
              setAnimatedItems((prev) => ({ ...prev, subtext: true }));

              setTimeout(() => {
                services.forEach((_, index) => {
                  setTimeout(() => {
                    setAnimatedItems((prev) => {
                      const newCards = [...prev.cards];
                      newCards[index] = true;
                      return { ...prev, cards: newCards };
                    });
                  }, index * 400);
                });
              }, 400);
            }, 400);
          }, 0);
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
      id="services"
      className="relative pt-[51px] pb-[115px] px-[36px] md:px-[72px] bg-[#f5f6fa] overflow-hidden"
    >
      <img
        src={SubHero06}
        alt="gray ellipse"
        className="absolute top-[120px] left-[100px]"
      />
      <img
        src={SubHero08}
        alt="green ellipse"
        className="absolute bottom-[85px] left-[23%]"
      />
      <img
        src={SubHero10}
        alt="blue ellipse"
        className="absolute bottom-[32px] right-[50px]"
      />
      <img
        src={SubHero07}
        alt="red ellipse"
        className="absolute top-[182px] right-[260px]"
      />

      <div className="relative z-10 max-w-[1440px] mx-auto">
        <h2
          className={`mb-4 font-bold text-center text-[28px] lg:text-[48px] text-[#3D414D] md:leading-[50px] transition-all duration-700 ease-out ${
            animatedItems.header
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-5"
          }`}
        >
          Why choose{" "}
          <span
            className="text-[#3D414D] rounded inline-block pl-2"
            style={{
              background:
                "linear-gradient(90deg, #BCF939 0%, rgba(245, 255, 224, 0) 100%)",
            }}
          >
            Zapflow?
          </span>
        </h2>

        <p
          className={`text-xs md:text-base mb-12 font-medium text-[#797D87] text-center md:leading-7 transition-all duration-700 ease-out ${
            animatedItems.subtext
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
          style={{
            transitionDelay: animatedItems.subtext ? "500ms" : "0ms",
          }}
        >
          The all-in-one marketing automation tool designed to simplify sales,
          nurture <br />
          leads, and skyrocket conversions—all in one place!
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`transition-all duration-700 ease-out ${
                animatedItems.cards[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: animatedItems.cards[index]
                  ? `${1200 + index * 400}ms`
                  : "0ms",
              }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
