import React from "react";
import "./animations.css";

function animations() {
  return (
    <>
      (
      <div className="coding-wrapper">
        <div className="loader-container">
          <div className="group-1">
            <div className="line line1">
              <div className="dash dash-1 exp-40 div"></div>
              <div className="dash dash-2 exp-70 class-name"></div>
              <div className="dash dash-3 exp-110 class"></div>
              <div className="dash dash-4 exp-70 class"></div>
            </div>
            <div className="line line2">
              <div className="dash dash-1 exp-40 div"></div>
              <div className="dash dash-2 exp-70 class-name"></div>
              <div className="dash dash-3 exp-90 class"></div>
            </div>
            <div className="line line3">
              <div className="dash dash-1 exp-300 par"></div>
            </div>
            <div className="line line4">
              <div className="dash dash-1 exp-200 par"></div>
            </div>
            <div className="line line5">
              <div className="dash dash-1 exp-40 div"></div>
            </div>
            <div className="line line6">
              <div className="dash dash-1 exp-40 div"></div>
            </div>
          </div>

          <div className="group-2">
            <div className="line line1">
              <div className="dash dash-1 div"></div>
              <div className="dash dash-2 class-name"></div>
              <div className="dash dash-3 class"></div>
              <div className="dash dash-4 class"></div>
            </div>
            <div className="line line2">
              <div className="dash dash-1 div"></div>
              <div className="dash dash-2 exp70 class-name"></div>
              <div className="dash dash-3 exp90 class"></div>
            </div>
            <div className="line line3">
              <div className="dash dash-1 par"></div>
            </div>
            <div className="line line4">
              <div className="dash dash-1 par"></div>
            </div>
            <div className="line line5">
              <div className="dash dash-1 div"></div>
            </div>
            <div className="line line6">
              <div className="dash dash-1 div"></div>
            </div>
          </div>
        </div>
      </div>
      {/***************************************************************/}
      <div className="hacker-wrapper">
        <div className="inside-wrapper">
          <div className="person">
            <div className="hood">
              <div className="spects">
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="shoulder">
              <div className="neck"></div>
            </div>
          </div>
          <div className="lap-screen">
            <span className="base"></span>
          </div>
        </div>
      </div>
      {/***************************************************************/}
      <div className="bike-wrapper">
        <div className="bicycle-container">
          <div className="wheel back-wheel">
            <div className="tire"></div>
            <div className="rim"></div>
            <div className="spokes"></div>
            <div className="spokes"></div>
            <div className="hub"></div>
          </div>
          <div className="wheel front-wheel">
            <div className="tire"></div>
            <div className="rim"></div>
            <div className="spokes"></div>
            <div className="spokes"></div>
            <div className="hub"></div>
          </div>
          <div className="gear">
            <div className="gear-red"></div>
            <div className="tube pedal-tube"></div>
            <div className="pedal"></div>
          </div>
          <div className="tube chain-tube"></div>
          <div className="tube seat-tube-back"></div>
          <div className="tube seat-tube-front"></div>
          <div className="tube seat-tube-post"></div>
          <div className="tube top-tube"></div>
          <div className="tube top-handlebar-tube"></div>
          <div className="tube top-handlebar-tube2"></div>
          <div className="tube down-tube"></div>
          <div className="tube head-tube"></div>
          <div className="tube head-tube-post"></div>
          <div className="saddle"></div>
          <div className="handlebars"></div>
        </div>
        <div className="ground-container">
          <div className="ground ground1"></div>
          <div className="ground ground2"></div>
          <div className="ground ground3"></div>
        </div>
      </div>
    </>
  );
}

export default animations;
