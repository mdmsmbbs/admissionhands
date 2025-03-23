import Image from 'next/image'; // Use Next.js Image component for optimization

const Facilities = () => {
  return (
    <div className="pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
          {/* Image Container */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Main image */}
              <div className="relative z-10">
                <Image 
                  src="/img/facilities/facilities-3.png" 
                  alt="facilities-image" 
                  width={500} 
                  height={300}
                  className="w-full rounded-lg"
                />
              </div>
              
              {/* Secondary image */}
              <div className="absolute -bottom-24 -right-6 z-20 w-2/3">
                <Image 
                  src="/img/facilities/facilities-4.png" 
                  alt="facilities-image" 
                  width={500} 
                  height={300}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              
              {/* Decorative shapes */}
              <div className="absolute bottom-4 left-4 z-30">
                <Image src="/img/shape/shape-4.png" alt="" width={50} height={50} />
              </div>
              <div className="absolute top-5 right-28 z-30">
                <Image src="/img/shape/shape-5.png" alt="" width={50} height={50} />
              </div>
              <div className="absolute top-16 right-60 z-30">
                <Image src="/img/shape/shape-3.png" alt="" width={50} height={50} />
              </div>
            </div>
          </div>
          
          {/* Content Container */}
          <div className="w-full lg:w-1/2 pt-24 lg:pt-0">
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                  Our Campus Has Best Facilities For Our Students
                </h2>
                <p className="text-gray-600">
                  We are proud of our alumni network, which spans across industries and continents. Our graduates are equipped with the skills, values, knowledge, and a drive to excel in their chosen fields and make a positive impact on society. As an Adma graduate.
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">
                  <span className="text-blue-600 font-normal">01.</span> Best Computer Labs
                </h3>
                <p className="text-gray-600">
                  Computer labs equipped with computers, printers, and software are available for students to work on assignments.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">
                  <span className="text-blue-600 font-normal">02.</span> Performing Arts Centers
                </h3>
                <p className="text-gray-600">
                  Universities with performing arts programs often have dedicated facilities such as theaters, concert halls, and rehearsal spaces.
                </p>
              </div>
              
              <div>
                <a 
                  href="application.html" 
                  className="inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded-lg transition-colors hover:bg-blue-700"
                >
                  Application Form
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;