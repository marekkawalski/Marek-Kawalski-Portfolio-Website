import React from "react";
import "../Button.css";
import "./Projects.css";
import { Button } from "../../../components/modules/Button";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import polynomialCalculatorImg from "../../../resources/photos/myProjects/polynomialCalculator.webp";

export const PolynomialCalculator = () => {
  return (
    <div className="Project-Element-Container" data-value="97">
      <div className="Project-Element-Child">
        <LazyLoadImage
          className="project-image"
          alt={"Polynomial Calculator"}
          height={"100%"}
          width={"100%"}
          src={polynomialCalculatorImg} // use normal <img> attributes as props
          effect="blur"
          delayTime={800}
        />
      </div>
      <div className="Project-Element-Child">
        <h5>
          Polynomial calculator
          <br />
          <span className="badge badge-primary badge-sm">2022</span>
          <span className="badge badge-primary badge-sm">Java</span>
          <span className="badge badge-primary badge-sm">html, css</span>
          <span className="badge badge-primary badge-sm">JPA</span>
        </h5>
        <p className="myProjectDescription">
          The purpose of this project was to learn good programming practices
          and become familiar with Java syntax. This web application was a
          polynomial calculator which stores results of calculations in both
          servlet context and a database.
        </p>
        <a
          className="noLinkLight"
          href="https://github.com/marekkawalski/Polynomial-Calculator"
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
  );
};
