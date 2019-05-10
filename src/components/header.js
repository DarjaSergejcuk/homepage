import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./headerStyles.css"
import "typeface-great-vibes"
import "typeface-montserrat"
import headerbild from "../images/header1.png"

console.log(headerbild)
const Header = ({ siteTitle }) => (
  <header>
    <nav className="container">
      <ul className="nav-list">
        <li>
          <Link className="nav-item" activeClassName="active-nav-item" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className="nav-item"
            activeClassName="active-nav-item"
            to="/Aboutme"
          >
            Über mich
          </Link>
        </li>
        <li>
          <Link
            className="nav-item"
            activeClassName="active-nav-item"
            to="/Bildungsweg"
          >
            Bildungsweg
          </Link>
        </li>
        <li>
          <Link
            className="nav-item"
            activeClassName="active-nav-item"
            to="/Berufserfahrung"
          >
            Berufserfahrung
          </Link>
        </li>
        <li>
          <Link
            className="nav-item"
            activeClassName="active-nav-item"
            to="/Skills"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            className="nav-item"
            activeClassName="active-nav-item"
            to="/Kontakt"
          >
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>

    <Link to="/">
      <img className="headerbild" src={headerbild} alt="header" />
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
