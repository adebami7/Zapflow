// import { useEffect, useState } from "react";
// import Button from "../components/Button";
// import Drawer from "../components/Drawer";
// import { Link as ScrollLink } from "react-scroll";

// function MenuItems() {
//   const navbarHeight = 100;

//   return (
//     <>
//       <li className="p-3 text-[#657a99] text-sm font-medium hover:text-brandPrimary cursor-pointer">
//         <ScrollLink
//           to="home"
//           smooth={true}
//           duration={500}
//           offset={-navbarHeight}
//         >
//           Home
//         </ScrollLink>
//       </li>
//       <li className="p-3 text-[#657a99] text-sm font-medium hover:text-brandPrimary cursor-pointer">
//         <ScrollLink
//           to="about"
//           smooth={true}
//           duration={500}
//           offset={-navbarHeight}
//         >
//           About
//         </ScrollLink>
//       </li>
//       <li className="p-3 text-[#657a99] text-sm font-medium hover:text-brandPrimary cursor-pointer">
//         <ScrollLink
//           to="services"
//           smooth={true}
//           duration={500}
//           offset={-navbarHeight}
//         >
//           Services
//         </ScrollLink>
//       </li>
//       <li className="p-3 text-[#3b4a62] text-sm font-medium hover:text-brandPrimary cursor-pointer">
//         <ScrollLink
//           to="pricing"
//           smooth={true}
//           duration={500}
//           offset={-navbarHeight}
//         >
//           Pricing
//         </ScrollLink>
//       </li>
//       <li className="p-3 text-[#657a99] text-sm font-medium hover:text-brandPrimary cursor-pointer">
//         <ScrollLink
//           to="faqs"
//           smooth={true}
//           duration={500}
//           offset={-navbarHeight}
//         >
//           FAQs
//         </ScrollLink>
//       </li>
//       <li className="p-3 text-[#657a99] text-sm font-medium hover:text-brandPrimary cursor-pointer">
//         <ScrollLink
//           to="testimonials"
//           smooth={true}
//           duration={500}
//           offset={-navbarHeight}
//         >
//           Testimonials
//         </ScrollLink>
//       </li>
//       <li className="p-3 text-[#657a99] text-sm font-medium hover:text-brandPrimary cursor-pointer">
//         <ScrollLink
//           to="contact"
//           smooth={true}
//           duration={500}
//           offset={-navbarHeight}
//         >
//           Contact Us
//         </ScrollLink>
//       </li>
//     </>
//   );
// }

// function Navbar() {
//   const [isFixed, setIsFixed] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setIsFixed(true);
//       } else {
//         setIsFixed(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <nav
//       className={`relative bg-[#fffefe] py-2 px-10 ${
//         isFixed ? "fixed-navbar" : ""
//       }`}
//     >
//       <div className="max-w-[1296px] mx-auto flex items-center justify-between">
//         <h1 className="py-3 text-2xl text-brandPrimary font-semibold">
//           Zapflow
//         </h1>

//         <ul className="hidden lg:flex items-center gap-6">
//           <MenuItems />
//         </ul>

//         <div className="absolute left-[100px]">
//           <Drawer>
//             <MenuItems />
//           </Drawer>
//         </div>

//         <Button className="h-[34px] text-xs !px-[24px]">Sign Up</Button>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



import { useEffect, useState } from "react";
import Button from "../components/Button";
import Drawer from "../components/Drawer";
import { Link as ScrollLink } from "react-scroll";

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
          className={`p-3 text-sm font-medium cursor-pointer ${
            item.label === "Home" ? "text-[#0A5FFA]" : "text-[#3b4a62]"
          } hover:text-brandPrimary`}
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
      className={`relative bg-[#f7f8fc] py-3 px-10 z-50 ${
        isFixed ? "fixed-navbar shadow-md" : ""
      }`}
    >
      <div className="max-w-[1296px] mx-auto flex items-center justify-between">
      <img
  src="/src/assets/ZAPFLOW LOGO-BLACK-3.png"
  alt="Zapflow Logo"
  className="h-8 w-auto sm:h-10"
/>


        <ul className="hidden lg:flex items-center gap-4">
          <MenuItems />
        </ul>

        <div className="flex items-center gap-3">
          <Button className="bg-transparent border border-[#0A5FFA] text-[#0A5FFA] text-sm px-5 py-1.5 hover:bg-[#e4eaff] rounded-full">
            Log in
          </Button>
          <Button className="bg-[#0A5FFA] text-white text-sm px-5 py-1.5 hover:bg-[#1f3ecf] rounded-full">
            Sign up
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


