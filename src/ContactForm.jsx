import React from 'react';

export function ContactForm() {
  return (
    <section className="py-16 px-4 text-center bg-red-700 text-white" id="contact">
<h2 className="text-5xl text-white-700 font-playfair">Let’s Chat!</h2>
      <form
        action="https://formspree.io/f/xkgbjqob"
        method="POST"
        className="max-w-xl mx-auto text-left"
      >
        <input type="hidden" name="_redirect" value="/thank-you.html" />

        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-3 rounded-lg text-black"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 rounded-lg text-black"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="event-date" className="block mb-2 font-semibold">Event Date (DD/MM/YY)</label>
          <input
            type="text"
            id="event-date"
            name="event-date"
            className="w-full p-3 rounded-lg text-black"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="event-location" className="block mb-2 font-semibold">Event Location</label>
          <input
            type="text"
            id="event-location"
            name="event-location"
            className="w-full p-3 rounded-lg text-black"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="referral" className="block mb-2 font-semibold">How'd you find me?</label>
          <input
            type="text"
            id="referral"
            name="referral"
            className="w-full p-3 rounded-lg text-black"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 font-semibold">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="w-full p-3 rounded-lg text-black"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-white text-red-700 font-semibold py-3 px-6 rounded-xl shadow hover:bg-gray-200 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
