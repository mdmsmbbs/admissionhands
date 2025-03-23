'use client';
import { RiMailLine, RiPhoneLine } from "react-icons/ri";
import { useState } from "react";

const FacultyList = ({ facultyData = [] }) => {
  const defaultFacultyData = [
    {
      name: "Cordelia Nichols",
      position: "Assistant Professor of Arts",
      email: "cordelia.nichols@example.com",
      phone: "+58 93939 0302 00",
      image: "/testing.jpg",
    },
    {
      name: "Hester Cox",
      position: "Lecturer in Journalism",
      email: "hester.cox@example.com",
      phone: "+58 93939 0302 01",
      image: "/testing.jpg",
    },
    {
      name: "John Smith",
      position: "Assistant Professor of History",
      email: "john.smith@example.com",
      phone: "+58 93939 0302 02",
      image: "/testing.jpg",
    },
    {
      name: "Sarah Davis",
      position: "Assistant Professor of History",
      email: "sarah.davis@example.com",
      phone: "+58 93939 0302 03",
      image: "/testing.jpg",
    },
    {
      name: "Franklin Doyle",
      position: "Assistant Professor of History",
      email: "franklin.doyle@example.com",
      phone: "+58 93939 0302 04",
      image: "/testing.jpg",
    },
    {
      name: "William Cambel",
      position: "Assistant Professor of History",
      email: "william.cambel@example.com",
      phone: "+58 93939 0302 05",
      image: "/testing.jpg",
    },
  ];

  const dataToRender = facultyData.length > 0 ? facultyData : defaultFacultyData;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = 3;

  // Ensure pagination always has data, repeating faculty list if necessary
  const repeatedData = Array.from({ length: totalPages * itemsPerPage }, (_, i) =>
    dataToRender[i % dataToRender.length]
  );

  const paginatedData = repeatedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="py-22 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
          {paginatedData.map((faculty, index) => (
            <div key={index} className="bg-white p-4 flex flex-col items-center">
              <img
                src={faculty.image}
                alt="faculty"
                className="w-[420px] h-[450px] object-cover "
              />
              <div className="mt-4  w-full">
                <h3 className="text-xl text-black font-bold mb-2">{faculty.name}</h3>
                <p className="text-gray-600  mb-2">{faculty.position}</p>
                <p className="border-b border-gray-300"></p>
                <div className="mt-2 text-gray-600 border-gray-200 flex flex-col item-start">
                  <a
                    href={`mailto:${faculty.email}`}
                    className=" text-blue-500 hover:underline flex items-center gap-2"
                  >
                    <RiMailLine /> {faculty.email}
                  </a>
                  <a
                    href={`tel:${faculty.phone}`}
                    className=" text-blue-500 hover:underline mt-1 flex items-center gap-2"
                  >
                    <RiPhoneLine /> {faculty.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6 space-x-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-4 py-2 rounded-full bg-gray-500 text-white"
          >
            {'<'}
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-full ${
                currentPage === i + 1 ? "bg-red-500 text-white" : "bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            className="px-4 py-2 rounded-full bg-gray-500 text-white"
          >
            {'>'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FacultyList;
