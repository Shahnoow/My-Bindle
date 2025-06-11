"use client";

import Image from "next/image";
import styles from "../../styles/DonationSection.module.css";
import phone1 from "../../../public/iphone1.jpg";
import phone2 from "../../../public/iphone2.jpg";

export default function DonationHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.aspect}>
        <div className={styles.textContent}>
          <h2 className={styles.heading}>
            Be the Reason <br />
            Someone Smiles Today!
          </h2>
          <p className={styles.description}>
            Your generosity can change lives: every donation brings hope,
            support, and a brighter future. Give today and make a difference!
          </p>
          <button className={styles.ctaButton}>Donate Now</button>
        </div>
        <div className={styles.device2}>
          <Image
            src={phone2}
            alt="Thank You Screen"
            className={styles.phone_img2}
          />
        </div>
      </div>
      <div className={styles.aside}>
        <div className={styles.device1}>
          <Image
            src={phone1}
            alt="Payment Options"
            className={styles.phone_img1}
          />
        </div>
      </div>
    </section>
  );
}
