import React from "react";
import "../Button.css";
import "./Projects.css";
import { Button } from "../Button";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import arduinoProject from "../../../resources/photos/myProjects/arduinoProject.webp";

export const ArduinoBikeLed = () => {
  return (
    <div className="Project-Element-Container" data-value="98">
      <div className="Project-Element-Child">
        <LazyLoadImage
          className="project-image"
          alt={"Bile LED light"}
          height={"100%"}
          width={"100%"}
          src={arduinoProject} // use normal <img> attributes as props
          effect="blur"
          delayTime={800}
        />
      </div>
      <div className="Project-Element-Child">
        <h5>
          Bile LED light
          <br />
          <span className="badge badge-primary badge-sm">2021</span>
          <span className="badge badge-primary badge-sm">C++</span>
          <span className="badge badge-primary badge-sm">Arduino</span>
        </h5>
        <p className="myProjectDescription">
          The aim of this project was to create a bike LED light with a small
          upgrade, namely a dusk sensor which automatically changes lighting
          modes.
        </p>
        <div className="btn-learn-more">
          <a
            className="noLinkLight"
            href="https://github.com/marekkawalski/BikeLEDWithArduino"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <Button buttonStyle="btn--outline">
              <i className="fab fa-github"></i> View on github
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
