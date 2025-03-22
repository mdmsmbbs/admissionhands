import Image from 'next/image'; // Use Next.js Image component for optimization
import styles from './Facilities.module.scss'; // Import custom styles

const Facilities = () => {
  return (
    <div className={styles.facilitiesArea}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.imageContainer}>
            <div className={styles.facilitiesImage}>
              <Image src="/img/facilities/facilities-3.png" alt="facilities-image" width={500} height={300} />
              <div className={styles.image2}>
                <Image src="/img/facilities/facilities-4.png" alt="facilities-image" width={500} height={300} />
              </div>
              <div className={styles.shape4}>
                <Image src="/img/shape/shape-4.png" alt="" width={50} height={50} />
              </div>
              <div className={styles.shape5}>
                <Image src="/img/shape/shape-5.png" alt="" width={50} height={50} />
              </div>
              <div className={styles.shape6}>
                <Image src="/img/shape/shape-3.png" alt="" width={50} height={50} />
              </div>
            </div>
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.facilitiesContent}>
              <div className={styles.title}>
                <h2>Our Campus Has Best Facilities For Our Students</h2>
                <p>
                  We are proud of our alumni network, which spans across industries and continents. Our graduates are equipped with the skills, values, knowledge, and a drive to excel in their chosen fields and make a positive impact on society. As an Adma graduate.
                </p>
              </div>
              <div className={styles.facilitiesInfo}>
                <h3>
                  <span>01.</span> Best Computer Labs
                </h3>
                <p>Computer labs equipped with computers, printers, and software are available for students to work on assignments.</p>
              </div>
              <div className={styles.facilitiesInfo}>
                <h3>
                  <span>02.</span> Performing Arts Centers
                </h3>
                <p>Universities with performing arts programs often have dedicated facilities such as theaters, concert halls, and rehearsal spaces.</p>
              </div>
              <div className={styles.applicationBtn}>
                <a href="application.html">Application Form</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
