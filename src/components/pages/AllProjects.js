import React from "react";
import { Button } from "../modules/Button";
import { Helmet } from "react-helmet";
import "./ProjectsSummary.css";
import Footer from "../modules/Footer";
import { FuelCostCalculator } from "../modules/Projects/FuelCostCalculator";
import { ImageContrastEditor } from "../modules/Projects/ImageContrastEditor";
import { PolynomialCalculator } from "../modules/Projects/PolynomialCalculator";
import { ArduinoBikeLed } from "../modules/Projects/ArduinoBikeLed";
import { PoradniaZerniki } from "../modules/Projects/PoradniaZerniki";
import { SnakeGame } from "../modules/Projects/SnakeGame";
import { Clinic } from "../modules/Projects/Clinic";
import { NotesRepository } from "../modules/Projects/NotesRepository";

function AllProjects() {
  const orderFunctions = {
    ascendingByValue: (a, b) => a.dataset.value - b.dataset.value,
    descendingByValue: (a, b) => b.dataset.value - a.dataset.value,
  };
  let currentOrder = orderFunctions.ascendingByValue;

  var myArray = [];
  var myItemsChildren = document.getElementsByClassName(
    "Project-Element-Container"
  );
  for (var i = 0; i < myItemsChildren.length; i++) {
    myArray.push(myItemsChildren[i]);
  }

  function order(type) {
    for (var i = 0; i < myItemsChildren.length; i++) {
      myArray.push(myItemsChildren[i]);
    }

    if (type === "asc") {
      currentOrder = orderFunctions.ascendingByValue;
    } else if (type === "desc") {
      currentOrder = orderFunctions.descendingByValue;
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
      <Helmet>
        <title>My Projects</title>
      </Helmet>
      <section id="AllProjects" className="sectionSpace2">
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
          <NotesRepository />
          <Clinic />
          <FuelCostCalculator />
          <ImageContrastEditor />
          <PolynomialCalculator />
          <ArduinoBikeLed />
          <PoradniaZerniki />
          <SnakeGame />
        </div>
      </section>
      <Footer />
    </>
  );
}
export default AllProjects;
