import Image from "next/image";
import styles from "../../styles/Footer.module.css";
import phone1 from "../../../public/footer2.jpg";
import phone2 from "../../../public/footer1.jpg";
import playstore from "../../../public/playstore.png";
import appstore from "../../../public/app-store.png";

import { FaApple, FaGooglePlay } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className={styles.heroSection}>
      <div className={styles.aspect}>
        <div className={styles.textContent}>
          <h2 className={styles.heading}>
            Join the Fun – Download <br /> MyBindle Now!
          </h2>
          <p className={styles.description}>
            Your Social Network, Your Way Download MyBindle Now and Be a Part of
            a Community That’s Always Evolving!
          </p>
          <div className={styles.btn}>
            <div className={styles.buttonGroup}>
              <a href="#" className={styles.storeButton}>
                <Image src={appstore} alt="AppStore" width={30} />
                <div className={styles.textGroup}>
                  <h4>Download on the</h4>
                  <h2>App Store</h2>
                </div>
              </a>
            </div>
            <div className={styles.buttonGroup}>
              <a href="#" className={styles.storeButton}>
                <Image src={playstore} alt="PlayStore" width={24} />
                <div className={styles.textGroup}>
                  <h4>Get it on</h4>
                  <h2>Google Play</h2>
                </div>
              </a>
            </div>
          </div>
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
    </footer>
  );
};

export default Footer;
