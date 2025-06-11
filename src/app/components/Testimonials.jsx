"use client";
import { useState } from "react";
import styles from "../../styles/Testimonials.module.css";

const testimonials = [
  {
    name: "Emily R",
    location: "USA",
    message:
      "This platform changed the way I stay in touch with my friends and family. The interface is smooth, and I love how easy it is to share my moments!",
    image: "/users/emily.jpg",
  },
  {
    name: "Amit K",
    location: "India",
    message:
      "Finally, a social network that understands what I need! The privacy features are a game-changer, and I feel safer sharing my life online.",
    image: "/users/amit.jpg",
  },
  {
    name: "Sophie M",
    location: "UK",
    message:
      "I joined just to explore, but now I can’t imagine my day without it. The real-time chat and engaging communities make every interaction special!",
    image: "/users/sophie.jpg",
  },
  {
    name: "Javier L",
    location: "Spain",
    message:
      "Running my small business has never been easier! This platform helped me connect with customers, promote my products, and grow my brand.",
    image: "/users/javier.jpg",
  },
  {
    name: "Lucas T",
    location: "Brazil",
    message:
      "The perfect blend of fun and functionality! Whether I want to go live, discover trending content, or just catch up with friends, everything is right here!",
    image: "/users/lucas.jpg",
  },
  {
    name: "Nora S",
    location: "Canada",
    message:
      "I’ve tried many social platforms, but this one truly stands out. The experience feels personal, the connections feel real, and every feature just makes sense.",
    image: "/users/nora.jpg",
  },
  // Hidden testimonials
  {
    name: "User A",
    location: "Germany",
    message:
      "This platform brings people closer in the best way possible! From reconnecting with old friends to making new ones, every moment feels valuable.",
    image: "/users/user-a.jpg",
  },
  {
    name: "User B",
    location: "Australia",
    message:
      "A social network that actually listens to its users! The design is sleek, the features are powerful, and the experience is seamless.",
    image: "/users/user-b.jpg",
  },
];

function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 6);

  return (
    <section className={styles.testimonials}>
      <h2 className={styles.heading}>What Our Users Say</h2>
      <div className={styles.grid}>
        {visibleTestimonials.map((t, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.message}>{t.message}</p>
            <div className={styles.user}>
              <img src={t.image} alt={t.name} className={styles.avatar} />
              <div>
                <strong>{t.name}</strong>
                <div className={styles.location}>{t.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className={styles.button} onClick={() => setShowAll(!showAll)}>
        {showAll ? "Show Less" : "See More"}
      </button>
    </section>
  );
}

export default Testimonials;
