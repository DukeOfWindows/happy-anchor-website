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
          <p className="text-lg text-gray-800 mb-8 animate-fade-in-up">
            I offer a range of services to help make your big day as seamless, joyful, and memorable as possible. Whether you need a celebrant to guide you through your vows, a master of ceremonies to keep the event running smoothly, or someone to coordinate the behind-the-scenes action — I’ve got you covered.
          </p>

          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-semibold mb-2 animate-fade-in-up">Celebrant</h2>
              <p className="text-gray-700 animate-fade-in-up">

Are you after an awesome ceremony? 
You’ve gotta have an awesome celebrant.
An awesome celebrant is someone able to craft a kick arse story and take all of your guests along on the journey as they tell it. One that can hold a crowd, generate those festive vibes and be just the right amount of bossy to get bums in seats. 
They are your wing person, your voice, your calming mate that's ready to distract you from the nerves or have the tissues ready if it all boils over. 
They’re the one that’s guiding you down to Marriage Town in the way that suits you to a tee, and they are responsible for making these moments something that you’ll remember forever. 
</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2 animate-fade-in-up">Master of Ceremonies (MC)</h2>
              <p className="text-gray-700 animate-fade-in-up">Your MC is your hype person 

Hogan will welcome your gorgeous guests as they arrive, compliment their shoes and guide them to the designated hang out spot.  Immediately before and after the ceremony he’ll conduct appropriate welcoming/housekeeping notes. 

He’ll assist your photographer with all group photos (making this normally painful process as fast and efficient as possible) before  guiding everyone into the reception and opening things up, introducing  you and your bridal party into the room with some flair!
He’ll artfully coordinate the fun and efficient running of the reception, rearranging  the order of proceedings as and when required.

Following the formalities, he’ll ensure the party tunes are lined up, that the D.Floor is established and that the stars of the show are as happy as they can be. 

Want a friend or family member to act as MC? Absolutely! 
Hogan would instead take on a MC coaching role, ensuring that your loved one gets all of the fun and none of the responsibility of the job.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2 animate-fade-in-up">Day-of Coordinator</h2>
              <p className="text-gray-700 animate-fade-in-up">Teeny bit stressed about pulling all the elements together on the big day?
With Hogan on the job you’ll be bestowed with invaluable advice and various nuggets of knowledge obtained from his many weddings. 

In the lead up to your big day, you’ll get access to an online wedding planner, a plethora of helpful templates, and contact details of other highly dependable and talented suppliers. At the rehearsal, Hogan is there to assist in the set up and address any last minute dramas.
On the big day he arrives a few hours before kick off to ensure everything is in order. From there Hogan is the go-to problem solver, overseeing the day’s festivities by liaising between each of the different vendors and addressing any and all hiccups that inevitably occur on these big days. 

Ultimately he’s there helping you two to relax and enjoy your celebration.</p>
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