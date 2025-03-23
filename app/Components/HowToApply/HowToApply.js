import React from 'react';
import { FaArrowRight, FaPen, FaSearch, FaMoneyBillWave } from 'react-icons/fa';
import { FaWpforms } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";
import VideoArea from '../Shared/videoPlayer/VideoArea';

const HowToApply = () => {
  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="w-full md:w-1/2">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">How To Apply At Adma</h2>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-start md:justify-end">
              <div>
                <a 
                  className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-sm transition-colors" 
                  href="contact.html"
                >
                  Get Started Now
                  <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Application Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-center p-6 bg-gray-50">
              <div className="text-yellow-500">
                <FaWpforms size={50}/>
              </div>
              <h1 className="text-5xl font-bold text-gray-200">01</h1>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Complete Application Form</h3>
              <p className="text-gray-600">
                Furthermore, our university camp provides a vibrant & supportive community that embraces diversity.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-center p-6 bg-gray-50">
              <div className="text-yellow-500">
                <MdOutlineRateReview size={50}/>
              </div>
              <h1 className="text-5xl font-bold text-gray-200">02</h1>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Application Review</h3>
              <p className="text-gray-600">
                We believe that a diverse student body enhances the learning experience & prepares students to thrive in a globalized world.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-center p-6 bg-gray-50">
              <div className="text-yellow-500">
                <MdOutlinePayments size={50}/>
              </div>
              <h1 className="text-5xl font-bold text-gray-200">03</h1>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Payment of Fees</h3>
              <p className="text-gray-600">
                As a student at Adma, you will have access to state-of-the-art facilities, cutting-edge research laboratories, & an extensive network.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Area */}
      <div className="mt-16">
        <VideoArea/>
      </div>
    </div>
  );
};

export default HowToApply;