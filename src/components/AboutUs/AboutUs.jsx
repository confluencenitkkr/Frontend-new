import React from "react";
import "../../styles/AboutUs1.css";
import Tilt from "react-parallax-tilt";
import bg2 from "./vid 1.mp4";
import bg2_1 from "./vid 1.webm";
import bg from "./bg.gif";

const AboutUs = () => {
  return (
    <div className="about_us_main">
      <video id="bgvid" className="vid_about_us" playsinline autoPlay muted loop>
        <source src={bg2} type="video/mp4" className="sourcee" />
        <source src={bg2_1} type="video/webm" className="sourcee" />
        <source src={bg} type="video/gif" className="sourcee" />
      </video>

      <div id="polina" className="pol">
        <h1 className="h1_text">About Us</h1>
        <p className="p_text">
          Confluence, the annual cultural Festival of NIT Kurukshetra is a
          cultural extravaganza beyond words, beyond description. Confluence is
          the coming together of free spirits, like-minded zealous youth and a
          celebration of culture of true artistic genius. Its urge to deliver
          the maximum is what makes it one of the most awaited cultural
          festival. Team Confluence is a group of clubs - Photog, ELAD, HLAD,
          Colours, Spic, MAD, Sponsy, FineArts, HTC and AVA.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
