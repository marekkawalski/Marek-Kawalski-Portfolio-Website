import smoothscroll from "smoothscroll-polyfill";
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AllProjects from "./components/pages/AllProjects";

import Navbar from "./components/modules/Navbar";
import NotFound from "./components/modules/NotFound";

import Home from "./components/pages/Home";
import Gallery from "./components/pages/Gallery";

window.__forceSmoothScrollPolyfill__ = true;

function App() {
  smoothscroll.polyfill();

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/allProjects" element={<AllProjects/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
