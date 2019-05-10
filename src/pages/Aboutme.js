import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./Aboutme.css"
import "typeface-great-vibes"
import "typeface-montserrat"

const AboutmePage = () => (
  <Layout>
    <SEO title="Über mich" keywords={[`Darja Sergejcuk`, `CV`, `website`]} />
    <div className="div-text">
      <h1>Über mich</h1>

      <table>
        <tr>
          <td className="table-links">Name</td>
          <td className="table-rechts">Darja Sergejcuk</td>
        </tr>
        <tr>
          <td className="table-links">Alter</td>
          <td className="table-rechts">25 Jahre</td>
        </tr>
        <tr>
          <td className="table-links">Wohnort</td>
          <td className="table-rechts">Düsseldorf</td>
        </tr>
        <tr>
          <td className="table-links">Stärken</td>
          <td className="table-rechts">
            Kreativität
            <br />
            Organisation <br /> Empathie
          </td>
        </tr>
        <tr>
          <td className="table-links">Interessen</td>
          <td className="table-rechts">
            Beauty <br /> Mode <br /> Kulturen <br />
          </td>
        </tr>
        <tr>
          <td className="table-links">Hobbies</td>
          <td className="table-rechts">
            Reisen <br /> Yoga <br /> kochen
          </td>
        </tr>
      </table>
    </div>
  </Layout>
)

export default AboutmePage
