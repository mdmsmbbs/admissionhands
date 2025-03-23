import React from 'react';
import { FaArrowRight, FaQuoteLeft, FaGraduationCap, FaCalculator } from 'react-icons/fa';

const ChooseArea = () => {
  return (
    <div className="pb-16 md:pb-20 flex justify-center items-center">
      <div className="max-w-7xl w-full mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Choose Content */}
          <div className="w-full lg:w-1/2">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl text-gray-800 mb-4">Why Choose Adma</h2>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                At Adma, we believe in providing an exceptional educational experience that prepares students for success
                in an ever-changing world. As a leading institution of higher learning,
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                We are committed to fostering a vibrant academic community and empowering our students to reach their full potential.
              </p>
            </div>

            <a className="inline-flex items-center text-red-500 text-lg underline transition-colors hover:text-red-600" href="university-overview.html">
              University Overview <FaArrowRight className="ml-2" />
            </a>

            <div className="mt-12">
              <ul className="flex flex-col sm:flex-row gap-6 md:gap-10">
                <li className="flex flex-col items-center sm:items-start mb-6 sm:mb-0">
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-3xl font-bold text-gray-800">
                    <FaCalculator />
                    <h2>124+</h2>
                  </div>
                  <p className="mt-2 text-gray-600">Our graduates programs</p>
                </li>
                <li className="flex flex-col items-center sm:items-start">
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-3xl font-bold text-gray-800">
                    <FaGraduationCap />
                    <h2>392+</h2>
                  </div>
                  <p className="mt-2 text-gray-600">We have the best courses</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Choose Image */}
          <div className="w-full lg:w-1/2 relative">
            <img src="/img/choose/choose-1.png" alt="choose" className="w-full rounded-lg" />
            <div className="absolute bottom-5 left-5 bg-black/70 text-white p-4 rounded-lg flex items-center gap-3 max-w-sm">
              <FaQuoteLeft className="text-2xl flex-shrink-0" />
              <p className="text-sm m-0">"Research-intensive universities may have specialized research centers and institutes for various disciplines".</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ChooseArea;