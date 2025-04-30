import Button from "../components/Button";
import { Eye, X } from "lucide-react";
import ManLaptop from "../assets/Group 4.png"; 
import CircleIcon from "../assets/Ellipse 4.png"; 

function Hero() {
  return (
    <section id="home" className="bg-[#f7f8fc] pt-20 pb-12 relative overflow-hidden bottom-[-3rem]">
      <div className="max-w-[1296px] mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between">
        <div className="lg:w-1/2">
          <p className="text-sm text-[#0A5FFA] font-medium mb-2">
            Streamlined and Inclusive
          </p>
          <h1
  className="text-4xl sm:text-5xl font-semibold text-[#1e1e1e] mb-4"
  style={{ lineHeight: '72px' }}
>
  Market Smarter, Sell Faster. All Channels.<br />
  <span
    className="text-[#1e1e1e] px-3 py-1 rounded inline-block"
    style={{
      background:
        'linear-gradient(90deg, #BCF939 0%, rgba(245, 255, 224, 0) 100%)',
    }}
  >
    One Platform.
  </span>
</h1>

          <p className="text-[#657a99] text-sm mb-6 max-w-md">
            Your all-in-one marketing software to connect with customers via WhatsApp,
            SMS, Email & Voice at scale. Send broadcasts, automate messages,
            track performance, and grow revenue.
          </p>
          <div className="flex gap-4">
            <Button className="bg-[#0A5FFA] text-white px-6 py-2 text-sm rounded-full">
              Start Free Trial
            </Button>
            <Button className="bg-[#BCF939] text-black px-6 py-2 text-sm rounded-full">
              See Demo
            </Button>
          </div>
        </div>

        <div className="relative lg:w-1/2 mb-10 lg:mb-0">
  <img
    src={ManLaptop}
    alt="Hero Visual"
    className="w-full max-w-[900px] mx-auto lg:mx-0" 
  />

  {/* Floating Cards */}
<div className="absolute top-[123px] left-[180px] flex -space-x-2 z-10">
  <div className="w-7 h-7 rounded-full bg-gray-300 border-2 border-white" />
  <div className="w-7 h-7 rounded-full bg-gray-300 border-2 border-white" />
  <div className="w-7 h-7 rounded-full bg-gray-300 border-2 border-white" />
  <div className="w-7 h-7 rounded-full bg-gray-300 border-2 border-white" />
  <div className="w-7 h-7 rounded-full bg-gray-300 border-2 border-white" />
</div>

{/* Facebook Leads card */}

<div
  className="absolute top-[150px] left-[170px] bg-[#CEDFFEE3] rounded-full px-4 py-2 shadow-lg w-58 text-sm text-[#1e1e1e]  z-0 flex items-center space-x-6  "
  style={{
    border: '0.1px solid black',
  }}
>
  <span>Facebook Leads</span>
  <X size={14} className="cursor-pointer" />
</div>

  <div className="absolute top-[170px] right-[10px] bg-white rounded-md p-4 shadow-lg w-56 text-sm flex flex-col gap-1">
    <div className="font-medium">Total Forms</div>
    <div className="text-xl font-semibold">124</div>
    <a href="#" className="text-[#1e1e1e] text-xs underline">
      View all forms
    </a>
  </div>

  <div className="absolute bottom-[15px] left-[80px] bg-white rounded-md p-4 shadow-lg w-56 text-sm flex flex-col gap-1">
    <div className="font-medium">Total Contacts</div>
    <div className="text-xl font-semibold">10,234</div>
    <a href="#" className="text-[#1e1e1e] text-xs underline">
      View all contacts
    </a>
  </div>

  <div
  className="absolute bottom-[18px] right-[85px] bg-[#CEDFFEE3] rounded-full px-4 py-2 shadow-lg w-58 z-0 flex items-center space-x-6 text-sm text-[#1e1e1e]"
  style={{
    border: '0.1px solid black',
  }}
>
  <span>Webinar Attendees</span>
  <X size={14} className="cursor-pointer" />
</div>



</div>


      </div>

      <div className="bg-[#D7FB88] py-8 mt-10">
  <div className="max-w-[1296px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center gap-6">
    
    {/* Stat 1 */}
    <div className="flex items-start space-x-2 text-left">
      <p className="text-5xl font-bold text-[#1e1e1e]">2x</p>
      <p className="text-sm text-[#1e1e1e] leading-tight">
        Customer <br /> Retention
      </p>
    </div>

    {/* Stat 2 */}
    <div className="flex items-start space-x-2 text-left">
      <p className="text-5xl font-bold text-[#1e1e1e]">100%</p>
      <p className="text-sm text-[#1e1e1e] leading-tight">
        Messages <br /> Automated
      </p>
    </div>

    {/* Stat 3 */}
    <div className="flex items-start space-x-2 text-left">
      <p className="text-5xl font-bold text-[#1e1e1e]">+35%</p>
      <p className="text-sm text-[#1e1e1e] leading-tight">
        Engagement on <br /> WhatsApp
      </p>
    </div>

    {/* Stat 4 */}
    <div className="flex items-start space-x-2 text-left">
      <p className="text-2xl font-bold text-[#1e1e1e]">Real ROI in <br /> Weeks</p>
    
    </div>

  </div>
</div>



    </section>
  );
}

export default Hero;
