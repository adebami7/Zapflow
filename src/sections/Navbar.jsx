import { useEffect, useState } from "react";
import Button from "../components/Button";
import Drawer from "../components/Drawer";
import { Link as ScrollLink } from "react-scroll";

function MenuItems() {
  const navbarHeight = 100;

  return (
    <>
      <li className="p-3 text-[#657a99] text-sm font-medium hover:text-brandPrimary cursor-pointer">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          offset={-navbarHeight}
        >
          Home
        </ScrollLink>
      </li>
      <li className="p-3 text-[#657a99] text-sm font-medium hover:text-brandPrimary cursor-pointer">
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          offset={-navbarHeight}
        >
          About
        </ScrollLink>
      </li>
      <li className="p-3 text-[#657a99] text-sm font-medium hover:text-brandPrimary cursor-pointer">
        <ScrollLink
          to="services"
          smooth={true}
          duration={500}
          offset={-navbarHeight}
        >
          Services
        </ScrollLink>
      </li>
      <li className="p-3 text-[#3b4a62] text-sm font-medium hover:text-brandPrimary cursor-pointer">
        <ScrollLink
          to="pricing"
          smooth={true}
          duration={500}
          offset={-navbarHeight}
        >
          Pricing
        </ScrollLink>
      </li>
      <li className="p-3 text-[#657a99] text-sm font-medium hover:text-brandPrimary cursor-pointer">
        <ScrollLink
          to="faqs"
          smooth={true}
          duration={500}
          offset={-navbarHeight}
        >
          FAQs
        </ScrollLink>
      </li>
      <li className="p-3 text-[#657a99] text-sm font-medium hover:text-brandPrimary cursor-pointer">
        <ScrollLink
          to="testimonials"
          smooth={true}
          duration={500}
          offset={-navbarHeight}
        >
          Testimonials
        </ScrollLink>
      </li>
      <li className="p-3 text-[#657a99] text-sm font-medium hover:text-brandPrimary cursor-pointer">
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          offset={-navbarHeight}
        >
          Contact Us
        </ScrollLink>
      </li>
    </>
  );
}

function Navbar() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`relative bg-[#fffefe] py-2 px-10 ${
        isFixed ? "fixed-navbar" : ""
      }`}
    >
      <div className="max-w-[1296px] mx-auto flex items-center justify-between">
        <h1 className="py-3 text-2xl text-brandPrimary font-semibold">Zapflow</h1>

        <ul className="hidden lg:flex items-center gap-6">
          <MenuItems />
        </ul>

        <div className="absolute left-[100px]">
          <Drawer>
            <MenuItems />
          </Drawer>
        </div>

        <Button className="h-[34px] text-xs !px-[24px]">Sign Up</Button>
      </div>
    </nav>
  );
}

export default Navbar;
