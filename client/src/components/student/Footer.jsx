import React from 'react';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-cyan-100/90 md:px-36 text-left w-full mt-10">
      <div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-gray-200">

        <div className="flex flex-col md:items-start items-center w-full">
          <img src={assets.logo_dark} alt="logo" />
          <p className="mt-6 text-center md:text-left text-sm text-gray-700">
            Empowering learners and educators worldwide. Edemy LMS – Your journey to knowledge starts here.
          </p>
        </div>

        <div className="flex flex-col md:items-start items-center w-full">
          <h2 className="font-semibold text-gray-900 mb-5">Company</h2>
          <ul className="flex md:flex-col w-full justify-between text-sm text-gray-700 md:space-y-2">
            <li><a href="#" className="text-gray-700">Home</a></li>
            <li><a href="#" className="text-gray-700">About us</a></li>
            <li><a href="#" className="text-gray-700">Contact us</a></li>
            <li><a href="#" className="text-gray-700">Privacy policy</a></li>
          </ul>
        </div>

        <div className="hidden md:flex flex-col items-start w-full">
          <h2 className="font-semibold text-gray-900 mb-5">Subscribe to our newsletter</h2>
          <p className="text-sm text-gray-700">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex items-center gap-2 pt-4">
            <input className="border border-gray-300 bg-white text-gray-700 placeholder-gray-400 outline-none w-64 h-9 rounded px-2 text-sm" type="email" placeholder="Enter your email" />
            <button className="bg-blue-600 w-24 h-9 text-white rounded transition-colors">Subscribe</button>
          </div>
        </div>

      </div>
      <p className="py-4 text-center text-xs md:text-sm text-gray-500">
        Copyright 2025 © ShreyasPathe. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
