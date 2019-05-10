import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./footer.css"
import "typeface-montserrat"

const Footer = () => (
  <footer>
    <p className="p-copyright">
      © {new Date().getFullYear()}{" "}
      <Link className="link-footer" to="/">
        Darja Sergejcuk
      </Link>
      <div>
        <Link className="link-footer" to="/pages/imprint/">
          Imprint
        </Link>{" "}
      </div>
      <Link className="link-footer" to="/pages/data-protection/">
        Data Protection
      </Link>
      <br />
      Built with {` `}
      <a className="link-gatsby" href="https://www.gatsbyjs.org">
        Gatsby
      </a>{" "}
    </p>
  </footer>
)

export default Footer
