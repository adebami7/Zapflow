import { NavLink } from "react-router-dom";

function LegalLayout({ header, children }) {
  const items = [
    {
      name: "Terms & Conditions",
      id: "terms-and-conditions",
      path: "/terms-and-conditions",
    },
    { name: "Privacy Policy", id: "privacy-policy", path: "/privacy-policy" },
    { name: "Refund Policy", id: "refund-policy", path: "/refund-policy" },
  ];

  return (
    <div>
      <div className="bg-[#06348A] h-[346px] px-6 flex items-center justify-center">
        <div className="max-w-[627px] mx-auto">
          <h2 className="text-2xl lg:text-[32px] text-center font-bold text-[#F0F0F2] mb-5">
            <span
              className="text-[#F0F0F2] leading-[50px] inline-block pl-2"
              style={{
                background:
                  "linear-gradient(90deg, #BCF939 0%, rgba(255, 255, 255, 0) 100%)",
              }}
            >
              Legal
            </span>
          </h2>
          <p className="text-sm lg:text-base text-center mt-[22px] font-medium text-[#F0F0F2]">
            {header}
          </p>
        </div>
      </div>
      <div className="bg-[#F0F0F2] min-h-screen">
        <div className="py-[77px] max-w-[1280px] mx-auto xl:px-0 px-6">
          <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-[86px]">
            <div className="h-[256px] bg-[#CEDFFE] w-full lg:w-[27%] pt-4 shadow-lg overflow-hidden relative lg:sticky lg:top-[77px]">
              <div className="h-full overflow-y-auto">
                {items.map((item) => (
                  <NavLink
                    key={item.id}
                    to={item.path}
                    className={({ isActive }) =>
                      `block text-base px-5 py-2 mb-4 cursor-pointer hover:text-[#0A5FFA] transition-colors duration-200 font-semibold ${
                        isActive ? "text-[#0A5FFA]" : "text-[#5B5F6A]"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
              <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-[#CEDFFE] to-transparent pointer-events-none"></div>
            </div>
            <div className="w-full lg:w-[73%] p-6 bg-white rounded-lg">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LegalLayout;
