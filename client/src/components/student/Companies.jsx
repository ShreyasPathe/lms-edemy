import React from 'react';
import { assets } from '../../assets/assets';

const companyLogos = [
  { src: assets.microsoft_logo, alt: "Microsoft" },
  { src: assets.walmart_logo, alt: "Walmart" },
  { src: assets.accenture_logo, alt: "Accenture" },
  { src: assets.adobe_logo, alt: "Adobe" },
  { src: assets.paypal_logo, alt: "Paypal" },
];

// Repeat enough times for a seamless infinite loop
const repeatedLogos = Array(6).fill(companyLogos).flat();

const Companies = () => {
  return (
    <div className="pt-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <p className="text-base text-gray-300">Trusted by learners from</p>
      <div className="marquee-container">
        <div className="marquee">
          {repeatedLogos.map((logo, idx) => (
            <img
              key={idx}
              className="md:w-28 w-20 mx-8 inline-block"
              src={logo.src}
              alt={logo.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
