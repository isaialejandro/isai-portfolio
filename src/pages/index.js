import React from "react"

import "../assets/css/main.css"

import Header from "../components/header"
import About from "../components/about"
import Resume from "../components/resume"
import Footer from "../components/Footer"

const IndexPage = ({ data }) => (
  
  <div>
    <Header />
    <About />
    <Resume />
    <Footer />
  </div>
);

export default IndexPage;
