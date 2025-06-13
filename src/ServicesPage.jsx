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
                     <div className="prose prose-red max-w-none animate-fade-in-up text-gray-700">
  <h2>Celebrant</h2>
  <p>
    Are you after an awesome ceremony? You’ve gotta have an awesome celebrant.
  </p>
  <p>
    An awesome celebrant is someone able to craft a kick-arse story and take all of your guests along on the journey as they tell it. One that can hold a crowd, generate those festive vibes, and be just the right amount of bossy to get bums in seats.
  </p>
  <p>
    They are your wing person, your voice, your calming mate who's ready to distract you from the nerves or have the tissues ready if it all boils over.
  </p>
  <p>
    They’re the one guiding you down to Marriage Town in a way that suits you to a tee — making these moments something you’ll remember forever.
  </p>
</div>

<div className="prose prose-red max-w-none animate-fade-in-up text-gray-700 mt-12">
  <h2>Master of Ceremonies (MC)</h2>
  <p>
    Your MC is your hype person.
  </p>
  <p>
    Hogan will welcome your gorgeous guests as they arrive, compliment their shoes, and guide them to the designated hangout spot. Immediately before and after the ceremony, he’ll deliver appropriate welcoming and housekeeping notes.
  </p>
  <p>
    He’ll assist your photographer with group photos (making the normally painful process fast and efficient), then guide everyone into the reception and open things up — introducing you and your bridal party with flair!
  </p>
  <p>
    Hogan coordinates the smooth running of the reception, rearranging the order of proceedings as needed. After the formalities, he lines up the party tunes, sets up the D-floor, and makes sure the stars of the show are having a blast.
  </p>
  <p>
    Want a friend or family member to MC instead? Absolutely! Hogan can coach them so they get all the fun and none of the pressure.
  </p>
</div>

<div className="prose prose-red max-w-none animate-fade-in-up text-gray-700 mt-12">
  <h2>Day-of Coordinator</h2>
  <p>
    Feeling a bit stressed about pulling everything together on the big day?
  </p>
  <p>
    With Hogan on the job, you’ll receive invaluable advice and golden nuggets of knowledge gathered from years of wedding experience.
  </p>
  <p>
    Before the day, you'll get access to an online planner, helpful templates, and trusted supplier contacts. At the rehearsal, Hogan’s there to assist with setup and tackle any last-minute drama.
  </p>
  <p>
    On the wedding day, he arrives early to ensure everything is in place. From then on, Hogan becomes the go-to problem solver — liaising with vendors, fixing hiccups, and keeping the day on track.
  </p>
  <p>
    Ultimately, he’s there to help you two relax and truly enjoy your celebration.
  </p>
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