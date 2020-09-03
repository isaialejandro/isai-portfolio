import React from "react"
import Link from "gatsby-link"

import "../assets/css/main.css"

import Header from "../components/header"
import About from "../components/about"
import Resume from "../components/resume"
import Portfolio from "../components/portfolio"
import Footer from "../components/Footer"

import Img from "gatsby-image"
/*import Testimonials from "../components/testimonials";
import Footer from "../components/footer";*/


const IndexPage = ({ data }) => (
  
  <div>
    <Header />
    <About />
    <Resume />
    {/*<Portfolio />*/}
    
    <Footer />
  </div>
);

export default IndexPage;
