import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const LegalPage = () => {
  const navigate = useNavigate();
  const { tab } = useParams();
  const [selectedTab, setSelectedTab] = useState('Terms & Conditions');


  useEffect(() => {
    if (!tab) navigate("/legal/terms", { replace: true });
  }, [tab, navigate]);

  const handleTabClick = (tabKey) => {
  setSelectedTab(tabKey);          // Update local state
  navigate(`/legal/${tabKey}`);    // Navigate to new route
};


  const tabs = [
    { key: "Terms & Conditions", label: "Terms & Conditions" },
    { key: "Privacy Policy", label: "Privacy Policy" },
    { key: "Refund Policy", label: "Refund Policy" },
  ];

  const renderContent = () => {
    switch (tab) {
      case "Terms & Conditions":
        return (
  <>
    <p className="mb-4">
      Welcome to Zapflow. These Terms & Conditions (“Terms”) govern your
      use of our website, platform, and services <br />
      (collectively, the “Service”). By accessing or using Zapflow, you
      agree to be bound by these Terms.
    </p>

    <h3 className="text-xl font-semibold mb-2">1. Use of Service</h3>
    <ul className="list-disc pl-5 mb-4 space-y-1">
      <li>Zapflow provides tools for sending marketing and transactional messages through channels including WhatsApp, SMS, Email, and Voice.</li>
      <li>You must be at least 18 years old to use our services.</li>
      <li>You agree to use the Service only for lawful purposes and in accordance with applicable laws (including anti-spam regulations).</li>
      <li>You are responsible for all activity under your account.</li>
    </ul>

    <h3 className="text-xl font-semibold mb-2">2. Account & Security</h3>
    <ul className="list-disc pl-5 mb-4 space-y-1">
      <li>You are responsible for maintaining the confidentiality of your login information.</li>
      <li>You must notify us immediately if you suspect unauthorized access to your account.</li>
    </ul>

    <h3 className="text-xl font-semibold mb-2">3. Messaging Compliance</h3>
    <ul className="list-disc pl-5 mb-4 space-y-1">
      <li>You agree not to send spam or unsolicited messages.</li>
      <li>You must have permission to message your contacts and maintain proper opt-in/opt-out mechanisms.</li>
      <li>Zapflow is not liable for any violations of messaging laws on your part.</li>
    </ul>

    <h3 className="text-xl font-semibold mb-2">4. Payment & Billing</h3>
    <ul className="list-disc pl-5 mb-4 space-y-1">
      <li>Access to premium features requires a paid subscription.</li>
      <li>Fees are billed monthly or annually, as per your selected plan.</li>
      <li>Failure to pay may result in suspension or termination of your account.</li>
    </ul>

    <h3 className="text-xl font-semibold mb-2">5. Restrictions</h3>
    <ul className="list-disc pl-5 mb-4 space-y-1">
      <li>Use the platform to send abusive, harmful, or misleading content.</li>
      <li>Attempt to reverse-engineer, hack, or disrupt our systems.</li>
      <li>Resell or sublicense our services without written consent.</li>
    </ul>

    <h3 className="text-xl font-semibold mb-2">6. Intellectual Property</h3>
    <p className="mb-4">
      All content, trademarks, and software on Zapflow are the property of Zapflow or its licensors. You may not use our branding or content without permission.
    </p>

    <h3 className="text-xl font-semibold mb-2">7. Termination</h3>
    <p className="mb-4">
      We reserve the right to suspend or terminate your access if you violate these Terms. You may also cancel your account at any time.
    </p>

    <h3 className="text-xl font-semibold mb-2">8. Disclaimer & Limitation of Liability</h3>
    <p className="mb-4">
      Zapflow is provided “as is.” We make no guarantees of uptime, success, or specific results. We are not liable for indirect or consequential damages from use of our Service.
    </p>

    <h3 className="text-xl font-semibold mb-2">9. Changes to Terms</h3>
    <p className="mb-4">
      We may update these Terms from time to time. Continued use of the platform after changes means you accept the updated Terms.
    </p>

    <h3 className="text-xl font-semibold mb-2">10. Contact Us</h3>
    <p>
      If you have questions about these Terms, please contact us at: <br />
      <a href="mailto:support@zapflow.io" className="text-blue-600 hover:underline">
        support@zapflow.io
      </a>
    </p>
  </>
);

      case "Privacy Policy":
        return (
  <>
    

    <p className="mb-6">
      Zapflow (“we,” “us,” “our”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website and services.
    </p>

    <h3 className="text-xl font-semibold mb-2">1. Information We Collect
        <p className="text-sm font-medium ">We collect the following type of information</p>
    </h3>
    <ul className="list-disc pl-6 mb-6 space-y-1">
      
        <strong>a. Personal Information</strong>
        <ul className="list-disc pl-5 mt-1 space-y-1">
          <li>Name, email address, phone number</li>
          <li>Business name and contact details</li>
          <li>Login credentials</li>
        </ul>
      
    
        <strong>b. Usage Information</strong>
        <ul className="list-disc pl-5 mt-1 space-y-1">
          <li>IP address, browser type, device type</li>
          <li>Pages visited, time spent, and interactions on the platform</li>
        </ul>
      
    
        <strong>c. Customer Data</strong>
        <ul className="list-disc pl-5 mt-1 space-y-1">
          <li>Contact lists you upload</li>
          <li>Messages you send via WhatsApp, SMS, Email, and Voice</li>
        </ul>
      
    </ul>

    <p className="mb-6 italic">
      Note: You are responsible for ensuring that the data you upload or send through Zapflow is collected lawfully and with consent.
    </p>

    <h3 className="text-xl font-semibold mb-2">2. How We Use Your Information</h3>
    <ul className="list-disc pl-6 mb-6 space-y-1">
      <li>Provide, operate, and improve the Zapflow platform</li>
      <li>Deliver and monitor marketing messages on your behalf</li>
      <li>Respond to support requests and inquiries</li>
      <li>Send you product updates and notifications</li>
      <li>Comply with legal obligations</li>
    </ul>

    <h3 className="text-xl font-semibold mb-2">3. Data Sharing & Third Parties</h3>
    <p className="mb-4">
      We do not sell your personal data. We may share information with:
    </p>
    <ul className="list-disc pl-6 mb-6 space-y-1">
      <li>Trusted third-party providers (e.g., hosting, email, SMS gateways) who help deliver our service</li>
      <li>Legal authorities if required to comply with law, prevent fraud, or protect users</li>
    </ul>

    <h3 className="text-xl font-semibold mb-2">4. Data Security</h3>
    <p className="mb-6">
      We implement appropriate security measures to protect your data from unauthorized access, alteration, or disclosure. However, no online service is 100% secure.
    </p>

    <h3 className="text-xl font-semibold mb-2">5. Cookies & Tracking</h3>
    <p className="mb-6">
      Zapflow uses cookies and similar technologies to enhance user experience and analyze site usage. You can control cookie preferences through your browser settings.
    </p>

    <h3 className="text-xl font-semibold mb-2">6. Data Retention</h3>
    <p className="mb-6">
      We retain your information only as long as necessary to fulfill the purposes outlined in this policy or as required by law. You may request deletion of your data by contacting us.
    </p>

    <h3 className="text-xl font-semibold mb-2">7. Your Rights</h3>
    <p className="mb-4">
      Depending on your location, you may have rights to:
    </p>
    <ul className="list-disc pl-6 mb-6 space-y-1">
      <li>Access the personal data we hold about you</li>
      <li>Correct inaccurate data</li>
      <li>Delete your data</li>
      <li>Object to or restrict certain processing</li>
    </ul>
    <p className="mb-6">
      To exercise these rights, contact us at <a href="mailto:privacy@zapflow.io" className="text-blue-600 hover:underline">privacy@zapflow.io</a>.
    </p>

    <h3 className="text-xl font-semibold mb-2">8. International Users</h3>
    <p className="mb-6">
      If you are accessing Zapflow from outside [Your Country], your data may be transferred to and processed in other countries where we or our partners operate.
    </p>

    <h3 className="text-xl font-semibold mb-2">9. Changes to This Policy</h3>
    <p className="mb-6">
      We may update this Privacy Policy from time to time. When we do, we will notify you by revising the “Last Updated” date above.
    </p>

    <h3 className="text-xl font-semibold mb-2">10. Contact Us</h3>
    <p>
      If you have any questions or concerns about this Privacy Policy, reach out to:<br />
      📧 <a href="mailto:privacy@zapflow.io" className="text-blue-600 hover:underline">privacy@zapflow.io</a><br />
      🌐 <a href="https://www.zapflow.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.zapflow.io</a>
    </p>
  </>
);

      case "Refund Policy":
        return (
  <>
    

    <p className="mb-6">
      Please read this Refund Policy carefully before using ZapFlow or subscribing to any of our paid plans. By signing up or upgrading, you agree to the terms outlined below.
    </p>

    <h3 className="text-xl font-medium mb-2">No Refund Policy</h3>
    <p className="mb-4">
      ZapFlow offers a Free Forever plan that allows you to explore the platform, set up your automations, test integrations (including SMS, voice, WhatsApp, and email), and evaluate our features thoroughly without paying anything. We’ve designed the free plan so that you can determine whether ZapFlow meets your business needs before making any financial commitment.
    </p>
    <p className="mb-4">
      As a result, we maintain a strict no refund policy for all paid plans unless otherwise specified under “Exceptions.” Once you choose to upgrade to a paid subscription plan, you acknowledge that:
    </p>
    <ul className="list-disc pl-6 mb-6 space-y-1">
      <li>You have had the opportunity to test ZapFlow’s features.</li>
      <li>You are responsible for how the platform is used within your business.</li>
      <li>Refunds will not be issued based on dissatisfaction that could have been identified using the free plan.</li>
    </ul>

    <h3 className="text-xl font-medium mb-2">No Refund for Misuse or Platform Violations</h3>
    <p className="mb-4">
      ZapFlow is not intended for spamming or sending unsolicited bulk messages on any channel, including WhatsApp, SMS, or email. If your number, domain, or account is banned or restricted due to:
    </p>
    <ul className="list-disc pl-6 mb-6 space-y-1">
      <li>Spam reports</li>
      <li>Violation of WhatsApp Business or third-party API policies</li>
      <li>Use of fake or invalid business credentials or URLs</li>
    </ul>
    <p className="mb-6">
      ZapFlow will not issue a refund. These consequences arise from user behavior and are beyond our control. We clearly display these usage warnings during account creation and setup to avoid misuse.
    </p>

    <h3 className="text-xl font-medium mb-2">Exceptions – When You May Request a Refund</h3>
    <p className="mb-4">
      We may issue a refund at our sole discretion if:
    </p>
    <ul className="list-disc pl-6 mb-6 space-y-1">
      <li>You request it within 48 hours of your initial purchase or plan renewal.</li>
      <li>The refund request is due to accidental payment or failure to cancel before auto-renewal.</li>
    </ul>
    <p className="mb-6">
      To request a refund under these conditions, contact our support team within the 48-hour window.
    </p>

    <h3 className="text-xl font-medium mb-2">Refund Processing Timeline</h3>
    <p className="mb-6">
      If your refund request is approved, please allow 5 to 7 business days for the refunded amount to appear in your original payment method account.
    </p>

    <p>
      Thank you for choosing ZapFlow. We’re committed to helping you build powerful and responsible marketing automations.<br />
      <strong>Team ZapFlow</strong><br />
      Power your growth, ethically.
    </p>
  </>
);

      default:
        return <p>Invalid tab selected.</p>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-[3rem] px-0">
      {/* Top Header */}
  <div className="bg-[#06348a] h-[258px] flex flex-col items-center justify-center text-white mb-12">
  <h2 className="text-4xl font-bold mb-2">
   <span
            className="text-[#ffffff]  inline-block pl-2"
            style={{
              background:
                "linear-gradient(90deg, #BCF939 0%, rgba(245, 255, 224, 0) 100%)",
            }}
          >
           Legal
          </span>
  </h2>
  <p className="text-sm flex space-x-4 text-[#f0f0f2] font-medium">
    {selectedTab}
  </p>
</div>





      {/* Tabs and Content */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Vertical Tabs with sky blue background */}
        <div className="w-full h-[280px] lg:w-64 bg-[#cedffe] p-4 flex flex-col gap-3">
          {tabs.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => handleTabClick(key)}
              className={`text-left text-md font-medium px-2 py-3 rounded transition-colors
                ${tab === key ? "text-[#0a5ffa] font-medium" : "text-[#5b5f6a]"}
               
              `}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 text-[#5b5f6a] bg-white p-8 rounded-xl shadow">
          {renderContent()}
        
        
        
        </div>
      </div>
   </div>
  );
};

export default LegalPage;
