import Button from "../components/Button";

function Navbar() {
  return (
    <nav className="max-w-[1296px] mx-auto flex items-center justify-between bg-[#fffefe] py-2 px-3">
      <h1 className="py-3 text-2xl text-brandPrimary font-semibold">Logo</h1>

      <ul className="flex items-center gap-6">
        <li className="p-3 text-[#657a99] text-sm font-medium hover:text-brandPrimary cursor-pointer">
          Home
        </li>
        <li className="p-3 text-[#657a99] text-sm font-medium hover:text-brandPrimary cursor-pointer">
          About
        </li>
        <li className="p-3 text-[#657a99] text-sm font-medium hover:text-brandPrimary cursor-pointer">
          Services
        </li>
        <li className="p-3 text-[#657a99] text-sm font-medium hover:text-brandPrimary cursor-pointer">
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
      </ul>

      <Button className="h-[34px] text-xs">Sign Up</Button>
    </nav>
  );
}

export default Navbar;
