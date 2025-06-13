import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function SiteMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigateToTestimonials = () => {
    if (location.pathname === "/") {
      const section = document.getElementById("testimonials");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { scrollTo: "testimonials" } });
    }
    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-3xl font-playfair text-red-700">
          Happy Anchor Marriages
        </a>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-lg font-medium">
          <a href="/about" className="text-gray-700 hover:text-red-700 transition">
            About
          </a>
          <a href="/wedding-services" className="text-gray-700 hover:text-red-700 transition">
            Services
          </a>
          <a
            onClick={handleNavigateToTestimonials}
            className="text-gray-700 hover:text-red-700 transition cursor-pointer"
          >
            Testimonials
          </a>
          <div className="h-10 flex items-center">
            <a
              href="#contact"
              className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 transition"
            >
              Contact
            </a>
          </div>
          <div className="flex items-center space-x-3">
  <a
    href="https://www.instagram.com/happy_anchor_marriages/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 hover:text-red-700 transition"
  >
    <FaInstagram size={20} />
  </a>
  <a
    href="https://www.facebook.com/MarriageCelebrantHoganGill"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 hover:text-red-700 transition"
  >
    <FaFacebookF size={20} />
  </a>
</div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 text-lg font-medium">
          <a
            href="/about"
            className="block text-gray-700 hover:text-red-700 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="/wedding-services"
            className="block text-gray-700 hover:text-red-700 transition"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <button
            onClick={handleNavigateToTestimonials}
            className="block text-gray-700 hover:text-red-700 transition"
          >
            Testimonials
          </button>
          <a
            href="#contact"
            className="block text-gray-700 hover:text-red-700 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}