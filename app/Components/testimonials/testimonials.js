"use client";
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'John Smith',
    role: "Adma's student",
    image: '/img/testimonial/testimonial-4.jpg',
    review:
      'Universities value students who can think critically & solve problems. Reviewer may assess student ability analyze information, evaluate different perspectives.',
  },
  {
    name: 'William Sekel',
    role: "Adma's student",
    image: '/img/testimonial/testimonial-4.jpg',
    review:
      'Universities value students who can think critically & solve problems. Reviewer may assess student ability analyze information, evaluate different perspectives.',
  },
  {
    name: 'Jesonal Smith',
    role: "Adma's student",
    image: '/img/testimonial/testimonial-4.jpg',
    review:
      'Universities value students who can think critically & solve problems. Reviewer may assess student ability analyze information, evaluate different perspectives.',
  },
  {
    name: 'Jesonal Smith',
    role: "Adma's student",
    image: '/img/testimonial/testimonial-4.jpg',
    review:
      'Universities value students who can think critically & solve problems. Reviewer may assess student ability analyze information, evaluate different perspectives.',
  },
  {
    name: 'Jesonal Smith',
    role: "Adma's student",
    image: '/img/testimonial/testimonial-4.jpg',
    review:
      'Universities value students who can think critically & solve problems. Reviewer may assess student ability analyze information, evaluate different perspectives.',
  },
  {
    name: 'Jesonal Smith',
    role: "Adma's student",
    image: '/img/testimonial/testimonial-4.jpg',
    review:
      'Universities value students who can think critically & solve problems. Reviewer may assess student ability analyze information, evaluate different perspectives.',
  },
];

const TestimonialSlider = () => {
  return (
    <div className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">What Student's Say</h2>
        </div>
        
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 3000 }}
          slidesPerView={1}
          spaceBetween={20}
          className="testimonial-swiper"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className="mr-3">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover" 
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                      <span className="text-sm text-gray-500">{testimonial.role}</span>
                    </div>
                  </div>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSlider;