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
              <h1 className="text-2xl text-brandPrimary font-semibold">
                Zapflow
              </h1>
            </a>
            <p className="text-sm">
            ZapFlow is an all-in-one marketing automation
          platform designed for businesses, creators, and marketers{" "}
          to capture leads, nurture prospects, and close sales effortlessly.
          With built-in{" "}
          email, SMS, WhatsApp automation, landing page creation.
            </p>
          </div>

          <div>
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

          <div>
            <h3 className="text-white font-semibold mb-4">INFO</h3>
            <ul className="space-y-2">
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

          <div>
            <h3 className="text-white font-semibold mb-4">CONTACT</h3>
            <ul className="space-y-3 text-xs">
              {/* <li className="flex items-start gap-2">
                <MapPin size={12} />
                New York, NY 10012, US
              </li> */}
              <li className="flex items-center gap-2">
                <Mail size={12} />
                hi@zapflow.io
              </li>
              {/* <li className="flex items-center gap-2">
                <Phone size={12} />
                +(555)-1920 1851
              </li> */}
            </ul>

            <div className="mt-6">
              <h4 className="text-white font-semibold mb-4 text-base">
                FOLLOW US ON :
              </h4>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, name: "facebook" },
                  { icon: Twitter, name: "twitter" },
                  { icon: Instagram, name: "instagram" },
                  { icon: MessageSquare, name: "discord" },
                  { icon: Youtube, name: "youtube" },
                ].map(({ icon: Icon, name }) => (
                  <a
                    key={name}
                    href="#"
                    className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center hover:bg-purple-600 transition-colors"
                  >
                    <span className="sr-only">{name}</span>
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 text-sm text-center">
          Copyright © 2025{" "}
          <a href="#" className="text-purple-500 mr-2">
            Zapflow.
          </a>
          All rights reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
