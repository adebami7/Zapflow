export const ServiceCard = ({
  icon,
  backgroundColor,
  iconBgColor,
  title,
  description,
}) => {
  return (
    <div className="p-6 bg-white rounded-[6px] border shadow-sm flex flex-col items-start">
      {/* Top-left Icon */}
      <div className="relative w-[48px] h-[48px] mb-4">
        <div
          className={`relative w-full h-full rounded ${backgroundColor} flex items-center justify-center`}
        >
          <div
            className={`absolute w-[60px] h-[60px] ${iconBgColor}`}
            style={{
              insetInlineEnd: "0rem",
              insetBlockEnd: "0rem",
              borderRadius: "40% 60% 60% 40% / 70% 30% 70% 30%",
              zIndex: -1,
            }}
          />
          {icon}
        </div>
      </div>

      {/* Text aligned left */}
      <p className="text-base mb-2 text-[#222f36] font-semibold">{title}</p>
      <p className="text-sm text-[#98a5c3]">{description}</p>
    </div>
  );
};
