import Image from "next/image";
import { FaGlobe, FaTrophy } from "react-icons/fa";
import { GoTrophy } from "react-icons/go";
import styles from "./AboutSection.module.scss";
import { PiGlobeStand } from "react-icons/pi";

const AdmaAbout = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h2>
              <Image
                src="/img/title-shape.svg"
                alt="title shape"
                width={29}
                height={36}
              />
              About Admission Hands
            </h2>
            <p>
              At Adma, we believe in providing an exceptional educational
              experience that prepares students for success in an ever-changing
              world. As a leading institution of higher learning, we are
              committed to excellence.
            </p>
          </div>
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>
                <div className={styles.icon}>
                  <PiGlobeStand size={30}/>
                </div>
                <h3>
                  Our History
                </h3>
              </div>
              <p>
                We strive to provide a transformative and enriching educational
                experience for our students with the best facilities.
              </p>
              <a href="university-overview.html" className={styles.link}>
                University Overview →
              </a>
            </div>
            <div className={styles.card}>
            <div className={styles.cardTitle}>
                <div className={styles.icon}>
                  <GoTrophy size={30}/>
                </div>
                <h3>
                  Our Mission
                </h3>
              </div>
              <p>
                Diversity and inclusivity are integral to our university's
                ethos. We celebrate the richness of our multicultural community.
              </p>
              <a href="program-details.html" className={styles.link}>
                View Our Programs →
              </a>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/img/about-2.jpg"
            alt="about image"
            width={500}
            height={400}
          />
          <div className={styles.shapeThree}>
            <img
              src="/img/shape/shape-3.png"
              alt="shape 3"
              width="auto"
              height="auto"
            />
          </div>
          <div className={styles.shapeFour}>
            <img
              src="/img/shape/shape-4.png"
              alt="shape 4"
              width="auto"
              height="auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmaAbout;
