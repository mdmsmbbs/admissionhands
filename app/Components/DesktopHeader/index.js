import Link from 'next/link';
import styles from './DesktopHeader.module.scss';
import { IoIosArrowRoundForward } from "react-icons/io";

const DesktopHeader = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <Link href="/">
            <img src="/img/logo.png" alt="Logo" />
          </Link>
        </div>

        <ul className={styles.navMenu}>
          <li className={styles.navItem}>
            <a href="#">Home</a>
          </li>
          <li className={styles.navItem}>
            <a href="#">Pages</a>
          </li>
          <li className={styles.navItem}>
            <a href="#">Admissions</a>
          </li>
          <li className={styles.navItem}>
            <a href="#">Academics</a>
          </li>
          <li className={styles.navItem}>
            <a href="#">Health Care</a>
          </li>
          <li className={`${styles.navItem} ${styles.active}`}>
            <a href="#">Student Life</a>
          </li>
          <li className={styles.navItem}>
            <a href="#">Contact Us</a>
          </li>
        </ul>

        <div className={styles.cta}>
          <Link href="/application">
            <button className={styles.ctaButton}>
              <span>Application Form </span>
              <div className={styles.icon}> <IoIosArrowRoundForward size={30}/></div>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default DesktopHeader;

