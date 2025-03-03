import { ArrowRight, Eye, Handshake, Lightbulb, Star } from "lucide-react";
import Cover from "../assets/hero-cover.png";
import CoverMobile from "../assets/hero-mobile.png";
import Main from "../assets/hero-main.png";
import Button from "../components/Button";
import SectionBadge from "../components/sectionBadge";
import { Card } from "../components/HeroCard";

function Hero() {
  return (
    <section id="home">
      <div
        className="hero-background bg-cover bg-center py-[70px] min-h-[640px] xl:min-h-[540px]"
        style={{ backgroundImage: `url(${Cover})` }}
      >
        <style>
          {`
            @media (max-width: 1024px) {
              .hero-background {
                background-image: url(${CoverMobile}) !important;
              }
            }
          `}
        </style>

        <div className="max-w-[1296px] mx-auto px-10 flex items-center justify-between">
          <div>
            <p className="text-white text-base mb-2 font-medium">
              Streamlined and Inclusive
            </p>
            <h1 className="text-[32px] mb-4 text-white font-semibold uppercase">
              AUTOMATE AND SCALE YOUR BUSINESS WITH
              <span className="text-[#ff9a13]"> ZAPFLOW</span>
            </h1>
            <p className="mb-12 text-base text-white max-w-[750px]">
              Zapflow is an all-in-one marketing software for businesses that
              lets you reach out to your customers on WhatsApp, Sms, Emails,
              Voice at scale. Zapflow let&apos;s you send message broadcasts,
              setup transactional notifications, track campaign analytics, setup
              automations & chatbots and most importantly grow your revenue from
              your customers on WhatsApp, emails, Sms, Voice.
            </p>
            <div className="flex items-center gap-3">
              <Button className="h-[46px] !bg-[#0cc763] text-xs md:text-sm">
                View Demos
                <Eye size={14} color="#ffffff" />
              </Button>
              <Button className="h-[46px] !bg-[#ff5a29e6] text-xs md:text-sm">
                Learn More
                <ArrowRight size={14} color="#ffffff" />
              </Button>
            </div>
          </div>
          <img src={Main} alt="hero-main" className="hidden lg:block" />
        </div>
      </div>

      <div className="pt-[48px] pb-[70px] px-6 bg-[#f5f6fa]">
        <SectionBadge label="Glance" />

        <h1 className="mt-4 mb-2 font-semibold text-center lg:text-[28px] text-[#222f36]">
          Why Choose Zapflow?
        </h1>
        <p className="text-[15px] mb-12 text-[#98a5c3] text-center">
          The all-in-one marketing automation tool designed to simplify sales,
          nurture leads, and skyrocket conversions—all in one place!
        </p>

        <div className="grid lg:grid-cols-3 max-w-[1320px] mx-auto gap-6">
          <Card
            icon={<Lightbulb color="white" />}
            iconBg="bg-[#735dff26]"
            iconColor="bg-[#735dff]"
            title="Generate High-Quality Leads – Fast & Easy!"
            description="Effortlessly create high-converting landing pages and lead forms with a single click. Our AI-powered copy generator helps you craft compelling content in minutes."
            buttonText="Read More"
          />
          <Card
            icon={<Star color="white" />}
            iconBg="bg-[#ff5a2926]"
            iconColor="bg-[#ff5a29]"
            title="Automate & Nurture Leads with WhatsApp, sms, voice & Email"
            description="Stay connected with your audience! Set up automated follow-ups, broadcasts, and personalized messages that engage and converts all your leads into loyal customers."
            buttonText="Read More"
          />
          <Card
            icon={<Handshake color="white" />}
            iconBg="bg-[#0cc76326]"
            iconColor="bg-[#0cc763]"
            title="Save Time, Effort & Money with ZapFlow"
            description="Ditch multiple subscriptions and complex systems—ZapFlow does it all! 
            AI-Powered Sales & Marketing Automation
            WhatsApp, Email & SMS Integration
            Built for Businesses, Creators & Marketers
"
            buttonText="Read More"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
