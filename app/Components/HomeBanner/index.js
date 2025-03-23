import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const HomeBanner = () => {
  return (
    <div className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* Left Column - Images */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative">
              <div className="relative w-full">
                <Image
                  src="/img/hero/banner-wrap-12.png"
                  alt="Main Banner"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>

              {/* <div className="absolute -bottom-12 -right-8 z-10 w-52 h-52">
                <Image
                  src="/img/hero/banner-wrap-city.png"
                  alt="City Image"
                  width={200}
                  height={200}
                  className="w-full h-auto rounded-md"
                />
                
                <div className="absolute -bottom-6 -right-6 z-20 w-28 h-28">
                  <Image
                    src="/img/hero/banner-wrap-city-21.png"
                    alt="City Overlay"
                    width={100}
                    height={100}
                    className="w-full h-auto rounded-md"
                  />
                </div>
              </div> */}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="w-full md:w-1/2 mt-16 md:mt-0">
            <div className="space-y-8">
              {/* Header Content */}
              <div className="space-y-4">
                <p className="text-lg font-medium text-black">
                  Abroad MBBS Admission <span className="text-yellow-400 font-bold">Experts</span>
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-800">
                  Build Your Career with Admission Hands
                </h1>
                <p className="text-gray-600 text-lg mt-4">
                  We are dedicated to providing exceptional guidance to MBBS aspirants, ensuring they gain admission to the top medical colleges in India and abroad.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Link href="/university-overview">
                  <span className="inline-flex items-center px-6 py-3 bg-yellow-400 text-black font-bold text-lg rounded-sm hover:bg-yellow-500 transition-colors cursor-pointer">
                    University Overview <IoIosArrowRoundForward size={40} />
                  </span>
                </Link>

                <div className="flex items-center gap-4">
                  <a
                    href="https://www.youtube.com/watch?v=3nQNiWdeH2Q"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-50 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=3nQNiWdeH2Q"
                    className="inline-flex items-center text-gray-800 font-bold hover:text-yellow-500 transition-colors"
                  >
                    See How To Apply <IoIosArrowRoundForward size={40} />
                  </a>
                </div>
              </div>

              {/* User Images Section */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-8">
                <div className="flex -space-x-4">
                  <Image
                    src="/img/hero/hero-user-1.jpg"
                    alt="User 1"
                    width={50}
                    height={50}
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                  <Image
                    src="/img/hero/hero-user-2.jpg"
                    alt="User 2"
                    width={50}
                    height={50}
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                  <Image
                    src="/img/hero/hero-user-3.jpg"
                    alt="User 3"
                    width={50}
                    height={50}
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                  <Image
                    src="/img/hero/hero-user-4.jpg"
                    alt="User 4"
                    width={50}
                    height={50}
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                </div>

                <div className="flex flex-col">
                  <h2 className="text-2xl font-bold text-gray-800">
                    <span className="text-yellow-400">1300+</span>
                  </h2>
                  <p className="text-gray-600">Students Admission in Abroad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;