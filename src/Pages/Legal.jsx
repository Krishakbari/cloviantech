import React from "react";

const Legal = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 text-gray-800 font-manrope leading-relaxed">
      <h1 className="text-3xl md:text-4xl mb-6 text-gray-900 font-inter">
        Legal Notice
      </h1>

      <p className="mb-4">
        This website is operated by <strong>Clovian Tech Solutions</strong>,
        headquartered in Pakenham, Marlboro, Australia – 3810.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">1. Company Information</h2>
      <p className="mb-4">
        <strong>Business Name:</strong> Clovian Tech Solutions<br />
        <strong>Address:</strong> Pakenham, Marlboro, Australia – 3810<br />
        <strong>Email:</strong>{" "}
        <a href="mailto:cloviantech@gmail.com" className="text-[#1c3446] underline">
          cloviantech@gmail.com
        </a><br />
        <strong>Phone:</strong> +61 0410 551 655
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">2. Disclaimer</h2>
      <p className="mb-4">
        The information provided on this website is for general informational
        purposes only. While we strive for accuracy, Clovian Tech Solutions
        makes no representations or warranties regarding completeness or
        reliability of any information contained herein.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">3. Copyright Notice</h2>
      <p className="mb-4">
        © {new Date().getFullYear()} Clovian Tech Solutions. All rights
        reserved. Unauthorized use or reproduction of materials from this
        website is strictly prohibited.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">4. Contact</h2>
      <p className="mb-4">
        For any legal inquiries, please contact us via email at{" "}
        <a href="mailto:cloviantech@gmail.com" className="text-[#1c3446] underline">
          cloviantech@gmail.com
        </a>.
      </p>

      <p className="mt-8 text-gray-500 text-sm">
        Last updated: October 2025
      </p>
    </section>
  );
};

export default Legal;
