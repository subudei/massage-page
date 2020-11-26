import React, { useEffect } from "react"
import "./index.css"

import { graphql } from "gatsby"
import { Link } from "gatsby"
import { gsap } from "gsap"

import Layout from "../components/layout"
import BackgroundImage from "gatsby-background-image"
import SEO from "../components/seo"

function IndexPage(props) {
  const tl = gsap.timeline({ defaults: { ease: "power1.out" } })

  useEffect(() => {
    if (window.sessionStorage.getItem("firstLoad") === null) {
      tl.to(".intro", { display: "flex" })
      tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 })
      tl.to(".intro", { y: "-100%", delay: 1, duration: 1 })
      tl.from(".falling-txt", { y: 30, duration: 0.5, opacity: 0 })
      tl.from(".fadeing-txt", {
        y: 30,
        duration: 0.5,
        stagger: 0.25,
        opacity: 0,
      })
      tl.from(".btn-contact", {
        y: 30,
        duration: 0.5,
        stagger: 0.25,
        opacity: 0,
      })
      window.sessionStorage.setItem("firstLoad", 1)
    } else {
      tl.from(".falling-txt", { y: 30, duration: 0.5, opacity: 0 })
      tl.from(".fadeing-txt", {
        y: 30,
        duration: 0.5,
        stagger: 0.25,
        opacity: 0,
      })
      tl.from(".btn-contact", {
        y: 30,
        duration: 0.5,
        stagger: 0.25,
        opacity: 0,
      })
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
        <div className="intro">
          <div className="intro-text">
            <h1 className="hide">
              <span className="text">Opušta Telo</span>
            </h1>
            <h1 className="hide">
              <span className="text">Otklanja Stres</span>
            </h1>
            <h1 className="hide">
              <span className="text">Pospešuje San</span>
            </h1>
          </div>
        </div>
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
