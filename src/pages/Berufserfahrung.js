import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./Berufserfahrung.css"
import "typeface-great-vibes"
import "typeface-montserrat"

const BerufserfahrungPage = () => (
  <Layout>
    <SEO
      title="Berufserfahrung"
      keywords={[`Darja Sergejcuk`, `CV`, `website`]}
    />
    <div className="div-text">
      <h1>Meine Berufserfahrung</h1>
      <p className="p-time">04/2019 - heute</p>
      <p className="p-company"> Shiseido Germany GmbH </p>
      <p className="p-job"> Werkstudentin im Marketing - Makeup & Pflege</p>
      <p className="p-descr">
        <ul className="ul-descr">Erstellung von Mailings</ul>
        <ul className="ul-descr">
          Unterstützung verschiedener Promotionaktionen
        </ul>
        <ul className="ul-descr">Eigenverantwortliche Projektarbeit</ul>
        <ul className="ul-descr">
          Erstellung von Präsentationsunterlagen und Einverkaufsfoldern
        </ul>
        <ul className="ul-descr">Konferenzvorbereitungen</ul>
        <ul className="ul-descr">
          Abrechnung und Auswertung der Fensterdekorationen
        </ul>
      </p>
      <p className="p-time">05/2018 - 08/2018</p>
      <p className="p-company"> Shiseido Germany GmbH </p>
      <p className="p-job"> Praktikantin im Marketing - Makeup & Pflege</p>
      <p className="p-descr">
        <ul className="ul-descr">
          Unterstützung der Product Manager im Tagesgeschäft
        </ul>
        <ul className="ul-descr">
          Organisation und Umsetzung von Promotionsaktionen
        </ul>
        <ul className="ul-descr">
          Durchführen von Markt- und Wettbewerbsanalysen
        </ul>
        <ul className="ul-descr">
          Werbemittelproduktion in Zusammenarbeit mit externen Agenturen
        </ul>
        <ul className="ul-descr">Durchführung von Abverkaufswettbewerben</ul>
      </p>
      <p className="p-time">12/2017 - 05/2018</p>
      <p className="p-company"> Henkel Beauty Care (über Avantgarde Experts)</p>
      <p className="p-job"> Junior Digital Marketing Managerin</p>
      <p className="p-descr">
        <ul className="ul-descr">
          Entwicklung & Betreuung digitaler Markenkampagnen
        </ul>
        <ul className="ul-descr">Konzeption & Begleitung von CRM-Projekten</ul>
        <ul className="ul-descr">
          Kontinuierliche Analyse und Erfolgsmessung der Kampagnen KPIs
        </ul>
        <ul className="ul-descr">
          Erstellung und Auswertung von E-Mail Newslettern
        </ul>
        <ul className="ul-descr">Mitwirkung im Influencer Marketing und PR</ul>
      </p>
      <p className="p-time">03/2017 - 08/2017</p>
      <p className="p-company">Drivango GmbH (E.ON StartUp)</p>
      <p className="p-job"> Praktikantin im Online- & Affiliate Marketing</p>
      <p className="p-descr">
        <ul className="ul-descr">
          Konzeption, Umsetzung, Versand und Auswertung von E-Mail-Newslettern
        </ul>
        <ul className="ul-descr">Contentmanagement und Blogpflege</ul>
        <ul className="ul-descr">
          Entwicklung und Umsetzung von Online- und PrintWerbemitteln
        </ul>
        <ul className="ul-descr">Betreuung der Social-Media Kanäle</ul>
        <ul className="ul-descr">Betreuung der Affiliate Partner</ul>
      </p>
      <p className="p-time">02/2016 - 02/2017</p>
      <p className="p-company">UL International GmbH</p>
      <p className="p-job">HR Assistentin</p>
      <p className="p-descr">
        <ul className="ul-descr" />
        <ul className="ul-descr">Koordination von Terminen</ul>
        <ul className="ul-descr">Erstellung von Arbeitszeugnissen</ul>
        <ul className="ul-descr">
          Pflege elektronischer Personalakten in Datev
        </ul>
        <ul className="ul-descr">Project Management</ul>
      </p>
      <p className="p-time">06/2014 - 08/2014</p>
      <p className="p-company">DIZO Online Marketing</p>
      <p className="p-job">Praktikantin Suchmaschinenoptimierung</p>
      <p className="p-descr">
        <ul className="ul-descr" />
        <ul className="ul-descr">Keyword recherche</ul>
        <ul className="ul-descr">
          Erstellung und Analyse von Google Adwords-Kampagnen
        </ul>
        <ul className="ul-descr">SEO-Optimierung von Texten und Meta-Tags</ul>
      </p>
    </div>
  </Layout>
)

export default BerufserfahrungPage
