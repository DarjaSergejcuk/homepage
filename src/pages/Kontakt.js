import React from "react"
import "./Kontakt.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  fab,
  faLinkedin,
  faXingSquare,
} from "@fortawesome/free-brands-svg-icons"
import { fas, faAt } from "@fortawesome/free-solid-svg-icons"
library.add(fab, faLinkedin, faXingSquare, fas, faAt)

const KontaktPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Darja Sergejcuk`, `CV`, `website`]} />
    <div className="div-text">
      <h1>Kontaktinformationen</h1>
      <div className="div-contact">Sie erreichen mich gerne wie folgt:</div>
      <div className="div-mail">
        <a id="a-mail" href="mailto:darjasergejcuk@gmail.com">
          <FontAwesomeIcon icon={["fas", "at"]} />
        </a>
        darjasergejcuk@gmail.com
      </div>
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

export default KontaktPage
