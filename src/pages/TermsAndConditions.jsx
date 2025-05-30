import LegalLayout from "../sections/LegalLayout";

function TermsAndConditions() {
  return (
    <LegalLayout header="Terms & Conditions">
      <div className="prose text-[#5B5F6A]">
        <p className="mb-4">
          Welcome to Zapflow. These Terms & Conditions (&quot;Terms&quot;)
          govern your use of our website, platform, and services (collectively,
          the &quot;Service&quot;). By accessing or using Zapflow, you agree to
          be bound by these Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">1. Use of Service</h2>
        <p className="mb-4">
          Zapflow provides tools for sending marketing and transactional
          messages through channels including WhatsApp, SMS, Email, and Voice.
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>You must be at least 18 years old to use our services.</li>
          <li>
            You agree to use the Service only for lawful purposes and in
            accordance with applicable laws (including anti-spam regulations).
          </li>
          <li>You are responsible for all activity under your account.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          2. Account & Security
        </h2>
        <p className="mb-4">
          You are responsible for maintaining the confidentiality of your login
          information.
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            You must notify us immediately if you suspect unauthorized access to
            your account.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          3. Messaging Compliance
        </h2>
        <p className="mb-4">
          You agree not to send spam or unsolicited messages and maintain proper
          opt-in/opt-out mechanisms.
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            Zapflow is not liable for any violations of messaging laws on your
            part.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          4. Payment & Billing
        </h2>
        <p className="mb-4">
          Access to premium features requires a paid subscription.
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            Fees are billed monthly or annually, as per your selected plan.
          </li>
          <li>
            Failure to pay may result in suspension or termination of your
            account.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">5. Restrictions</h2>
        <p className="mb-4">You may not:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            Use the platform to send abusive, harmful, or misleading content.
          </li>
          <li>Attempt to reverse-engineer, hack, or disrupt our systems.</li>
          <li>Resell or sublicense our services without written consent.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          6. Intellectual Property
        </h2>
        <p className="mb-4">
          All content, trademarks, and software on Zapflow are the property of
          Zapflow or its licensors.
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>You may not use our branding or content without permission.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">7. Termination</h2>
        <p className="mb-4">
          We reserve the right to suspend or terminate your access if you
          violate these Terms. You may also cancel your account at any time.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          8. Disclaimer & Limitation of Liability
        </h2>
        <p className="mb-4">
          Zapflow is provided &quot;as is.&quot; We make no guarantees of
          uptime, success, or specific results.
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            We are not liable for indirect or consequential damages from use of
            our Service.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          9. Changes to Terms
        </h2>
        <p className="mb-4">
          We may update these Terms from time to time. Continued use of the
          platform after changes means you accept the updated Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">10. Contact Us</h2>
        <p className="mb-4">
          If you have questions about these Terms, please contact us at:{" "}
          <a href="mailto:support@zapflow.io" className="text-blue-600">
            support@zapflow.io
          </a>
          .
        </p>
      </div>
    </LegalLayout>
  );
}

export default TermsAndConditions;
