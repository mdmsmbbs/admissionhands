"use client";

import { FaArrowRight, FaPhone, FaEnvelope, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactArea() {
  return (
    <div className="min-h-screen  flex items-center justify-center">
      {/* Contact Area */}
      <div className="py-20 px-6 container mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Contact Form */}
          <div className="w-full md:w-[65%]">
            <h1 className="text-4xl font-extrabold mb-6 text-black text-center">Get In Touch</h1>
            <form className="space-y-4 text-gray-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" className="border p-4 w-full" placeholder="Your name" required />
                <input type="text" className="border p-4 w-full" placeholder="Your phone" required />
                <input type="email" className="border p-4 w-full" placeholder="Your email" required />
                <input type="text" className="border p-4 w-full" placeholder="Your subject" required />
              </div>
              <textarea className="border p-3 w-full h-40" placeholder="Your comments..." required></textarea>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" id="saveInfo" />
                <label htmlFor="saveInfo">Save my name, email, and website in this browser for the next time I comment.</label>
              </div>
              <button type="submit" className="bg-red-500 text-white px-6 py-4 w-full flex items-center justify-center">
                Send Message <FaArrowRight className="ml-2" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-[35%] bg-gray-100 p-6 md:mt-6 rounded-lg shadow-md text-gray-500">
            <h3 className="text-xl font-semibold mb-4 text-black">Contact Information</h3>
            <div className="space-y-4">

              {/* Phone */}
              <div className="flex items-center space-x-4">
                <div className="w-[40px] h-[40px] border flex items-center justify-center rounded hover:bg-blue-950 hover:text-white transition">
                  <FaPhone className="text-xl" />
                </div>
                <div>
                  <span className="block">Call Us:</span>
                  <a href="tel:+45993939990" className="text-blue-500">+459 9393 9990</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="w-[40px] h-[40px] border flex items-center justify-center rounded hover:bg-blue-950 hover:text-white transition">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <span className="block">Mail Us:</span>
                  <a href="mailto:admasupport@gmail.com" className="text-blue-500">admasupport@gmail.com</a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center space-x-4">
                <div className="w-[40px] h-[40px] border flex items-center justify-center rounded hover:bg-blue-950 hover:text-white transition">
                  <FaCalendarAlt className="text-xl" />
                </div>
                <div>
                  <span className="block">Opening Hours:</span>
                  <p>Mon - Sat: 09.00am to 18.00pm</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4">
                <div className="w-[40px] h-[40px] border flex items-center justify-center rounded hover:bg-blue-950 hover:text-white transition">
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <div>
                  <span className="block">Location:</span>
                  <p>3rd Cross, New York, USA 109002</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
