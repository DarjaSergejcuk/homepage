import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./Bildungsweg.css"
import "typeface-great-vibes"
import "typeface-montserrat"

const BildungswegPage = () => (
  <Layout>
    <SEO title="Bildungsweg" keywords={[`Darja Sergejcuk`, `CV`, `website`]} />
    <div className="div-text">
      <h1>Mein Bildungsweg</h1>

      <p className="p-date">08/2018 - heute</p>
      <p className="p-study"> Master of Arts: Digital Marketing Management </p>
      <p className="p-uni"> Cologne Business School</p>

      <p className="p-date">09/2013 - 04/2017</p>
      <p className="p-study"> Bachelor of Arts: International Management </p>
      <p className="p-uni">
        Hochschule Düsseldorf (ehemals Fachhoschule Düsseldorf)
      </p>
      <p className="p-date">09/2015 - 01/2016</p>
      <p className="p-study"> Auslandssemester in Thailand </p>
      <p className="p-uni">Mahidol University International College</p>

      <p className="p-date">09/2000 - 07/2013</p>
      <p className="p-study">Allgemeine Hochschulreife (Abitur)</p>
      <p className="p-uni">Gesamtschule Barmen Wuppertal </p>
    </div>
  </Layout>
)

export default BildungswegPage
