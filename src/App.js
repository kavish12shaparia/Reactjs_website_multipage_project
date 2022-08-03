import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Solution from "./pages/solution";
import Testimonal from "./pages/testimonal";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>
       
      <Route path="/solution">
        <Solution />
      </Route>

      <Route path="/testimonal">
        <Testimonal />
      </Route>

      <Route path="/portfolio">
        <Portfolio />
      </Route>

      <Route path="/blog">
        <Blog />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
};

export default App;
