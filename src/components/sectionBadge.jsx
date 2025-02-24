function SectionBadge({ label, className }) {
  return (
    <div className={`flex items-center justify-center w-full ${className}`}>
      <div
        className="py-[1px] px-[10px] text-[#ff5a29] font-medium w-fit text-xs bg-transparent rounded-[5px]"
        style={{
          border: "1px solid rgba(255, 90, 41, 0.08)",
          boxShadow: "3px 3px 0 0 rgba(255, 90, 41, 0.2)",
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default SectionBadge;
