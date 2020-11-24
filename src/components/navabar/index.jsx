import React, { useState } from "react"
import "./style.css"

import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FaBars, FaTimes } from "react-icons/fa"

function Navbar({ siteTitle }) {
  const [click, setClick] = useState(false)
  const [navbar, setNavbar] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  const handleNav = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else setNavbar(false)
  }

  window.addEventListener("scroll", handleNav)

  return (
    <>
      <nav className={navbar ? "navbar color" : "navbar"}>
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          {siteTitle}
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
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/massage" className="nav-links" onClick={closeMobileMenu}>
              Massage
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contact
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
