import React, { useState } from "react"
import "./style.css"

import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FaBars, FaTimes } from "react-icons/fa"

function Navbar({ siteTitle }) {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            {siteTitle}
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <FaTimes className="fa-times" />
            ) : (
              <FaBars className="fa-bars" />
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
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
