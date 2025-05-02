import { useEffect, useState } from "react";
import Button from "../components/Button";
import Drawer from "../components/Drawer";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../assets/images/logo.svg";

function MenuItems() {
  const navbarHeight = 100;

  const items = [
    { to: "home", label: "Home" },
    { to: "services", label: "Services" },
    { to: "pricing", label: "Pricing" },
    { to: "faqs", label: "FAQs" },
    { to: "testimonials", label: "Testimonials" },
    { to: "contact", label: "Contact Us" },
  ];

  return (
    <>
      {items.map((item, index) => (
        <li
          key={index}
          className={`p-3 text-base font-medium cursor-pointer ${
            item.label === "Home" ? "text-[#0A5FFA]" : "text-[#5B5F6A]"
          } hover:text-[#0A5FFA]`}
        >
          <ScrollLink
            to={item.to}
            smooth={true}
            duration={500}
            offset={-navbarHeight}
          >
            {item.label}
          </ScrollLink>
        </li>
      ))}
    </>
  );
}

function Navbar() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`relative bg-[#f7f8fc] py-5 px-[74px] z-50 ${
        isFixed ? "fixed-navbar shadow-md" : ""
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <img src={Logo} alt="Zapflow Logo" className="h-8 w-auto sm:h-10" />

        <ul className="hidden lg:flex items-center gap-4">
          <MenuItems />
        </ul>

        <div className="flex items-center gap-3">
          <Button className=" w-[160px] h-[40px] bg-transparent border border-[#0A5FFA] text-[#0A5FFA] text-sm px-5 py-1.5 hover:bg-[#e4eaff] rounded-full">
            Log In
          </Button>
          <Button className=" w-[160px] h-[40px] bg-[#0A5FFA] text-white text-sm px-5 py-1.5 hover:bg-[#0A5FFA] rounded-full">
            Sign Up
          </Button>
        </div>

        <div className="lg:hidden absolute left-[100px]">
          <Drawer>
            <MenuItems />
          </Drawer>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
