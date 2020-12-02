import React, { useEffect } from "react"
import "./massage.css"

import { graphql } from "gatsby"
import { Link } from "react-scroll"
import { gsap } from "gsap"
import { Link as LinkTo } from "gatsby"

import BackgroundImage from "gatsby-background-image"
// import Logo from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

//import scrollTo from "gatsby-plugin-smoothscroll"

function Massage({ data }) {
  const tlMassage = gsap.timeline({ defaults: { ease: "power1.out" } })
  useEffect(() => {
    tlMassage.from(".massage-title-text", { y: 30, duration: 0.5, opacity: 0 })
    tlMassage.from(".massage-list-title", {
      y: 30,
      duration: 0.5,
      opacity: 0,
      stagger: 0.25,
    })
    tlMassage.from(".massage-list", {
      y: 30,
      duration: 0.5,
      opacity: 0,
      stagger: 0.25,
    })
  })
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
              Opustite se uz neku od naših masaža
            </h1>
          </div>
        </BackgroundImage>
        <div className="massage-list-container">
          <h2 className="massage-list-title">Masaže u ponudi</h2>
        </div>
      </div>
      <div className="massage-list">
        <ul className="links-menu">
          <li className="massage-link">
            <Link to="first" smooth={true} duration={800}>
              <p>Terapeutska masaža</p>
            </Link>
          </li>
          <li className="massage-link">
            <Link to="second" smooth={true} duration={1000}>
              <p>Relax masaža</p>
            </Link>
          </li>
          <li className="massage-link">
            <Link to="third" smooth={true} duration={1200}>
              <p>Anticelulit masaža</p>
            </Link>
          </li>
          <li className="massage-link">
            <Link to="fourth" smooth={true} duration={1400}>
              <p>Maderoterapija</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="cards-container">
        <div id="first" className="massage-card">
          <h3 className="massage-title">Terapeutska masaža</h3>
          <p className="massage-text">
            Klasična ili Terapeutska masaža se primenjuje lokalno, i deluje na
            mestu neposredne primene. Cilj je negovanje tela i jačanje imuniteta
            organizma. Primenjuje se kao prevencija za otklanjane umora,
            opštanje mišića i otklanjanje stresa i bola.
          </p>
        </div>
        <div id="second" className="massage-card">
          <h3 className="massage-title">Relax masaža</h3>
          <p className="massage-text">
            Relax je blaga, prijatna, manuelna masaža. Njen jedini cilj je
            potpuno opuštanje organizma. Izvodi se uz tihu , prijatnu muziku i u
            adekvatnom prostoru.
          </p>
        </div>
        <div id="third" className="massage-card">
          <h3 className="massage-title">Anticelulit masaža</h3>
          <p className="massage-text">
            Anticelulit masaža ima jednu od najznačajnijih uloga u
            odstranjivanju celulita. Ona mora biti umerena, dozirana i
            prilagođena svakom klijentu. Izvodi se određenom vrstom pokreta i
            pritiska. Anticelulit masaža opušta telo, pojačava cirkulaciju
            krvotoka, razbija gromuljice masti i svih štetnih sastojaka i
            doprinosi njihovom lakšem ispiranju i odnošenju.
          </p>
        </div>
        <div id="fourth" className="massage-card">
          <h3 className="massage-title">Maderoterapija</h3>
          <p className="massage-text">
            Maderoterapija je tehnika dubinske masaže, izvodi se uz pomoć
            anatomski oblikovanih drvenih oklagija, koje omogućuju primenu
            pritiska na određenim regijama koje obuhvataju mišiće, masnoću i
            celulit podstičući limfni sistem. Telo ae oslobađa toksina, ubrzava
            se metabolizam koji zapravo i eliminiše oslobođene toksine iz
            organizma. Maderoterapiju najčešće koriste žene kako bi se rešile
            celulita, ali i pored toga ona utiče na opđte stanje organizma.
            Opušta mišiće i zglobove, podstiče krvotok i limfotok, podstiče
            izbacivanje vode iz organizma i eliminiše napetost.
          </p>
        </div>
        <div className="btn-div2">
          <LinkTo to="/contact">
            <button type="button" className="btn-contact2">
              zakažite tretman
            </button>
          </LinkTo>
        </div>
      </div>
      {/* <Logo
          fluid={data.massageGrafic.childImageSharp.fluid}
          alt="logo"
          className="logo-massage"
        /> */}
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
