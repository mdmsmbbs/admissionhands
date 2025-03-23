import React from 'react';
import { FaPlay } from 'react-icons/fa';
import styles from './VideoArea.module.scss';

const VideoArea = () => {
  return (
    <div className={styles.videoArea}>
      <div className={styles.container}>
        <div className={styles.videoImage}>
          <img src="/img/video/admission.png" alt="video-image" />
          <div className={styles.videoBtn}>
            <a className={styles.icon} href="https://www.youtube.com/watch?v=_1N5RzFEXwo" target="_blank" rel="noopener noreferrer">
              <FaPlay />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoArea;
