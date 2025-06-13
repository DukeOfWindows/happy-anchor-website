import React, { useState } from 'react';
import SiteMenu from './SiteMenu';
import ContactSection from './ContactSection';
import FancyDivider from './FancyDivider';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const testimonials = [
  {
    author: "Shaun & Kelvin",
    quote: `Hogan is a consummate storyteller who managed to keep our guests engaged, laughing, and feeling genuinely moved throughout the entire ceremony. His sense of humor and emotive delivery created a wonderful atmosphere that everyone thoroughly enjoyed.

Despite his incredible talent, Hogan remained selfless and determined not to make the ceremony about himself. He effortlessly moved out of the way, allowing the photographer to capture beautiful shots of just the two of us.

His respect and consideration extended beyond us, as he was mindful of the needs of all the vendors and guests, ensuring a smooth and enjoyable experience for everyone involved. It's no surprise that our guests unanimously dubbed Hogan “the best celebrant” and declared our ceremony as “the best they’ve ever seen”. We feel incredibly fortunate to now call Hogan a dear friend. He truly went above and beyond to make our wedding day unforgettable. We cannot recommend his services highly enough.`
  },
  {
    author: "Jason & Ainslee",
    quote: `Like a true master of his art form he sculpted a ceremony script that was absolutely perfect for us as a couple – heartfelt and hilarious – there was not a dry eye in the courtyard! We will treasure these words forever. We had so many comments from our guests asking how long we had known one another, assuming he was a friend of ours – a true testament to just how good he is at what he does. He even checked over our vows and bride and groom speeches in advance to make sure everything worked well together.

But his abilities by no means stop there, he made sure everything on the day ran as smoothly as possible, he coordinated photos, he kept track of timings, he dealt with any problems that arose (I’m sure there are plenty we don’t even know about thanks to him!). He kept everyone laughing all through the night and just made us feel so confident that no matter what happened he would have everything under control.

We simply cannot imagine our day without him!`
  },
  {
    author: "Zoe & Logan",
    quote: `Hogan Gill from Happy Anchor Marriages was not just a celebrant or an MC but he was an absolute guiding light. No one quite tells you how clueless you can feel trying to plan a wedding, and this is where Hogan came in and helped guide us with everything from the running of the ceremony, to helping us write vows that were cohesive and beautiful.

Our ceremony was funny, sweet and so many people came up to us after and said how wonderful it was. One of our guests was also a celebrant and even he remarked that he couldn't believe how good Hogan was at his job.

He was so good we chose to have him stay on as our MC and he equally slayed that job too. Again his level of insider know-how meant that communication between the kitchen, the DJ and every other vendor was seamless and one less thing we had to worry about.

Seriously we couldn’t have had the wedding we ended up pulling off if it wasn’t for Hogan.`
  },
  {
    author: "Tom & Jules",
    quote: `Having a wedding celebrant of this calibre really kicked off festivities in the most amazing way. Hogan pulled all the little bits of information he had gathered about us throughout the months before the big day into an incredible heart-warming, captivating, tear jerking, comedic introduction that had both of us crying, smiling and grinning ear to ear throughout.

Relatives who had traveled far and wide remarked after the ceremony how special it had been for them, whilst they haven't been around to know our relationship and story intimately they had it summed up by the personal story telling of Hogan Gill, this made the day special for everyone in attendance.

Nana even remarked she had been to many weddings in her long life and had never seen a celebrant captivate the audience the way Hogan was able to.

Not only did Hogan perform on the day to a high standard, he was professional throughout. I can say truthfully that Hogan had such a special impact on our day and we have had many guests ask us for his contact details.`
  },
  {
    author: "Will & Verity",
    quote: `We say with the upmost sincerity that we couldn’t have asked for a better celebrant. Hogan is a vibrant and original personality who brought uniqueness, relaxation, fun and romance to our wedding.

Hogan captured our love story in a way that was honest, fun and romantic. He captured both aspects of our personalities and what we love most about one another right to our core. He provided us immense guidance in the structure of our ceremony and the format in which it could be written.

Not only was Hogan an incredible celebrant he doubled as an event organiser and was in total communication with us regarding rehearsals, ceremony set up, timelines for the day and stayed in contact with myself, (the bride) constantly on the morning of the wedding to let me know how smoothly everything was running, the best time to arrive, how many guests were still to arrive and checked in on any last minute details I needed communicated to my husband to be.`
  },
  {
    author: "Tania & Jordan",
    quote: `We struggle to put into words how amazing Hogan made our special day. From the minute we asked Hogan to be our celebrant, until the moment we walked down the aisle as Mr and Mrs, Hogan oozed professionalism.

We never realised quite how much a celebrant did aside from the wedding day itself. Hogan made all of the extra nitty gritty details (even when he was out of the country) that you don’t factor into your planning, a breeze. Time frames were never an issue for him and at no point did we feel pressured, albeit he has deadlines to meet.

Hogan has an ability to build relationships with absolutely anyone! He made the effort to interact with our venue manager to ensure our ceremony went exactly how we wanted it. The ceremony had a perfect balance of laughter, tears and love. Hogan captured the essence of our relationship and expressed this in a way that all of our guests could relate to. Our wedding would not have been the same without him.`
  },
  {
    author: "Hogan's Mum",
    quote: `He's just such a good boy`
  },
  {
    author: "Lauren & Pierre",
    quote: `My now husband and I were lucky enough to find and of course, choose Hogan to be our marriage celebrant. I don't even know where to begin!

He is professional, organized, charismatic and extremely accommodating.

Our situation was unique as I am American and my husband is French. We wanted an intimate and personal ceremony and that's exactly what we got.

We even had to ask Hogan to change our date just one month before and he was able to be flexible for our day. Everything was perfect and in large part thanks to Hogan.

Couldn't give a better rating to this man!!

Thank you again, you will be part of our day forever.`
  }
];
const galleryImages = [
  { src: 'AA.jpg', fit: 'cover', position: 'center' },
  { src: 'AB.jpg', fit: 'cover', position: 'center' },
  { src: 'AD.jpg', fit: 'contain', position: 'top' },
  { src: 'AE.jpg', fit: 'cover', position: 'top' },
  { src: 'AF.jpg', fit: 'cover', position: 'top' },
  { src: 'AG.jpg', fit: 'cover', position: 'center' },
  { src: 'AH.jpg', fit: 'cover', position: 'center' },
  { src: 'AI.jpg', fit: 'contain', position: 'top' },
  { src: 'AJ.jpg', fit: 'contain', position: 'top' },
  { src: 'AL.jpg', fit: 'contain', position: 'top' },
  { src: 'AM.jpg', fit: 'cover', position: 'center' },
  { src: 'AN.jpg', fit: 'cover', position: 'center' },
  { src: 'AO.jpg', fit: 'cover', position: 'center' },
  { src: 'AP.jpg', fit: 'contain', position: 'top' },
  { src: 'AQ.jpg', fit: 'cover', position: 'center' },
  { src: 'AR.jpg', fit: 'cover', position: 'center' },
  { src: 'AS.jpg', fit: 'contain', position: 'top' },
  { src: 'AT.jpg', fit: 'cover', position: 'center' },
  { src: 'AU.jpg', fit: 'cover', position: 'center' }
];
export default function HomePage() {
  const [index, setIndex] = useState(0);
const [testimonialIndex, setTestimonialIndex] = useState(0);
const [galleryIndex, setGalleryIndex] = useState(0);

  const [fade, setFade] = useState(true);
const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "testimonials") {
      const section = document.getElementById("testimonials");
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);
const handlePrev = () => {
  setFade(false); // start fade out
  setTimeout(() => {
    setIndex((index - 1 + testimonials.length) % testimonials.length); // change testimonial
    setFade(true); // start fade in
  }, 200); // 200ms delay
};
const handleNext = () => {
  setFade(false); // start fade out
  setTimeout(() => {
    setIndex((index + 1) % testimonials.length); // change testimonial
    setFade(true); // start fade in
  }, 200); // 200ms delay
};

  const handleGalleryPrev = () => {
    setGalleryIndex((galleryIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleGalleryNext = () => {
    setGalleryIndex((galleryIndex + 1) % galleryImages.length);
  };

  const currentImage = galleryImages[galleryIndex];
  const objectFitClass = currentImage.fit === 'contain' ? 'object-contain' : 'object-cover';

  return (
    <>
      <SiteMenu />
<main className="min-h-screen bg-white text-gray-900 font-sans">
  <section className="relative w-full overflow-hidden">
    {/* Hero Image */}
    <img
      src="/images/hero.jpg"
      alt="Wedding couple smiling"
      className="w-full h-[60vh] md:h-[80vh] lg:h-[90vh] object-cover object-top md:object-center"
    />
    {/* Text Overlay */}
<div className="absolute inset-0 flex flex-col items-center justify-start text-center px-4 pt-8 sm:pt-12 md:pt-20 animate-fade-in-up">
  <h1 className="font-playfair text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight drop-shadow-md">
    Celebrant & MC
  </h1>
  <h2 className="font-playfair text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl leading-tight mb-4 drop-shadow-md">
    Hogan Gill
  </h2>
  <a
    href="/wedding-services"
    className="text-white underline text-sm sm:text-base md:text-lg hover:text-gray-200 transition"
  >
    Services &gt;
  </a>
</div>
  </section>

<FancyDivider />
        <section className="py-16 px-4 bg-gray-100" id="about">
          <div className="max-w-4xl mx-auto text-center">
            <img
              src="/images/hogan.jpg"
              alt="Hogan Gill"
              className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
            />
   <h1 className="font-playfair text-red-700 text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
             Hogan Gill
            </h1>
            <p className="text-lg text-gray-700">
              Hogan has been ordaining, coordinating and MC-ing weddings for over 5 years. He’s based in Wellington but has travelled NZ wide to marry more than 100 couples from all different walks of life. 
When he’s not working weddings, he spends his time as an accomplished daffodil farmer and operates a successful window cleaning business.
            </p>
          </div>
        </section>
        <FancyDivider />
<section className="py-12 px-4 bg-gray-100">
  <div className="max-w-4xl mx-auto text-center">
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${galleryIndex * 100}%)` }}
      >
        {galleryImages.map((img, idx) => (
          <img
            key={idx}
            src={`/images/gallery/${img.src}`}
            alt={`Gallery ${idx + 1}`}
            className={`min-w-full max-h-[600px] rounded-xl shadow-md ${img.fit === 'contain' ? 'object-contain' : 'object-cover'} object-${img.position}`}
          />
        ))}
      </div>

      {/* Previous button */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4">
        <button
          onClick={handleGalleryPrev}
          className="w-10 h-10 bg-white text-red-700 rounded-full shadow flex items-center justify-center hover:bg-gray-200"
        >
          ←
        </button>
      </div>

      {/* Next button */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4">
        <button
          onClick={handleGalleryNext}
          className="w-10 h-10 bg-white text-red-700 rounded-full shadow flex items-center justify-center hover:bg-gray-200"
        >
          →
        </button>
      </div>
    </div>
  </div>
</section>
<FancyDivider />
        <section className="py-16 px-4" id="services">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-red-700">What’s on Offer</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {['Celebrant', 'MC', 'Day-of Coordinator'].map((service) => (
                <div key={service} className="bg-white shadow-md p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">{service}</h3>
                  <p className="text-gray-700">
.                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
<FancyDivider />
        <section className="py-16 px-4 bg-gray-50" id="testimonials">
  <div className="max-w-4xl mx-auto text-center relative overflow-hidden">
    <div
      key={index}
      className="transition-opacity duration-700 ease-in-out opacity-100"
    >
      <h3 className="text-2xl font-bold text-red-700 mb-6">{testimonials[index].author}</h3>
<blockquote
  className={`text-lg text-gray-800 whitespace-pre-line transition-opacity duration-1500 ease-in-out ${
    fade ? 'opacity-100' : 'opacity-0'
  }`}
>
  {testimonials[index].quote}
</blockquote>
    </div>

    <div className="mt-8 flex justify-center gap-6">
      <button
        onClick={handlePrev}
        className="w-10 h-10 rounded-full bg-red-700 text-white text-xl flex items-center justify-center shadow hover:bg-red-600 transition"
        aria-label="Previous testimonial"
      >
        ←
      </button>
      <button
        onClick={handleNext}
        className="w-10 h-10 rounded-full bg-red-700 text-white text-xl flex items-center justify-center shadow hover:bg-red-600 transition"
        aria-label="Next testimonial"
      >
        →
      </button>
    </div>
  </div>
</section>

        <ContactSection />
      </main>
    </>
  );
}
