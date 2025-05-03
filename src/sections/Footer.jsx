import { Facebook, Twitter, Instagram } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../assets/images/logo-black.svg";

function Footer() {
  return (
    <footer className="bg-[#232323] text-[#F0F0F2] pt-[81px] pb-[115px] lg:px-[72px] px-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:justify-items-start">
          <div className="space-y-4">
            <a href="/" className="flex items-start">
              <h1 className="text-2xl text-white font-semibold">
                <img
                  src={Logo}
                  alt="Zapflow Logo"
                  className="h-8 w-auto sm:h-10"
                />
              </h1>
            </a>
            <p className="text-base">
              © 2025{" "}
              <a href="#" className="text-[#F0F0F2] mr-2">
                Zapflow.
              </a>
              All rights reserved
            </p>
          </div>

          <div className="lg:text-right">
            <h3 className="text-[#F0F0F2] text-base font-semibold mb-6">
              PAGES
            </h3>
            <ul className="space-y-4">
              {["Home", "About", "Services", "Pricing"].map((item) => (
                <li key={item}>
                  <ScrollLink
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className="text-base hover:text-white transition-colors cursor-pointer"
                  >
                    {item}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:text-right">
            <h3 className="text-[#F0F0F2] text-base font-semibold mb-6">
              INFO
            </h3>
            <ul className="space-y-4">
              {["Contact Us", "FAQs", "Testimonials", "Terms & Conditions"].map(
                (item) => (
                  <li key={item}>
                    <ScrollLink
                      to={item.toLowerCase().replace(/ /g, "-")}
                      smooth={true}
                      duration={500}
                      className="text-base hover:text-white transition-colors cursor-pointer"
                    >
                      {item}
                    </ScrollLink>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="lg:text-right">
            <h3 className="text-[#F0F0F2] text-base font-semibold mb-6">
              CONTACT
            </h3>
            <ul className="space-y-4">
              <li className="flex lg:justify-end items-center gap-2 text-base hover:text-white">
                hi@zapflow.co
              </li>
            </ul>

            <div className="mt-4">
              <h3 className="text-[#F0F0F2] text-base font-semibold mb-6">
                FOLLOW US ON ;
              </h3>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, name: "facebook" },
                  { icon: Twitter, name: "twitter" },
                  { icon: Instagram, name: "instagram" },
                  // { icon: MessageSquare, name: "discord" },
                  // { icon: Youtube, name: "youtube" },
                ].map(({ icon: Icon, name }) => (
                  <a
                    key={name}
                    href="#"
                    className="w-8 h-8 rounded-lg bg-white flex items-center justify-center hover:bg-blue-600 transition-colors"
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
