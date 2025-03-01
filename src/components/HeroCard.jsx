import { MoveRight } from "lucide-react";
import Hang from "../assets/glance-hang.png";

export function Card({
  icon,
  iconBg,
  iconColor,
  title,
  description,
  buttonText,
}) {
  return (
    <div className="p-8 relative bg-white rounded-[6px] border shadow-sm">
      <img
        src={Hang}
        alt="hang"
        className="w-[220px] h-[120px] absolute top-0 right-0"
      />
      <div
        className={`${iconBg} rounded-[4px] mb-6 w-16 h-16 flex items-center justify-center`}
      >
        <div
          className={`w-12 h-12 rounded-[4px] ${iconColor} flex items-center justify-center`}
        >
          {icon}
        </div>
      </div>
      <h3 className="mb-2 text-[#222f36] font-semibold lg:text-xl">{title}</h3>
      <p className="text-sm mb-4 text-[#98a5c3] font-medium">{description}</p>
      <button className="flex items-center gap-3 text-brandPrimary text-[13px] font-medium">
        {buttonText} <MoveRight size={14} className="mt-[3px]" />
      </button>
    </div>
  );
}
