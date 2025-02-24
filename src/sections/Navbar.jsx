import Button from "../components/Button";
import Drawer from "../components/Drawer";
import { Link as ScrollLink } from "react-scroll";

function MenuItems() {
  return (
    <>
      <li className="p-3 text-[#657a99] text-sm font-medium hover:text-brandPrimary cursor-pointer">
        <ScrollLink to="home" smooth={true} duration={500}>
          Home
        </ScrollLink>
      </li>
      <li className="p-3 text-[#657a99] text-sm font-medium hover:text-brandPrimary cursor-pointer">
        <ScrollLink to="about" smooth={true} duration={500}>
          About
        </ScrollLink>
      </li>
      <li className="p-3 text-[#657a99] text-sm font-medium hover:text-brandPrimary cursor-pointer">
        <ScrollLink to="services" smooth={true} duration={500}>
          Services
        </ScrollLink>
      </li>
      <li className="p-3 text-[#3b4a62] text-sm font-medium hover:text-brandPrimary cursor-pointer">
        <ScrollLink to="pricing" smooth={true} duration={500}>
          Pricing
        </ScrollLink>
      </li>
      <li className="p-3 text-[#657a99] text-sm font-medium hover:text-brandPrimary cursor-pointer">
        <ScrollLink to="faqs" smooth={true} duration={500}>
          FAQs
        </ScrollLink>
      </li>
      <li className="p-3 text-[#657a99] text-sm font-medium hover:text-brandPrimary cursor-pointer">
        <ScrollLink to="testimonials" smooth={true} duration={500}>
          Testimonials
        </ScrollLink>
      </li>
      <li className="p-3 text-[#657a99] text-sm font-medium hover:text-brandPrimary cursor-pointer">
        <ScrollLink to="contact" smooth={true} duration={500}>
          Contact Us
        </ScrollLink>
      </li>
    </>
  );
}

function Navbar() {
  return (
    <nav className="max-w-[1296px] mx-auto relative flex items-center justify-between bg-[#fffefe] py-2 px-10">
      <h1 className="py-3 text-2xl text-brandPrimary font-semibold">Logo</h1>

      <ul className="hidden lg:flex items-center gap-6">
        <MenuItems />
      </ul>

      <div className="absolute left-[100px]">
        <Drawer>
          <MenuItems />
        </Drawer>
      </div>

      <Button className="h-[34px] text-xs !px-[24px]">Sign Up</Button>
    </nav>
  );
}

export default Navbar;
