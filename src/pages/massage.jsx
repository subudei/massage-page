import React from "react"
import "./massage.css"

import { Link } from "react-scroll"
import Layout from "../components/layout"
import SEO from "../components/seo"
//import scrollTo from "gatsby-plugin-smoothscroll"

function Massage() {
  return (
    <Layout>
      <SEO title="About" />
      <div className="about-container">
        <div className="massage-list-container">
          <h1 className="massage-list-title">Masaze u ponudi</h1>
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
