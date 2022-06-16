import React from "react";
import { Helmet } from "react-helmet";
import ImageGallery from "react-image-gallery";
import "./Gallery.css";
import Footer from "../modules/Footer";
import img1 from "../../resources/photos/my-gallery/img1.webp";
import img2 from "../../resources/photos/my-gallery/img2.webp";
import img3 from "../../resources/photos/my-gallery/img3.webp";
import img4 from "../../resources/photos/my-gallery/img4.webp";
import img5 from "../../resources/photos/my-gallery/img5.webp";
import img6 from "../../resources/photos/my-gallery/img6.webp";
import img7 from "../../resources/photos/my-gallery/img7.webp";
import img8 from "../../resources/photos/my-gallery/img8.webp";
import img9 from "../../resources/photos/my-gallery/img9.webp";
import img10 from "../../resources/photos/my-gallery/img10.webp";
import img11 from "../../resources/photos/my-gallery/img11.webp";
import img12 from "../../resources/photos/my-gallery/img12.webp";
import img13 from "../../resources/photos/my-gallery/img13.webp";
import img14 from "../../resources/photos/my-gallery/img14.webp";
import img15 from "../../resources/photos/my-gallery/img15.webp";
import img16 from "../../resources/photos/my-gallery/img16.webp";
import img17 from "../../resources/photos/my-gallery/img17.webp";
import img18 from "../../resources/photos/my-gallery/img18.webp";
import img19 from "../../resources/photos/my-gallery/img19.webp";
import img20 from "../../resources/photos/my-gallery/img20.webp";
import img21 from "../../resources/photos/my-gallery/img21.webp";
import img22 from "../../resources/photos/my-gallery/img22.webp";
import img23 from "../../resources/photos/my-gallery/img23.webp";
import img24 from "../../resources/photos/my-gallery/img24.webp";
import img25 from "../../resources/photos/my-gallery/img25.webp";
import img26 from "../../resources/photos/my-gallery/img26.webp";
import img27 from "../../resources/photos/my-gallery/img27.webp";
import img28 from "../../resources/photos/my-gallery/img28.webp";
import img29 from "../../resources/photos/my-gallery/img29.webp";
import img30 from "../../resources/photos/my-gallery/img30.webp";
import img31 from "../../resources/photos/my-gallery/img31.webp";
import img32 from "../../resources/photos/my-gallery/img32.webp";
function gallery() {
  const images = [
    {
      original: img1,
      thumbnail: img1,
    },
    {
      original: img2,
      thumbnail: img2,
    },
    {
      original: img3,
      thumbnail: img3,
    },
    {
      original: img4,
      thumbnail: img4,
    },
    {
      original: img5,
      thumbnail: img5,
    },
    {
      original: img6,
      thumbnail: img6,
    },
    {
      original: img7,
      thumbnail: img7,
    },
    {
      original: img8,
      thumbnail: img8,
    },
    {
      original: img9,
      thumbnail: img9,
    },
    {
      original: img10,
      thumbnail: img10,
    },
    {
      original: img11,
      thumbnail: img11,
    },
    {
      original: img12,
      thumbnail: img12,
    },
    {
      original: img13,
      thumbnail: img13,
    },
    {
      original: img14,
      thumbnail: img14,
    },
    {
      original: img15,
      thumbnail: img15,
    },
    {
      original: img16,
      thumbnail: img16,
    },
    {
      original: img17,
      thumbnail: img17,
    },
    {
      original: img18,
      thumbnail: img18,
    },
    {
      original: img19,
      thumbnail: img19,
    },
    {
      original: img20,
      thumbnail: img20,
    },
    {
      original: img21,
      thumbnail: img21,
    },
    {
      original: img22,
      thumbnail: img22,
    },
    {
      original: img23,
      thumbnail: img23,
    },
    {
      original: img24,
      thumbnail: img24,
    },
    {
      original: img25,
      thumbnail: img25,
    },
    {
      original: img26,
      thumbnail: img26,
    },
    {
      original: img27,
      thumbnail: img27,
    },
    {
      original: img28,
      thumbnail: img28,
    },
    {
      original: img29,
      thumbnail: img29,
    },
    {
      original: img30,
      thumbnail: img30,
    },
    {
      original: img31,
      thumbnail: img31,
    },
    {
      original: img32,
      thumbnail: img32,
    },
  ];

  class MyGallery extends React.Component {
    render() {
      return <ImageGallery items={images} />;
    }
  }

  return (
    <>
      <Helmet>
        <title>My Gallery</title>
      </Helmet>
      <section id="Gallery" className="sectionSpace">
        <h2>Gallery</h2>
        <p className="centered-p">
          I am a photography savvy. Below are some of the photos I have taken.
        </p>
        <div className="gallerySummary-wrapper">{new MyGallery().render()}</div>
      </section>
      <Footer />
    </>
  );
}

export default gallery;
