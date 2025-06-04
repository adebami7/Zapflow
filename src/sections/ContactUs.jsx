import { useState, useEffect } from "react";
import Button from "../components/Button";
import ContactBg from "../assets/images/contact-us-4.png";
import ContactBg2 from "../assets/images/contact-us-4.png";

function ContactUs() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="contact" className="w-full">
      <div
        className="relative w-full h-[500px] md:h-[650px] lg:h-[600px] flex items-center"
        style={{
          backgroundImage: `url(${isMobile ? ContactBg2 : ContactBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "100% 40%",
        }}
      >
        <div className="absolute bottom-0 w-full h-[40%] bg-gradient-to-t from-black to-transparent z-0" />
        <div className="absolute bottom-20 z-10 px-6 md:px-16 lg:px-24 w-full max-w-[950px]">
          <h2 className="text-white text-3xl md:text-5xl lg:text-[48px] font-bold leading-tight mb-8 lg:whitespace-nowrap">
            Start Reaching Your Customers Today!
          </h2>
          <Button
            variant="secondary"
            className="text-lg md:text-xl px-10 md:px-14 py-4 md:py-5 font-medium shadow-md"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
