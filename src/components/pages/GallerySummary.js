import React, { Component } from "react";
import "./GallerySummary.css";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import sunsetImageSea from "../../resources/photos/photo-summary/gardaLake.webp";
import sunsetAtGardaLake from "../../resources/photos/photo-summary/sunsetAtBaltic.webp";
import sunsetAtGardaLakeV2 from "../../resources/photos/photo-summary/sunsetGardaLakeV2.webp";
import beeImg from "../../resources/photos/photo-summary/bee.webp";
import sunsetMoscow from "../../resources/photos/photo-summary/Moscow.webp";
import alpsImage from "../../resources/photos/photo-summary/theAlps.webp";
import moldovaSunset from "../../resources/photos/photo-summary/moldovaSunset.webp";
import sunriseBalticSea from "../../resources/photos/photo-summary/sunriseBalticSea.webp";

const images = [
  sunsetImageSea,
  sunsetAtGardaLake,
  sunsetAtGardaLakeV2,
  beeImg,
  sunsetMoscow,
  alpsImage,
  moldovaSunset,
  sunriseBalticSea,
];
const captions = [
  "sunset at Baltic sea",
  "sunset at Garda lake",
  "sunset at Garda lake",
  "a bee",
  "sunset in Moscow",
  "Image of the Alps",
  "Sunset in Moldova",
  "Sunrise at Baltic sea",
];
export default class GallerySummary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <>
        <section id="GallerySummary" className="sectionSpace2">
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length,
                })
              }
              imageCaption={captions[photoIndex]}
            />
          )}
          <h2>My gallery</h2>
          <p className="centered-p">
            I am a photography savvy. Below are some of the photos I have taken.
          </p>
          <div className="photo-container-parent">
            <div className="photo-container">
              <div className="img">
                <LazyLoadImage
                  alt={"skiing"}
                  height={"100%"}
                  width={"100%"}
                  src={sunsetImageSea} // use normal <img> attributes as props
                  effect="blur"
                  onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
                  delayTime={800}
                />
              </div>
            </div>
            <div className="photo-container">
              <div className="img">
                <LazyLoadImage
                  alt={"skiing"}
                  height={"100%"}
                  width={"100%"}
                  src={sunsetAtGardaLake} // use normal <img> attributes as props
                  effect="blur"
                  onClick={() => this.setState({ isOpen: true, photoIndex: 1 })}
                  delayTime={800}
                />
              </div>
            </div>
            <div className="photo-container">
              <div className="img">
                <LazyLoadImage
                  alt={"skiing"}
                  height={"100%"}
                  width={"100%"}
                  src={sunsetAtGardaLakeV2} // use normal <img> attributes as props
                  effect="blur"
                  onClick={() => this.setState({ isOpen: true, photoIndex: 2 })}
                  delayTime={800}
                />
              </div>
            </div>
            <div className="photo-container">
              <div className="img">
                <LazyLoadImage
                  alt={"skiing"}
                  height={"100%"}
                  width={"100%"}
                  src={beeImg} // use normal <img> attributes as props
                  effect="blur"
                  onClick={() => this.setState({ isOpen: true, photoIndex: 3 })}
                  delayTime={800}
                />
              </div>
            </div>
            <div className="photo-container">
              <div className="img">
                <LazyLoadImage
                  alt={"skiing"}
                  height={"100%"}
                  width={"100%"}
                  src={sunsetMoscow} // use normal <img> attributes as props
                  effect="blur"
                  onClick={() => this.setState({ isOpen: true, photoIndex: 4 })}
                  delayTime={800}
                />
              </div>
            </div>
            <div className="photo-container">
              <div className="img">
                <LazyLoadImage
                  alt={"skiing"}
                  height={"100%"}
                  width={"100%"}
                  src={alpsImage} // use normal <img> attributes as props
                  effect="blur"
                  onClick={() => this.setState({ isOpen: true, photoIndex: 5 })}
                  delayTime={800}
                />
              </div>
            </div>
            <div className="photo-container">
              <div className="img">
                <LazyLoadImage
                  alt={"skiing"}
                  height={"100%"}
                  width={"100%"}
                  src={moldovaSunset} // use normal <img> attributes as props
                  effect="blur"
                  onClick={() => this.setState({ isOpen: true, photoIndex: 6 })}
                  delayTime={800}
                />
              </div>
            </div>
            <div className="photo-container">
              <div className="img">
                <LazyLoadImage
                  alt={"skiing"}
                  width={"100%"}
                  height={"100%"}
                  src={sunriseBalticSea} // use normal <img> attributes as props
                  effect="blur"
                  onClick={() => this.setState({ isOpen: true, photoIndex: 7 })}
                  delayTime={800}
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
