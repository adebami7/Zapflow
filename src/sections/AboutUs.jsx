import Works01 from "../assets/images/works01.svg";
import Works02 from "../assets/images/works02.svg";
import Works03 from "../assets/images/works03.svg";

const HowZapflowWorks = () => {
  return (
    <section
      className="bg-[#00329B] px-6 md:px-[72px] pt-[51px] pb-[87px]"
      id="how-it-works"
    >
      <div className="max-w-[1440px] mx-auto">
        <h1 className="text-[#F0F0F2] text-[32px] sm:text-[48px] text-center font-bold mb-20 leading-[50px]">
          How Zapflow{" "}
          <span
            className="text-[#F0F0F2] inline-block pl-2"
            style={{
              background:
                "linear-gradient(90deg, #BCF939 0%, rgba(255, 255, 255, 0) 100%)",
            }}
          >
            works
          </span>
        </h1>

        <div className="grid lg:grid-cols-3 gap-[46px]">
          <div
            className="w-full h-[572px] rounded-2xl bg-cover bg-center relative"
            style={{ backgroundImage: `url(${Works01})` }}
          >
            <div className="absolute bottom-0 rounded-b-2xl w-full bg-[#B6CFFE] pt-10 pb-6 px-6">
              <p className="text-[#3D414D] font-semibold text-[32px]">
                Connect Your Channels
              </p>
            </div>
          </div>
          <div
            className="w-full h-[572px] rounded-2xl bg-cover bg-center relative"
            style={{ backgroundImage: `url(${Works02})` }}
          >
            <div className="absolute bottom-0 rounded-b-2xl w-full bg-[#D7FB88] pt-10 pb-6 px-6">
              <p className="text-[#3D414D] font-semibold text-[32px]">
                Create Campaigns
              </p>
            </div>
          </div>
          <div
            className="w-full h-[572px] rounded-2xl bg-cover bg-center relative"
            style={{ backgroundImage: `url(${Works03})` }}
          >
            <div className="absolute bottom-0 rounded-b-2xl w-full bg-[#FDEEAB] pt-10 pb-6 px-6">
              <p className="text-[#3D414D] font-semibold text-[32px]">
                Track & Optimize
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowZapflowWorks;
