"use client";

import styles from "../../styles/Services.module.css";

function Services() {
  return (
    <section className={styles.services}>
      <h2 className={styles.heading}>Features That Keep You Hooked!</h2>
      <p className={styles.subheading}>
        Meet, Chat, Share – Anytime, Anywhere!
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>🔥 Seamless Connections</h3>
          <p>
            Stay in touch with friends, family, and like-minded people with just
            a tap.
          </p>
        </div>
        <div className={styles.card}>
          <h3>📸 Share Your Story</h3>
          <p>
            Upload photos, videos, and updates to let the world know what's
            happening in your life.
          </p>
        </div>
        <div className={styles.card}>
          <h3>💬 Real-Time Chat</h3>
          <p>
            Whether it's a DM or a group conversation, connect instantly with
            smooth, lightning-fast messaging.
          </p>
        </div>
        <div className={styles.card}>
          <h3>🔒 Privacy First</h3>
          <p>
            Your data, your control. We prioritize your privacy with world-class
            security.
          </p>
        </div>
        <div className={styles.card}>
          <h3>🌎 Discover & Explore</h3>
          <p>
            Find trending content, join communities, and follow pages that match
            your interests.
          </p>
        </div>
        <div className={styles.card}>
          <h3>💼 Grow Your Business</h3>
          <p>
            Use our platform to market your brand, connect with customers, and
            build meaningful relationships.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
