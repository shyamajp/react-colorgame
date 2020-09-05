import "../index.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header";
import Game from "./Game";
import Footer from "./Footer";
import Settings from "./Settings";
import About from "./About";

function App() {
  return (
    <div id="app">
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <div id="content" className="ui grid container">
          <Route exact path="/">
            <Game />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
