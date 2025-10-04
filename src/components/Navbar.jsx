import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

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

  const handleLinkClick = () => setIsOpen(false);

  return (
    <div className="bg-gray-50 relative z-50">
      <nav className="mx-auto max-w-7xl px-4 py-4 font-manrope relative">
        <div className="bg-gray-200 px-6 py-3 rounded-full shadow-md flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={logo} alt="logo" className="h-10 w-auto hidden md:block" />
            <img
              src={logo}
              alt="mobile logo"
              className="h-8 w-auto md:hidden cursor-pointer"
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-12 text-lg font-medium text-gray-800">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/service", label: "Services" },
              { to: "/blogs", label: "Blogs" },
            ].map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `relative transition-colors duration-200 
                  ${isActive ? "text-gray-900 font-bold" : "text-gray-700"} 
                  group`
                }
              >
                {link.label}
                <span
                  className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gray-900 
                             transition-all duration-300 group-hover:w-full"
                ></span>
              </NavLink>
            ))}
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden md:block">
            <NavLink to="/contact">
              <button className="bg-[#1c3446] text-white px-5 py-2 rounded-full font-medium hover:bg-[#152a37] transition">
                Contact Us
              </button>
            </NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Shutter Dropdown */}
        <div
          ref={dropdownRef}
          className={`absolute top-full left-1/2 -translate-x-1/2 w-[90%] bg-gray-200 shadow-lg rounded-2xl overflow-hidden transform transition-all duration-500 ease-in-out md:hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{ zIndex: 40 }}
        >
          <div className="py-5 px-6 flex flex-col gap-4 text-center">
            <NavLink to="/" onClick={handleLinkClick}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={handleLinkClick}>
              About
            </NavLink>
            <NavLink to="/service" onClick={handleLinkClick}>
              Services
            </NavLink>
            <NavLink to="/blogs" onClick={handleLinkClick}>
              Blogs
            </NavLink>
            <NavLink to="/contact" onClick={handleLinkClick}>
              <button className="bg-[#1c3446] text-white px-5 py-2 rounded-full font-medium hover:bg-[#152a37] transition">
                Contact Us
              </button>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
