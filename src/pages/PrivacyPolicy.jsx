 import { Helmet } from "react-helmet";

import LegalLayout from "../sections/LegalLayout";

function PrivacyPolicy() {
  return (
    <LegalLayout header="Privacy Policy">
      {/* SEO META TAGS */}
      <Helmet>
         <title>Zapflow Privacy Policy | How We Protect Your Data</title>
        <meta
          name="description"
          content="Learn how Zapflow collects, uses, and protects your personal data. Your privacy matters to us."
        />
        <link rel="canonical" href="https://www.zapflow.co/privacy-policy" />
      </Helmet>

      <div className="prose text-[#5B5F6A]">
        <p className="mb-4">
          ZapFlow (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed
          to protecting your privacy. This Privacy Policy explains how we
          collect, use, and safeguard your information when you use our website
          and services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          1. Information We Collect
        </h2>
        <p className="mb-2">We collect the following types of information:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>Personal Information:</strong> Name, email, phone number
          </li>
          <li>
            <strong>Business Information:</strong> Business name and contact
            details
          </li>
          <li>
            <strong>Usage Information:</strong> IP address, browser type, device
            type
          </li>
          <li>
            <strong>
              Pages visited, time spent, and interactions on the platform
            </strong>
          </li>
          <li>
            <strong>Customer Data:</strong> Messages sent via WhatsApp, SMS,
            Email, and Voice communication updates
          </li>
        </ul>
        <p className="mb-4">
          <strong>Note:</strong> You are responsible for ensuring that the data
          you upload or send through ZapFlow is collected lawfully and with
          appropriate consent.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          2. How We Use Your Information
        </h2>
        <p className="mb-2">We use your data to:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>Provide services, operate, and improve the ZapFlow platform</li>
          <li>Deliver and monitor marketing messages on your behalf</li>
          <li>Send product announcements and notifications</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          3. Data Sharing & Third Parties
        </h2>
        <p className="mb-4">
          We do not share personal data with third parties except:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            Trusted third-party providers (e.g., hosting, email, SMS gateways)
            who help us deliver services
          </li>
          <li>
            Legal authorities when required by law or to protect our rights
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">4. Data Security</h2>
        <p className="mb-4">
          We implement appropriate security measures to protect data from
          unauthorized access, alteration, or disclosure. However, no online
          service is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          5. Cookies & Tracking
        </h2>
        <p className="mb-4">
          ZapFlow uses cookies for analytics to enhance user experience and
          analyze site performance. You can control cookie preferences through
          browser settings.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">6. Data Retention</h2>
        <p className="mb-4">
          We retain data only as long as necessary to fulfill the purposes
          outlined in this policy or as required by law. You may request
          deletion by contacting us.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">7. Your Rights</h2>
        <p className="mb-2">Depending on your location, you have rights to:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>Access personal data we hold about you</li>
          <li>Request corrections or updates</li>
          <li>Delete your data</li>
          <li>Object to or restrict certain processing</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          8. International Users
        </h2>
        <p className="mb-4">
          If you are outside the European Union, your data may be transferred to
          and processed in other countries where our partners operate.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          9. Changes to This Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. When we do, we
          will notify you by revising the &quot;Last Updated&quot; date.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">10. Contact Us</h2>
        <p className="mb-4">
          If you have questions or concerns about this Privacy Policy, please
          reach out to:{" "}
          <a href="mailto:privacy@zapflow.io" className="text-blue-600">
            privacy@zapflow.io
          </a>
          .
        </p>
      </div>
    </LegalLayout>
  );
}

export default PrivacyPolicy;
