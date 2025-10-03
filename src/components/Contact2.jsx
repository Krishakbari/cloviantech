import React, { useState } from "react";
import emailjs from "emailjs-com";
import RightImg from "../assets/rightside.png";
import Bag from "../assets/Bag.png";
import Hand from "../assets/Hand.png";
import Headphone from "../assets/Headphone.png";

const Contact2 = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const services = ["Generative AI Solution", "Agentic AI & Automation", "Machine Learning & Deep Learning", "Computer Vision Solutions","Cloud Computing Services"," Website Development" ,"Application Development" ,"Custom Software Development"];

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submit form
  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      services: selectedServices.join(", "),
    };

    emailjs
      .send(
        "service_mlp17uk", // your Service ID
        "template_ajltw56", // your Template ID
        templateParams,
        "HGJK-oXmeTQe_4dqX" // your Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log(result.text);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            message: "",
          });
          setSelectedServices([]);
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <section className="bg-gray-50 sm:py-8 py-4 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-8 md:p-12 flex flex-col md:flex-row gap-8">
        {/* Left Side Content */}
        <div className="flex-1">
          {/* Form */}
          <form className="space-y-6" onSubmit={sendEmail}>
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Akbari"
                  required
                  className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-gray-500 focus:ring-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Krish"
                  required
                  className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-gray-500 focus:ring-gray-500"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="krishakbari2020@gmail.com"
                  required
                  className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-gray-500 focus:ring-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Web development"
                  required
                  className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-gray-500 focus:ring-gray-500"
                />
              </div>
            </div>

            {/* Services */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Services
              </label>
              <div className="flex flex-wrap gap-3 mt-2">
                {services.map((service) => (
                  <button
                    type="button"
                    key={service}
                    onClick={() => toggleService(service)}
                    className={`px-3 py-1 rounded-md text-sm transition ${
                      selectedServices.includes(service)
                        ? "bg-[#1c3446] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Messages
              </label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Add Text"
                required
                className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-gray-500 focus:ring-gray-500"
              ></textarea>
            </div>

            {/* Terms + Button */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <label className="flex items-center text-sm text-gray-700">
                <input type="checkbox" className="mr-2" required />
                I agree with terms of usage and privacy policy.
              </label>
              <button
                type="submit"
                className="self-start md:self-auto bg-[#1c3446] text-white px-6 py-2 rounded-full hover:bg-[#152a37] transition"
              >
                Submit
              </button>
            </div>
          </form>

          {/* ===== NEW SECTION STARTS HERE ===== */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {/* Sales and Business */}
            <div>
              <img
                src={Bag}
                alt="Briefcase icon"
                className="h-8 w-8 mx-auto mb-3"
              />
              <h3 className="font-semibold text-gray-800">Sales and Business</h3>
              <a
                href="mailto:abcd1234@gmail.com"
                className="text-sm text-gray-600 hover:underline"
              >
                abcd1234@gmail.com
              </a>
            </div>

            {/* Partners */}
            <div>
              <img
                src={Hand}
                alt="Handshake icon"
                className="h-8 w-8 mx-auto mb-3"
              />
              <h3 className="font-semibold text-gray-800">Partners</h3>
              <a
                href="mailto:partners1234@gmail.com"
                className="text-sm text-gray-600 hover:underline"
              >
                partners1234@gmail.com
              </a>
            </div>

            {/* Customer Support */}
            <div>
              <img
                src={Headphone}
                alt="Headphone icon"
                className="h-8 w-8 mx-auto mb-3"
              />
              <h3 className="font-semibold text-gray-800">Customer Support</h3>
              <a
                href="mailto:support1234@gmail.com"
                className="text-sm text-gray-600 hover:underline"
              >
                support1234@gmail.com
              </a>
            </div>
          </div>
          {/* ===== NEW SECTION ENDS HERE ===== */}
        </div>

        {/* Right Image (hidden on mobile) */}
        <div className="flex-1 hidden md:flex justify-center items-center">
          <img src={RightImg} alt="Right Side" className="w-full max-w-sm" />
        </div>
      </div>
    </section>
  );
};

export default Contact2;
