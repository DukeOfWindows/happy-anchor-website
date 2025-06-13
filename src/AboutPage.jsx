import React from 'react';
import SiteMenu from './SiteMenu';
import ImageCarousel from "./components/ImageCarousel";
import FancyDivider from './FancyDivider';
import ContactSection from './ContactSection';

const serviceImages = [
  { src: 'about1.jpg', fit: 'contain', position: 'center' },
    { src: 'about2.jpg', fit: 'cover', position: 'center' },
  { src: 'about3.jpg', fit: 'contain', position: 'center' },
  { src: 'about4.jpg', fit: 'contain', position: 'center' },
    { src: 'about5.jpg', fit: 'contain', position: 'top' },
  { src: 'about6.jpg', fit: 'cover', position: 'center' },
  { src: 'about7.jpg', fit: 'contain', position: 'center' },
  { src: 'about8.jpg', fit: 'contain', position: 'top' },
  { src: 'about9.jpg', fit: 'cover', position: 'center' },
  { src: 'about10.jpg', fit: 'contain', position: 'center' },
  { src: 'about11.jpg', fit: 'contain', position: 'top' },
  { src: 'about12.jpg', fit: 'cover', position: 'center' },

];
export default function AboutPage() {
  return (
    <>
      <SiteMenu />
      <main className="bg-white text-gray-900 font-sans">
        <section
  className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[100vh] bg-cover bg-top flex items-center justify-center"
  style={{ backgroundImage: "url('/images/about-hero.jpg')" }}
>
  <div className="bg-black bg-opacity-40 w-full h-full absolute top-0 left-0"></div>
  <div className="relative z-10 text-center px-4">
    <h1 className="text-white text-4xl md:text-6xl font-playfair drop-shadow animate-fade-in-up">
      Meet Hogan
    </h1>
  </div>
</section>
        {/* Bio Block Section */}
        <section className="bg-gray-100 py-16 px-4">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
    
    {/* Left: Contact Button and Circle Image */}
    <div className="flex flex-col items-center space-y-6">
        <img
        src="/images/about-circle.jpg"
        alt="Hogan"
        className="w-62 h-62 rounded-full object-cover shadow-md"
      />
      <button
        className="bg-red-700 text-white px-6 py-3 rounded hover:bg-red-800 transition text-lg"
        onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
      >
        Contact
      </button>
    </div>

    {/* Right: Paragraph Text */}
<div className="max-w-2xl text-red-800 text-lg space-y-4 leading-relaxed animate-fade-in-up">
  <p><strong>Winner of WIANZ "Outstanding Wedding MC 2025"!</strong></p><br />

  <p>
    A Wellingtonian born and raised, Hogan filled his boots with wandering the globe and now resides in a tiny house on the Kapiti Coast with his darling dog Koa.
  </p>

  <p>
    For the past 6 years Hogan has finely tuned his skills in ordaining, coordinating and MC-ing weddings. With experience in teaching English, scuba diving instructing, life modelling and pub crawl hosting, he couldn’t be more comfortable in front of a crowd.
  </p>

  <p>
    Hogan is effortlessly entertaining, persistently professional and just the right ratio of chilled out to assertive. He’s a consummate storyteller that keeps the laughs flowing whilst ensuring the party’s kept on track.
  </p>

  <p>
    Hogan has hitched best mates and bodybuilders, worn clergy robes, Jedi robes and wizard robes, and he’s handled busted mics, bee stings and brides with broken feet.
  </p>

  <p>
    Every wedding and every couple of his 100+ weddings has taught Hogan something new. He’s got the experience, the know-how and the pizazz to make your big day into an absolute doozy!
  </p>

  <p><strong>Get in touch today!</strong></p>
</div>

  </div>
</section>
<FancyDivider />
        <ImageCarousel images={serviceImages} />
        <FancyDivider />
                {/* Header Section */}
<section className="text-center py-12 animate-fade-in-up">
  <div className="max-w-2xl mx-auto text-red-800 text-lg space-y-4">
    <p>      “Happy Anchor" was a nickname bestowed upon Hogan by a young family that he took Scuba diving.  The father informed him that “Hogan Gill” directly translated into Hebrew means “Anchor Happiness”.</p>
    <p>      Thus Hogan was dubbed “The Happy Anchor”.</p>
  </div>
</section>
<FancyDivider />
        <ContactSection />
      </main>
    </>
  );
}
