/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <ul className="navigation">
        <li className="navigation__item active">
          <a href="" className="navigation__item-link">Возможности и цены</a>
        </li>
        <li className="navigation__item">
          <a href="" className="navigation__item-link">Портфолио</a>
        </li>
        <li className="navigation__item">
          <a href="" className="navigation__item-link">Обо мне</a>
        </li>
        <li className="navigation__item">
          <a href="" className="navigation__item-link">Отзывы</a>
        </li>
      </ul> */}
      
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout