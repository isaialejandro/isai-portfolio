import React from "react";

import Navigation from "./navigation";
import Banner from "./banner";
import ScrollDown from "./scrollDown";

const Header = () => (
  <header id="home">
    <Navigation />
    <Banner />
    <ScrollDown />
  </header>
);

export default Header;
