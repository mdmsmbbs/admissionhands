import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import styles from './StudentArea.module.scss';
import Image from 'next/image';

const StudentArea = () => {
  return (
    <div className={styles.studentArea}>
      <div className={styles.container}>
        <div className={styles.row}>
          {/* Student Image */}
          <div className={styles.imageWrapper}>
            <Image src="/img/student/student-1.png" alt="student" width={480} height={480}/>
          </div>

          {/* Student Card */}
          <div className={styles.studentCard}>
            <ul>
              <li>
                <a href="fitness-athletics.html">
                  Athletics & Fitness <FaArrowRight />
                </a>
              </li>
              <li>
                <a href="guidance-support.html">
                  Support & Guidance <FaArrowRight />
                </a>
              </li>
              <li>
                <a href="university-life.html">
                  Student Activities <FaArrowRight />
                </a>
              </li>
              <li>
                <a href="tuition-fees.html">
                  Campus Life <FaArrowRight />
                </a>
              </li>
            </ul>
          </div>

          {/* Student Content */}
          <div className={styles.studentContent}>
            <h2>Student Life At Adma</h2>
            <p>
              We are proud of our alumni network, which spans across industries and continents. Our graduates are 
              equipped with the skills, values, and knowledge to excel in their chosen fields and make a positive 
              impact on society.
            </p>
            <p>
              Our graduates are equipped with the skills, values, and knowledge to excel in their chosen fields and 
              make a positive impact.
            </p>
            <a className={styles.defaultBtn} href="application.html">
              Application Form <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentArea;
