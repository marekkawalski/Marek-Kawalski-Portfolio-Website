import smoothscroll from "smoothscroll-polyfill";
import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
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
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/allProjects" component={AllProjects} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
