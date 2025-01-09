import React from "react";
import "./homepage.css";
import Navbar from "../navbar/Navbar";
import vid from "../../assets/background/vid.mp4";
import { PiArrowRightThin } from "react-icons/pi";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div className="home-container">
      <video
        className="background-video"
        src={vid}
        autoPlay
        loop
        muted
        playsInline
        width={"100%"}
      >
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <Navbar />
        <div className="home-headings">
          <h1>PROGRESSOR CAPITAL</h1>
          <h5>Strategic Capital Advisors & Growth Partners</h5>
          <p>Forging Elite Networks for Visionary Leaders </p>
          <a href=" ">
            <div className="content-cta">
              <div className="content-cta-icon"><MdOutlineKeyboardDoubleArrowRight className="home-arrow" /></div>
              <div className="content-cta-text"><div>Our Expertise</div></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
