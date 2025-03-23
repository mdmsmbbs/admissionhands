'use client'


import { useState } from "react";
import { IoIosArrowForward, IoMdClose, IoMdMenu } from "react-icons/io";
import Link from "next/link";
// import { cn } from "@/lib/utils";

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50 md:hidden">
      <div className="px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="block">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="h-[50px] w-auto object-contain"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="text-gray-600 hover:text-[#FFC333] focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <IoMdClose className="h-6 w-6" /> : <IoMdMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={
          
          isMenuOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }
      >
        <ul className="flex flex-col py-2">
          <li className="border-b border-gray-100">
            <Link 
              to="/" 
              className="block px-4 py-3 text-gray-600 font-bold hover:text-[#FFC333] hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li className="border-b border-gray-100">
            <Link 
              to="/term-condition" 
              className="block px-4 py-3 text-gray-600 font-bold hover:text-[#FFC333] hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Pages
            </Link>
          </li>
          <li className="border-b border-gray-100">
            <Link 
              to="/faculty" 
              className="block px-4 py-3 text-gray-600 font-bold hover:text-[#FFC333] hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Admissions
            </Link>
          </li>
          <li className="border-b border-gray-100">
            <Link 
              to="/privacy-policy" 
              className="block px-4 py-3 text-gray-600 font-bold hover:text-[#FFC333] hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Academics
            </Link>
          </li>
          <li className="border-b border-gray-100">
            <Link 
              to="/application-form" 
              className="block px-4 py-3 text-gray-600 font-bold hover:text-[#FFC333] hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Health Care
            </Link>
          </li>
          <li className="border-b border-gray-100">
            <Link 
              to="/blog-page" 
              className="block px-4 py-3 text-[#FFC333] font-bold hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Student Life
            </Link>
          </li>
          <li className="border-b border-gray-100">
            <Link 
              to="/contact" 
              className="block px-4 py-3 text-gray-600 font-bold hover:text-[#FFC333] hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </li>
          <li className="px-4 py-3">
            <Link 
              to="/application"
              onClick={toggleMenu}
            >
              <button className="w-full bg-[#FFC333] text-black font-bold px-4 py-2 flex items-center justify-center hover:bg-[#e60000] hover:text-white transition-colors duration-300">
                <span>Application Form</span>
                <div className="flex items-center justify-center ml-1">
                  <IoIosArrowForward className="h-5 w-5" />
                </div>
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileHeader;