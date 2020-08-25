import React from "react";

import Education from "../components/resume/education";
import Work from "../components/resume/work";
import Skills from "../components/resume/skills";

const Resume = () => (
  <section id="resume">
    <Education />
    <Work />
    <Skills />
  </section>
);

export default Resume;
