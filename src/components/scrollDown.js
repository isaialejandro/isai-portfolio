import React from "react";
import { FaChevronCircleDown } from "react-icons/fa";
import { BiCaretDownCircle } from "react-icons/bi"

const ScrollDown = () => (
  <p className="scrolldown">
    <a className="smoothscroll" href="#about">
      <BiCaretDownCircle />
    </a>
  </p>
);

export default ScrollDown;
