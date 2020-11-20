import React from "react"
import "./about.css"

//import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

function About(props) {
  return (
    <Layout>
      <SEO title="About" />
      <BackgroundImage
        className="about-image"
        fluid={props.data.indexImage.childImageSharp.fluid}
      >
        text going here
      </BackgroundImage>
    </Layout>
  )
}
export default About

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "flower.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
