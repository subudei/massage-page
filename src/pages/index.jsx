import React, { useEffect } from "react"
import "./index.css"

import { graphql } from "gatsby"
//import { Link } from "gatsby"
import { gsap } from "gsap"

import Layout from "../components/layout"
import BackgroundImage from "gatsby-background-image"
import SEO from "../components/seo"

function IndexPage(props) {
  useEffect(() => {
    gsap.from(".falling-txt", {
      duration: 2,
      y: -200,
      opacity: 0,
      ease: "power2.out",
    })
    gsap.from(".fadeing-txt", { delay: 1, duration: 1.5, opacity: 0 })
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <div className="home-container">
        <BackgroundImage
          className="backgroundImage"
          fluid={props.data.indexImage.childImageSharp.fluid}
        >
          <div className="cover-overlay">
            <div className="text">
              <h1 className="falling-txt">Nevena</h1>
              <h2 className="fadeing-txt">massage therapy</h2>
            </div>
          </div>
        </BackgroundImage>
      </div>
    </Layout>
  )
}
export default IndexPage

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "massage-lady.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
