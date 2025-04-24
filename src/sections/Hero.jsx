// import { ArrowRight, Eye, Handshake, Lightbulb, Star } from "lucide-react";
// import Cover from "../assets/hero-cover.png";
// import CoverMobile from "../assets/hero-mobile.png";
// import Main from "../assets/hero-main.png";
// import Button from "../components/Button";
// import SectionBadge from "../components/sectionBadge";
// import { Card } from "../components/HeroCard";

// function Hero() {
//   return (
//     <section id="home">
//       <div
//         className="hero-background bg-cover bg-center py-[70px] min-h-[640px] xl:min-h-[540px]"
//         style={{ backgroundImage: `url(${Cover})` }}
//       >
//         <style>
//           {`
//             @media (max-width: 1024px) {
//               .hero-background {
//                 background-image: url(${CoverMobile}) !important;
//               }
//             }
//           `}
//         </style>

//         <div className="max-w-[1296px] mx-auto px-10 flex items-center justify-between">
//           <div>
//             <p className="text-white text-base mb-2 font-medium">
//               Streamlined and Inclusive
//             </p>
//             <h1 className="text-[32px] mb-4 text-white font-semibold uppercase">
//               AUTOMATE AND SCALE YOUR BUSINESS WITH
//               <span className="text-[#ff9a13]"> ZAPFLOW</span>
//             </h1>
//             <p className="mb-12 text-base text-white max-w-[750px]">
//               Zapflow is an all-in-one marketing software for businesses that
//               lets you reach out to your customers on WhatsApp, Sms, Emails,
//               Voice at scale. Zapflow let&apos;s you send message broadcasts,
//               setup transactional notifications, track campaign analytics, setup
//               automations & chatbots and most importantly grow your revenue from
//               your customers on WhatsApp, emails, Sms, Voice.
//             </p>
//             <div className="flex items-center gap-3">
//               <Button className="h-[46px] !bg-[#0cc763] text-xs md:text-sm">
//                 View Demos
//                 <Eye size={14} color="#ffffff" />
//               </Button>
//               <Button className="h-[46px] !bg-[#ff5a29e6] text-xs md:text-sm">
//                 Learn More
//                 <ArrowRight size={14} color="#ffffff" />
//               </Button>
//             </div>
//           </div>
//           <img src={Main} alt="hero-main" className="hidden lg:block" />
//         </div>
//       </div>

//       <div className="pt-[48px] pb-[70px] px-6 bg-[#f5f6fa]">
//         <SectionBadge label="Glance" />

//         <h1 className="mt-4 mb-2 font-semibold text-center lg:text-[28px] text-[#222f36]">
//           Why Choose Zapflow?
//         </h1>
//         <p className="text-[15px] mb-12 text-[#98a5c3] text-center">
//           The all-in-one marketing automation tool designed to simplify sales,
//           nurture leads, and skyrocket conversions—all in one place!
//         </p>

//         <div className="grid lg:grid-cols-3 max-w-[1320px] mx-auto gap-6">
//           <Card
//             icon={<Lightbulb color="white" />}
//             iconBg="bg-[#735dff26]"
//             iconColor="bg-[#735dff]"
//             title="Generate High-Quality Leads – Fast & Easy!"
//             description="Effortlessly create high-converting landing pages and lead forms with a single click. Our AI-powered copy generator helps you craft compelling content in minutes."
//             buttonText="Read More"
//           />
//           <Card
//             icon={<Star color="white" />}
//             iconBg="bg-[#ff5a2926]"
//             iconColor="bg-[#ff5a29]"
//             title="Automate & Nurture Leads with WhatsApp, sms, voice & Email"
//             description="Stay connected with your audience! Set up automated follow-ups, broadcasts, and personalized messages that engage and converts all your leads into loyal customers."
//             buttonText="Read More"
//           />
//           <Card
//             icon={<Handshake color="white" />}
//             iconBg="bg-[#0cc76326]"
//             iconColor="bg-[#0cc763]"
//             title="Save Time, Effort & Money with ZapFlow"
//             description="Ditch multiple subscriptions and complex systems—ZapFlow does it all! 
//             AI-Powered Sales & Marketing Automation
//             WhatsApp, Email & SMS Integration
//             Built for Businesses, Creators & Marketers
// "
//             buttonText="Read More"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;


import Button from "../components/Button";
import SectionBadge from "../components/sectionBadge";
import { Eye, X } from "lucide-react";
import ManLaptop from "../assets/Group 4.png"; // Placeholder
import CircleIcon from "../assets/Ellipse 4.png"; // Optional: default shape or background

function Hero() {
  return (
    <section id="home" className="bg-[#f7f8fc] pt-20 pb-12 relative overflow-hidden">
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
    className="w-full max-w-[700px] mx-auto lg:mx-0" // Increased image width
  />

  {/* Floating Cards */}
  {/* Avatars - floating above the card */}
<div className="absolute top-[123px] left-[180px] flex -space-x-2 z-10">
  <div className="w-7 h-7 rounded-full bg-gray-300 border-2 border-white" />
  <div className="w-7 h-7 rounded-full bg-gray-300 border-2 border-white" />
  <div className="w-7 h-7 rounded-full bg-gray-300 border-2 border-white" />
  <div className="w-7 h-7 rounded-full bg-gray-300 border-2 border-white" />
  <div className="w-7 h-7 rounded-full bg-gray-300 border-2 border-white" />
</div>

{/* Facebook Leads card */}

<div
  className="absolute top-[150px] left-[170px] bg-[#CEDFFEE3] rounded-full p-4 shadow-lg w-58 text-sm text-[#1e1e1e]  z-0 flex items-center space-x-6  "
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
  className="absolute bottom-[18px] right-[85px] bg-[#CEDFFEE3] rounded-full px-4 py-2 shadow-lg w-fit flex items-center space-x-2 text-sm text-[#1e1e1e]"
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
  <div className="max-w-[1296px] mx-auto flex flex-col md:flex-row justify-between items-center text-center gap-6">
    
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
