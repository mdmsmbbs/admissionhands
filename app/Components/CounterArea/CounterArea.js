import React from 'react';
import { FaCalculator, FaBook, FaGraduationCap } from 'react-icons/fa';
import styles from './CounterArea.module.scss';
import { LuNotebookPen } from "react-icons/lu";
import { LiaUserGraduateSolid } from "react-icons/lia";
import { PiGraduationCap } from "react-icons/pi";
import { BsBook } from "react-icons/bs";

const CounterArea = () => {
  return (
    <div className={styles.counterArea}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.colLg3}>
            <div className={styles.singleCounterInfo}>
              <div className={styles.icon}>
                <PiGraduationCap size={60} />
              </div>
              <div className={styles.title}>
                <h2><span className={styles.counter}>124</span>+</h2>
                <p>Online Programs</p>
              </div>
            </div>
          </div>
          <div className={styles.colLg3}>
            <div className={styles.singleCounterInfo}>
              <div className={styles.icon}>
                <LuNotebookPen size={60} />
              </div>
              <div className={styles.title}>
                <h2><span className={styles.counter}>140</span>+</h2>
                <p>Graduate Programs</p>
              </div>
            </div>
          </div>
          <div className={styles.colLg3}>
            <div className={styles.singleCounterInfo}>
              <div className={styles.icon}>
                <BsBook size={60}/>
              </div>
              <div className={styles.title}>
                <h2><span className={styles.counter}>392</span>+</h2>
                <p>The Best Courses</p>
              </div>
            </div>
          </div>
          <div className={styles.colLg3}>
            <div className={`${styles.singleCounterInfo} ${styles.justifyEnd}`}>
              <div className={styles.icon}>
                <LiaUserGraduateSolid size={60} />
              </div>
              <div className={styles.title}>
                <h2><span className={styles.counter}>865</span>+</h2>
                <p>Professional Teachers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterArea;
