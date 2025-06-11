import React from "react";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import Timeline from "../../../public/Timeline.jpg";
import styles from "../../styles/Hero.module.css";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaCircle } from "react-icons/fa";
export default function Hero() {
  return (
    <div className={styles.hero}>
      <header className={styles.head}>
        <Image src={Logo} alt="Logo" width={50} height={50} />
        <h1>My bindle</h1>
      </header>
      <div className={styles.section}>
        <div className={styles.aspect}>
          <h1 className={styles.mainHeading}>
            <strong>
              Stay Connected <br />
              Stay Social <br />
              Stay You!
            </strong>
          </h1>
          <p className={styles.pText}>
            A place where friendships grow, communities thrive, and moments turn
            into unforgettable experiences. Whether you're looking to reconnect
            with old friends, build new relationships, or share what matters
            most to you – MyBindle is your home on the internet.
          </p>
          <button className={styles.btn}>Get Started</button>
        </div>
        <div className={styles.aside}>
          <div className={styles.device}>
            <FaCircle className={styles.camera_icon} />
            <Image
              className={styles.timeline_img}
              src={Timeline}
              alt="Timeline"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
