import React from "react";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import Timeline from "../../../public/Timeline.jpg";
import "../../styles/Hero.css";
export default function Hero() {
  return (
    //hero section
    <div className="hero">
      <header className="head">
        <Image src={Logo} alt="Logo" width={50} height={50} />
        <h1>My bindle</h1>
      </header>
      <div className="section">
        <div className="aspect">
          <h1 className="main-heading">
            <strong>
              Stay Connected <br />
              Stay Social <br />
              Stay You!
            </strong>
          </h1>
          <p className="p-text">
            A place where friendships grow, communities thrive, and moments turn
            into unforgettable experiences. Whether you're looking to reconnect
            with old friends, build new relationships, or share what matters
            most to you – MyBindle is your home on the internet.
          </p>
          <button className="btn">Get Started</button>
        </div>
        <div className="aside">
          <div className="device">
            <h1>new</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
