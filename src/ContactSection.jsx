import React from 'react';
import { ContactForm } from './ContactForm';
import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="py-16 px-4 bg-red-700 text-white" id="contact">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Contact Form */}
        <div>
          <ContactForm />
        </div>

        {/* Photo + Text */}
        <div className="text-center md:text-left">
          <img
            src="/images/contact-side.jpg"
            alt="Wedding moment"
            className="rounded-xl shadow-lg mb-4 mx-auto md:mx-0"
          />
        <p className="font-playfair text-lg text-white pr-8 text-right">
hoganrgill@gmail.com<br />022 035 2725<br /><br />Based in Wellington<br />Operating NZ wide
          </p>
        </div>
        <div className="flex justify-end space-x-4 mt-4 pr-8">
  <a
    href="https://www.instagram.com/YOUR_PROFILE"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white-700 hover:text-white-900 transition"
  >
    <FaInstagram size={22} />
  </a>
  <a
    href="https://www.facebook.com/YOUR_PAGE"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white-700 hover:text-white-900 transition"
  >
    <FaFacebookF size={22} />
  </a>
</div>
      </div>
    </section>
  );
}
