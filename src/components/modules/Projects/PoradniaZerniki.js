import React from "react";
import "../Button.css";
import "./Projects.css";
import { Button } from "../../../components/modules/Button";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import poradniaZerniki from "../../../resources/photos/myProjects/poradniaImg.webp";

export const PoradniaZerniki = () => {
  return (
    <div className="Project-Element-Container" data-value="99">
      <div className="Project-Element-Child">
        <LazyLoadImage
          className="project-image"
          alt={"Medical Clinic Website"}
          height={"100%"}
          width={"100%"}
          src={poradniaZerniki}
          effect="blur"
          delayTime={800}
        />
      </div>
      <div className="Project-Element-Child">
        <h5>
          Medical Clinic Website
          <br />
          <span className="badge badge-primary badge-sm">2021</span>
          <span className="badge badge-primary badge-sm">html, css, js</span>
          <span className="badge badge-primary badge-sm">PHP</span>
        </h5>
        <p className="myProjectDescription">
          The target of this project was to create new website for
          <a
            className="noLinkLight"
            href="https://poradniazerniki.pl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <em>poradniazerniki.pl</em>.
          </a>{" "}
          My intention was to make the website as user-friendly as possible. The
          website was build using html, css, js, PHP. There were no frameworks
          used. PHP was responsible for all routing.
        </p>
        <div className="btn-learn-more">
          <a
            className="noLinkLight"
            href="https://poradniazerniki.pl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button buttonStyle="btn--outline">
              <i className="fas fa-external-link-alt"></i> go to website
            </Button>
          </a>{" "}
        </div>
      </div>
    </div>
  );
};
