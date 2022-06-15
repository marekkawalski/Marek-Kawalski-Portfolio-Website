/* eslint-disable no-undef */
import React from "react";
import "./About.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// import programmingImage from "../../resources/photos/aboutMe/programming.webp";
// import hackerImage from "../../resources/photos/aboutMe/hacker.webp";
// import technologyImage from "../../resources/photos/aboutMe/technology.webp";
// import talkingImage from "../../resources/photos/aboutMe/talking.webp";
// import skiingImage from "../../resources/photos/aboutMe/skiing.webp";
// import gymImage from "../../resources/photos/aboutMe/gym.webp";
// import carImage from "../../resources/photos/aboutMe/car.webp";
// import cyclingImage from "../../resources/photos/aboutMe/cycling.webp";

function About() {
  /**Add od remove animation class on image click */
  let imageClicked = false;

  function addClass(id, className) {
    const element = document.getElementById(id);
    if (imageClicked) {
      element.classList.remove(className);
      imageClicked = false;
    } else {
      element.classList.add(className);
      imageClicked = true;
      setTimeout(() => {
        element.classList.remove(className);
        imageClicked = false;
      }, 3000);
    }
  }
  return (
    <>
      <section className="section-features section-paddings" id="About">
        <h2>About me</h2>
        <p className="centered-p">
          I am a person with multiple passions who is determined to self develop
          in as many ways as possible. I believe that hard work is the key to
          success.
        </p>
        {/* <div className="feauture">
          <div className="text-ads">
            <div className="image-container">
              <div className="img">
                <LazyLoadImage
                  alt={"programming"}
                  height={"100%"}
                  width={"100%"}
                  src={programmingImage} // use normal <img> attributes as props
                  effect="blur"
                  id={"programming"}
                  onClick={() => addClass("programming", "vibrate-1")}
                  delayTime={800}
                />
              </div>
            </div>
            <h3>Programming, Coding</h3>
            <div className="about-me-description">
              Programming is my favorite way of personal development. I write
              code very often and I am tickled pink every time it works as
              expected.
            </div>
          </div>
          <div className="text-ads">
            <div className="image-container">
              <div className="img">
                <LazyLoadImage
                  alt={"hacker"}
                  height={"100%"}
                  width={"100%"}
                  src={hackerImage} // use normal <img> attributes as props
                  effect="blur"
                  id={"hacker"}
                  onClick={() => addClass("hacker", "wobble-hor-bottom")}
                  delayTime={800}
                />
              </div>
            </div>
            <h3>Cybersecurity</h3>
            <div className="about-me-description">
              Preventing people from getting hacked is something that I am
              interested in. I especially like testing network safety.
            </div>
          </div>
          <div className="text-ads">
            <div className="image-container">
              <div className="img">
                <LazyLoadImage
                  alt={"tech"}
                  height={"100%"}
                  width={"100%"}
                  src={technologyImage} // use normal <img> attributes as props
                  effect="blur"
                  id={"tech"}
                  onClick={() => addClass("tech", "bounce-top")}
                  delayTime={800}
                />
              </div>
            </div>
            <h3>Technology</h3>
            <div className="about-me-description">
              I am a great fan of new tech and gadgets embedded in cars. I am
              also fond of smartphones and computers.
            </div>
          </div>
          <div className="text-ads">
            <div className="image-container">
              <div className="img">
                <LazyLoadImage
                  alt={"photo-talk"}
                  height={"100%"}
                  width={"100%"}
                  src={talkingImage} // use normal <img> attributes as props
                  effect="blur"
                  id={"photo-talk"}
                  onClick={() => addClass("photo-talk", "heartbeat")}
                  delayTime={800}
                />
              </div>
            </div>
            <h3>English</h3>
            <div className="about-me-description">
              I have been learning English for a long time now. I am keen on
              this language and I like using it.
            </div>
          </div>

          <div className="text-ads">
            <div className="image-container">
              <div className="img">
                <LazyLoadImage
                  alt={"car"}
                  height={"100%"}
                  width={"100%"}
                  src={carImage} // use normal <img> attributes as props
                  effect="blur"
                  id={"car"}
                  onClick={() => addClass("car", "rotate-center")}
                  delayTime={800}
                />
              </div>
            </div>
            <h3>Cars</h3>
            <div className="about-me-description">
              I find modern cars interior and exterior designs riveting. If I
              had a chance, I would test drive all supercars.
            </div>
          </div>
          <div className="text-ads">
            <div className="image-container">
              <div className="img">
                <LazyLoadImage
                  alt={"cycling"}
                  height={"100%"}
                  width={"100%"}
                  src={cyclingImage} // use normal <img> attributes as props
                  effect="blur"
                  id={"cycling"}
                  onClick={() => addClass("cycling", "flip-horizontal-bottom")}
                  delayTime={800}
                />
              </div>
            </div>
            <h3>Cycling</h3>
            <div className="about-me-description">
              I love Cycling. It's one of my favorite ways of spending leisure
              time. Let me know if you wanna go cycling with me.
            </div>
          </div>
          <div className="text-ads">
            <div className="image-container">
              <div className="img">
                <LazyLoadImage
                  alt={"skiing"}
                  height={"100%"}
                  width={"100%"}
                  src={skiingImage} // use normal <img> attributes as props
                  effect="blur"
                  id={"skiing"}
                  onClick={() => addClass("skiing", "flip-2-ver-right-1")}
                  delayTime={800}
                />
              </div>
            </div>
            <h3>Skiing</h3>
            <div className="about-me-description">
              Skiing is my favorite sport. Hurtling down a ski slope makes me
              feel as if I was flying.
            </div>
          </div>
          <div className="text-ads">
            <div className="image-container">
              <div className="img">
                <LazyLoadImage
                  alt={"workout"}
                  height={"100%"}
                  width={"100%"}
                  src={gymImage} // use normal <img> attributes as props
                  effect="blur"
                  id={"gym"}
                  onClick={() => addClass("gym", "kenburns-top")}
                  delayTime={800}
                />
              </div>
            </div>
            <h3>Working Out</h3>
            <div className="about-me-description">
              I work out regularly so as to stay fit and become stronger. It
              rewards me with great satisfaction.
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
}

export default About;
