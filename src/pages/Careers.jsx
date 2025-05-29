import Button from "../components/Button";

function Careers() {
  const positions = [
    // {
    //   title: "Account Manager",
    //   department: "Success",
    //   type: "Full time, Remote",
    // },
    // {
    //   title: "Account Manager",
    //   department: "Success",
    //   type: "Full time, Remote",
    // },
  ];

  return (
    <div>
      <div className="bg-[#06348A] h-[346px] flex items-center justify-center">
        <div className="max-w-[627px] mx-auto">
          <h2 className="lg:text-[32px] text-2xl text-center font-bold text-[#F0F0F2] mb-5">
            <span
              className="text-[#F0F0F2] leading-[50px] inline-block pl-2"
              style={{
                background:
                  "linear-gradient(90deg, #BCF939 0%, rgba(255, 255, 255, 0) 100%)",
              }}
            >
              {" "}
              Join Team Zapflow!
            </span>
          </h2>
          <p className="lg:text-base text-sm mt-[22px] font-medium text-[#F0F0F2]">
            We&apos;re building the future of customer communication and we want
            you on board.
          </p>
        </div>
      </div>
      <div className="bg-[#F0F0F2] py-[55px] px-[72px]">
        <h2 className="lg:text-[32px] text-xl mb-9 font-semibold text-[#5B5F6A]">
          Open Positions
        </h2>

        <div
          className={`bg-white rounded-lg p-10 flex flex-col gap-6 ${
            positions.length > 0 ? "h-fit" : "h-[600px]"
          }`}
        >
          {positions.length > 0 ? (
            positions.map((position, index) => (
              <div
                key={index}
                className="bg-[#F0F0F2] shadow-[0px_1px_7.1px_0px_#00000040] py-10 rounded px-[46px] flex items-start justify-between w-full"
              >
                <div className="flex items-center flex-col gap-6">
                  <h3 className="font-semibold text-[32px] text-[#5B5F6A]">
                    {position.title}
                  </h3>
                  <div className="flex items-center gap-4">
                    <p className="text-[#989BA3] text-base font-semibold">
                      {position.department}
                    </p>
                    <div className="w-[6px] h-[6px] rounded-full bg-[#D9D9D9]" />
                    <p className="text-[#989BA3] text-base font-semibold">
                      {position.type}
                    </p>
                  </div>
                </div>
                <Button className="text-base px-[54px] py-[10px]">Apply</Button>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-[#5B5F6A] text-xl font-semibold">
                No open Positions
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Careers;
