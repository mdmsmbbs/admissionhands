import React from 'react';
import { FaFacebook ,FaTwitter, FaInstagram, FaPinterest} from "react-icons/fa";
import { RiCalendarLine, RiUserLine, RiBook3Line, RiMessageLine,RiCheckLine,  } from "react-icons/ri";

const Blog = () => {
    return (
        <div className="py-26 pb-20 ">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap -mx-4">
                    {/* Left Sidebar */}
                    <div className="w-full lg:w-2/3 px-4">
                        <div className="mb-8">
                            <div className="flex items-center space-x-4 text-gray-600 text-sm mb-4">
                                <span className="flex items-center">
                                <RiCalendarLine className="mr-1 text-xl text-red-500" /> October 08, 2024
                                </span>
                                <span className="flex items-center">
                                <RiUserLine className="text-red-500 text-xl mr-1" />
                                    <a href="/author" className="hover:underline">Jesonal Jeck</a>
                                </span>
                                <span className="flex items-center">
                                <RiBook3Line className="text-red-500 text-xl mr-1" /> 12 Mins Read
                                </span>
                                <span className="flex items-center">
                                <RiMessageLine className="text-red-500 text-xl mr-1" /> 02 Comments
                                </span>
                            </div>

                            <div className="mb-6">
                                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                                    Leading work management solution gain visibility for your any business
                                </h1>
                                <p className="text-gray-600 text-justify">
                                    We are proud of our alumni network, which spans across industries and continents. Our graduates are equipped with the skills, values knowledge, anda to excel in their chosen fields and make positive impact on society.
                                </p>
                            </div>
                            <hr className="my-4 border-gray-300" />
                            <div className="mb-6">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                                    Applications are like the lifeblood of mobile phones and tablets today!!!
                                </h3>
                                <p className="text-gray-600 mb-4 text-justify">
                                    Nowadays, technology has become super advanced. Even normal people are getting themselves enrolled in coding and programming and creating applications on their own. An app developer earns a hefty amount as well, and this, if seen from a business point of view, has a lot of scope to be a million-dollar business in the future.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div className="flex items-center text-gray-600">
                                        <RiCheckLine className="text-red-500 text-xl mr-2" />
                                        <p>Far far away, behind the word mountain</p>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <RiCheckLine className="text-red-500 text-xl mr-2" />
                                        <p>When she reached the first hills</p>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <RiCheckLine className="text-red-500 text-xl mr-2" />
                                        <p>A small river named Duden flows</p>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <RiCheckLine className="text-red-500 text-xl mr-2" />
                                        <p>A small river named Duden flows by their plat</p>
                                    </div>
                                </div>
                                <img src="/testing.jpg" alt="applications" className="w-full rounded-lg mb-4" />
                                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                                    When, while the lovely valley teems with
                                </h3>
                                <p className="text-gray-600 text-justify">
                                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc eleifend, augue vitae dictum accumsan, ligula est interdum dui, eu interdum nisi ex et erat. Sed vel ullamcorper magna. Etiam in laoreet massa. Donec sed commodo orci.
                                </p>
                            </div>

                            <blockquote className="border-l-4 bg-gray-200 text-justify border-red-500 pl-4 md:py-8 italic text-gray-600 mb-6">
                                <p>“Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc eleifend, augue vitae dictum accumsan, ligula est interdum dui, eu interdum nisi ex et erat”.</p>
                            </blockquote>

                            <p className="text-gray-600 mb-4 text-justify">
                                I sink under the weight of the splendour of these visions! A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquis
                            </p>
                            <p className="text-gray-600 mb-4 text-justify">
                                I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees.
                            </p>

                            <div className="flex flex-wrap justify-between mb-8">
                                <div className="flex items-center space-x-4 mb-4">
                                    <span className="text-gray-600">Share:</span>
                                    <a href="https://www.facebook.com/" target="_blank" className="text-blue-600 hover:text-blue-800">
                                    <FaFacebook className="text-red-500 text-2xl" />
                                    </a>
                                    <a href="https://www.pinterest.com/" target="_blank" className="text-red-600 hover:text-red-800">
                                    <FaPinterest className="text-red-500 text-2xl" />
                                    </a>
                                    <a href="https://www.instagram.com/" target="_blank" className="text-pink-600 hover:text-pink-800">
                                    <FaInstagram className="text-pink-500 text-2xl" />
                                    </a>
                                    <a href="https://twitter.com/" target="_blank" className="text-blue-400 hover:text-blue-600">
                                    <FaTwitter className="text-blue-500 text-2xl" />
                                    </a>
                                    
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-gray-600">Tags:</span>
                                    <a href="/tag" className="text-black bg-gray-200  p-2 hover:bg-blue-950 hover:text-white">Business</a>
                                    <a href="/tag" className="text-black bg-gray-200  p-2 hover:bg-blue-950 hover:text-white">Graduates</a>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                                    Comments <span className="text-gray-500">(02)</span>
                                </h1>
                                <div className="space-y-6">
                                    <div className="bg-gray-200 p-4  shadow">
                                        <div className="flex justify-between items-center mb-4 my-4">
                                            <div className="flex items-center space-x-3">
                                                <img src="/testing.jpg" alt="user" className="w-10 h-10 rounded-full" />
                                                <div>
                                                    <h3 className="text-lg font-semibold text-gray-800">Samuel Cambel</h3>
                                                    <p className="text-gray-500 text-sm">12 Days ago</p>
                                                </div>
                                            </div>
                                            <a href="#" className="bg-red-500 p-2 hover:underline">Reply</a>
                                        </div>
                                        <p className="text-gray-600 my-4 text-justify">
                                            Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their projects again and again.
                                        </p>
                                        <p className='border-b border-gray-400'></p>
                                        <div className="ml-8 mt-4">
                                            <div className="flex items-center space-x-3 mb-2">
                                                <img src="/testing.jpg" alt="user" className="w-10 h-10 rounded-full" />
                                                <div>
                                                    <h3 className="text-lg font-semibold text-gray-800">Jonson Jems</h3>
                                                    <p className="text-gray-500 text-sm">04 Days ago</p>
                                                </div>
                                            </div>
                                            <p className="text-gray-600 my-4 text-justify">
                                                nd if she hasn’t been rewritten, then they are still using her. Far far away, behind the word mountains, far from the countries Vokalia.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-gray-200 p-4 shadow">
                                        <div className="flex justify-between items-center my-4 mb-4">
                                            <div className="flex items-center space-x-3">
                                                <img src="/testing.jpg" alt="user" className="w-10 h-10 rounded-full" />
                                                <div>
                                                    <h3 className="text-lg font-semibold text-gray-800">Wiilam Cambel</h3>
                                                    <p className="text-gray-500 text-sm">06 Days ago</p>
                                                </div>
                                            </div>
                                            <a href="#" className="bg-red-500 p-2 hover:underline">Reply</a>
                                        </div>
                                        <p className="text-gray-600 my-4 text-justify">
                                            Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their plate.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h1 className="text-3xl font-bold text-gray-800 mb-4">Leave A Reply</h1>
                                <form className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            placeholder="Your name"
                                            className="w-full p-3 border border-gray-400 text-gray-600 placeholder-gray-500 focus:outline-none focus:ring focus:ring-red-400"
                                        />
                                        <input
                                            type="email"
                                            placeholder="Your email"
                                            className="w-full p-3 border border-gray-400 text-gray-600 placeholder-gray-500 focus:outline-none focus:ring focus:ring-red-400"
                                        />
                                    </div>
                                    <textarea
                                        placeholder="Your comments..."
                                        className="w-full p-3 border border-gray-400 text-gray-600 placeholder-gray-500 h-32 focus:outline-none focus:ring focus:ring-red-400"
                                    ></textarea>
                                    <div className="flex items-center">
                                        <input type="checkbox" id="saveInfo" className="mr-2" />
                                        <label htmlFor="saveInfo" className="text-gray-600">
                                            Save my name, email, and website in this browser for the next time I comment.
                                        </label>
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-red-500 w-full text-white px-6 py-3 hover:bg-gray-700 flex items-center justify-center"
                                    >
                                        Post A Comment
                                    </button>
                                </form>

                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="w-full lg:w-1/3 px-4">
                        <div className="space-y-8">
                            <div className="bg-white ">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Search</h3>
                                <form className="relative">
                                    <input type="text" placeholder="Search" className="w-full p-3 border border-gray-400 focus:outline-none focus:ring focus:ring-red-500 placeholder-gray-500" />
                                    <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600">
                                        <i className="ri-search-line"></i>
                                    </button>
                                </form>
                            </div>

                            <div className="bg-white ">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Latest News</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <a href="/blog-details">
                                            <img src="/testing.jpg" alt="latest" className="w-[80px] h-16 " />
                                        </a>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800">
                                                <a href="/blog-details" className="hover:underline">Professor Albert joint research on mobile money in Tanzania</a>
                                            </h3>
                                            <p className="text-gray-500 text-sm flex items-center">
                                                <i className="ri-calendar-line mr-1"></i> October 08, 2024
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <a href="/blog-details">
                                            <img src="/testing.jpg" alt="latest" className="w-[80px] h-16 " />
                                        </a>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800">
                                                <a href="/blog-details" className="hover:underline">Professor Albert joint research on mobile money in Tanzania</a>
                                            </h3>
                                            <p className="text-gray-500 text-sm flex items-center">
                                                <i className="ri-calendar-line mr-1"></i> October 08, 2024
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <a href="/blog-details">
                                            <img src="/testing.jpg" alt="latest" className="w-[80px] h-16 " />
                                        </a>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800">
                                                <a href="/blog-details" className="hover:underline">Professor Albert joint research on mobile money in Tanzania</a>
                                            </h3>
                                            <p className="text-gray-500 text-sm flex items-center">
                                                <i className="ri-calendar-line mr-1"></i> October 08, 2024
                                            </p>
                                        </div>
                                    </div>
                                    {/* Repeat for other news items */}
                                </div>
                            </div>

                            <div className=" ">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Categories</h3>
                                <div className="space-y-2">
                                    <a href="/categorie" className="flex justify-between text-gray-800 hover:text-red-600">
                                        Education <span>(07)</span>
                                    </a>
                                    <a href="/categorie" className="flex justify-between text-gray-800 hover:text-red-600">
                                        Learning <span>(02)</span>
                                    </a>
                                    <a href="/categorie" className="flex justify-between text-gray-800 hover:text-red-600">
                                        University <span>(04)</span>
                                    </a>
                                    <a href="/categorie" className="flex justify-between text-gray-800 hover:text-red-600">
                                        Online Education <span>(06)</span>
                                    </a>
                                    <a href="/categorie" className="flex justify-between text-gray-800 hover:text-red-600">
                                        Graduates <span>(02)</span>
                                    </a>
                                    {/* Repeat for other categories */}
                                </div>
                            </div>

                            <div className="bg-white ">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Student’s Gallery</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                    <a href="#" className="block">
                                        <img src="/testing.jpg" alt="gallery" className="w-full h-[90px] " />
                                    </a>
                                    <a href="#" className="block">
                                        <img src="/testing.jpg" alt="gallery" className="w-full h-[90px] " />
                                    </a>
                                    <a href="#" className="block">
                                        <img src="/testing.jpg" alt="gallery" className="w-full h-[90px] " />
                                    </a>
                                    <a href="#" className="block">
                                        <img src="/testing.jpg" alt="gallery" className="w-full h-[90px] " />
                                    </a>
                                    <a href="#" className="block">
                                        <img src="/testing.jpg" alt="gallery" className="w-full h-[90px] " />
                                    </a>
                                    <a href="#" className="block">
                                        <img src="/testing.jpg" alt="gallery" className="w-full h-[90px] " />
                                    </a>
                                    <a href="#" className="block">
                                        <img src="/testing.jpg" alt="gallery" className="w-full h-[90px] " />
                                    </a>
                                    <a href="#" className="block">
                                        <img src="/testing.jpg" alt="gallery" className="w-full h-[90px] " />
                                    </a>
                                </div>
                            </div>

                            <div className="bg-white ">
                                <h3 className="text-xl font-semibold text-black mx-3 mb-4">Popular Tags</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-2">
                                    <a href="/tag" className="bg-gray-200 text-black text-center hover:bg-blue-600 hover:text-white p-2 w-full block rounded">
                                        Education
                                    </a>
                                    <a href="/tag" className="bg-gray-200 text-black text-center hover:bg-blue-600 hover:text-white p-2 w-full block rounded">
                                        University
                                    </a>
                                    <a href="/tag" className="bg-gray-200 text-black text-center hover:bg-blue-600 hover:text-white p-2 w-full block rounded">
                                        Online
                                    </a>
                                    <a href="/tag" className="bg-gray-200 text-black text-center hover:bg-blue-600 hover:text-white p-2 w-full block rounded">
                                        Graduates
                                    </a>
                                    <a href="/tag" className="bg-gray-200 text-black text-center hover:bg-blue-600 hover:text-white p-2 w-full block rounded">
                                        Programs
                                    </a>
                                    <a href="/tag" className="bg-gray-200 text-black text-center hover:bg-blue-600 hover:text-white p-2 w-full block rounded">
                                        Sports
                                    </a>
                                    <a href="/tag" className="bg-gray-200 text-black text-center hover:bg-blue-600 hover:text-white p-2 w-full block rounded">
                                        Admission
                                    </a>
                                    <a href="/tag" className="bg-gray-200 text-black text-center hover:bg-blue-600 hover:text-white p-2 w-full block rounded">
                                        Academics
                                    </a>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;