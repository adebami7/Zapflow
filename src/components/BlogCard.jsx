import { CalendarDays, Clock } from "lucide-react";

const BlogCard = ({ image, tag, time, date, title, description }) => {
  return (
    <div className="max-w-sm w-[264px]">
      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover rounded-xl mb-4"
      />

      {/* Tag + Time + Date – spaced evenly with correct color */}
      <div className="flex justify-between items-center text-xs text-[#0A5FFA] font-medium mb-2 w-full">
        {/* Tag */}
        <span>{tag}</span>

        {/* Time */}
        <div className="flex items-center gap-1">
          <span className="w-1 h-1 rounded-full bg-[#0A5FFA]" />
          <Clock size={14} />
          <span>{time}</span>
        </div>

        {/* Date */}
        <div className="flex items-center gap-1">
          <span className="w-1 h-1 rounded-full bg-[#0A5FFA]" />
          <CalendarDays size={14} />
          <span>{date}</span>
        </div>
      </div>

      <h3 className="text-lg font-medium text-[#5b5f6a] line-clamp-2 ">
  {title}
</h3>

      <p className="text-sm text-[#5b5f6a]">{description}</p>
    </div>
  );
};

export default BlogCard;
