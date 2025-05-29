function Button({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  variant = "primary",
}) {
  const baseStyles = `gap-3 h-[44.8px] py-3 px-4 rounded-full flex items-center justify-center text-sm transition duration-300`;
  const disabledStyles = disabled
    ? "opacity-40 cursor-not-allowed"
    : "hover:opacity-80";

  const variantStyles = {
    primary: disabled
      ? "bg-[#0A5FFA] text-white"
      : "bg-[#0A5FFA] text-white hover:bg-[#BCF939] hover:text-[#3D414D]",
    outline: disabled
      ? "bg-transparent border border-[#0A5FFA] text-[#0A5FFA]"
      : "bg-transparent border border-[#0A5FFA] text-[#0A5FFA] hover:bg-[#e4eaff] hover:text-[#0A5FFA] hover:border-[#0A5FFA]",
    secondary: disabled
      ? "bg-[#5B5F6A] text-white"
      : "bg-[#5B5F6A] text-white hover:bg-[#A7AAB2] hover:text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${className} ${baseStyles} ${disabledStyles} ${variantStyles[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;
