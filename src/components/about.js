import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";

import profile_img from "../assets/images/profile_img.jpg";


const About = () => (

  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={ profile_img }  alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
          <b>[ IT ] Professional</b> with all needed skills for implement efficient strategies, workflows and
          make a better way of how data and all kind of processes are working and are showed to
          the user for best practices. <br /> I passionate about new technologies and how it are
          implemented for make a easiest work ever for companies. My greatest interest is the
          data analysis, processing and transformations starting from it, the infrastructure related
          and implemented for this demanded kind of processes. Until now working together
          Volaris Company and applying all of my knowledge.
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Isaí Alejandro</span>
              <br />
              <span>
                  CDMX, Mexico City
              </span>
              <br />
              <span>(+52) 99 33 06 79 68</span>
              <br />
              <span>isaialejandro26@gmail.com</span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a href="/#" className="button">
                <FaCloudDownloadAlt /> Download Resume {/* PENDING */}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
