import React from "react";
import "../Button.css";
import "./Projects.css";
import { Button } from "../../../components/modules/Button";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import snakeImg from "../../../resources/photos/myProjects/snake.webp";

export const SnakeGame = () => {
  return (
    <div className="Project-Element-Container" data-value="100">
      <div className="Project-Element-Child">
        <LazyLoadImage
          className="project-image"
          alt={"snake game"}
          height={"100%"}
          width={"100%"}
          src={snakeImg} // use normal <img> attributes as props
          effect="blur"
          delayTime={800}
        />
      </div>
      <div className="Project-Element-Child">
        <h5>
          Snake Game
          <br />
          <span className="badge badge-primary badge-sm">2021</span>
          <span className="badge badge-primary badge-sm">C++</span>
          <span className="badge badge-primary badge-sm">SFML</span>
        </h5>
        <p className="myProjectDescription">
          The idea of this project was to create an unorthodox implementation of
          classic snake game. Besides the usual staff, there are bombs which
          appear out of the blue and players can shoot to both them and fruits
          which appear randomly on the screen.
        </p>
        <a
          className="noLinkLight"
          href="https://github.com/marekkawalski/Snake-Game-Marek-Kawalski"
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
