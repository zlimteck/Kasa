import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Lodging from "./pages/Lodging/Lodging";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";

export const RouteFile = (
  <React.Fragment>
    <Route path="/" element={<Home />} />
    <Route path="/lodging/:id" element={<Lodging />} />
    <Route path="/about" element={<About />} />
    <Route path="*" element={<Error />} />
  </React.Fragment>
);