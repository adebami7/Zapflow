 import { Helmet } from "react-helmet";

import LegalLayout from "../sections/LegalLayout";

function RefundPolicy() {
  return (
    <LegalLayout header="Refund Policy">
      {/* SEO META TAGS */}
      <Helmet>
         <title>Zapflow Refund Policy | Learn About Our Guarantee</title>
        <meta
          name="description"
          content="Understand Zapflow’s refund policy and how we handle cancellations and billing concerns."
        />
        <link rel="canonical" href="https://www.zapflow.co/refund-policy" />
      </Helmet>

      <div className="prose text-[#5B5F6A]">
        <p className="mb-4">
          Please read this Refund Policy carefully before using ZapFlow or
          subscribing to any of our paid plans. By signing up or upgrading, you
          agree to the terms outlined below.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">No Refund Policy</h2>
        <p className="mb-4">
          ZapFlow offers a Free Forever plan that allows you to explore the
          platform, set up your automation, test integrations (including SMS,
          voice, WhatsApp, and email), and evaluate our features thoroughly
          without paying anything.
        </p>
        <p className="mb-4">
          We&apos;ve designed the free plan so that you can determine whether
          ZapFlow meets your business needs before making any financial
          commitment.
        </p>
        <p className="mb-4">
          As a result, we maintain a strict no refund policy for all paid plans
          unless otherwise specified under &quot;Exceptions.&quot;
        </p>
        <p className="mb-4">
          Once you choose to upgrade to a paid subscription plan, you
          acknowledge that:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>You have had the opportunity to test ZapFlow&apos;s features.</li>
          <li>
            You are responsible for how the platform is used within your
            business.
          </li>
          <li>
            Refunds will not be issued based on dissatisfaction that could have
            been identified using the free plan.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          No Refund for Misuse or Platform Violations
        </h2>
        <p className="mb-4">
          ZapFlow is not intended for spamming or sending unsolicited bulk
          messages on any channel, including WhatsApp, SMS, or email.
        </p>
        <p className="mb-4">
          If your number, domain, or account is banned or restricted due to:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>Spam reports</li>
          <li>Violation of WhatsApp Business or third-party API policies</li>
          <li>Use of fake or invalid business credentials or URLs</li>
        </ul>
        <p className="mb-4">
          ZapFlow will not issue a refund. These consequences arise from user
          behavior and are beyond our control.
        </p>
        <p className="mb-4">
          We clearly display these usage warnings during account creation and
          setup to avoid misuse.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          Exceptions – When You May Request a Refund
        </h2>
        <p className="mb-4">We may issue a refund at our sole discretion if:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            You request it within 48 hours of your initial purchase or plan
            renewal.
          </li>
          <li>
            The refund request is due to accidental payment or failure to cancel
            before auto-renewal.
          </li>
        </ul>
        <p className="mb-4">
          To request a refund under these conditions, contact our support team
          within the 48-hour window.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          Refund Processing Timeline
        </h2>
        <p className="mb-4">
          If your refund request is approved, please allow 5 to 7 business days
          for the refunded amount to appear in your original payment method
          account.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Thank You</h2>
        <p className="mb-4">
          Thank you for choosing ZapFlow. We&apos;re committed to helping you
          build powerful and responsible marketing automation.
        </p>
        <p className="mb-4">Team ZapFlow</p>
        <p className="mb-4">Power your growth, ethically.</p>
      </div>
    </LegalLayout>
  );
}

export default RefundPolicy;
