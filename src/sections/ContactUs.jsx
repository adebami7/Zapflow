import Button from "../components/Button";
import ContactBg from "../assets/images/contact-us.svg";

function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="w-full">
      <div className="grid lg:grid-cols-[42%_58%] h-[850px]">
        <div
          className="relative"
          style={{
            backgroundImage: `url(${ContactBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/20 flex flex-col justify-end items-start px-10 pb-32">
            <h2 className="text-[#F0F0F2] text-xl md:text-[32px] font-bold mb-6 leading-[40px]">
              Start Reaching Your Customers
              <br />
              Today!
            </h2>
            <Button className="bg-[#B2F02F] hover:bg-[#a0e027] !text-base rounded-full text-[#3D414D] px-[64px] py-3">
              Get Started
            </Button>
          </div>
        </div>

        <div className="flex flex-col justify-start bg-[#F0F0F2]">
          <div className="w-full max-w-[450px] mx-auto px-4 pt-16">
            <h2 className="text-3xl md:text-[48px] font-bold mb-[18px] text-[#3D414D] text-center">
              Let&apos;s get in{" "}
              <span
                className="text-[#3D414D] inline-block"
                style={{
                  background:
                    "linear-gradient(90deg, #BCF939 0%, rgba(245, 255, 224, 0) 100%)",
                }}
              >
                touch!
              </span>
            </h2>
            <p className="text-[#5B5F6A] text-base mb-12 font-medium text-center">
              Send us a message or email hi@zapflow.io
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="flex flex-col">
                <label className="text-xs text-[#616060] mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full bg-transparent border border-gray-300 rounded-lg px-3 py-3 !h-[56px] text-sm focus:outline-none focus:ring-0 focus:ring-blue-500 text-[#222f36]"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-xs text-[#616060] mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-transparent border border-gray-300 rounded-lg px-3 py-3 !h-[56px] text-sm focus:outline-none focus:ring-0 focus:ring-blue-500 text-[#222f36]"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-xs text-[#616060] mb-2">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  className="w-full bg-transparent border border-gray-300 rounded-lg px-3 py-3 !h-[56px] text-sm focus:outline-none focus:ring-0 focus:ring-blue-500 text-[#222f36]"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-xs text-[#616060] mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full bg-transparent border border-gray-300 rounded-lg px-3 py-3 !h-[98px] text-sm focus:outline-none focus:ring-0 focus:ring-blue-500 text-[#222f36]"
                ></textarea>
              </div>

              <div className="flex items-center px-7">
                <Button
                  type="submit"
                  className="w-full bg-[#0041C4] hover:bg-[#0032a7] text-white font-semibold rounded-full py-3"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
