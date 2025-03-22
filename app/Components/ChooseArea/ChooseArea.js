import React from 'react';
import { FaArrowRight, FaQuoteLeft, FaGraduationCap, FaCalculator } from 'react-icons/fa';
import styles from './ChooseArea.module.scss';

const ChooseArea = () => {
  return (
    <div className={styles.chooseArea}>
      <div className={styles.container}>
        <div className={styles.row}>
          {/* Choose Content */}
          <div className={styles.chooseContent}>
            <div className={styles.title}>
              <h2>Why Choose Adma</h2>
              <p>
                At Adma, we believe in providing an exceptional educational experience that prepares students for success 
                in an ever-changing world. As a leading institution of higher learning,
              </p>
              <p>
                We are committed to fostering a vibrant academic community and empowering our students to reach their full potential.
              </p>
            </div>
            <a className={styles.arrowBtn} href="university-overview.html">
              University Overview <FaArrowRight />
            </a>

            <div className={styles.chooseCounterInfo}>
              <ul>
                <li>
                  <div className={styles.counterItem}>
                    <FaCalculator />
                    <h2>124+</h2>
                  </div>
                  <p>Our graduates programs</p>
                </li>
                <li>
                  <div className={styles.counterItem}>
                    <FaGraduationCap />
                    <h2>392+</h2>
                  </div>
                  <p>We have the best courses</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Choose Image */}
          <div className={styles.chooseImage}>
            <img src="/img/choose/choose-1.png" alt="choose" />
            <div className={styles.chooseImageInfo}>
              <FaQuoteLeft />
              <p>“Research-intensive universities may have specialized research centers and institutes for various disciplines”.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseArea;
