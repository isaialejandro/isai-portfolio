import React from "react";
import SocialLinks from "./SocialLinks";
import { BiCaretUp } from "react-icons/bi"

const Footer = () => (
  <footer id="footer">
    <div className="row">
      <div className="twelve columns">
        <SocialLinks />

        <ul className="copyright">
          <li>
            <a> [ IsaiAlejandro ] - &copy; 2020 </a> 
          </li>
          
        </ul>
      </div>

      <div id="go-top">
        <a className="smoothscroll" title="Back to Top" href="#home">
          <BiCaretUp />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
