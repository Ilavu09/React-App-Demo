import { React } from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import { ColorContext } from "./Main";

export default function ColorApp() {
  return (
    <>
      <Router>
        <ColorContext>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </ColorContext>
      </Router>
    </>
  );
}
