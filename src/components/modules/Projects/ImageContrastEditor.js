import React from "react";
import "../Button.css";
import "./Projects.css";
import { Button } from "../../../components/modules/Button";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import contrastImg from "../../../resources/photos/myProjects/contrast.webp";

export const ImageContrastEditor = () => {
  return (
    <div className="Project-Element-Container" data-value="96">
      <div className="Project-Element-Child">
        <LazyLoadImage
          className="project-image"
          alt={"Image Contrast Editor"}
          height={"100%"}
          width={"100%"}
          src={contrastImg} // use normal <img> attributes as props
          effect="blur"
          delayTime={800}
        />
      </div>
      <div className="Project-Element-Child">
        <h5>
          Image Contrast Editor
          <br />
          <span className="badge badge-primary badge-sm">2022</span>
          <span className="badge badge-primary badge-sm">C#</span>
          <span className="badge badge-primary badge-sm">asm</span>
          <span className="badge badge-primary badge-sm">wpf</span>
          <span className="badge badge-primary badge-sm">xml</span>
        </h5>
        <p className="myProjectDescription">
          The foremost goal of this project was to implement an algorithm in
          both assembly and C# so as to compare their execution times. This
          desktop application allowed user to change image contrast according to
          a mathematical pattern and contrast value factor chosen by the user.
        </p>
        <a
          className="noLinkLight"
          href="https://github.com/marekkawalski/ChangeImageContrast"
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
