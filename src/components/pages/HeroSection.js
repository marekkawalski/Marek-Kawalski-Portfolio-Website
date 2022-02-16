import React from "react";
import "./HeroSection.css";
import techVideo from "../../resources/videos/background.mp4";

function HeroSection() {
  return (
    <div className="hero-section-container" id="Hero-section">
      <video src={techVideo} autoPlay loop muted />
      <div className="hero-text-box">
        <h1 className="scale-in-center ">Hi! I am Marek!</h1>
        <div className="hero-introduce">
          <div className="scale-in-top">
            I am an IT student at Silesian University of Technology.
          </div>
          <br />
          <div className="scale-in-top2">Let me introduce myself . . .</div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
