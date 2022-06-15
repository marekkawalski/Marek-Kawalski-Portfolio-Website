import React from "react";
import HeroSection from "./HeroSection";
import About from "./About";
import ProjectsSummary from "./ProjectsSummary";
import GallerySummary from "./GallerySummary";
import Technologies from "./Technologies";
import { Helmet } from "react-helmet";
import Footer from "../modules/Footer";

function Home() {
  return (
    <>
      <Helmet>
        <title>Marek Kawalski Portfolio</title>
      </Helmet>
      <HeroSection />
      {/* <About /> */}
      <Technologies />
      <ProjectsSummary />
      <GallerySummary />
      <Footer />
    </>
  );
}

export default Home;
