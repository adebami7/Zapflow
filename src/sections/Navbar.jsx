import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Button from "../components/Button";
import Drawer from "../components/Drawer";
import Logo from "../assets/images/logo.svg";

function MenuItems() {
  const navbarHeight = 150;
  const location = useLocation();
const navigate = useNavigate();

  const items = [
    { to: "home", label: "Home" },
    // { to: "services", label: "Services" },
    { to: "pricing", label: "Pricing" },
    { to: "faqs", label: "FAQs" },
    { to: "testimonials", label: "Testimonials" },
    { to: "contact", label: "Contact Us" },
  ];

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const sectionId = location.hash.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - navbarHeight,
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  const isActive = (item) => {
    return location.pathname === "/" && location.hash === `#${item.to}`;
  };

  return (
    <>
      {items.map((item, index) => (
        <li
          key={index}
          className={`p-3 lg:text-sm text-base py-4 lg:py-0 xl:text-base border border-transparent border-b-[#A7AAB2] lg:border-none font-medium cursor-pointer ${
            isActive(item) ? "text-[#0A5FFA]" : "text-[#5B5F6A]"
          } hover:text-[#0A5FFA]`}
        >
          {location.pathname === "/" ? (
            <ScrollLink
              to={item.to}
              smooth={true}
              duration={500}
              offset={-navbarHeight}
            >
              {item.label}
            </ScrollLink>
          ) : (
            <button
  onClick={() => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById(item.to);
      if (el) {
        window.scrollTo({
          top: el.offsetTop - navbarHeight,
          behavior: "smooth",
        });
      }
    }, 100); // short delay to ensure routing happens
  }}
>
  {item.label}
</button>

          )}
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
      className={`relative bg-[#f7f8fc] py-5 px-4 lg:px-10 xl:px-[74px] z-50 flex items-center justify-between ${
        isFixed ? "fixed-navbar shadow-md" : ""
      }`}
    >
      <div className="flex items-center justify-between w-full">
        <img src={Logo} alt="Zapflow Logo" className="h-8 w-auto sm:h-10" />

        <ul className="hidden lg:flex items-center gap-4">
          <MenuItems />
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/">
            <Button
              variant="outline"
              className="w-[160px] h-[40px] text-sm px-5 py-1.5"
            >
              Log In
            </Button>
          </Link>
          <Link to="/">
            <Button
              variant="primary"
              className="w-[160px] h-[40px] text-sm px-5 py-1.5"
            >
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
      <div className="">
        <Drawer>
          <MenuItems />
          <div className="flex flex-col items-center gap-4">
            <Link to="/">
              <Button
                variant="outline"
                className="w-[80%] h-[48px] text-base px-5 py-1.5"
              >
                Log In
              </Button>
            </Link>
            <Link to="/">
              <Button
                variant="primary"
                className="w-[80%] h-[48px] text-base px-5 py-1.5"
              >
                Sign Up
              </Button>
            </Link>
          </div>
        </Drawer>
      </div>
    </nav>
  );
}

export default Navbar;
