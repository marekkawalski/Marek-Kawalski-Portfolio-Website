import React from "react";
import "./ProjectsSummary.css";
import { FuelCostCalculator } from "../modules/Projects/FuelCostCalculator";
import { ImageContrastEditor } from "../modules/Projects/ImageContrastEditor";
import { PolynomialCalculator } from "../modules/Projects/PolynomialCalculator";
import { NotesRepository } from "../modules/Projects/NotesRepository";
import { Clinic } from "../modules/Projects/Clinic";
import { Button } from "../modules/Button";
import { HashLink as Link } from "react-router-hash-link";

function ProjectsSummary() {
  const orderFunctions = {
    ascendingByValue: (a, b) => a.dataset.value - b.dataset.value,
    descendingByValue: (a, b) => b.dataset.value - a.dataset.value,
  };
  let currentOrder = orderFunctions.ascendingByValue;

  const myArray = [];
  const myItemsChildren = document.getElementsByClassName(
    "Project-Element-Container"
  );
  for (const element of myItemsChildren) {
    myArray.push(element);
  }

  function order(type) {
    for (const element of myItemsChildren) {
      myArray.push(element);
    }

    if (type === "asc") {
      currentOrder = orderFunctions.ascendingByValue;
    } else if (type === "desc") {
      currentOrder = orderFunctions.descendingByValue;
    }

    const ordered = myArray.sort(currentOrder);

    for (let j = 0; j < ordered.length - 1; j++) {
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
          <NotesRepository />
          <Clinic />
          <FuelCostCalculator />
          <ImageContrastEditor />
          <PolynomialCalculator />
        </div>
        <center id="button-view-all">
          <Link
            smooth
            to="/allProjects#AllProjects"
            className="noLinkLight link-view-more"
          >
            <Button>All Projects</Button>
          </Link>
        </center>
      </section>
    </>
  );
}
export default ProjectsSummary;
