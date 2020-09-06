import React from "react";

import Img from "gatsby-image"
import { AiFillPlusCircle, AiFillTag } from "react-icons/ai";

import Image from "./image"

import { graphql, useStaticQuery } from "gatsby" 


export default () => {

  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: {extension: {regex: "/(jpg)/"}, relativeDirectory: {eq: "portfolio"}}) {
        edges {
          node {
            base
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      allImageSharp {
        edges {
          node {
            id
          }
        }
      }
    }

  `)

  return (
    
    <section id="portfolio">
      <div className="row">

        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >

            { data.allFile.edges.map(({ node }) => (
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title="">
                    <Img fluid={ node.childImageSharp.fluid } />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Coffee</h5>
                        <p>Illustration</p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <AiFillPlusCircle />
                    </div>
                  </a>
                </div>
              </div>
            )) }      

          </div>
        </div>

      </div>
    </section>
  )

}