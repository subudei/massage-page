import React from "react"
import "./contact.css"
//import { Link } from "gatsby"
import { graphql } from "gatsby"
import {
  FaHome,
  FaPhoneAlt,
  FaInstagramSquare,
  FaFacebookSquare,
} from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImage from "gatsby-background-image"

function Contact(props) {
  return (
    <Layout>
      <SEO title="contact" />
      <BackgroundImage
        className="background-image"
        fluid={props.data.indexImage.childImageSharp.fluid}
      >
        <div className="contact-container">
          <div className="welcome-note">
            <h1 className="welcome-text">Dobrodošli</h1>
            <h2 className="welcome-text">
              Oslobodite se stresa i napetosti. Zakažite masažu.
            </h2>

            <div className="logo ">
              <FaPhoneAlt className="icon" />
              <p className="text">+381 060 XXXXXXXXX</p>
            </div>
            <div className="logo">
              <FaHome className="icon" />
              <p className="text">Obilićeva 94, Kruševac</p>
            </div>
          </div>
          <div className="social-network">
            <a href="https://sr-rs.facebook.com/" target="blank">
              <FaFacebookSquare className="icon soc" />
            </a>
            <a href="https://www.instagram.com/?hl=sr" target="blank">
              <FaInstagramSquare className="icon soc" />
            </a>
          </div>
        </div>
      </BackgroundImage>
    </Layout>
  )
}

export default Contact

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
