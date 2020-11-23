import React from "react"
import "./about.css"

//import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

function About() {
  return (
    <Layout>
      <SEO title="About" />
      <div className="about-container">
        <div className="massage-list">
          <ul>
            <li>masaza</li>
            <li>masaza</li>
            <li>masaza</li>
            <li>masaza</li>
          </ul>
        </div>
        <div className="massage-card">
          <h3 className="massage-title">masaza</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium aspernatur voluptatem provident facilis officia atque a,
            voluptate consectetur rem explicabo nostrum debitis dignissimos
            omnis voluptatibus.
          </p>
        </div>
        <div className="massage-card">
          <h3 className="massage-title">masaza</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium aspernatur voluptatem provident facilis officia atque a,
            voluptate consectetur rem explicabo nostrum debitis dignissimos
            omnis voluptatibus.
          </p>
        </div>
        <div className="massage-card">
          <h3 className="massage-title">masaza</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium aspernatur voluptatem provident facilis officia atque a,
            voluptate consectetur rem explicabo nostrum debitis dignissimos
            omnis voluptatibus.
          </p>
        </div>
        <div className="massage-card">
          <h3 className="massage-title">masaza</h3>
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
export default About
