import Image from "next/image";
import Link from "next/link";
import styles from "./BannerWrap.module.scss"; // Import external SCSS file
import { IoIosArrowRoundForward } from "react-icons/io";

const HomeBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.row}>
          {/* Left Column */}
          <div className={styles.imageSection}>
            <div className={styles.bannerImages}>
              <Image
                src="/img/hero/banner-wrap-12.png"
                alt="Main Banner"
                width={600}
                height={400}
              />
              <div className={styles.overlay}>
                <Image
                  src="/img/hero/banner-wrap-city.png"
                  alt="City Image"
                  width={200}
                  height={200}
                />
                <div className={styles.overlaySmall}>
                  <Image
                    src="/img/hero/banner-wrap-city-21.png"
                    alt="City Overlay"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.contentSection}>
            <div className={styles.bannerContent}>
              <div className={styles.header}>
                <p>
                  Abroad MBBS Admission <span>Experts</span>
                </p>
                <h1>Build Your Career with Admission Hands</h1>
                <p>
                  We are dedicated to providing exceptional guidance to MBBS aspirants, ensuring they gain admission to the top medical colleges in India and abroad.
                </p>
              </div>

              {/* Buttons */}
              <div className={styles.buttonGroup}>
                <Link href="/university-overview">
                  <span className={styles.primaryBtn}>
                    University Overview  <IoIosArrowRoundForward size={40} />
                  </span>
                </Link>
                <div className={styles.videoBtn}>
                  <a
                    href="https://www.youtube.com/watch?v=3nQNiWdeH2Q"
                    className={styles.playIcon}
                  >
                    <i className={styles.iconPlay}></i>
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=3nQNiWdeH2Q"
                    className={styles.secondaryBtn}
                  >
                    See How To Apply <IoIosArrowRoundForward size={40} />
                  </a>
                </div>
              </div>



              {/* User Images */}
              <div className={styles.userSection}>
                <div className={styles.userImages}>
                  <Image
                    src="/img/hero/hero-user-1.jpg"
                    alt="User 1"
                    width={50}
                    height={50}
                  />
                  <Image
                    src="/img/hero/hero-user-2.jpg"
                    alt="User 2"
                    width={50}
                    height={50}
                  />
                  <Image
                    src="/img/hero/hero-user-3.jpg"
                    alt="User 3"
                    width={50}
                    height={50}
                  />
                  <Image
                    src="/img/hero/hero-user-4.jpg"
                    alt="User 4"
                    width={50}
                    height={50}
                  />
                </div>
                <div className={styles.userCount}>
                  <h2>
                    <span className={styles.counter}>1300+</span>
                  </h2>
                  <p>Students Admission in Abroad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
