/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import CookieConsent from "react-cookie-consent"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>
          <div class="div-body">{children}</div>
        </main>
        <Footer />
        <CookieConsent
          location="bottom"
          buttonText="I agree"
          cookieName="DSCookie"
          style={{ background: "#f0e3db" }}
          buttonStyle={{ color: "#e7aba1", fontSize: "15px" }}
          expires={150}
        >
          By using this website you agree to the application of cookies.
        </CookieConsent>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
