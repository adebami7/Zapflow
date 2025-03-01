function SectionBadge({
  label,
  className,
  sectionText = "text-[#ff5a29]",
  border = "1px solid rgba(255, 90, 41, 0.08)",
  boxShadow = "3px 3px 0 0 rgba(255, 90, 41, 0.2)",
}) {
  return (
    <div className={`flex items-center justify-center w-full ${className}`}>
      <div
        className={`py-[1px] px-[10px] ${sectionText} font-medium w-fit text-xs bg-transparent rounded-[5px]`}
        style={{
          border: border,
          boxShadow: boxShadow,
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default SectionBadge;
