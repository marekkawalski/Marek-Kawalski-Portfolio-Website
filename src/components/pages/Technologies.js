import React from "react";
import "./Technologies.css";
import "../../resources/fontawesome-free-5.15.4-web/fontawesome-free-5.15.4-web/css/all.min.css";
function Technologies() {
  return (
    <>
      <section id="TechnologySummary" className="sectionSpace2">
        <div className="aboutTechnology">
          <h2>Technologies</h2>
          <div className="text-wrapper">
            <p>
              When it comes to developing apps, I would rather stick to back-end
              development. Nevertheless, if needed or from time to time, I am
              capable of creating some usable front-end as well.
            </p>
          </div>
        </div>
        <div className="projectsWrapper">
          <div className="box"></div>
          <div className="container">
            <div className="content">
              <div className="columns">
                <div className="column">
                  <i className="fas fa-code myIcon"></i>
                  <h4 className="">Back-end</h4>
                  <p>
                    I like logical thinking and creating apps which can help
                    people in some way.
                  </p>

                  <p className="list-title ">Languages I speak:</p>
                  <p>Java, Kotlin, C++, C#</p>
                  <p className="list-title ">Languages I know a little bit:</p>
                  <p> Swift</p>
                  <p className="list-title">Dev Tools:</p>
                  <ul>
                    <li>Visual Studio</li>
                    <li>Visual Studio Code</li>
                    <li>IntelliJ</li>
                    <li>Netbeans</li>
                    <li>XCode</li>
                    <li>Android Studio</li>
                  </ul>
                </div>

                <div className="column">
                  <i className="fas fa-pencil-ruler myIcon"></i>
                  <h4>Front-end</h4>
                  <p>I am keen on using css to create interesting designs.</p>
                  <p className="list-title ">Languages I speak:</p>
                  <p>HTML, CSS, JavaScript</p>
                  <p className="list-title ">Frameworks:</p>
                  <p>React.js</p>
                  <p className="list-title">Dev Tools:</p>
                  <ul>
                    <li>Visual Studio Code</li>
                    <li>Codepen</li>
                    <li>Chrome dev tools</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Technologies;
