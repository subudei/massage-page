import React, { useEffect } from "react"
import "./index.css"

import { graphql } from "gatsby"
import { Link } from "gatsby"
import { gsap } from "gsap"

import Layout from "../components/layout"
import BackgroundImage from "gatsby-background-image"
import SEO from "../components/seo"

function IndexPage(props) {
  useEffect(() => {
    gsap.from(".btn-contact", { delay: 3, duration: 1, opacity: 0 })
    if (window.sessionStorage.getItem("firstLoad") === null) {
      gsap.from(".falling-txt", {
        delay: 1.5,
        duration: 2,
        y: -200,
        opacity: 0,
        ease: "power2.out",
      })
      gsap.from(".fadeing-txt", { delay: 3, duration: 1.5, opacity: 0 })

      window.sessionStorage.setItem("firstLoad", 1)
    }
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
              <h1 className="falling-txt">Profesionalne masaže</h1>
              <h2 className="fadeing-txt">Opustite se i probudite sva čula </h2>
              <div className="btn-div">
                <Link to="/contact">
                  <button type="button" className="btn-contact">
                    zakažite tretman
                  </button>
                </Link>
              </div>
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
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
