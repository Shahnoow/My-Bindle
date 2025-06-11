import React from "react";
import styles from "../../styles/Howitwork.module.css";

const HowItWork = () => {
  return (
    <div className={styles.howItWorkContainer}>
      <h2 className={styles.heading}>How to Install Our App</h2>
      <p className={styles.subheading}>
        Getting started is quick and easy! Follow these simple steps to install
        and start using MyBindle today.
      </p>
      <div className={styles.stepsWrapper}>
        <div className={styles.step}>
          <span className={styles.stepNumberRed}>01</span>
          <h3 className={styles.stepTitle}>Download</h3>
          <p className={styles.stepDesc}>Open Play Store or App Store</p>
        </div>
        <div className={styles.step}>
          <span className={styles.stepNumber}>02</span>
          <h3 className={styles.stepTitle}>Install App</h3>
          <p className={styles.stepDesc}>The app will install automatically.</p>
        </div>
        <div className={styles.step}>
          <span className={styles.stepNumber}>03</span>
          <h3 className={styles.stepTitle}>Ready to Use</h3>
          <p className={styles.stepDesc}>
            Sign up or log in to start exploring!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
