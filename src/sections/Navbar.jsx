import Button from "../components/Button";
import Drawer from "../components/Drawer";

function MenuItems() {
  return (
    <>
      <li className="p-3 text-[#657a99] text-sm font-medium hover:text-brandPrimary cursor-pointer">
        Home
      </li>
      <li className="p-3 text-[#657a99] text-sm font-medium hover:text-brandPrimary cursor-pointer">
        About
      </li>
      <li className="p-3 text-[#657a99] text-sm font-medium hover:text-brandPrimary cursor-pointer">
        Services
      </li>
      <li className="p-3 text-[#3b4a62] text-sm font-medium hover:text-brandPrimary cursor-pointer">
        Pricing
      </li>
      <li className="p-3 text-[#657a99] text-sm font-medium hover:text-brandPrimary cursor-pointer">
        FAQs
      </li>
      <li className="p-3 text-[#657a99] text-sm font-medium hover:text-brandPrimary cursor-pointer">
        Testimonials
      </li>
      <li className="p-3 text-[#657a99] text-sm font-medium hover:text-brandPrimary cursor-pointer">
        Contact Us
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
