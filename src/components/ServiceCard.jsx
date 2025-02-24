export const ServiceCard = ({
  icon,
  backgroundColor,
  iconBgColor,
  title,
  description,
}) => {
  return (
    <div className="p-8 bg-white rounded-[6px] border shadow-sm flex items-center justify-center flex-col">
      <div className="relative z-[2]">
        <div
          className={`mb-6 relative w-12 h-12 rounded ${backgroundColor} flex items-center justify-center`}
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
      <p className="text-base mb-2 text-[#222f36] font-semibold">{title}</p>
      <p className="text-sm text-[#98a5c3] text-center">{description}</p>
    </div>
  );
};
