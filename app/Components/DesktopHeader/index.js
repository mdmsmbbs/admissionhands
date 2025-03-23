'use client'

import Link from 'next/link';
import { IoIosArrowRoundForward } from "react-icons/io";
import { useState } from 'react';

const DesktopHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img src="/img/logo.png" alt="Logo" className="h-19 w-48" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-yellow-400 hover:bg-gray-100 focus:outline-none"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <ul className="flex space-x-6">
              <li>
                <a href="/" className="font-bold text-gray-600 hover:text-yellow-400 hover:underline px-3 py-1">
                  Home
                </a>
              </li>
              <li>
                <a href="/term-condition" className="font-bold text-gray-600 hover:text-yellow-400 hover:underline px-3 py-1">
                  Pages
                </a>
              </li>
              <li>
                <a href="/faculty" className="font-bold text-gray-600 hover:text-yellow-400 hover:underline px-3 py-1">
                  Admissions
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="font-bold text-gray-600 hover:text-yellow-400 hover:underline px-3 py-1">
                  Academics
                </a>
              </li>
              <li>
                <a href="/application-form" className="font-bold text-gray-600 hover:text-yellow-400 hover:underline px-3 py-1">
                  Health Care
                </a>
              </li>
              <li>
                <a href="/blog-page" className="font-bold text-gray-600 hover:text-yellow-400 hover:underline px-3 py-1">
                  Student Life
                </a>
              </li>
              <li>
                <a href="/contact" className="font-bold text-gray-600 hover:text-yellow-400 hover:underline px-3 py-1">
                  Contact Us
                </a>
              </li>
            </ul>

            {/* CTA Button */}
            <div className="ml-6">
              <Link href="/application-form">
                <button className="bg-yellow-400 text-black font-bold px-5 py-2 flex items-center hover:bg-red-600">
                  <span>Application Form</span>
                  <div className="flex items-center justify-center ml-1">
                    <IoIosArrowRoundForward size={30} />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-white shadow-lg">
          <a href="/" className="block px-3 py-2 font-bold text-gray-600 hover:text-yellow-400 hover:underline">
            Home
          </a>
          <a href="/term-condition" className="block px-3 py-2 font-bold text-gray-600 hover:text-yellow-400 hover:underline">
            Pages
          </a>
          <a href="/faculty" className="block px-3 py-2 font-bold text-gray-600 hover:text-yellow-400 hover:underline">
            Admissions
          </a>
          <a href="/privacy-policy" className="block px-3 py-2 font-bold text-gray-600 hover:text-yellow-400 hover:underline">
            Academics
          </a>
          <a href="/application-form" className="block px-3 py-2 font-bold text-gray-600 hover:text-yellow-400 hover:underline">
            Health Care
          </a>
          <a href="/blog-page" className="block px-3 py-2 font-bold text-gray-600 hover:text-yellow-400 hover:underline">
            Student Life
          </a>
          <a href="/contact" className="block px-3 py-2 font-bold text-gray-600 hover:text-yellow-400 hover:underline">
            Contact Us
          </a>
          <div className="mt-4 px-3">
            <Link href="/application">
              <button className="w-full bg-yellow-400 text-black font-bold px-5 py-2 flex items-center justify-center hover:bg-red-600">
                <span>Application Form</span>
                <div className="flex items-center justify-center ml-1">
                  <IoIosArrowRoundForward size={30} />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DesktopHeader;