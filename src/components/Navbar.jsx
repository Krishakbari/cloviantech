import React, { useState, useRef, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const Navigate = useNavigate()

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Close menu after clicking a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-gray-50">
      <nav className="mx-auto max-w-7xl px-4 py-4 font-manrope">
        {/* Top navbar */}
        <div className="bg-gray-200 px-6 py-3 rounded-full shadow-md flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="h-10 w-auto hidden md:block" />
            <img
              src={logo}
              alt="mobile logo"
              className="h-8 w-auto md:hidden"
                onClick={()=>Navigate("/")}
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-12 text-base font-medium text-gray-800 text-lg">
            <Link to="/" className="font-bold text-gray-900">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/service">Services</Link>
            <Link to="/blogs">Blogs</Link>
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <button className="bg-[#1c3446] text-white px-5 py-2 rounded-full font-medium hover:bg-[#152a37] transition">
                Contact Us
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div
            ref={dropdownRef}
            className="bg-gray-200 mt-2 py-4 px-6 rounded-lg shadow-md flex flex-col gap-4 text-center md:hidden"
          >
            <Link to="/" onClick={handleLinkClick} className="font-bold text-gray-900">
              Home
            </Link>
            <Link to="/about" onClick={handleLinkClick}>
              About
            </Link>
            <Link to="/service" onClick={handleLinkClick}>
              Services
            </Link>
            <Link to="/blogs" onClick={handleLinkClick}>
              Blogs
            </Link>
            <Link to="/contact" onClick={handleLinkClick}>
              <button className="bg-[#1c3446] text-white px-5 py-2 rounded-full font-medium hover:bg-[#152a37] transition">
                Contact Us
              </button>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
