import React from 'react';
import SiteMenu from './SiteMenu';
import ImageCarousel from "./components/ImageCarousel";
import FancyDivider from './FancyDivider';
import ContactSection from './ContactSection';

const serviceImages = [
  { src: 'S1.jpg', fit: 'cover', position: 'center' },
  { src: 'S3.jpg', fit: 'cover', position: 'center' },
  { src: 'S4.jpg', fit: 'cover', position: 'center' },
  { src: 'S6.jpg', fit: 'cover', position: 'center' },
  { src: 'S7.jpg', fit: 'cover', position: 'center' },
  { src: 'S8.jpg', fit: 'contain', position: 'top' },
  { src: 'S9.jpg', fit: 'cover', position: 'center' },
  { src: 'S10.jpg', fit: 'cover', position: 'center' },
  { src: 'S11.jpg', fit: 'contain', position: 'top' },
  { src: 'S12.jpg', fit: 'cover', position: 'center' },
  { src: 'S13.jpg', fit: 'cover', position: 'center' },
  { src: 'S14.jpg', fit: 'contain', position: 'top' },
  { src: 'S15.jpg', fit: 'cover', position: 'center' },
  { src: 'S17.jpg', fit: 'contain', position: 'top' },
  { src: 'S18.jpg', fit: 'cover', position: 'center' },
  { src: 'S19.jpg', fit: 'cover', position: 'center' },
  { src: 'S20.jpg', fit: 'contain', position: 'top' },
];

export default function ServicesPage() {
  return (
    <>
      <SiteMenu />
      <main className="min-h-screen bg-white text-gray-900 font-sans px-4 py-16">
            {/* Hero Banner */}
        <section
          className="relative h-[60vh] bg-center bg-cover flex items-center justify-center"
          style={{ backgroundImage: "url('/images/services-hero.jpg')" }}
        ></section>
        <FancyDivider />
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-red-700 mb-6 animate-fade-in-up">Wedding Services</h1>
                     <div>
                      </div> <div className="space-y-10">
 <div>
  <h2 className="text-2xl font-semibold mb-2 animate-fade-in-up">Celebrant</h2>
  <p className="text-gray-700 leading-relaxed space-y-4 animate-fade-in-up">
    Are you after an awesome ceremony?<br />
    You’ve gotta have an awesome celebrant.
  </p>
  <p className="text-gray-700 leading-relaxed space-y-4 animate-fade-in-up">
    An awesome celebrant is someone able to craft a kick-arse story and take all of your guests along on the journey as they tell it. One that can hold a crowd, generate festive vibes, and be just the right amount of bossy to get bums in seats.
  </p>
  <p className="text-gray-700 leading-relaxed space-y-4 animate-fade-in-up">
    They are your wing person, your voice, your calming mate — ready to distract you from the nerves or have the tissues ready if it all boils over.
  </p>
  <p className="text-gray-700 leading-relaxed space-y-4 animate-fade-in-up">
    They’re the one guiding you down to Marriage Town in a way that suits you to a tee — and responsible for making these moments something you’ll remember forever.
  </p>
</div>

<div>
  <h2 className="text-2xl font-semibold mb-2 animate-fade-in-up">Master of Ceremonies (MC)</h2>
  <p className="text-gray-700 leading-relaxed space-y-4 animate-fade-in-up">
    Your MC is your hype person.
  </p>
  <p className="text-gray-700 leading-relaxed space-y-4 animate-fade-in-up">
    Hogan will welcome your gorgeous guests as they arrive, compliment their shoes, and guide them to the designated hang-out spot. Immediately before and after the ceremony, he’ll conduct appropriate housekeeping announcements.
  </p>
  <p className="text-gray-700 leading-relaxed space-y-4 animate-fade-in-up">
    He’ll assist the photographer with group photos (making this normally painful process fast and efficient), then guide everyone into the reception and introduce the bridal party with flair.
  </p>
  <p className="text-gray-700 leading-relaxed space-y-4 animate-fade-in-up">
    He coordinates the fun and efficient running of the reception, rearranging proceedings as needed. Once formalities are over, he makes sure the party tunes are on, the dance floor is open, and the stars of the show are happy.
  </p>
  <p className="text-gray-700 leading-relaxed space-y-4 animate-fade-in-up">
    Want a friend or family member to act as MC? Absolutely! Hogan can coach them — making sure they get all the fun and none of the stress.
  </p>
</div>

<div>
  <h2 className="text-2xl font-semibold mb-2 animate-fade-in-up">Day-of Coordinator</h2>
  <p className="text-gray-700 leading-relaxed space-y-4 animate-fade-in-up">
    Teeny bit stressed about pulling all the elements together on the big day?
  </p>
  <p className="text-gray-700 leading-relaxed space-y-4 animate-fade-in-up">
    With Hogan on the job, you’ll be armed with invaluable advice and wedding wisdom from his many experiences.
  </p>
  <p className="text-gray-700 leading-relaxed space-y-4 animate-fade-in-up">
    Leading up to your wedding, you’ll get access to an online planner, helpful templates, and reliable supplier contacts. At the rehearsal, Hogan helps with setup and addresses last-minute dramas.
  </p>
  <p className="text-gray-700 leading-relaxed space-y-4 animate-fade-in-up">
    On the day, he arrives hours early to make sure everything is on track — liaising with vendors and solving inevitable hiccups so you can relax and enjoy the ride.
  </p>
</div>
          </div>
        </div>
        <FancyDivider />
        <ImageCarousel images={serviceImages} />
        <FancyDivider />
        <ContactSection />
      </main>
    </>
  );
}