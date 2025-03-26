import { MapPin, Phone, Mail } from "lucide-react";
import SectionBadge from "../components/sectionBadge";
import Button from "../components/Button";

function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-[70px] px-6 bg-[#f5f6fa]">
      <div className="max-w-[1296px] mx-auto">
        <SectionBadge label="Contact Us" />
        <h1 className="mt-4 mb-2 font-semibold text-center lg:text-[28px] text-[#222f36]">
          Have any questions? We&apos;d be happy to hear from you.
        </h1>
        <p className="text-[15px] mb-12 text-[#98a5c3] text-center">
          Feel free to contact us anytime with any questions or inquiries.
          Don&apos;t hesitate to clear your doubts before trying our product.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 bg-white rounded-lg">
          <div className="bg-white p-6 shadow-sm">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm text-[#222f36] mb-2 ">
                  Full Name :
                </label>
                <input type="text" placeholder="Enter Name" />
              </div>

              <div className="mb-4">
                <label className="block text-sm text-[#222f36] mb-2 ">
                  Phone No :
                </label>
                <input type="tel" placeholder="Enter Phone No" />
              </div>

              <div className="mb-6">
                <label className="block text-sm text-[#222f36] mb-2 ">
                  Message :
                </label>
                <textarea rows="4" placeholder="Your message"></textarea>
              </div>

              <div className="flex items-center justify-end">
                <Button>Send Message</Button>
              </div>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                {/* <div className="flex items-start gap-3">
                  <MapPin size={14} className="text-[#98a5c3]" />
                  <p className="text-gray-600 text-xs">
                    1552/A-12, Abcd Street, KLM Town, Hyderabad.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={14} className="text-[#98a5c3]" />
                  <div className="text-gray-600 text-xs">
                    <p>+122 1234 52422</p>
                    <p>+121 1234 14511</p>
                  </div>
                </div> */}
                <div className="flex items-start gap-3">
                  <Mail size={14} className="text-[#98a5c3]" />
                  <p className="text-gray-600 text-xs">
                  hi@zapflow.io
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d78.4867!3d17.3850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIzJzA2LjAiTiA3OMKwMjknMTIuMiJF!5e0!3m2!1sen!2sin!4v1635835853001!5m2!1sen!2sin"
                  width="100%"
                  height="120px"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
