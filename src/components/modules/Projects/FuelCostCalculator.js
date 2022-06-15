import React from "react";
import "../Button.css";
import "./Projects.css";
import { Button } from "../Button";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import fuelCostCalculator from "../../../resources/photos/myProjects/fuelCostCalculator.png";

export const FuelCostCalculator = () => {
  return (
    <div className="Project-Element-Container" data-value="95">
      <div className="Project-Element-Child">
        <LazyLoadImage
          className="project-image vertical-image"
          alt={"Fuel cost calculator"}
          src={fuelCostCalculator} // use normal <img> attributes as props
          effect="blur"
          delayTime={800}
        />
      </div>
      <div className="Project-Element-Child">
        <h5>
          Fuel cost calculator
          <br />
          <span className="badge badge-primary badge-sm">2022</span>
          <span className="badge badge-primary badge-sm">kotlin</span>
          <span className="badge badge-primary badge-sm">xml</span>
          <span className="badge badge-primary badge-sm">Android</span>
        </h5>
        <p className="myProjectDescription">
          {" "}
          The goal of this project was to create an app that can solve a real
          life problem, namely how much should you charge your passengers for
          fuel when you are on holidays, you are their driver and each passenger
          covers different distances?
        </p>
        <a
          className="noLinkLight"
          href="https://github.com/marekkawalski/FuelCostCalculator"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <Button buttonStyle="btn--outline">
            <i className="fab fa-github"></i> View on github
          </Button>
        </a>
        <a
          className="noLinkLight"
          href="https://play.google.com/store/apps/details?id=com.marekkawalski.fuelcostcalculator"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <Button buttonStyle="btn">
            <i className="fab fa-google-play"></i> Google Play
          </Button>
        </a>
      </div>
    </div>
  );
};
