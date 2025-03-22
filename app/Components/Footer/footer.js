import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.scss";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { RiPhoneLine, RiMessageLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          {/* About Adma Section */}
          <div className={styles.aboutSection}>
            <h3>About Adma</h3>
            <p>
            Where data meets helping hands for medical school applicants. 
            </p>
            <h6>Follow Adma:</h6>
            <div className={styles.socialLinks}>
              <a href="https://www.facebook.com/" target="_blank"><FaFacebookF /></a>
              <a href="https://www.instagram.com/" target="_blank"><FaInstagram /></a>
              <a href="https://twitter.com/" target="_blank"><FaTwitter /></a>
            </div>

          </div>

          {/* Academics Section */}
          <div className={styles.academicsSection}>
            <h3>Academics</h3>
            <ul>
              <li>
                <Link href="/program-details">
                  Undergraduates
                </Link>
              </li>
              <li>
                <Link href="/university-overview">
                  University Overview
                </Link>
              </li>
              <li>
                <Link href="/blog-style-one">
                  Online Education
                </Link>
              </li>
              <li>
                <Link href="/apply">
                  How To Apply
                </Link>
              </li>
              <li>
                <Link href="/university-life">
                  Graduates
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className={styles.quickLinksSection}>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link href="/university-life">
                Student Activities
                </Link>
              </li>
              <li>
                <Link href="/application">
                  Apply Form
                </Link>
              </li>
              <li>
                <Link href="/events">
                  Schedule A Tour
                </Link>
              </li>
              <li>
                <Link href="/blog-style-two">
                  News & Blog
                </Link>
              </li>
              <li>
                <Link href="/university-overview">
                  About Adma
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.contactSection}>
            <h3>Contact Us</h3>
            <ul>
              <li><a href="tel:9711110766"><RiPhoneLine /> +91 9711110766</a></li>
              <li><a href="mailto:mdms.mbbs1@gmail.com"><RiMessageLine /> mdms.mbbs1@gmail.com</a></li>
              <li><p> Randon , A-33 secto 122</p></li>
            </ul>
          </div>

          {/* Mobile App Section */}
          {/* <div className={styles.mobileAppSection}>
            <h3>Mobile App</h3>
            <ul>
              <li>
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/assets/img/footer/footer-1.svg"
                    alt="Google Play"
                    width={120}
                    height={40}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.apple.com" target="_blank" rel="noreferrer">
                  <Image
                    src="/assets/img/footer/footer-2.svg"
                    alt="App Store"
                    width={120}
                    height={40}
                  />
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
