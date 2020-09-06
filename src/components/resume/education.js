import React from "react";

const Education = () => (
  <div className="row education">
    <div className="three columns header-col">
      <h1>
        <span>Education</span>
      </h1>
    </div>

    <div className="nine columns main-col">

      <div className="row item">
        <div className="twelve columns">
          <h3>Instituto Tecnológico de Villhermosa</h3>
          <p className="info">
            Computational Systems Engineering
            <span>&bull;</span>
            <em className="date">Dec 2015</em>
          </p>

          <p>
            Graduated from ITVH as Systems Engineer, initially focused in web development applications 
            working with Python as base Programming Language.
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>Amazon Web Services</h3>
          <p className="info">
            Cloud Practitioner
            <span>&bull;</span>
            <em className="date">July 2020</em>
          </p>
          <p>
            Currently finishing Cloud Practitioner Certification. <br />
            Passionate about Cloud tools and workflows specifically related with AWS.
            All this for reach the Architect Solutions Cert.
          </p>
        </div>
      </div>

    </div>
  </div>
);

export default Education;
