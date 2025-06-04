import { Search } from "lucide-react";
import { useState } from "react";
 import { Helmet } from "react-helmet";

const Section = ({ id, content }) => {
  return (
    <section id={id} className="rounded-lg mb-6 shadow">
      {content.map((item, index) => (
        <div key={index} className="mb-4 bg-white p-6">
          {item.title && (
            <h4 className="font-semibold mb-2 text-xl text-[#5B5F6A]">
              {item.title}
            </h4>
          )}
          {item.steps ? (
            <ol className="list-decimal list-inside leading-7 font-normal text-[#5B5F6A]">
              {item.steps.map((step, i) => (
                <li key={i} className="ml-4">
                  {step}
                </li>
              ))}
            </ol>
          ) : (
            <p
              className="font-normal text-[#5B5F6A]"
              dangerouslySetInnerHTML={{
                __html: item.text.replace(/\n/g, "<br />"),
              }}
            />
          )}
        </div>
      ))}
    </section>
  );
};

function HelpCenter() {
  const useCases = [
    {
      name: "Getting Started",
      id: "getting-started",
      content: [
        {
          title: "Introduction to Zapflow",
          text: "Zapflow is an all-in-one marketing tool that helps you connect with customers through WhatsApp, Email, SMS, and Voice. You can send bulk messages, automate follow-ups, track performance, and grow your business from one easy-to-use platform.",
        },
        {
          title: "How to Sign Up and Log In",
          steps: [
            "Go to [Zapflow's website]",
            "Click Sign Up to create a new account.",
            "Enter your name, email, and password.",
            "Check your email for a confirmation link.",
            "To log in, just return to the site and click Log In, then enter your details.",
          ],
        },
        {
          title: "Setting Up Your Profile",
          steps: [
            "After logging in, click your profile icon at the top right.",
            "Select Profile Settings.",
            "Add your name, business name, and profile picture (optional).",
            "Click Save to update your information.",
          ],
        },
        {
          title: "Connecting WhatsApp, Email, SMS, and Voice",
          steps: [
            "Go to Channels in your menu.",
            "Choose the channel you want to connect (WhatsApp, Email, SMS, or Voice).",
            "Follow the setup instructions—this may include entering an API key or verifying your account.",
            "Once connected, you can start using the channel in your campaigns.",
          ],
        },
      ],
    },
    {
      name: "Campaigns & Communication",
      id: "campaigns-communication",
      content: [
        {
          text: "Launch personalized messages to your audience across WhatsApp, SMS, Email, and Voice—all from one place.",
        },
        {
          title: "Creating a Campaign",
          steps: [
            "Go to Broadcast tab in your dashboard",
            "Choose your channel: Email Campaign, WhatsApp, SMS, or Voice",
            "Create your template or add your message, audience list, and schedule time",
            "Hit Send Now or Schedule",
          ],
        },
        {
          title: "Editing a Campaign",
          steps: [
            "Go to the Broadcast History tab",
            "Click on the SMS or drafted campaign you want to edit",
            "Make changes to content, recipients, or schedule",
            "Save or Send your updates",
          ],
        },
        {
          title: "Reusing a Campaign",
          steps: [
            "Click the ⋮ next to any campaign",
            "Select “Duplicate”",
            "Make edits and resend it as new",
          ],
        },
        {
          title: "Campaign Reports",
          steps: [
            "After sending, track: Delivery rate, Opens & clicks, Response & engagement",
            "Find all stats under the view details option.",
          ],
        },
      ],
    },
    {
      name: "Channels",
      id: "channels",
      content: [
        {
          text: "Zapflow lets you connect with your audience through WhatsApp, SMS, Email, and Voice, all in one platform.",
        },
        {
          title: "Connecting a Channel",
          steps: [
            "Go to Channels tab",
            "Choose the channel you want to connect",
            "Follow the steps to authorize or link your account",
            "Test your connection to confirm it's working",
          ],
        },
        {
          title: "WhatsApp",
          text: "Send broadcasts or automate messages via WhatsApp Business.<br />Supports media and text<br />Personalized messaging<br />Requires WhatsApp Business API or integration",
        },
        {
          title: "SMS",
          text: "Reach users quickly with short, direct messages.<br />Great for alerts and reminders<br />Works globally with supported numbers<br />Requires SMS credit or a connected provider",
        },
        {
          title: "Email",
          text: "Create branded email campaigns with ease.<br />Use rich text or templates<br />Track opens, clicks, and replies<br />Connect via SMTP or supported email services",
        },
        {
          title: "Voice",
          text: "Send pre-recorded voice messages to your contacts.<br />Ideal for updates or announcements<br />Upload MP3s or record directly<br />Set delivery schedule",
        },
        {
          title: "Managing Channels",
          text: "You can disconnect or reconnect a channel anytime from the Channels tab.<br />If a channel fails, check your connection and credentials.<br />Need help setting up a channel? Visit the <a href='#' class='text-blue-600 underline'>step-by-step guides</a> or <a href='#' class='text-blue-600 underline'>contact support</a>.",
        },
      ],
    },
    {
      name: "Automation & Workflows",
      id: "automation-workflows",
      content: [
        {
          text: "Save time and stay consistent by setting up automated messages and workflows that run on their own.",
        },
        {
          title: "What Is Automation?",
          text: "Automation lets you send messages based on triggers; like a new subscriber, a scheduled date, or user activity, so you don’t have to send them manually.",
        },
        {
          title: "How to Create an Automation",
          steps: [
            "Go to Automation in your dashboard",
            "Click “Create Workflow”",
            "Choose a Trigger (e.g., New Signup, Scheduled Time)",
            "Add your Actions (Send Email, WhatsApp, etc.)",
            "Set conditions or delays if needed",
            "Click Activate",
          ],
        },
        {
          title: "Common Workflow Ideas",
          steps: [
            "Welcome series for new users",
            "Abandoned cart reminders",
            "Follow-ups after form submissions",
            "Birthday or special day messages",
          ],
        },
        {
          title: "Managing Your Workflows",
          steps: [
            "Edit: Click on any workflow to update steps or content",
            "Pause/Resume: Use toggle to temporarily stop or restart",
            "Delete: Remove workflows you no longer need",
          ],
        },
        {
          title: "Tips for Effective Automation",
          steps: [
            "Keep messages short and personal",
            "Add delays for natural timing",
            "Test your workflow before activating it",
          ],
        },
        {
          text: "Need help setting up your first workflow? Check out our <a href='#' class='text-blue-600 underline'>step-by-step guide</a> or <a href='#' class='text-blue-600 underline'>contact support</a>.",
        },
      ],
    },
    {
      name: "Performance & Analytics",
      id: "performance-analytics",
      content: [
        {
          text: "Zapflow provides performance tracking across every campaign, workflow, and communication channel. You can monitor engagement, conversions, and delivery data in real-time.",
        },
        {
          title: "Key Features",
          steps: [
            "Real-time Metrics: View open rates, click-through rates, delivery status, and replies for every message sent via Email, WhatsApp, SMS, or Voice.",
            "Workflow Insights: Monitor how users move through your automation flows and see which steps have the highest drop-off or conversion.",
            "Audience Breakdown: Analyze engagement by contact group, tag, or specific campaigns.",
            "Export Reports: Generate CSV or PDF reports for internal review, client reporting, or audits.",
          ],
        },
        {
          title: "How to Access",
          steps: [
            "Go to your Dashboard, select the campaign or workflow, then click Analytics.",
          ],
        },
      ],
    },
    {
      name: "Pricing & Plans",
      id: "pricing-plans",
      content: [
        {
          text: "Zapflow offers flexible pricing plans designed to grow with your business. You can upgrade, downgrade, or manage billing directly from your dashboard.",
        },
        {
          title: "What’s Included",
          text: "Each plan includes features, usage limits (contacts and messages), and support options. Add-ons like extra channels or priority support are available.",
        },
        {
          title: "Managing Your Plan",
          steps: [
            "Navigate to Account Settings > Billing",
            "View your current plan, usage, and billing cycle",
            "Upgrade or downgrade as needed",
            "Download invoices and payment receipts",
            "Update billing information securely",
          ],
        },
        {
          text: "The Plans include free, basic, and premium plans.",
        },
      ],
    },
    {
      name: "Contacts & Audience Management",
      id: "contacts-audience",
      content: [
        {
          text: "Manage and organize your customer database efficiently using contact tools designed for segmentation and personalization.",
        },
        {
          title: "Key Features",
          steps: [
            "Import & Export: Upload CSV files or sync contacts via integrations",
            "Manual Additions: Add individual contacts with tags and custom fields",
            "Contact Activity: Track engagement history, preferences, and unsubscribes",
            "Tags & Groups: Use labels to organize contacts for targeted messaging",
            "Compliance Settings: Automatically manage opt-outs and bounced contacts",
          ],
        },
        {
          title: "Best Practice",
          text: "Use grouped contacts to deliver highly relevant, behavior-based campaigns that improve conversion rates.",
        },
      ],
    },
    {
      name: "Account Settings",
      id: "account-settings",
      content: [
        {
          text: "Your account settings control everything from user access to basic customization.",
        },
        {
          title: "Manage Your Account",
          steps: [
            "Edit Profile Info: Name, email, company, timezone",
            "Change Password: Update login credentials securely",
            "Add Users: Invite team members and assign roles",
            "Set Notifications: Choose what alerts to receive and how",
            "2FA Security: Enable Two-Factor Authentication for enhanced protection",
          ],
        },
        {
          title: "User Roles",
          text: "Assign permissions to team members—Admin, Editor, or Viewer—based on their responsibilities.",
        },
      ],
    },
    {
      name: "Troubleshooting",
      id: "troubleshooting",
      content: [
        {
          text: "Encounter a problem? This section covers quick fixes and what to do next.",
        },
        {
          title: "Common Issues",
          steps: [
            "Messages Not Sending: Check your channel integration and credit balance",
            "Automation Errors: Review triggers and conditions in your workflow",
            "Login Problems: Reset password or clear cache",
            "Channel Setup: Reconnect your WhatsApp, SMS, or Email provider",
            "Failed Deliveries: Review bounce reasons in your analytics report",
          ],
        },
        {
          title: "Still Need Help?",
          text: "Contact our support team via <a href='#' class='text-blue-600 underline'>chat</a> or <a href='#' class='text-blue-600 underline'>email</a> with screenshots and campaign IDs for faster resolution.",
        },
      ],
    },
    {
      name: "Integrations",
      id: "integrations",
      content: [
        {
          text: "Zapflow integrates with your existing tools to create powerful workflows and unified data.",
        },
        {
          title: "Popular Integrations",
          steps: [
            "CRMs (e.g. HubSpot, Salesforce)",
            "Google Forms and Typeform",
            "Payment tools (e.g. Paystack, Stripe)",
            "Zapier and custom Webhooks",
          ],
        },
        {
          title: "Setup Process",
          steps: [
            "Go to Settings > Integrations",
            "Select the tool you want to connect",
            "Authenticate your account",
            "Map fields and define triggers",
          ],
        },
        {
          title: "Troubleshooting Tips",
          steps: [
            "Ensure API keys are correct",
            "Check that your third-party account has permission",
            "Use test mode before going live",
          ],
        },
      ],
    },
    {
      name: "Compliance & Security",
      id: "compliance-security",
      content: [
        {
          text: "Zapflow prioritizes user data protection and regulatory compliance for every message sent.",
        },
        {
          title: "Data Security",
          steps: [
            "Encrypted data at rest and in transit",
            "Secure hosting on certified infrastructure",
            "Role-based access control",
          ],
        },
        {
          title: "Compliance Standards",
          steps: [
            "Fully GDPR-ready with opt-in/opt-out tracking",
            "Built-in unsubscribe links and keyword handling",
            "Data export and deletion available upon request",
          ],
        },
        {
          title: "Your Responsibility",
          text: "Ensure all contacts added to your account have opted in and understand how their data will be used. Zapflow provides the tools, but compliance starts with you.",
        },
      ],
    },
  ];

  const [activeItem, setActiveItem] = useState(useCases[0].id);
  const [searchQuery, setSearchQuery] = useState("");

  const handleItemClick = (id) => {
    setActiveItem(id);
  };

  const filteredUseCases = useCases.filter((useCase) => {
    const query = searchQuery.toLowerCase();
    if (useCase.name.toLowerCase().includes(query)) return true;
    return useCase.content.some((item) => {
      if (item.title && item.title.toLowerCase().includes(query)) return true;
      if (item.text && item.text.toLowerCase().includes(query)) return true;
      if (
        item.steps &&
        item.steps.some((step) => step.toLowerCase().includes(query))
      )
        return true;
      return false;
    });
  });

  const activeUseCase =
    filteredUseCases.find((useCase) => useCase.id === activeItem) ||
    filteredUseCases[0];

  return (
    <div>
      {/* SEO META TAGS */}
      <Helmet>
         <title>ZapFlow Help Center | Get Support, Tutorials & Product Guides</title>
        <meta
          name="description"
          content="Find answers, tutorials, and product support in the ZapFlow Help Center. Learn how to get the most out of ZapFlow’s automation tools with our step-by-step guides."
        />
        <link rel="canonical" href="https://www.zapflow.co/help-center" />
      </Helmet>
      <div className="bg-[#06348A] h-[346px] px-6 flex items-center justify-center">
        <div className="max-w-[627px] mx-auto">
          <h2 className="lg:text-[32px] text-2xl text-center font-bold text-[#F0F0F2] mb-5">
            <span
              className="text-[#F0F0F2] leading-[50px] inline-block pl-2"
              style={{
                background:
                  "linear-gradient(90deg, #BCF939 0%, rgba(255, 255, 255, 0) 100%)",
              }}
            >
              Help Center
            </span>
          </h2>
          <div className="mb-6 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#5B5F6A] h-5 w-5" />
            <input
              type="text"
              placeholder="Enter your question or keyword"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 pl-10 rounded-[18px] text-xs md:w-[405px] text-[#5B5F6A] border border-[#CEDFFE] focus:outline-none focus:ring-2 focus:ring-[#0A5FFA]"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#F0F0F2] lg:py-[55px] lg:px-[72px] p-6">
        <div className="flex lg:flex-row flex-col items-start gap-10 lg:gap-[86px]">
          <div className="h-[256px] bg-[#CEDFFE] lg:w-[27%] w-full pt-4 shadow-lg overflow-hidden relative lg:sticky lg:top-[77px]">
            <div className="h-full overflow-y-auto">
              {filteredUseCases.length > 0 ? (
                filteredUseCases.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`text-${
                      activeItem === item.id ? "[#0A5FFA]" : "[#5B5F6A]"
                    } text-base px-5 py-2 mb-4 cursor-pointer hover:text-[#0A5FFA] transition-colors duration-200 font-semibold`}
                  >
                    {item.name}
                  </div>
                ))
              ) : (
                <div className="text-[#5B5F6A] text-base px-5 py-2">
                  No results found
                </div>
              )}
            </div>
            <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-[#CEDFFE] to-transparent pointer-events-none"></div>
          </div>

          <div className="lg:w-[73%] w-full bg-transparent">
            <div className="text-sm lg:text-base">
              {activeUseCase ? (
                <Section
                  id={activeUseCase.id}
                  name={activeUseCase.name}
                  content={activeUseCase.content}
                />
              ) : (
                <p className="text-[#5B5F6A] h-[240px] flex items-center justify-center bg-white">
                  No content available for this.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpCenter;
