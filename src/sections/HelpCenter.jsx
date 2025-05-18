import { useState } from "react";

const sections = [
  "Getting Started",
  "Campaigns & Communication",
  "Channels",
  "Automation & Workflows",
  "Performance & Analytics",
  "Pricing & Plans",
  "Contacts & Audience Management",
  "Account Settings",
  "Troubleshooting",
  "Integrations",
  "Compliance & Security",
];

const HelpCenter = () => {
  const [selected, setSelected] = useState("Getting Started");

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-blue-900 text-white py-8 px-4 text-center">
        <h2 className="text-3xl font-bold">
          <span
            className="text-[#ffffff]  inline-block pl-2"
            style={{
              background:
                "linear-gradient(90deg, #BCF939 0%, rgba(245, 255, 224, 0) 100%)",
            }}
          >
           Help Center
          </span>
        </h2>
        <p className="mt-2">Search for a question</p>
        <div className="mt-4 max-w-md mx-auto relative">
  <span className="absolute left-4 top-1/2 transform -translate-y-1/2">
    <img src="/src/assets/images/search.svg" alt="Search" className="w-5 h-5" />
  </span>
  <input
    type="search"
    placeholder="Enter your question or keyword"
    className="w-full pl-10 pr-4 py-2 rounded-full text-gray-700 focus:outline-none border border-gray-300"
  />
</div>


      </div>

      {/* Body */}
      <div className="flex max-w-7xl mx-auto py-12 px-6 gap-6">
        {/* Sidebar */}
        <div className="w-1/4 bg-[#cedffe]  p-4 select-none">
          <ul>
            {sections.map((section) => (
              <li
                key={section}
                onClick={() => setSelected(section)}
                className={`py-2 px-3 rounded cursor-pointer ${
                  selected === section
                    ? " text-md font-medium text-[#0a5ffa]"
                    : "text-[#5b5f6a]"
                }`}
              >
                {section}
              </li>
            ))}
          </ul>
        </div>

        {/* Main content */}
        <div className="w-3/4 space-y-6 text-[#5b5f6a]">
          <section>
            <h2 className="bg-white p-6 rounded-md shadow  text-xl font-semibold mb-2">Introduction to Zapflow
            <p className="text-sm font-medium  text-[#5b5f6a]">
              Zapflow is an all-in-one marketing tool that helps you connect with customers through WhatsApp, Email, SMS, and Voice. You can send bulk messages, automate follow-ups, track performance, and grow your business from one easy-to-use platform.
            </p></h2>
          </section>

          <section>
            <h2 className="bg-white p-6 rounded-md shadow text-xl font-semibold mb-2">How to Sign Up and Log In
            <div className="text-sm font-medium  text-[#5b5f6a]">
              <ol className="list-decimal list-inside space-y-1">
                <li>Go to [Zapflow website].</li>
                <li>Click Sign Up to create a new account.</li>
                <li>Enter your name, email, and password.</li>
                <li>Check your email for a confirmation link.</li>
                <li>To log in, just return to the site and click Log In, then enter your details.</li>
              </ol>
            </div></h2>
          </section>

          <section>
            <h2 className="bg-white p-6 rounded-md shadow text-xl font-semibold mb-2">Setting Up Your Profile
            <div className="text-sm font-medium text-[#5b5f6a]">
              <ol className="list-decimal list-inside space-y-1">
                <li>After logging in, click your profile icon at the top right.</li>
                <li>Select Profile Settings.</li>
                <li>Add your name, business name, and profile picture (optional).</li>
                <li>Click Save to update your information.</li>
              </ol>
            </div></h2>
          </section>

          <section>
            <h2 className="bg-white p-6 rounded-md shadow text-xl font-semibold mb-2">Connecting WhatsApp, Email, SMS, and Voice
            <div className="text-sm font-medium text-[#5b5f6a]">
              <ol className="list-decimal list-inside space-y-1">
                <li> Go to Channels in your menu.</li>
                <li>Choose the channel you want to connect (WhatsApp, Email, SMS, or Voice).</li>
                <li>Follow the setup instructions—this may include entering an API key or verifying your account.</li>
                <li>Once connected, you can start using the channel in your campaigns.</li>
              </ol>
            </div></h2>
              
          </section>

        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
