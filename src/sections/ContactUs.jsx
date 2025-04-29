import { MapPin, Phone, Mail } from "lucide-react";
import Button from "../components/Button";

function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="w-full">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Image Side */}
        <div className="relative">
        <img
            src="/src/assets/black-girl-with-laptop 1.png" 
            alt="Start Reaching Your Customers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex flex-col justify-center items-start pl-10 pr-6">
            <h2 className="text-white text-2xl md:text-3xl font-semibold mb-6 max-w-[320px] leading-snug">
              Start Reaching Your Customers Today!
            </h2>
            <Button className="bg-[#B2F02F] text-black hover:bg-[#a0e027] rounded-full px-6 py-3">
              Get Started
            </Button>
          </div>
        </div>

        {/* Right Form Side */}
        <div className="flex flex-col justify-center h-full px-6 md:px-16 bg-[#e5e7eb] ">
          <div className="w-full max-w-[500px]">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#222f36] text-center">
              Lets get in{" "}
              <span
            className="text-[#1e1e1e] rounded inline-block "
            style={{
              background:
                "linear-gradient(90deg, #BCF939 0%, rgba(245, 255, 224, 0) 100%)",
            }}
          >
             touch !
          </span>
            </h2>
            <p className="text-gray-500 text-sm mb-8 text-center ">
              Send us a message or email hi@zapflow.io
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div className="flex flex-col">
                <label className="text-sm text-[#222f36] mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full bg-[#f5f6fa] border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#222f36]"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="text-sm text-[#222f36] mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-[#f5f6fa] border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#222f36]"
                />
              </div>

              {/* Mobile Number */}
              <div className="flex flex-col">
                <label className="text-sm text-[#222f36] mb-2">Mobile Number</label>
                <input
                  type="tel"
                  className="w-full bg-[#f5f6fa] border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#222f36]"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label className="text-sm text-[#222f36] mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full bg-[#f5f6fa] border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#222f36]"
                ></textarea>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-[#0041C4] hover:bg-[#0032a7] text-white font-semibold rounded-full py-3"
              >
                Send Message
              </Button>
            </form>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
