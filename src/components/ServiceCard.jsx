export const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="pt-12 pb-[42px] px-[25px] bg-white rounded-[8px] flex flex-col items-start">
      <img src={icon} alt="icon" className="mb-6 min-w-[48px] min-h-[48px]" />

      <p className="text-[23px] mb-4 text-[#3D414D] font-semibold">{title}</p>
      <p className="text-base text-[#797D87] font-medium">{description}</p>
    </div>
  );
};
