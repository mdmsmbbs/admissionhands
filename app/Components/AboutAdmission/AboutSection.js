import Image from "next/image";
import { FaGlobe, FaTrophy } from "react-icons/fa";
import { GoTrophy } from "react-icons/go";
import { PiGlobeStand } from "react-icons/pi";

const AdmaAbout = () => {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Content Section */}
          <div className="w-full lg:w-1/2 space-y-12">
            {/* Title Section */}
            <div className="space-y-4">
              <h2 className="flex items-center text-3xl md:text-4xl font-bold text-gray-800 gap-3">
                <Image
                  src="/img/title-shape.svg"
                  alt="title shape"
                  width={29}
                  height={36}
                />
                About Admission Hands
              </h2>
              <p className="text-gray-600 text-lg">
                At Adma, we believe in providing an exceptional educational
                experience that prepares students for success in an ever-changing
                world. As a leading institution of higher learning, we are
                committed to excellence.
              </p>
            </div>
            
            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="bg-white p-6 shadow-md rounded-lg border border-gray-100 space-y-4">
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 text-yellow-500">
                    <PiGlobeStand size={30} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Our History
                  </h3>
                </div>
                <p className="text-gray-600">
                  We strive to provide a transformative and enriching educational
                  experience for our students with the best facilities.
                </p>
                <a href="university-overview.html" className="inline-block text-yellow-500 font-semibold hover:text-yellow-600 transition-colors">
                  University Overview →
                </a>
              </div>
              
              {/* Card 2 */}
              <div className="bg-white p-6 shadow-md rounded-lg border border-gray-100 space-y-4">
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 text-yellow-500">
                    <GoTrophy size={30} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Our Mission
                  </h3>
                </div>
                <p className="text-gray-600">
                  Diversity and inclusivity are integral to our university's
                  ethos. We celebrate the richness of our multicultural community.
                </p>
                <a href="program-details.html" className="inline-block text-yellow-500 font-semibold hover:text-yellow-600 transition-colors">
                  View Our Programs →
                </a>
              </div>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0">
            <div className="relative">
              <Image
                src="/img/about-2.jpg"
                alt="about image"
                width={500}
                height={400}
                // className="w-full h-auto rounded-lg shadow-lg"
              />
              
              {/* Shape decorations */}
              <div className="absolute -top-8 -left-8 w-24 h-24 z-10">
                <img
                  src="/img/shape/shape-3.png"
                  alt="shape 3"
                  className="w-full h-auto"
                />
              </div>
              
              <div className="absolute -bottom-8 -right-8 w-24 h-24 z-10">
                <img
                  src="/img/shape/shape-4.png"
                  alt="shape 4"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmaAbout;