"use client";

import { FaArrowRight } from "react-icons/fa";

export default function Newsletter() {
  return (
    <>
    <div>
      {/* Newsletter Area */}
      <div className="md:py-16  container mx-auto px-6 mt-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Section */}
          <div>
            <h2 className="md:text-5xl text-3xl font-bold text-black">Are You Ready To Build Up Your Career?</h2>
            <p className="mt-4 text-justify md:w-[85%] text-gray-500">
              We are proud of our alumni network, which spans across industries and continents. Our graduates are equipped with the skills, values, knowledge, and to excel in their chosen fields and make a positive impact on society.
            </p>
            <div className="mt-6 gap-6 flex flex-col md:flex-row">
              <a href="/application" className="bg-red-500  px-6 py-4 flex items-center">
                Application Form <FaArrowRight className="ml-2" />
              </a>
              <a href="/apply" className="border bg-blue-500  px-6 py-4 flex items-center">
                How To Apply <FaArrowRight className="ml-2" />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-yellow-400">
            <div className="mx-10 my-12">
              <h3 className="text-3xl font-bold text-black">Subscribe To Our Newsletter</h3>
              <p className="mt-4 text-justify ">
                Stay informed about the latest developments, breakthroughs, and trends in our industry. Our team of experts scours the web to bring you the most relevant and engaging news articles.
              </p>
              <form className="mt-4">
                <input type="email" className="border p-3 w-full" placeholder="Your email" required />
                <button type="submit" className="bg-blue-950  px-6 py-4 font-bold mt-4 w-full">
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
      </div>
    </>
  );
}
