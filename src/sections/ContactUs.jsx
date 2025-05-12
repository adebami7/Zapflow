import Button from "../components/Button";
import ContactBg from "../assets/images/contact-us.svg";

function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="w-full">
      <div
        className="relative w-full h-[500px] md:h-[650px] lg:h-[850px] flex items-center"
        style={{
          backgroundImage: `url(${ContactBg})`,
          backgroundSize: "cover", // scales the image down to 80% of container
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top 40% ",
        }}
        
      >
        {/* Overlay for darkening the background */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

        {/* Content */}
        <div className="relative z-10 px-6 md:px-16 lg:px-24 w-full max-w-[900px]">
  <h2 className="text-white text-3xl md:text-5xl lg:text-[48px] font-bold leading-tight mb-8 lg:whitespace-nowrap">
    Start Reaching Your Customers Today!
  </h2>
  <Button className="bg-[#B2F02F] hover:bg-[#a0e027] text-lg md:text-xl rounded-full text-[#3D414D] px-10 md:px-14 py-4 md:py-5 font-semibold shadow-md">
    Get Started
  </Button>
</div>

      </div>
    </section>
  );
}

export default ContactUs;
