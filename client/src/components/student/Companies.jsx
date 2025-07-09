import React from 'react';
import { assets } from '../../assets/assets';

const companyLogos = [
  { src: assets.microsoft_logo, alt: "Microsoft" },
  { src: assets.walmart_logo, alt: "Walmart" },
  { src: assets.accenture_logo, alt: "Accenture" },
  { src: assets.adobe_logo, alt: "Adobe" },
  { src: assets.paypal_logo, alt: "Paypal" },
];

// Repeat the logos enough times for a seamless marquee
const repeatedLogos = [...companyLogos, ...companyLogos, ...companyLogos];

const Companies = () => {
  return (
    <div className="pt-16">
      <p className="text-base text-gray-500">Trusted by learners from</p>
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
