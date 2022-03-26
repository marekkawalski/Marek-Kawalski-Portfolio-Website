import React from "react";
import "./ProjectsSummary.css";
import "../../components/modules/Button.css";
import { Button } from "../../components/modules/Button";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import poradniaZerniki from "../../resources/photos/myProjects/poradniaImg.webp";
import snakeImg from "../../resources/photos/myProjects/snake.webp";
import contrastImg from "../../resources/photos/myProjects/contrast.webp";
import polynomialCalculatorImg from "../../resources/photos/myProjects/polynomialCalculator.webp";
import arduinoProject from "../../resources/photos/myProjects/arduinoProject.webp";
import fuelCostCalculator from "../../resources/photos/myProjects/fuelCostCalculator.png";

function ProjectsSummary() {
  const orderFunctions = {
    ascendingByValue: (a, b) => a.dataset.value - b.dataset.value,
    descendingByValue: (a, b) => b.dataset.value - a.dataset.value,
  };
  let currentOrder = orderFunctions.ascendingByValue;

  function order(type) {
    var myItemsChildren = document.getElementsByClassName(
      "Project-Element-Container"
    );
    if (type === "asc") {
      currentOrder = orderFunctions.ascendingByValue;
    } else if (type === "desc") {
      currentOrder = orderFunctions.descendingByValue;
    }

    var myArray = [];
    for (var i = 0; i < myItemsChildren.length; i++) {
      myArray.push(myItemsChildren[i]);
    }
    const ordered = myArray.sort(currentOrder);

    for (var j = 0; j < ordered.length - 1; j++) {
      ordered[j].style =
        "border-bottom: 1px solid rgb(230, 236, 248);padding-bottom: 80px";
    }
    ordered[ordered.length - 1].style =
      "border-bottom: 0px; padding-bottom: 0px";

    ordered.forEach((elem, index) => {
      elem.style.order = index;
    });
  }

  return (
    <>
      <section id="ProjectsSummary" className="sectionSpace2">
        <h2>My Projects</h2>

        <div className="buttons">
          <Button
            className="buttons-children"
            value="asc"
            onClick={() => order("asc")}
            id="asc"
          >
            Newest First
          </Button>
          <Button
            className="buttons-children"
            value="desc"
            onClick={() => order("desc")}
            id="desc"
          >
            Oldest First
          </Button>
        </div>
        <div className="items">
          <div className="Project-Element-Container" data-value="95">
            <div className="Project-Element-Child">
              <LazyLoadImage
                className="project-image"
                alt={"Fuel cost calculator"}
                height={"100%"}
                width={"400px"}
                src={fuelCostCalculator} // use normal <img> attributes as props
                effect="blur"
                delayTime={800}
              />
            </div>
            <div className="Project-Element-Child">
              <h5>
                Fuel cost calculator{" "}
                <span className="badge badge-primary badge-sm">2022</span>
                <span className="badge badge-primary badge-sm">kotlin</span>
                <span className="badge badge-primary badge-sm">xml</span>
              </h5>
              <p className="myProjectDescription">
                {" "}
                The goal of this project was to create an app that can solve a
                real life problem, namely how much should you charge your
                passengers for fuel when you are on holidays, you are their
                driver and each passenger covers different distances?
              </p>
              <a
                className="noLinkLight"
                href="https://github.com/marekkawalski/FuelCostCalculator"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <Button buttonStyle="btn--outline">View on github</Button>
              </a>
            </div>
          </div>
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
                Image Contrast Editor{" "}
                <span className="badge badge-primary badge-sm">2022</span>
                <span className="badge badge-primary badge-sm">C#</span>
                <span className="badge badge-primary badge-sm">asm</span>
              </h5>
              <p className="myProjectDescription">
                The foremost goal of this project was to implement an algorithm
                in both assembly and C# so as to compare their execution times.
                This desktop application allowed user to change image contrast
                according to a mathematical pattern and contrast value factor
                chosen by the user.
              </p>
              <a
                className="noLinkLight"
                href="https://github.com/marekkawalski/ChangeImageContrast"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <Button buttonStyle="btn--outline">View on github</Button>
              </a>
            </div>
          </div>
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
                Polynomial Calculator{" "}
                <span className="badge badge-primary badge-sm">2022</span>
                <span className="badge badge-primary badge-sm">Java</span>
                <span className="badge badge-primary badge-sm">html, css</span>
                <span className="badge badge-primary badge-sm">JPA</span>
              </h5>
              <p className="myProjectDescription">
                The purpose of this project was to learn good programming
                practices and become familiar with Java syntax. This web
                application was a polynomial calculator which stores results of
                calculations in both servlet context and a database.
              </p>
              <a
                className="noLinkLight"
                href="https://github.com/marekkawalski/Polynomial-Calculator"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <Button buttonStyle="btn--outline">View on github</Button>
              </a>
            </div>
          </div>
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
                Bile LED light{" "}
                <span className="badge badge-primary badge-sm">2021</span>
                <span className="badge badge-primary badge-sm">C++</span>
                <span className="badge badge-primary badge-sm">Arduino</span>
              </h5>
              <p className="myProjectDescription">
                The aim of this project was to create a bike LED light with a
                small upgrade, namely a dusk sensor which automatically changes
                lighting modes.
              </p>
              <div className="btn-learn-more">
                <a
                  className="noLinkLight"
                  href="https://github.com/marekkawalski/BikeLEDWithArduino"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <Button buttonStyle="btn--outline">View on github</Button>
                </a>
              </div>
            </div>
          </div>
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
                Medical Clinic Website{" "}
                <span className="badge badge-primary badge-sm">2021</span>
                <span className="badge badge-primary badge-sm">
                  html, css, js, PHP
                </span>
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
                My intention was to make the website as user-friendly as
                possible. The website was build using html, css, js, PHP. There
                were no frameworks used. PHP was responsible for all routing.
              </p>
              <div className="btn-learn-more">
                <a
                  className="noLinkLight"
                  href="https://poradniazerniki.pl/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button buttonStyle="btn--outline">poradniazerniki.pl</Button>
                </a>{" "}
              </div>
            </div>
          </div>
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
                Snake Game{" "}
                <span className="badge badge-primary badge-sm">2021</span>
                <span className="badge badge-primary badge-sm">C++</span>
                <span className="badge badge-primary badge-sm">SFML</span>
              </h5>
              <p className="myProjectDescription">
                The idea of this project was to create an unorthodox
                implementation of classic snake game. Besides the usual staff,
                there are bombs which appear out of the blue and players can
                shoot to both them and fruits which appear randomly on the
                screen.
              </p>
              <a
                className="noLinkLight"
                href="https://github.com/marekkawalski/Snake-Game-Marek-Kawalski"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <Button buttonStyle="btn--outline">View on github</Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default ProjectsSummary;
