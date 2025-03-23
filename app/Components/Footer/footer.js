import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { RiPhoneLine, RiMessageLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-[#f6f6f6] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-8 md:gap-6">
          {/* About Adma Section */}
          <div className="w-full md:w-1/2 lg:w-1/4">
            <h3 className="text-lg font-semibold mb-4 text-[rgb(0,30,67)]">About Adma</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Where data meets helping hands for medical school applicants.
            </p>
            <h6 className="text-lg font-semibold my-4 text-[rgb(0,30,67)]">Follow Adma:</h6>
            <div className="flex gap-3">
              <a 
                href="https://www.facebook.com/" 
                target="_blank" 
                className="flex items-center justify-center w-8 h-8 text-gray-600 rounded-full hover:bg-[#ffc333] transition-colors"
              >
                <FaFacebookF />
              </a>
              <a 
                href="https://www.instagram.com/" 
                target="_blank" 
                className="flex items-center justify-center w-8 h-8 text-gray-600 rounded-full hover:bg-[#ffc333] transition-colors"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://twitter.com/" 
                target="_blank" 
                className="flex items-center justify-center w-8 h-8 text-gray-600 rounded-full hover:bg-[#ffc333] transition-colors"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Academics Section */}
          <div className="w-full sm:w-1/2 lg:w-1/5">
            <h3 className="text-lg font-semibold mb-4 text-[rgb(0,30,67)]">Academics</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/program-details" className="text-gray-600 text-sm hover:text-[#e74c3c] transition-colors">
                  Undergraduates
                </Link>
              </li>
              <li>
                <Link href="/university-overview" className="text-gray-600 text-sm hover:text-[#e74c3c] transition-colors">
                  University Overview
                </Link>
              </li>
              <li>
                <Link href="/blog-style-one" className="text-gray-600 text-sm hover:text-[#e74c3c] transition-colors">
                  Online Education
                </Link>
              </li>
              <li>
                <Link href="/apply" className="text-gray-600 text-sm hover:text-[#e74c3c] transition-colors">
                  How To Apply
                </Link>
              </li>
              <li>
                <Link href="/university-life" className="text-gray-600 text-sm hover:text-[#e74c3c] transition-colors">
                  Graduates
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="w-full sm:w-1/2 lg:w-1/5">
            <h3 className="text-lg font-semibold mb-4 text-[rgb(0,30,67)]">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/university-life" className="text-gray-600 text-sm hover:text-[#e74c3c] transition-colors">
                  Student Activities
                </Link>
              </li>
              <li>
                <Link href="/application" className="text-gray-600 text-sm hover:text-[#e74c3c] transition-colors">
                  Apply Form
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-600 text-sm hover:text-[#e74c3c] transition-colors">
                  Schedule A Tour
                </Link>
              </li>
              <li>
                <Link href="/blog-style-two" className="text-gray-600 text-sm hover:text-[#e74c3c] transition-colors">
                  News & Blog
                </Link>
              </li>
              <li>
                <Link href="/university-overview" className="text-gray-600 text-sm hover:text-[#e74c3c] transition-colors">
                  About Adma
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="w-full sm:w-1/2 lg:w-1/5">
            <h3 className="text-lg font-semibold mb-4 text-[rgb(0,30,67)]">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:9711110766" className="flex items-center text-gray-600 text-sm hover:text-[#e74c3c] transition-colors">
                  <RiPhoneLine className="mr-2" /> +91 9711110766
                </a>
              </li>
              <li>
                <a href="mailto:mdms.mbbs1@gmail.com" className="flex items-center text-gray-600 text-sm hover:text-[#e74c3c] transition-colors">
                  <RiMessageLine className="mr-2" /> mdms.mbbs1@gmail.com
                </a>
              </li>
              <li>
                <p className="text-gray-600 text-sm">Randon, A-33 sector 122</p>
              </li>
            </ul>
          </div>

          {/* Mobile App Section - Commented out but converted to Tailwind */}
          {/* <div className="w-full sm:w-1/2 lg:w-1/5">
            <h3 className="text-lg font-semibold mb-4 text-[rgb(0,30,67)]">Mobile App</h3>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/assets/img/footer/footer-1.svg"
                  alt="Google Play"
                  width={120}
                  height={40}
                />
              </a>
              <a 
                href="https://www.apple.com" 
                target="_blank" 
                rel="noreferrer"
              >
                <Image
                  src="/assets/img/footer/footer-2.svg"
                  alt="App Store"
                  width={120}
                  height={40}
                />
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;