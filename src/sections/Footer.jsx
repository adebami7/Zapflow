import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  MessageSquare,
  Youtube,
} from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

function Footer() {
  return (
    <footer className="bg-[#232323] text-gray-300 py-12">
      <div className="max-w-[1296px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:justify-items-center">
          <div className="space-y-4">
            <a href="/" className="flex items-start">
              <h1 className="text-2xl text-white font-semibold">
              <img
  src="/src/assets/ZAPFLOW LOGO BLACK 1.png"
  alt="Zapflow Logo"
  className="h-8 w-auto sm:h-10"
/>
              </h1>
            </a>
            <p className="text-sm">
          © 2025{" "}
          <a href="#" className="text-white-500 mr-2">
            Zapflow.
          </a>
          All rights reserved
        
            </p>
          </div>

          <div className="text-right">
            <h3 className="text-white font-semibold mb-4">PAGES</h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Pricing"].map((item) => (
                <li key={item}>
                  <ScrollLink
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className="text-sm hover:text-white transition-colors cursor-pointer"
                  >
                    {item}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-right">
            <h3 className="text-white font-semibold mb-4">INFO</h3>
            <ul className="space-y-2 ">
              {["Contact Us", "FAQs", "Testimonials", "Terms & Conditions"].map(
                (item) => (
                  <li key={item}>
                    <ScrollLink
                      to={item.toLowerCase().replace(/ /g, "-")}
                      smooth={true}
                      duration={500}
                      className="text-sm hover:text-white transition-colors cursor-pointer"
                    >
                      {item}
                    </ScrollLink>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="text-right">
            <h3 className="text-white font-semibold mb-4">CONTACT</h3>
            <ul className="space-y-3 text-xs text-right">
  <li className="flex justify-end items-center gap-2">
    {/* <Mail size={12} /> */}
    hi@zapflow.co
  </li>
</ul>


            <div className="mt-6">
              <h4 className="text-white font-semibold mb-4 text-base">
                FOLLOW US ON ;
              </h4>
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
