import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./skills.css"
import "typeface-great-vibes"
import "typeface-montserrat"

const KenntnissePage = () => (
  <Layout>
    <SEO title="Kenntnisse" keywords={[`Darja Sergejcuk`, `CV`, `website`]} />
    <div className="div-text">
      <h1>Meine Kenntnisse</h1>
      <table>
        <tr>
          <td className="table-left">
            <p className="p-name">EDV Kenntnisse</p>
            <p className="p-points">
              <ul className="ul-points">
                MS Office
                <br /> (Word, Excel, PowerPoint, Outlook)
              </ul>
              <ul className="ul-points">Adobe Photoshop</ul>
              <ul className="ul-points">Adobe Lightroom</ul>
              <ul className="ul-points">html & css</ul>
              <ul className="ul-points">Wordpress</ul>
            </p>
          </td>
          <td className="table-right">Fortgeschrittene Kenntnisse</td>
        </tr>
        <br />
        <tr>
          <td className="table-left">
            <p className="p-points">
              <ul className="ul-points">Google Adwords</ul>
              <ul className="ul-points">Google Analytics</ul>
              <ul className="ul-points">Adobe Illustrator</ul>
              <ul className="ul-points">Adobe Premiere Pro</ul>
              <ul className="ul-points">Java Script</ul>
              <ul className="ul-points">SAP</ul>
            </p>
          </td>
          <td className="table-right"> Grundkenntnisse</td>
        </tr>
      </table>
      <br />
      <table>
        <tr>
          <td className="table-left">
            <p className="p-name">Sprach-Kenntnisse</p>
            <p className="p-points">
              <ul className="ul-points">Russisch</ul>
              <ul className="ul-points">Deutsch</ul>
            </p>
          </td>
          <td className="table-right">Muttersprache</td>
        </tr>
        <tr>
          <td className="table-left">
            <p className="p-points">
              <ul className="ul-points">Englisch</ul>
            </p>
          </td>
          <td className="table-right"> Fließend in Wort und Schrift</td>
        </tr>
        <tr>
          <td className="table-left">
            <p className="p-points">
              <ul className="ul-points">Spanisch</ul>
            </p>
          </td>
          <td className="table-right"> Konversationsfähig</td>
        </tr>
        <tr>
          <td className="table-left">
            <p className="p-points">
              <ul className="ul-points">Französisch</ul>
            </p>
          </td>
          <td className="table-right">Grundkenntnisse</td>
        </tr>
      </table>
    </div>
  </Layout>
)

export default KenntnissePage
