import { Facebook, Twitter, Instagram } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../assets/images/logo-black.svg";

function Footer() {
  return (
   <footer className="bg-[#232323] text-[#F0F0F2] pt-20 pb-20 px-6 lg:px-[72px]">
  <div className="max-w-[1440px] mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
      {/* LEFT COLUMN: LOGO + DESCRIPTION */}
   <div className="md:col-span-1 space-y-4">
  <a href="/" className="flex items-start">
          <h1 className="text-2xl text-white font-semibold">
            <img
              src={Logo}
              alt="Zapflow Logo"
              className="h-8 w-auto sm:h-10"
            />
          </h1>
        </a>
  <p className="text-[13px]  max-w-sm">
    All-in-one marketing software to grow your<br /> business through Email, SMS, WhatsApp&nbsp;&amp;&nbsp; <br /> Voice, all from one place.
  </p>
  <p className="text-[13px] mt-6">© 2025 Zapflow. All rights reserved</p>
</div>


      {/* RIGHT COLUMNS */}
      <div className="md:col-span-4 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {/* RESOURCES */}
        <div className="space-y-4 lg:text-right">
          <h3 className="text-white font-semibold text-md tracking-wide">RESOURCES</h3>
          <ul className="space-y-2 text-md">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Academy</a></li>
          </ul>
        </div>

        {/* PRODUCT */}
        <div className="space-y-4 lg:text-right">
          <h3 className="text-white font-semibold text-md tracking-wide">PRODUCT</h3>
          <ul className="space-y-2 text-md">
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Use Cases</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Integrations</a></li>
          </ul>
        </div>

        {/* COMPANY */}
        <div className="space-y-4 lg:text-right">
          <h3 className="text-white font-semibold text-md tracking-wide">COMPANY</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Testimonials</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="space-y-4 lg:text-right">
          <h3 className="text-white font-semibold text-md tracking-wide">CONTACT</h3>
          <p className="text-md">hi@zapflow.co</p>

          <h3 className="text-white font-semibold text-md tracking-wide mt-6">FOLLOW US ON ;</h3>
          <div className="flex lg:justify-end gap-3">
            {[{ icon: Facebook, name: "facebook" }, { icon: Twitter, name: "twitter" }, { icon: Instagram, name: "instagram" }].map(({ icon: Icon, name }) => (
              <a
                key={name}
                href="#"
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
