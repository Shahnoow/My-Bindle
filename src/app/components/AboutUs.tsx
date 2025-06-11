"use client";
import React from "react";
import Image from "next/image";
import styles from "../../styles/Aboutus.module.css";
// import AboutImage from "../../../public/aboutus.PNG";

function AboutUs() {
  return (
    <main className={styles.aboutMain}>
      <section className={styles.container}>
        <div className={styles.aspect}>
          <Image
            src="/aboutus.jpg"
            alt="App showcase"
            className={styles.image}
            width={500}
            height={500}
            priority
          />
        </div>
        <div className={styles.aside}>
          <h2>Where Every Click Sparks a Connection!</h2>
          <p>
            A small act of kindness today can create a lifetime of impact for
            someone in need. Give from the heart and change a life!
          </p>
          <div className={styles.cardList}>
            <div className={styles.card}>
              <div>
                <h4>🎥 Short Videos & Reels</h4>
                <p>
                  Share engaging, bite-sized content that keeps everyone
                  entertained.
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div>
                <h4>🔔 Smart Notifications</h4>
                <p>Stay updated on what matters without the noise.</p>
              </div>
            </div>
            <div className={styles.card}>
              <div>
                <h4>👥 Interest-Based Communities</h4>
                <p>Join groups and discussions that match your passion.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutUs;
