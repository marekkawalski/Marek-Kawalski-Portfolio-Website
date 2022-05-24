import React from "react";
import "../Button.css";
import "./Projects.css";
import { Button } from "../../../components/modules/Button";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import fuelCostCalculator from "../../../resources/photos/myProjects/clinic.png";

export const Clinic = () => {
  return (
    <div className="Project-Element-Container" data-value="94">
      <div className="Project-Element-Child">
        <LazyLoadImage
          className="project-image vertical-image"
          alt={"Clinic"}
          src={fuelCostCalculator}
          effect="blur"
          delayTime={800}
        />
      </div>
      <div className="Project-Element-Child">
        <h5>
          Clinic
          <br />
          <span className="badge badge-primary badge-sm">2022</span>
          <span className="badge badge-primary badge-sm">Asp .net Core</span>
          <span className="badge badge-primary badge-sm">
            Entity Framework Core
          </span>
          <span className="badge badge-primary badge-sm">Blazor</span>
          <span className="badge badge-primary badge-sm">C#</span>
          <span className="badge badge-primary badge-sm">html, css</span>
          <span className="badge badge-primary badge-sm">MsSQL</span>
          <span className="badge badge-primary badge-sm">Docker</span>
          <span className="badge badge-primary badge-sm">Azure</span>
        </h5>
        <p className="myProjectDescription">
          {" "}
          System to manage medical clinic. It provides user with various
          functionality based on their role assigned by an administrator. The
          purpose of this application is to provide medical clinic with a
          complex system which allows to handle patient appointments and
          laboratory examinations.
        </p>
        <a
          className="noLinkLight"
          href="https://github.com/BrotherhoodOfTheMagesTower/clinic"
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
          href="https://thebestclinicsystems.azurewebsites.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>
            <i className="fas fa-external-link-alt"></i> go to website
          </Button>
        </a>{" "}
      </div>
    </div>
  );
};
