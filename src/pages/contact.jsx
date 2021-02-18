import React, { useEffect } from "react"
import "./contact.css"
//import { Link } from "gatsby"
import { gsap } from "gsap"
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
  const tlContact = gsap.timeline({ defaults: { ease: "power1.out" } })
  useEffect(() => {
    tlContact.from(".welcome-text", { y: 30, duration: 0.5, opacity: 0 })
    tlContact.from(".masage-text", {
      y: 30,
      duration: 0.5,
      opacity: 0,
      stagger: 0.25,
    })
  })
  return (
    <Layout>
      <SEO title="contact" />
      <div className="contact-container">
        <BackgroundImage
          className="background-image"
          fluid={props.data.indexImage.childImageSharp.fluid}
        >
          <div className="background-image-overlay">
            <div className="contact-div">
              <div className="welcome-note">
                <h1 className="welcome-text">Dobrodošli u Relax Room</h1>
              </div>
            </div>
          </div>
        </BackgroundImage>
        <div className="masage-text">
          <h2 className="h-text">
            Oslobodite se stresa i napetosti.
            <br /> Zakažite masažu.
          </h2>
        </div>
        <div className="info-container">
          <div className="adress-container">
            <h3 className="h-text">Radno Vreme</h3>
            <p className="text-contact">Ponedeljak - Petak : 11-21h</p>
            <p className="text-contact">Subota - Nedelja : 16-21h</p>
            <h4 className="h-text">Zakazivanje je obavezno</h4>
          </div>
          <div className="adress-container">
            <h3 className="h-text">Kontakti</h3>
            <div className="logo">
              <FaHome className="icon" />
              <p className="text-contact">Obilićeva 94, Kruševac</p>
            </div>
            <div className="logo ">
              <FaPhoneAlt className="icon" />
              <p className="text-contact">
                +381 064 912 7335 <br />
                (Viber, WhatsApp)
              </p>
            </div>
          </div>

          <div className="adress-container">
            <h3 className="h-text">Socijalne Mreže</h3>
            <div className="soc-logo">
              <a href="https://sr-rs.facebook.com/" target="blank">
                <FaFacebookSquare className="icon soc" />
              </a>
              <a
                href="https://www.instagram.com/masaza.nevena/?hl=sr"
                target="blank"
              >
                <FaInstagramSquare className="icon soc" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "contact-massage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
