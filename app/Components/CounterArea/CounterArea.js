import React from 'react';
import { PiGraduationCap } from "react-icons/pi";
import { LuNotebookPen } from "react-icons/lu";
import { BsBook } from "react-icons/bs";
import { LiaUserGraduateSolid } from "react-icons/lia";

const CounterArea = () => {
  return (
    <div className="py-16 md:py-20">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="flex justify-center lg:justify-start items-center">
            <div className="flex items-center">
              <div className="text-blue-600 mr-4">
                <PiGraduationCap size={60} />
              </div>
              <div>
                <h2 className="text-5xl font-bold text-indigo-950">
                  <span>124</span>+
                </h2>
                <p className="text-gray-600">Online Programs</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-start items-center">
            <div className="flex items-center">
              <div className="text-blue-600 mr-4">
                <LuNotebookPen size={60} />
              </div>
              <div>
                <h2 className="text-5xl font-bold text-indigo-950">
                  <span>140</span>+
                </h2>
                <p className="text-gray-600">Graduate Programs</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-start items-center">
            <div className="flex items-center">
              <div className="text-blue-600 mr-4">
                <BsBook size={60} />
              </div>
              <div>
                <h2 className="text-5xl font-bold text-indigo-950">
                  <span>392</span>+
                </h2>
                <p className="text-gray-600">The Best Courses</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end items-center">
            <div className="flex items-center">
              <div className="text-blue-600 mr-4">
                <LiaUserGraduateSolid size={60} />
              </div>
              <div>
                <h2 className="text-5xl font-bold text-indigo-950">
                  <span>865</span>+
                </h2>
                <p className="text-gray-600">Professional Teachers</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CounterArea;