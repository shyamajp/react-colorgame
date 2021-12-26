import "../index.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
          <Routes>
            <Route exact path="/" element={<Game />} />
            <Route path="/about" element={<About />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
