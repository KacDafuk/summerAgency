import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import Main from "../pages/Main/Main";
import Services from "../pages/Services/Services";
import Works from "../pages/Works/Works";
const Routes = () => {
  return (
    <Switch>
      <Route path="/main" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/works" element={<Works />} />
      <Route path="/services" element={<Services />} />
      <Route path="/career" element={<Career />} />
      <Route path="/" element={<Main />} />
    </Switch>
  );
};

export default Routes;
