function Button({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${className} ${
        disabled
          ? "opacity-40 cursor-not-allowed"
          : "hover:opacity-80 transition duration-300"
      } gap-3 bg-brandPrimary h-[44.8px]  py-3 px-4 rounded flex items-center justify-center text-sm `}
    >
      {children}
    </button>
  );
}

export default Button;
