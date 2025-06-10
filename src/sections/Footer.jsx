import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Logo from "../assets/images/logo-black.svg";
import { Link } from "react-router-dom";

function Footer() {
  const scrollToTestimonials = () => {
    setTimeout(() => {
      const testimonialsSection = document.getElementById("testimonials");
      if (testimonialsSection) {
        testimonialsSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <footer className="bg-[#232323] text-[#F0F0F2] pt-20 pb-20 px-6 lg:px-[72px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-1 space-y-4">
            <a href="/" className="flex items-start">
              <h2 className="text-2xl text-white font-semibold">
                <img
                  src={Logo}
                  alt="Zapflow Logo"
                  className="h-8 w-auto sm:h-10"
                />
              </h2>
            </a>
            <p className="text-[13px] max-w-sm">
              All-in-one marketing software to grow your
              <br /> business through Email, SMS, WhatsApp & <br /> Voice, all
              from one place.
            </p>
            <p className="text-[13px] mt-6">
              © 2025 Zapflow. All rights reserved
            </p>
          </div>

          <div className="md:col-span-4 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {/* PRODUCT */}
            <div className="space-y-4 lg:text-right">
              <h3 className="text-white font-semibold text-md tracking-wide">
                PRODUCT
              </h3>
              <ul className="space-y-2 text-md">
                <li>
                  <Link to="/use-cases" className="hover:text-white">
                    Use Cases
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/integrations" className="hover:text-white">
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4 lg:text-right">
              <h3 className="text-white font-semibold text-md tracking-wide">
                RESOURCES
              </h3>
              <ul className="space-y-2 text-md">
                <li>
                  <Link to="/blog" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/faqs" className="hover:text-white">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link to="/academy" className="hover:text-white">
                    Academy
                  </Link>
                </li>
                <li>
                  <Link to="/help-center" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    onClick={scrollToTestimonials}
                    className="hover:text-white"
                  >
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4 lg:text-right">
              <h3 className="text-white font-semibold text-md tracking-wide">
                COMPANY
              </h3>
              <ul className="space-y-2 text-md">
                <li>
                  <Link to="/careers" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/terms-and-conditions" className="hover:text-white">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/refund-policy" className="hover:text-white">
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4 lg:text-right">
              <h3 className="text-white font-semibold text-md tracking-wide">
                CONTACT
              </h3>
              <p className="text-md">hi@zapflow.co</p>

              <h3 className="text-white font-semibold text-md tracking-wide mt-6">
                FOLLOW US ON:
              </h3>
              <div className="flex lg:justify-end gap-3">
                {[
                  {
                    icon: Facebook,
                    name: "facebook",
                    url: "https://facebook.com/zapflowco",
                  },
                  {
                    icon: Youtube,
                    name: "youtube",
                    url: "https://www.youtube.com/@zapflowco",
                  },
                  {
                    icon: Instagram,
                    name: "instagram",
                    url: "https://www.instagram.com/zapflowco/",
                  },
                  {
                    icon: Linkedin,
                    name: "linkedin",
                    url: "https://www.linkedin.com/company/zapflowco/",
                  },
                  {
                    icon: Twitter, 
                    name: "X (formerly Twitter)",
                    url: "https://x.com/zapflowco",
                  }

                ].map(({ icon: Icon, name, url }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-md bg-white flex items-center justify-center hover:bg-blue-600 transition-colors"
                  >
                    <span className="sr-only">{name}</span>
                    <Icon className="w-4 h-4 text-black" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
