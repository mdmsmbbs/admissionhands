"use client"; 
import { usePathname } from "next/navigation";
import Image from "next/image";

const PageHeader = () => {
  const path = usePathname(); // Get the current pathname

  // Define titles & images for each page
  const pageData = {
    "/": { title: "Home", image: "/img/title-shape.svg"},
    "/about": { title: "About Us", image: "/about.jpg" },
    "/contact": { title: "Contact Us", image: "/testing.jpg" },
    "/faculty": { title: "Faculty", image: "/testing.jpg" },
    "/privacy-policy": { title: "Privacy Policy", image: "/testing.jpg" },
    "/term-condition": { title: "Terms & Conditions", image: "/testing.jpg" },
    "/application-form": { title: "Application Form", image: "/testing.jpg" },
    "/blog-page": { title: "Blog Page", image: "/testing.jpg" },
  };

  // Default fallback
  const { title, image } = pageData[path] || {
    title: "Welcome",
    image: "/testing.jpg",
  };

  return (
    <div>
      <div className="relative bg-blue-950 py-12 h-[300px] mb-12">
        <div className="container mx-auto flex flex-col lg:flex-row items-center px-6">
          <div className="lg:w-1/2">
            <h2 className="text-5xl font-bold text-white">{title}</h2>
            <ul className="mt-2 mb-2 flex space-x-4 gap-4">
              <li>
                <a href="/" className="text-white">Home</a>
              </li>
              <li className="text-white">{title}</li>
            </ul>
          </div>
          <div className="lg:w-1/2 flex justify-end mt-5">
            <Image
              src={image}
              alt="Banner"
              className="w-[600px] max-w-full md:h-auto h-[250px] drop-shadow-lg"
              width={600}
              height={250}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
