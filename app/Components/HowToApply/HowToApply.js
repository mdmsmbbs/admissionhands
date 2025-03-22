import React from 'react';
import { FaArrowRight, FaPen, FaSearch, FaMoneyBillWave } from 'react-icons/fa';
import styles from './HowToApply.module.scss';
import { FaWpforms } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";
import VideoArea from '../Shared/videoPlayer/VideoArea';

const HowToApply = () => {
  return (
    <div className={styles.applicationArea}>
      <div className={styles.container}>
        <div className={styles.applicationSectionTitle}>
          <div className={styles.row}>
            <div className={styles.colLg6}>
              <div className={styles.applicationTitle}>
                <h2>How To Apply At Adma</h2>
              </div>
            </div>
            <div className={styles.colLg6}>
              <div className={styles.applicationBtn}>
                <a className={styles.defaultBtn} href="contact.html">
                  Get Started Now
                  <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.colLg4}>
            <div className={`${styles.singleApplicationCard} ${styles.style3}`}>
              <div className={styles.cardHeader}>
                <div className={styles.icon}>
                  <FaWpforms size={50}/>
                </div>
                <h1>01</h1>
              </div>
              <div className={styles.content}>
                <h3>Complete Application Form</h3>
                <p>
                  Furthermore, our university camp provides a vibrant & supportive community that embraces diversity.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.colLg4}>
            <div className={`${styles.singleApplicationCard} ${styles.style3}`}>
              <div className={styles.cardHeader}>
                <div className={styles.icon}>
                  <MdOutlineRateReview size={50}/>
                </div>
                <h1>02</h1>
              </div>
              <div className={styles.content}>
                <h3>Application Review</h3>
                <p>
                  We believe that a diverse student body enhances the learning experience & prepares students to thrive in a globalized world.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.colLg4}>
            <div className={`${styles.singleApplicationCard} ${styles.style3}`}>
              <div className={styles.cardHeader}>
                <div className={styles.icon}>
                  <MdOutlinePayments size={50}/>
                </div>
                <h1>03</h1>
              </div>
              <div className={styles.content}>
                <h3>Payment of Fees</h3>
                <p>
                  As a student at Adma, you will have access to state-of-the-art facilities, cutting-edge research laboratories, & an extensive network.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <VideoArea/>
      </div>
    </div>
  );
};

export default HowToApply;
