import React from "react"
import "./massage.css"

import { graphql } from "gatsby"
import { Link } from "react-scroll"

import BackgroundImage from "gatsby-background-image"
import Logo from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

//import scrollTo from "gatsby-plugin-smoothscroll"

function Massage({ data }) {
  return (
    <Layout>
      <SEO title="About" />
      <div className="massage-container">
        <BackgroundImage
          fluid={data.indexImage.childImageSharp.fluid}
          alt="massage oil"
          className="massage-hero"
        >
          <div className="massage-title-div">
            <h1 className="massage-title-text">
              Opustite se uz neku od nasih masaza
            </h1>
          </div>
        </BackgroundImage>
        <div className="massage-list-container">
          <h2 className="massage-list-title">Masaze u ponudi</h2>
        </div>
      </div>
      <div className="massage-list">
        <ul>
          <li>
            <Link to="/#first">masaza1</Link>
          </li>
          <li>
            <a href="#second">masaza2</a>
          </li>
          <li>
            <Link to="third" smooth={true} duration={800}>
              masaza3
            </Link>
          </li>
          <li>
            <Link to="fourth" smooth={true} duration={1000}>
              masaza4
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <Logo
          fluid={data.massageGrafic.childImageSharp.fluid}
          alt="logo"
          className="logo-massage"
        />

        <div id="first" className="massage-card">
          <h3 className="massage-title">masaza1</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium aspernatur voluptatem provident facilis officia atque a,
            voluptate consectetur rem explicabo nostrum debitis dignissimos
            omnis voluptatibus.
          </p>
        </div>
        <div id="second" className="massage-card">
          <h3 className="massage-title">masaza2</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium aspernatur voluptatem provident facilis officia atque a,
            voluptate consectetur rem explicabo nostrum debitis dignissimos
            omnis voluptatibus.
          </p>
        </div>
        <div id="third" className="massage-card">
          <h3 className="massage-title">masaza3</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium aspernatur voluptatem provident facilis officia atque a,
            voluptate consectetur rem explicabo nostrum debitis dignissimos
            omnis voluptatibus.
          </p>
        </div>
        <div id="fourth" className="massage-card">
          <h3 className="massage-title">masaza4</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium aspernatur voluptatem provident facilis officia atque a,
            voluptate consectetur rem explicabo nostrum debitis dignissimos
            omnis voluptatibus.
          </p>
        </div>
      </div>
    </Layout>
  )
}
export default Massage

export const query = graphql`
  query {
    massageGrafic: file(relativePath: { eq: "massage-gr.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    indexImage: file(relativePath: { eq: "essential-oil.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
