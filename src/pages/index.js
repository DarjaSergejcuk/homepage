import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"
import "typeface-great-vibes"
import "typeface-montserrat"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  fab,
  faLinkedin,
  faXingSquare,
} from "@fortawesome/free-brands-svg-icons"
import { fas, faAt } from "@fortawesome/free-solid-svg-icons"
library.add(fab, faLinkedin, faXingSquare, fas, faAt)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Darja Sergejcuk`, `CV`, `website`]} />
    <div className="div-text">
      <h1>Willkommen!</h1>
      <p id="p1">Diese Website spiegelt meinen Lebenslauf wider.</p>
      <br />
      <p id="p2">
        Hier finden Sie Informationen{" "}
        <Link className="links-index" to="/Aboutme">
          über mich,
        </Link>
        <br />
        meine{" "}
        <Link className="links-index" to="/Bildungsweg">
          schulische- und akademische Bildung,
        </Link>
        <br />
        meine{" "}
        <Link className="links-index" to="/Berufserfahrung">
          Berufserfahrung,
        </Link>
        meine
        <Link className="links-index" to="/Skills">
          Skills
        </Link>
        <br />& meine{" "}
        <Link className="links-index" to="/Kontakt">
          Kontaktinformationen
        </Link>
      </p>
      <br />
      <br />
      <p>
        <a
          className="a-sm"
          href="http://www.linkedin.com/in/darja-sergejcuk-126909149"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </a>
        <a
          className="a-sm"
          href="https://www.xing.com/profile/Darja_Sergejcuk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "xing-square"]} />
        </a>
      </p>
    </div>
  </Layout>
)

export default IndexPage
