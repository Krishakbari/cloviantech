import React from "react";
import Logo from "../assets/logo.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  // Function to scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-gray-200 px-6 md:px-32 py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Left Logo & About */}
        <div>
          <img src={Logo} alt="Logo" className="w-40 mb-4" />
          <p className="text-gray-600 text-sm mb-4">
            Clovian Technology where you get all the solutions for you problems.
          </p>
          <div className="flex space-x-4 text-gray-600 text-lg">
            {/* <a href="#" onClick={scrollToTop}>
              <FaFacebookF />
            </a> */}
            <a href="https://www.linkedin.com/in/clovian-tech-solutions-276390388/" onClick={scrollToTop}>
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/clovian.techsolutions/" onClick={scrollToTop}>
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Home Links */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3 sm:text-center">Home</h3>
          <ul className="space-y-2 text-gray-600 text-sm sm:text-center">
            <li>
              <a href="about" onClick={scrollToTop}>
                About
              </a>
            </li>
            <li>
              <a href="service" onClick={scrollToTop}>
                Services
              </a>
            </li>
            <li>
              <a href="blogs" onClick={scrollToTop}>
                Blogs
              </a>
            </li>
            <li>
              <a href="contact" onClick={scrollToTop}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Services</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>
              <a href="#generative-ai" onClick={scrollToTop}>
                Generative AI Solution
              </a>
            </li>
            <li>
              <a href="#agentic-ai" onClick={scrollToTop}>
                Agentic AI & Automation
              </a>
            </li>
            <li>
              <a href="#ml" onClick={scrollToTop}>
                Machine Learning & Deep Learning
              </a>
            </li>
            <li>
              <a href="#vision" onClick={scrollToTop}>
                Computer Vision Solutions
              </a>
            </li>
            <li>
              <a href="#cloud" onClick={scrollToTop}>
                Cloud Computing Services
              </a>
            </li>
            <li>
              <a href="#web-app" onClick={scrollToTop}>
                Web & App Development
              </a>
            </li>
            <li>
              <a href="#custom" onClick={scrollToTop}>
                Custom Software Development
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">More Inquiry</h3>
          <p className="flex items-center text-gray-600 text-sm mb-3">
            <FaPhoneAlt className="mr-2 " />  +61 0410 551 655
          </p>
          <p className="flex items-center text-gray-600 text-sm mb-3">
            <FaEnvelope className="mr-2 " /> cloviantech@gmail.com
          </p>
          <p className="flex items-start text-gray-600 text-sm">
            <FaMapMarkerAlt className="mr-2" />  Clovian Tech Solutions
 Pakenham, Marlboro, Australia - 3810
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 mt-8 pt-4 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
        <p>© 2025 Clovian Technology. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="privacy" onClick={scrollToTop}>
            Privacy Policy
          </a>
          <a href="terms" onClick={scrollToTop}>
            Terms of Use
          </a>
          <a href="legal" onClick={scrollToTop}>
            Legal
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
