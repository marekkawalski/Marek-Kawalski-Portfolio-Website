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
              I am a technology savvy, thus I am fond of new features and new
              solutions.
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
                  <p className="list-title ">Frameworks:</p>
                  <p>ASP.NET Core</p>
                  <p className="list-title">Dev Tools:</p>
                  <ul>
                    <li>Visual Studio 2022</li>
                    <li>Visual Studio Code</li>
                    <li>IntelliJ</li>
                    <li>Android Studio</li>
                    <li>Netbeans</li>
                    <li>XCode</li>
                  </ul>
                </div>

                <div className="column">
                  <i className="fas fa-pencil-ruler myIcon"></i>
                  <h4>Front-end</h4>
                  <p>I am keen on using css to create interesting designs.</p>
                  <p className="list-title ">Languages I speak:</p>
                  <p>HTML, CSS, JavaScript</p>
                  <p className="list-title ">Frameworks:</p>
                  <ul>
                    <li>React.js</li>
                    <li>Blazor</li>
                  </ul>
                  <p className="list-title">Dev Tools:</p>
                  <ul>
                    <li>Visual Studio 2022</li>
                    <li>Visual Studio Code</li>
                    <li>Codepen</li>
                    <li>Chrome dev tools</li>
                  </ul>
                </div>
              </div>
              <div className="column">
                <i className="fas fa-laptop-code myIcon"></i>
                <h4>Other</h4>
                <p className="list-title ">Operating systems:</p>
                <ul>
                  <li>Windows</li>
                  <li>Linux</li>
                  <li>Android</li>
                  <li>IOS, IPadOS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Technologies;
