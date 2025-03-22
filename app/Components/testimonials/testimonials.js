"use client";
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './TestimonialSlider.module.scss';

const testimonials = [
  {
    name: 'John Smith',
    role: "Adma’s student",
    image: '/img/testimonial/testimonial-4.jpg',
    review:
      'Universities value students who can think critically & solve problems. Reviewer may assess student ability analyze information, evaluate different perspectives.',
  },
  {
    name: 'William Sekel',
    role: "Adma’s student",
    image: '/img/testimonial/testimonial-4.jpg',
    review:
      'Universities value students who can think critically & solve problems. Reviewer may assess student ability analyze information, evaluate different perspectives.',
  },
  {
    name: 'Jesonal Smith',
    role: "Adma’s student",
    image: '/img/testimonial/testimonial-4.jpg',
    review:
      'Universities value students who can think critically & solve problems. Reviewer may assess student ability analyze information, evaluate different perspectives.',
  },
  {
    name: 'Jesonal Smith',
    role: "Adma’s student",
    image: '/img/testimonial/testimonial-4.jpg',
    review:
      'Universities value students who can think critically & solve problems. Reviewer may assess student ability analyze information, evaluate different perspectives.',
  },
  {
    name: 'Jesonal Smith',
    role: "Adma’s student",
    image: '/img/testimonial/testimonial-4.jpg',
    review:
      'Universities value students who can think critically & solve problems. Reviewer may assess student ability analyze information, evaluate different perspectives.',
  },
  {
    name: 'Jesonal Smith',
    role: "Adma’s student",
    image: '/img/testimonial/testimonial-4.jpg',
    review:
      'Universities value students who can think critically & solve problems. Reviewer may assess student ability analyze information, evaluate different perspectives.',
  },
];

const TestimonialSlider = () => {
  return (
    <div className={styles.testimonialArea}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>What Student’s Say</h2>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 3000 }}
        //   loop
          slidesPerView={3}
        //   width={1320}
          spaceBetween={150}
          className={styles.swiperContainer}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <div className={styles.testimonialItem}>
                <div className={styles.userList}>
                  <div className={styles.user}>
                    <div className={styles.image}>
                    <img src={testimonial.image} alt={testimonial.name} />
                    <div className={styles.content}>
                      <h3>{testimonial.name}</h3>
                      <span>{testimonial.role}</span>
                    </div>
                    </div>
                    
                  </div>
                  <div className={styles.starIcon}>
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
                <p>{testimonial.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSlider;
