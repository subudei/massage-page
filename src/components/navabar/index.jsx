import React, { useState, useEffect } from "react"
import "./style.css"

import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FaBars, FaTimes } from "react-icons/fa"

function Navbar() {
  const [click, setClick] = useState(false)
  const [navbar, setNavbar] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  useEffect(() => {
    navColor()
  }, [])

  const navColor = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else setNavbar(false)
  }
  window.addEventListener("scroll", navColor)

  return (
    <>
      <nav className={navbar ? "navbar color" : "navbar"}>
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <h3 className="logo-bottom">Relax</h3>
          <h5 className="logo-top">Massage Room</h5>
        </Link>
        <div role="presentation" className="menu-icon" onClick={handleClick}>
          {click ? (
            <FaTimes className="menu-btn" />
          ) : (
            <FaBars className="menu-btn" />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Naslovna
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/massage" className="nav-links" onClick={closeMobileMenu}>
              Masaže
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
Navbar.propTypes = {
  siteTitle: PropTypes.string,
}
Navbar.defaultProps = {
  siteTitle: ``,
}
export default Navbar
