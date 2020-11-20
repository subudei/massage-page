import React from "react"
import "./index.css"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="home-container">Massage by Nevena</div>
  </Layout>
)

export default IndexPage
