import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Navbar.css";
import "../../../src/App.css";
import logoImage from "../../../src/resources/photos/logo.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const ClickHandler = () => setClick(!click);
  const CloseMobileMenu = () => setClick(false);

  window.onscroll = function () {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  };
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function chooseRandomAnimation() {
    var animationClassName = "";
    var randomValue = getRandomInt(0, 4);
    if (randomValue === 0) {
      animationClassName = "bounce-in-top";
    } else if (randomValue === 1) {
      animationClassName = "puff-in-center";
    } else if (randomValue === 2) {
      animationClassName = "tilt-in-top-1";
    } else if (randomValue === 3) {
      animationClassName = "roll-in-left";
    } else {
      animationClassName = "roll-in-right";
    }
    return animationClassName;
  }
  return (
    <>
      <nav className="navbar sticky ">
        <div className="navbar-container">
          <Link
            smooth
            to="/#Hero-section"
            className="navbar-logo"
            onClick={CloseMobileMenu}
          >
            <img src={logoImage} width="32" height="32" alt="logo"></img>
          </Link>
          <div className="menu-icon" onClick={ClickHandler}>
            <i className={click ? "fa fa-times" : "fa fa-bars"} />
          </div>
          <div className={click ? "nav-menu-subcontainer " : null}>
            <ul
              className={
                click
                  ? `nav-menu active ${chooseRandomAnimation()}`
                  : " nav-menu"
              }
            >
              <li className="nav-item ">
                <Link
                  smooth
                  to="/#Hero-section"
                  className="nav-links link link--thebe nav-links-mobile"
                  onClick={CloseMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth
                  to="/#About"
                  className="nav-links link link--thebe nav-links-mobile"
                  onClick={CloseMobileMenu}
                >
                  About me
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth
                  to="/#TechnologySummary"
                  className="nav-links link link--thebe nav-links-mobile"
                  onClick={CloseMobileMenu}
                >
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth
                  to="/#ProjectsSummary"
                  className="nav-links link link--thebe nav-links-mobile"
                  onClick={CloseMobileMenu}
                >
                  My Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth
                  to="/gallery#Gallery"
                  className="nav-links link link--thebe nav-links-mobile"
                  onClick={CloseMobileMenu}
                >
                  My Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth
                  to="#Footer"
                  className="nav-links link link--thebe nav-links-mobile"
                  onClick={CloseMobileMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="progress-container">
          <div className="progress-bar" id="myBar"></div>
        </div>
      </nav>
      <div></div>
    </>
  );
}

export default Navbar;
