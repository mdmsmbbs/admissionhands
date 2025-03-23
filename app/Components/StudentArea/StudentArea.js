import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const StudentArea = () => {
  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Student Image */}
          <div className="w-full relative order-2 lg:order-1">
            <div className="mx-auto max-w-sm lg:max-w-full">
              <Image 
                src="/img/student/student-1.png" 
                alt="student" 
                width={480} 
                height={480}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Student Card */}
          <div className="w-full order-1 lg:order-2">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <ul className="space-y-4">
                <li className="border-b border-gray-100 pb-4">
                  <a href="fitness-athletics.html" className="flex justify-between items-center text-gray-800 hover:text-yellow-500 transition-colors">
                    <span className="font-medium">Athletics & Fitness</span> 
                    <FaArrowRight className="text-yellow-500" />
                  </a>
                </li>
                <li className="border-b border-gray-100 pb-4">
                  <a href="guidance-support.html" className="flex justify-between items-center text-gray-800 hover:text-yellow-500 transition-colors">
                    <span className="font-medium">Support & Guidance</span> 
                    <FaArrowRight className="text-yellow-500" />
                  </a>
                </li>
                <li className="border-b border-gray-100 pb-4">
                  <a href="university-life.html" className="flex justify-between items-center text-gray-800 hover:text-yellow-500 transition-colors">
                    <span className="font-medium">Student Activities</span> 
                    <FaArrowRight className="text-yellow-500" />
                  </a>
                </li>
                <li>
                  <a href="tuition-fees.html" className="flex justify-between items-center text-gray-800 hover:text-yellow-500 transition-colors">
                    <span className="font-medium">Campus Life</span> 
                    <FaArrowRight className="text-yellow-500" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Student Content */}
          <div className="w-full space-y-6 order-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Student Life At Adma</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                We are proud of our alumni network, which spans across industries and continents. Our graduates are 
                equipped with the skills, values, and knowledge to excel in their chosen fields and make a positive 
                impact on society.
              </p>
              <p className="text-gray-600">
                Our graduates are equipped with the skills, values, and knowledge to excel in their chosen fields and 
                make a positive impact.
              </p>
            </div>
            <div>
              <a 
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-sm transition-colors" 
                href="application.html"
              >
                Application Form <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentArea;