import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 text-gray-800 font-manrope leading-relaxed">
      <h1 className="text-3xl md:text-4xl  mb-6 text-gray-900 font-inter">
        Privacy Policy
      </h1>
      <p className="mb-4">
        At <strong>Clovian Tech Solutions</strong>, we value your privacy and are
        committed to protecting your personal information. This Privacy Policy
        explains how we collect, use, and safeguard your data when you interact
        with our website or services.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">1. Information We Collect</h2>
      <p className="mb-4">
        We may collect personal details such as your name, email address, phone
        number, and company information when you contact us or fill out forms on
        our website. Additionally, we gather analytical data like browser type,
        IP address, and pages visited for performance improvements.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">2. How We Use Your Information</h2>
      <p className="mb-4">
        We use your information to:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Provide and improve our services</li>
        <li>Respond to inquiries or requests</li>
        <li>Send updates, newsletters, or marketing content (only with consent)</li>
        <li>Enhance user experience and website functionality</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">3. Data Security</h2>
      <p className="mb-4">
        We implement appropriate technical and organizational measures to
        protect your data from unauthorized access, alteration, or disclosure.
        However, no method of transmission over the internet is 100% secure.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">4. Cookies</h2>
      <p className="mb-4">
        Our website may use cookies to enhance your experience and analyze site
        traffic. You can disable cookies in your browser settings at any time.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">5. Your Rights</h2>
      <p className="mb-4">
        You have the right to access, modify, or delete your personal data. To
        exercise these rights, please contact us at{" "}
        <a href="mailto:cloviantech@gmail.com" className="text-[#1c3446] underline">
          cloviantech@gmail.com
        </a>.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">6. Updates to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy periodically. All changes will be
        posted on this page with an updated revision date.
      </p>

      <p className="mt-8 text-gray-500 text-sm">
        Last updated: October 2025
      </p>
    </section>
  );
};

export default PrivacyPolicy;
