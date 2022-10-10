import React from "react";
import "../../styles/AboutUs1.css";
import Tilt from "react-parallax-tilt";
import bg2 from "./bg2.mp4";
import bg2_1 from "./bg2_1.webm";

const AboutUs = () => {
  return (
    <div className="about_us_main">
      <video id="bgvid" className="vid_about_us" playsinline autoPlay muted loop>
        <source src={bg2} type="video/mp4" className="sourcee" />
        <source src={bg2_1} type="video/webm" className="sourcee" />
      </video>

      <Tilt
        className="parallax_effect"
        glareMaxOpacity={0.9}
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        perspective={800}
        gyroscope={true}
        transitionSpeed={1000}
      >
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
      </Tilt>
    </div>
  );
};

export default AboutUs;
