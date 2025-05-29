import { Facebook, Instagram, Youtube } from "lucide-react";
import Logo from "../assets/images/logo-black.svg";
import { Link } from "react-router-dom";

// ...
<Link to="/blog">Blog</Link>;

function Footer() {
  return (
    <footer className="bg-[#232323] text-[#F0F0F2] pt-20 pb-20 px-6 lg:px-[72px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          {/* LEFT COLUMN: LOGO + DESCRIPTION */}
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
              <br /> business through Email, SMS, WhatsApp&nbsp;&amp;&nbsp;{" "}
              <br /> Voice, all from one place.
            </p>
            <p className="text-[13px] mt-6">
              © 2025 Zapflow. All rights reserved
            </p>
          </div>

          {/* RIGHT COLUMNS */}
          <div className="md:col-span-4 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {/* PRODUCT */}
            <div className="space-y-4 lg:text-right">
              <h3 className="text-white font-semibold text-md tracking-wide">
                PRODUCT
              </h3>
              <ul className="space-y-2 text-md">
                <li>
                  <a href="#" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Use Cases
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <Link to="/integrations" className="hover:text-white">
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>

            {/* RESOURCES */}
            <div className="space-y-4 lg:text-right">
              <h3 className="text-white font-semibold text-md tracking-wide">
                RESOURCES
              </h3>
              <ul className="space-y-2 text-md">
                {/* Use Link for React Router navigation */}
                <li>
                  <Link to="/blog" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQs
                  </a>
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
                  <a href="#" className="hover:text-white">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>

            {/* COMPANY */}
            <div className="space-y-4 lg:text-right">
              <h3 className="text-white font-semibold text-md tracking-wide">
                COMPANY
              </h3>
              <ul className="space-y-2 text-md">
                <li>
                  <a href="#" className="hover:text-white">
                    Career
                  </a>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/legal/terms" className="hover:text-white">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/legal/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/legal/refund" className="hover:text-white">
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* CONTACT */}
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
