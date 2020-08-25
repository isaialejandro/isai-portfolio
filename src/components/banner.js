import React from "react";
import SocialLinks from "./socialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">[ IA ] || IsaíAlejandro</h1>
      <h3>
        I´m a <span>Systems engineer</ span>, web developer, creator and passionate for new and
        robusts technologies that can help humans to increase their productivity.
        Please scroll down to know more 
        <a className="smoothscroll" href="#about">
          {" "}
          about me
        </a> 
        , and my knowledge!
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
