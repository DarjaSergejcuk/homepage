import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./imprint.css"

const ImprintPage = () => (
  <Layout>
    <SEO title="Imprint" />
    <div>
      <h1>Imprint</h1>
      <br />
      <h2>Responsible</h2>
      <p>
        {" "}
        Darja Sergejcuk <br />
        darjasergejcuk@gmail.com
      </p>

      <br />
      <h2>Credits</h2>
      <p>Icons from Font awesome</p>
    </div>
  </Layout>
)

export default ImprintPage
